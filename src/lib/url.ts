// Antepone la ruta base (p. ej. /iacomparada en github.io; vacía con dominio propio).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => BASE + path;
