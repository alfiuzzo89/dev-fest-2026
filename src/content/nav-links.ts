// Pre-launch: only publicly accessible routes are exposed.
// Restore /about, /agenda, /speakers when those pages go live.
export const navLinks: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/venue", label: "Venue" }
];
