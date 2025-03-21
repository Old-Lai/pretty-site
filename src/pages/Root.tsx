import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import FooterNav from "@/components/navbar/FooterNav";
import { useEffect } from "react";

export default function Root() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div className="min-h-full w-full">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t bg-(--color-secondary) px-5 py-8">
        <FooterNav />
      </footer>
    </div>
  );
}
