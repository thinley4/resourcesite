import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ThemeToggle } from "../ThemeToggle";

const MobileNav = () => {
  return (
    <div className="flex items-center gap-1">
      <ThemeToggle />
      <Drawer>
        <DrawerTrigger asChild>
          <div className="flex justify-end">
            <Button style={{ background: "#301E67" }} size={"nav"}>
              <MenuIcon className="text-white h-5 w-5" />
            </Button>
          </div>
        </DrawerTrigger>
        <DrawerContent style={{ background: "#070041" }} className="text-white">
          <Button variant="link">
            <Link href={"/"} className="text-white">
              Home
            </Link>
          </Button>
          <Button variant="link">
            <Link href={"/admin"} className="text-white">
              Admin
            </Link>
          </Button>
          <Button variant="link">
            <Link
              href={"https://github.com/anisharaz/resourcesite.git"}
              className="text-white"
            >
              Github
            </Link>
          </Button>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button style={{ background: "#070041" }} variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
export default MobileNav;
