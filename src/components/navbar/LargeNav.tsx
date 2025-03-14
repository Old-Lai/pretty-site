import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { navOptions } from "./navOptions";

interface Props {
  className?: string;
}

const styles = {
  links:
    "rounded-none border-l-1 border-neutral-950 text-2xl font-light transition-colors duration-500 ease-in-out hover:text-red-300",
};

export default function LargeNav(props: Readonly<Props>) {
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
                )}
                to={nav.to}
              >
                Lash Extensions
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
