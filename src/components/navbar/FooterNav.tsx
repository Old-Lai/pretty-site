import logo_small from "@/assets/logo-small.svg";
import { navOptions } from "./navOptions";
import { Link } from "react-router-dom";
import { Available_Lang } from "@/lib/interfaces";

const text_obj = {
  en: {
    description:
      "professional nail art, lash extensions, facial beauty, and embroidery services. Experience top-tier care and reveal your inner confidence!",
    hours: {
      title: "Hours",
      monday_friday: "Monday - Friday: 10am - 8pm",
      saturday: "Saturday: 1pm - 9pm",
      sunday: "Sunday: 1pm - 9pm",
    },
    contact: "Our Location",
  },
  zh: {
    description: "专业的美甲、美睫、美容及纹绣服务",
    hours: {
      title: "营业时间",
      monday_friday: "星期一到星期五: 10am - 8pm",
      saturday: "星期六: 1pm - 9pm",
      sunday: "星期天: 1pm - 9pm",
    },
    contact: "位置与联络",
  },
};

interface Props {
  current_lang: Available_Lang;
}

export default function FooterNav(props: Readonly<Props>) {
  const { current_lang } = props;
  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div className="space-y-4 lg:text-lg">
          <img
            src={logo_small}
            alt="Pretty Beauty Salon"
            className="h-15 w-auto lg:h-[9rem]"
          />
          <p className="text-left text-balance">
            {text_obj[current_lang].description}
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold lg:text-xl">Services</h3>
          <ul className="text-muted-foreground space-y-2 text-sm lg:text-lg">
            {navOptions[current_lang].map((option, index) => {
              if (index === 0) return;
              return (
                <li key={option.name}>
                  <Link to={option.to}>{option.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold lg:text-xl">
            {text_obj[current_lang].hours.title}
          </h3>
          <ul className="text-muted-foreground space-y-2 text-sm lg:text-lg">
            <li>{text_obj[current_lang].hours.monday_friday}</li>
            <li>{text_obj[current_lang].hours.saturday}</li>
            <li>{text_obj[current_lang].hours.sunday}</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="font-semibold lg:text-xl">
            {text_obj[current_lang].contact}
          </h3>
          <ul className="text-muted-foreground space-y-2 text-sm lg:text-lg">
            <li>1735 Ocean Ave, San Francisco, CA 94112</li>
            <li>info@prettyartnailbeautyspa.com</li>
          </ul>
        </div>
      </div>
      <div className="text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Pretty Beauty Salon. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
