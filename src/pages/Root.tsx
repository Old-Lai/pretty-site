import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import FooterNav from "@/components/navbar/FooterNav";
import { useEffect, useState } from "react";
import { OutletContext, Available_Lang } from "@/lib/interfaces";
import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Root() {
  const location = useLocation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [CurrentLang, setCurrentLang] = useState(Available_Lang.English);
  const contextVal: OutletContext = {
    current_lang: CurrentLang,
  };

  useEffect(() => {
    const storedLang = window.localStorage.getItem("language");
    if (storedLang) {
      setCurrentLang(storedLang as Available_Lang);
    } else {
      window.localStorage.setItem("language", Available_Lang.English);
      setIsDialogOpen(true);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function setLang(lang: Available_Lang) {
    window.localStorage.setItem("language", lang);
    setCurrentLang(lang);
  }

  return (
    <div className="min-h-full w-full">
      <header>
        <NavBar current_lang={contextVal.current_lang} />
        <div className="absolute top-0 right-0">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="my-2">
                <Languages className="size-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Language Change</DialogTitle>
                <DialogDescription>
                  Choose your preffered language below.
                </DialogDescription>
              </DialogHeader>
              <DialogClose asChild>
                <div className="flex items-center justify-center gap-2">
                  <Button
                    className="min-w-1/2"
                    onClick={() => {
                      setLang(Available_Lang.Chinese);
                    }}
                  >
                    中文
                  </Button>
                  <Button
                    className="min-w-1/2"
                    onClick={() => {
                      setLang(Available_Lang.English);
                    }}
                  >
                    English
                  </Button>
                </div>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main>
        <Outlet context={contextVal} />
      </main>
      <footer className="border-t bg-(--color-secondary) px-5 py-8">
        <FooterNav current_lang={contextVal.current_lang} />
      </footer>
    </div>
  );
}
