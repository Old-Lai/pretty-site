interface NavOption {
  name: string;
  to: string;
}

export const navOptions: Array<NavOption> = [
  { name: "Lash Extensions", to: "/lash-extensions" },
  { name: "Permanent Makeup", to: "/permanent-makeup" },
  { name: "Manicure", to: "/manicure" },
  { name: "Facial", to: "/facial" },
];
