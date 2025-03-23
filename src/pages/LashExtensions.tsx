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
import { LanguageServices, OutletContext } from "@/lib/interfaces";
import { useOutletContext } from "react-router-dom";

const text_obj = {
  en: {
    service: "Service",
    price: "Price",
  },
  zh: {
    service: "项目",
    price: "价格",
  },
};

const lashes_imgs = img_manager.get.lashes;
const nails_service_list: LanguageServices = {
  en: {
    "Lash Services": [
      { name: "Classic Single", price: 90 },
      { name: "2D, 3D", price: 99 },
      {
        name: "Custom Design",
        price: 128,
        // description: "(Light Baby Curve, Fairy Lash, Sunflower)",
      },
      { name: "Volume / Wispy", price: 168 },
      { name: "Keratin Lash Lift", price: 88 },
      { name: "Under Lahses", price: 30 },
      { name: "Removal", price: 20 },
      {
        name: "Refill",
        price: "-50% off",
        description: "Within 2 weeks",
        special: "Exclusive for members",
      },
    ],
  },
  zh: {
    美睫服务: [
      { name: "单根", price: 90 },
      { name: "2D, 3D", price: 99, description: "(YY，三叶草)" },
      {
        name: "定制设计",
        price: 128,
        description: "(婴儿湾，仙女款，太阳花)",
      },
      { name: "欧美浓密款", price: 168 },
      { name: "角蛋白翘睫", price: 88 },
      { name: "下睫毛", price: 30 },
      { name: "卸睫毛", price: 20 },
      {
        name: "补睫毛",
        price: "-5折优惠",
        description: "(两周内）",
        special: "仅限会员",
      },
    ],
  },
};

const className = {
  card: "md:min-w-[30rem]",
  card_table: "md:text-lg",
};
const styles = className;

export default function LashExtensions() {
  const context: OutletContext = useOutletContext();
  const current_lang = context.current_lang;
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-t from-(--color-secondary) to-white md:p-15">
      <section className="mb-5">
        <Carousel
          className="mx-2 my-5 w-full md:m-0 md:max-w-7xl"
          plugins={[Autoplay({ delay: 3000 })]}
        >
          <CarouselContent className="flex items-center">
            {Object.keys(lashes_imgs).map((imgObj) => (
              <CarouselItem
                key={lashes_imgs[imgObj].title}
                className="max-w-fit py-2 md:basis-1/2"
              >
                <div className="overflow-hidden rounded-lg shadow-md md:shadow-md">
                  <img
                    src={lashes_imgs[imgObj].src}
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
      <section className="mb-5 w-full space-y-5 px-5 md:mb-0 md:max-w-[40rem] md:text-2xl">
        {Object.keys(nails_service_list[current_lang]).map((service_key) => (
          <Card className={styles.card} key={service_key}>
            <CardContent>
              <CardTitle>{service_key}</CardTitle>
              <Table className={styles.card_table}>
                <TableHeader>
                  <TableRow>
                    <TableHead>{text_obj[current_lang].service}</TableHead>
                    <TableHead className="text-right">
                      {text_obj[current_lang].price}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {nails_service_list[current_lang as keyof LanguageServices][
                    service_key
                  ].map((service) => {
                    const priceStr = service.price.toString().startsWith("-")
                      ? `${service.price.toString().substring(1)}`
                      : `$${service.price}`;

                    return (
                      <TableRow key={service.name}>
                        <TableCell>
                          <div>
                            <p>{service.name}</p>
                            <p className="text-sm text-neutral-600">
                              {service.description}
                            </p>
                            <p className="text-xs">{service.special}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {priceStr}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
