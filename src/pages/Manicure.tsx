import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { img_manager } from "@/assets";

const nails_imgs = img_manager.get.nails;

const nails_service_list = {
  nail_services: [
    { name: "Regular Gel", price: 35 },
    { name: "Building Gel", price: 60 },
    { name: "Gel Pedicure", price: 60 },
    { name: "Extension", price: 80 },
    { name: "Removal", price: 15 },
    { name: "Hand Spa (anion capsule)", price: 38 },
    { name: "Germany LCN Foot Spa", price: 65 },
  ],
  nail_design: [
    { name: "Cat Eye", price: 20 },
    { name: "Chrome", price: 20 },
    { name: "French", price: 20 },
    { name: "Hand Painting", price: 30 },
    { name: "Ombré", price: 20 },
    { name: "Blooming", price: 30 },
  ],
  others: [
    { name: "Tip", price: "8 /per" },
    { name: "Diamond", price: "5-10 /per" },
    { name: "Applique", price: 5 },
  ],
};

export default function Manicure() {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-t from-(--color-secondary) to-white md:p-15">
      <section>
        <Carousel
          className="mx-2 my-5 w-full md:m-0 md:max-w-5xl"
          plugins={[Autoplay({ delay: 2000 })]}
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
      <section className="mb-5 w-full space-y-5 px-5 md:max-w-[35rem]">
        <Card>
          <CardContent>
            <CardTitle>Nail Services</CardTitle>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sevice</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nails_service_list.nail_services.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell className="text-right font-semibold">{`$${service.price}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Nail Design</CardTitle>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sevice</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nails_service_list.nail_design.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell className="text-right font-semibold">{`$${service.price}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <CardTitle>Others</CardTitle>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sevice</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {nails_service_list.others.map((service) => (
                  <TableRow key={service.name}>
                    <TableCell>{service.name}</TableCell>
                    <TableCell className="text-right font-semibold">{`$${service.price}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
