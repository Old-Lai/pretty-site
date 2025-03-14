import logo from "@/assets/logo.svg";
import Hamberger from "./Hamberger";

export default function NavBar() {
  return (
    <div className="flex h-40 items-center justify-start lg:h-70 lg:px-20">
      <Hamberger className="z-10 w-20 lg:hidden" />
      <div className="flex w-full flex-1 -translate-x-10 justify-center lg:w-auto lg:translate-0 lg:justify-start">
        <img src={logo} alt="logo" className="max-h-30 lg:max-h-50" />
      </div>
    </div>
  );
}
