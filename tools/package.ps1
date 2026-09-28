# Cree automated-marks.zip a la racine du projet.
# Lancer : powershell -NoProfile -ExecutionPolicy Bypass -File .\tools\package.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$projectRoot = Split-Path -Parent $PSScriptRoot
$archivePath = Join-Path $projectRoot 'automated-marks.zip'

# Fichiers racine distribues avec le module.
$files = @('module.json', 'README.md', 'changelog.md', 'LICENSE', 'ARCHITECTURE.md') |
    Where-Object { Test-Path -LiteralPath (Join-Path $projectRoot $_) }

# Dossiers distribues. Le dossier tools reste volontairement hors du ZIP final.
$distributedFolders = @('scripts', 'styles', 'assets', 'lang')
foreach ($folder in $distributedFolders) {
    $folderPath = Join-Path $projectRoot $folder
    if (-not (Test-Path -LiteralPath $folderPath)) { continue }

    $files += Get-ChildItem -LiteralPath $folderPath -Recurse -File |
        ForEach-Object { $_.FullName.Substring($projectRoot.Length + 1).Replace('\', '/') }
}

$files = $files | Sort-Object -Unique
$temporaryArchive = Join-Path $projectRoot ('.package-' + [guid]::NewGuid().ToString('N') + '.tmp')
try {
    # Le fichier temporaire preserve l'ancienne archive si la creation echoue.
    $archive = [System.IO.Compression.ZipFile]::Open($temporaryArchive, [System.IO.Compression.ZipArchiveMode]::Create)
    try {
        foreach ($entry in $files) {
            # Chemins avec / pour Linux ; module.json reste a la racine du ZIP.
            [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                $archive, (Join-Path $projectRoot $entry), $entry,
                [System.IO.Compression.CompressionLevel]::Optimal
            ) | Out-Null
        }
    } finally {
        $archive.Dispose()
    }
    Move-Item -LiteralPath $temporaryArchive -Destination $archivePath -Force
} finally {
    if (Test-Path -LiteralPath $temporaryArchive) {
        Remove-Item -LiteralPath $temporaryArchive -Force
    }
}

Write-Host "Archive creee : $archivePath"
