import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { img_manager } from "@/assets";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "@/lib/interfaces";

const text_obj = {
  en: {
    about_us: {
      title: "About Us",
      descripton:
        "PRETTY is your go-to destination for all things beauty. We specialize in creating stunning, natural looks with the highest quality service—offering expert manicure/pedicure, eyelash extension, facial beauty services, and hair embroidery.",
    },
    book_now: { title: "Book Your service now", button: "Book Now" },
    find_us: {
      title: "Our Location",
      button: "Contact Us",
    },
  },
  zh: {
    about_us: {
      title: "关于我们",
      descripton:
        "我们是一家专业的美甲、美睫、美容及纹绣服务公司——PRETTY，专注于提供高品质的美甲设计与美容护理服务，用心满足每位顾客的需求，让您展现自信与美丽！",
    },
    book_now: { title: "体验PRETTY的专业美甲与美容服务！", button: "立即预约" },
    find_us: {
      title: "位置与联络",
      button: "联系我们",
    },
  },
};

const nails_imgs = img_manager.get.nails;

export default function Home() {
  const context: OutletContext = useOutletContext();
  const current_lang = context.current_lang;
  return (
    <div className="flex flex-col items-center justify-center">
      {/*hero section*/}
      <section className="flex h-auto w-full flex-col items-center justify-center bg-linear-to-b from-white to-(--color-secondary) lg:min-h-[60rem]">
        <div className="m-5 flex flex-col items-center justify-center text-4xl font-bold text-gray-800">
          <h1>Pretty</h1>
          <div className="h-1 w-[calc(100%+2rem)] border-b-[1px]" />
          <h1>San Franisco</h1>
        </div>
        <Carousel
          className="mb-5 w-full max-w-xs p-2 md:max-w-5xl"
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent className="flex items-center">
            {Object.keys(nails_imgs).map((imgObj) => (
              <CarouselItem
                key={nails_imgs[imgObj].title}
                className="max-w-fit py-2 md:basis-1/2"
              >
                <div className="overflow-hidden rounded-lg shadow-md md:shadow-md">
                  <img
                    src={nails_imgs[imgObj].src}
                    alt="nails img"
                    className="max-h-[20rem] md:max-h-[40rem]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className="hidden bg-none md:block md:translate-x-15 lg:translate-x-0"
            aria-label="previous image"
          />
          <CarouselNext
            className="hidden md:block md:-translate-x-15 lg:translate-x-0"
            aria-label="next image"
          />
        </Carousel>
      </section>
      <section className="flex h-auto min-h-[40rem] w-full flex-col items-center justify-center bg-linear-to-b from-(--color-secondary) via-white to-(--color-secondary) p-5 lg:min-h-[50rem]">
        <h1 className="font-smibold text-3xl text-gray-800 md:text-5xl">
          {text_obj[current_lang].about_us.title}
        </h1>
        <div className="h-1 w-[calc(100%+2rem)] max-w-[20rem] border-b-[1px]" />
        <p className="mt-5 text-center text-xl font-medium text-gray-700 md:max-w-4xl md:text-3xl">
          {text_obj[current_lang].about_us.descripton}
        </p>
      </section>
      {/*booking section*/}
      <section className="flex h-auto min-h-[20rem] w-full flex-col items-center justify-center gap-y-6 bg-(--color-secondary) bg-linear-to-b from-(--color-secondary) to-white p-5 lg:min-h-[50rem]">
        <h1 className="font-smibold w-full text-center text-2xl text-gray-800 md:text-4xl">
          {text_obj[current_lang].book_now.title}
        </h1>
        <Button
          className="h-auto w-60 rounded-sm text-2xl font-semibold"
          disabled
        >
          <a href="https://app.squareup.com/appointments/book/vlkhfmk4s1ev88/LZM0ZZ4C44VAV/start">
            {text_obj[current_lang].book_now.button}
          </a>
        </Button>
      </section>
      {/*location section*/}
      <section className="flex h-auto min-h-[20rem] w-full lg:min-h-[50rem]">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-6 bg-[url(/img/static-bg.jpg)] bg-cover bg-fixed p-5">
          <Card className="w-[calc(100%-1.5rem)] items-center justify-center lg:h-full lg:max-w-4xl lg:py-[5rem]">
            <CardHeader className="w-full">
              <CardTitle className="text-center text-2xl md:mb-6 md:text-5xl">
                {text_obj[current_lang].find_us.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3 text-center lg:gap-y-[3rem] lg:text-2xl">
              <div>
                <div>1735 Ocean Ave, San Francisco</div>
                <div>CA 94112</div>
              </div>

              <div>info@prettysanfrancisco.com</div>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.7881432818276!2d-122.46088850000001!3d37.7246504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7dcdb52b398d%3A0xf322d6274b28f104!2s1735%20Ocean%20Ave%2C%20San%20Francisco%2C%20CA%2094112!5e0!3m2!1sen!2sus!4v1741914154424!5m2!1sen!2sus"
          className="h-120 w-full lg:h-[60rem]"
          loading="lazy"
          title="Map location"
        ></iframe>
      </div>
    </div>
  );
}
