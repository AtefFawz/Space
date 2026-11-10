/** Resolve an asset against Vite's configured base path (including GitHub Pages). */
export function asset(path) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}
