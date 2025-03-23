import logo from "@/assets/logo.svg";
import Hamberger from "./Hamberger";
import LargeNav from "./LargeNav";
import { Available_Lang } from "@/lib/interfaces";

interface Props {
  current_lang: Available_Lang;
}

export default function NavBar(props: Readonly<Props>) {
  const { current_lang } = props;
  return (
    <div className="flex h-40 items-center justify-start lg:h-70 lg:px-10">
      <Hamberger className="z-10 w-20 lg:hidden" current_lang={current_lang} />
      <div className="flex w-full flex-1 -translate-x-10 justify-center lg:w-auto lg:translate-0 lg:justify-start">
        <img src={logo} alt="logo" className="max-h-30 min-w-40 lg:max-h-50" />
      </div>
      <LargeNav
        className="hidden lg:block lg:flex-2"
        current_lang={current_lang}
      />
    </div>
  );
}
