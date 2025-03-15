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
import { useEffect } from "react";

interface Props {
  className?: string;
}

//intellesense workaround
const className = {
  links:
    "rounded-none border-l-1 border-neutral-950 text-2xl font-light transition-colors duration-500 ease-in-out hover:text-red-300 focus:bg-white hover:bg-white",
};
const styles = className;

export default function LargeNav(props: Readonly<Props>) {
  const pathname = useLocation().pathname;

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <div className={cn(props.className, "")}>
      <NavigationMenu>
        <NavigationMenuList>
          {navOptions.map((nav, index) => (
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
