export const REF_KEY = "es_amb_ref";

export function setAmbRef(ref) {
  if (typeof window === "undefined") return;
  const clean = (ref || "").trim().toLowerCase();
  if (!clean) return;
  localStorage.setItem(REF_KEY, clean);
}

export function getAmbRef() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(REF_KEY);
}
