import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

const navigationTextStyle = "text-3xl font-normal";

export default function Hamberger(props: Props) {
  const { className } = props;

  return (
    <div className={cn(className)}>
      <Drawer direction="left">
        <DrawerTrigger>
          <div className="mx-5">
            <Menu className="h-8 w-auto" />
          </div>
        </DrawerTrigger>
        <DrawerContent>
          <NavigationMenu orientation="vertical" className="mx-5 my-10 flex-0">
            <NavigationMenuList className="flex-col items-start space-y-3 space-x-0">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      navigationTextStyle,
                    )}
                  >
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      navigationTextStyle,
                    )}
                  >
                    Menu 1
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      navigationTextStyle,
                    )}
                  >
                    Menu 2
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
