// PUBLIC_INTERFACE
export function scrollToId(id) {
  /** Smooth-scroll to an element by id if present. */
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
}
