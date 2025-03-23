import { Available_Lang } from "@/lib/interfaces";

interface NavOption {
  name: string;
  to: string;
}

export const navOptionsEnglish: Array<NavOption> = [
  { name: "Home", to: "/" },
  { name: "Lash Extensions", to: "/lash-extensions" },
  { name: "Permanent Makeup", to: "/permanent-makeup" },
  { name: "Manicure", to: "/manicure" },
  { name: "Facial", to: "/facial" },
];

export const navOptionsChinese: Array<NavOption> = [
  { name: "首页", to: "/" },
  { name: "睫毛服务", to: "/lash-extensions" },
  { name: "纹绣服务", to: "/permanent-makeup" },
  { name: "美甲服务", to: "/manicure" },
  { name: "美容服务", to: "/facial" },
];

export const navOptions: Record<Available_Lang, Array<NavOption>> = {
  en: navOptionsEnglish,
  zh: navOptionsChinese,
};
