import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { navOptions } from "./navOptions";
import { useLocation } from "react-router-dom";
import { Available_Lang } from "@/lib/interfaces";

interface Props {
  className?: string;
  current_lang: Available_Lang;
}

const className = {
  navigationTextStyle:
    "text-3xl font-normal hover:bg-white hover:text-red-300 focus:bg-white",
};
const styles = className;

export default function Hamberger(props: Props) {
  const { className, current_lang } = props;
  const pathname = useLocation().pathname;

  return (
    <div className={cn(className)}>
      <Drawer direction="left">
        <DrawerTrigger>
          <div className="mx-5">
            <Menu className="h-8 w-auto" />
          </div>
        </DrawerTrigger>
        <DrawerTitle />
        <DrawerContent>
          <NavigationMenu orientation="vertical" className="mx-5 my-10 flex-0">
            <NavigationMenuList className="flex-col items-start space-y-3 space-x-0">
              {navOptions[current_lang].map((nav) => (
                <NavigationMenuItem key={nav.name}>
                  <Link
                    className={cn(
                      navigationMenuTriggerStyle(),
                      styles.navigationTextStyle,
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
        </DrawerContent>
      </Drawer>
    </div>
  );
}
