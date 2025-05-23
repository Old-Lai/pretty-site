import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navOptions } from "./navOptions";
import { useLocation } from "react-router-dom";
import { Available_Lang } from "@/lib/interfaces";

interface Props {
  className?: string;
  current_lang: Available_Lang;
}

//intellesense workaround
const className = {
  links:
    "rounded-none border-l-1 border-neutral-950 text-2xl font-light transition-colors duration-500 ease-in-out hover:text-red-300 focus:bg-white hover:bg-white",
};
const styles = className;

export default function LargeNav(props: Readonly<Props>) {
  const { className, current_lang } = props;
  const pathname = useLocation().pathname;
  return (
    <div className={cn(className, "")}>
      <NavigationMenu>
        <NavigationMenuList>
          {navOptions[current_lang].map((nav, index) => (
            <NavigationMenuItem key={nav.name}>
              <Link
                className={cn(
                  navigationMenuTriggerStyle(),
                  index === 0 && "border-none",
                  styles.links,
                  pathname === nav.to &&
                    "text-red-300 underline focus:text-red-300",
                )}
                to={nav.to}
              >
                {nav.name}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
