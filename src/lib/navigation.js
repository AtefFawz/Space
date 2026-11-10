export const NAVIGATION = [
  { number: "00", label: "Home", path: "/" },
  { number: "01", label: "Destination", path: "/destination" },
  { number: "02", label: "Crew", path: "/crew" },
  { number: "03", label: "Technology", path: "/technology" },
];

export function getPageLabel(pathname = "/") {
  const path = pathname.replace(/\/+$/, "").toLowerCase();
  return NAVIGATION.find((item) => item.path.toLowerCase() === (path || "/"))?.label ?? "Not found";
}
