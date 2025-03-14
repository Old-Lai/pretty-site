import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import FooterNav from "@/components/Footer";

export default function Root() {
  return (
    <div className="h-screen w-screen overflow-auto">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t bg-pink-50 px-5 py-8">
        <FooterNav />
      </footer>
    </div>
  );
}
