/** Runtime-only state kept in one place to avoid hidden globals. */
export const state = {
  processedWorkflows: new Set(),
  pendingSocketRequests: new Map(),
  internalDeletion: false,
  submenuOpen: false
};
