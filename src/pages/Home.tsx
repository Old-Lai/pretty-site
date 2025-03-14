import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { img_manager } from "@/assets";

const nails_imgs = img_manager.get.nails;

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/*hero section*/}
      <section className="flex h-auto w-full flex-col items-center justify-center bg-red-100 lg:min-h-[60rem]">
        <div className="m-5 flex flex-col items-center justify-center text-4xl font-bold font-light text-gray-800">
          <h1>Pretty</h1>
          <h1>San Franisco</h1>
        </div>
        <Carousel className="mb-5 w-full max-w-xs p-2 md:max-w-5xl">
          <CarouselContent className="flex items-center">
            {Object.keys(nails_imgs).map((imgObj, index) => (
              <CarouselItem
                key={nails_imgs[imgObj].title}
                className="md:basis-1/2"
              >
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img src={nails_imgs[imgObj].src} alt="nails img" />
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
      <section className="flex h-auto min-h-[40rem] w-full flex-col items-center justify-center p-5 lg:min-h-[50rem]">
        <h1 className="font-smibold text-3xl text-gray-800">About us</h1>
        <p className="mt-5 text-xl font-medium text-gray-700 lg:max-w-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, quas
          voluptates?
        </p>
      </section>
      {/*booking section*/}
      <section className="flex h-auto min-h-[20rem] w-full flex-col items-center justify-center gap-y-6 bg-pink-100 p-5 lg:min-h-[50rem]">
        <h1 className="font-smibold text-4xl text-gray-800">
          Book Your service now
        </h1>
        <Button className="h-auto w-60 rounded-sm text-2xl font-semibold">
          Book Now
        </Button>
      </section>
      {/*location section*/}
      <section className="flex h-auto min-h-[20rem] w-full bg-yellow-200 lg:min-h-[50rem]">
        <div className="flex w-full flex-1 flex-col items-center justify-center gap-y-6 bg-[url(/img/static-bg.jpg)] bg-cover bg-fixed p-5">
          <Card className="w-[calc(100%-1.5rem)] lg:h-full lg:max-w-4xl lg:py-[5rem]">
            <CardHeader>
              <CardTitle className="text-center text-2xl lg:mb-6 lg:text-5xl">
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-3 text-center lg:gap-y-[3rem] lg:text-2xl">
              <div>
                <div>1735 Ocean Ave, San Francisco</div>
                <div>CA 94112</div>
              </div>

              <div>info@prettysanfrancisco.com</div>
            </CardContent>
            <CardFooter className="flex justify-center lg:flex-1 lg:items-end">
              <Button className="h-auto w-60 rounded-sm text-2xl font-normal lg:w-[30rem] lg:text-4xl">
                <p>Contact Us</p>
                <ChevronRight className="size-6 lg:size-9" />
              </Button>
            </CardFooter>
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
