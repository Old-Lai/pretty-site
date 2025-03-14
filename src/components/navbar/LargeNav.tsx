import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const styles = {
  links:
    "rounded-none border-l-1 border-neutral-950 text-2xl font-light transition-colors duration-500 ease-in-out hover:text-red-300",
};

export default function LargeNav(props: Props) {
  return (
    <div className={cn(props.className, "")}>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "border-none",
                  styles.links,
                )}
              >
                Navigation 1
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), styles.links)}
              >
                Navigation 2
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), styles.links)}
              >
                Navigation 3
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), styles.links)}
              >
                Navigation 4
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink
                className={cn(navigationMenuTriggerStyle(), styles.links)}
              >
                More
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
