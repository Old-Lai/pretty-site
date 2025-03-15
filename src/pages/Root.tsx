import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import FooterNav from "@/components/FooterNav";

export default function Root() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
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
