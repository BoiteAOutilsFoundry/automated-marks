/** Vérifie les sources et les chemins distribués, sans démarrer Foundry ni installer d'outil. */
import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, relative, resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));

async function exists(path) {
  try { await access(path); return true; } catch { return false; }
}

/** Liste récursivement les sources JavaScript présentes dans un dossier. */
async function sourceFiles(directory) {
  if (!await exists(directory)) return [];
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = resolve(directory, entry.name);
    if (entry.isDirectory()) files.push(...await sourceFiles(path));
    else if (/\.(?:mjs|js)$/.test(entry.name)) files.push(path);
  }
  return files;
}

/** Vérifie aussi la casse, importante lorsque le module est installé sur Linux. */
async function checkPath(path) {
  const parts = relative(root, path).split(sep);
  assert.ok(parts[0] !== "..", `Chemin extérieur au module : ${path}`);
  let directory = root;
  for (const part of parts) {
    const names = await readdir(directory);
    assert.ok(names.includes(part), `Fichier absent ou mauvaise casse : ${relative(root, path)}`);
    directory = resolve(directory, part);
  }
}

const manifest = JSON.parse(await readFile(resolve(root, "module.json"), "utf8"));
for (const asset of [...(manifest.esmodules ?? []), ...(manifest.scripts ?? []), ...(manifest.styles ?? [])]) {
  await checkPath(resolve(root, asset));
}
for (const language of manifest.languages ?? []) await checkPath(resolve(root, language.path));

const sourceFolders = ["scripts", "tests", "tools"];
const files = (await Promise.all(sourceFolders.map(folder => sourceFiles(resolve(root, folder))))).flat();
const imports = new Map();
for (const file of files) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8", windowsHide: true });
  if (result.error) throw result.error;
  assert.equal(result.status, 0, result.stderr || `Syntaxe invalide : ${file}`);

  const source = await readFile(file, "utf8");
  const dependencies = [];
  const pattern = /^\s*(?:import\s+(?:[^"';]*?\sfrom\s*)?|export\s+[^"';]*?\sfrom\s*)["']([^"']+)["']/gm;
  for (const [, specifier] of source.matchAll(pattern)) {
    if (!specifier.startsWith(".")) continue;
    const dependency = resolve(dirname(file), specifier);
    await checkPath(dependency);
    dependencies.push(dependency);
  }
  imports.set(file, dependencies);
}

/** Une dépendance circulaire rendrait l'ordre d'initialisation difficile à maintenir. */
function checkImportCycles(file, stack = [], checked = new Set()) {
  assert.ok(!stack.includes(file), `Import circulaire : ${[...stack, file].map(path => relative(root, path)).join(" -> ")}`);
  if (checked.has(file)) return;
  for (const dependency of imports.get(file) ?? []) checkImportCycles(dependency, [...stack, file], checked);
  checked.add(file);
}

for (const entry of [...(manifest.esmodules ?? []), ...(manifest.scripts ?? [])]) {
  checkImportCycles(resolve(root, entry));
}
console.log(`${files.length} fichiers vérifiés : syntaxe, chemins, casse et absence de cycles depuis le manifeste.`);
