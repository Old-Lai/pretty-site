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

const nails_imgs = img_manager.get.nails;
const nails_service_list: LanguageServices = {
  en: {
    "Nail Services": [
      { name: "Regular Gel", price: 48 },
      { name: "Building Gel", price: 65 },
      { name: "Gel Pedicure", price: 85 },
      { name: "Extension", price: 80 },
      { name: "Removal", price: 15 },
      { name: "Hand Spa (anion capsule)", price: 68 },
      { name: "Germany LCN Foot Spa", price: 88 },
    ],
    "Nail Design": [
      { name: "Cat Eye", price: 20 },
      { name: "Chrome", price: 20 },
      { name: "French", price: 20 },
      { name: "Hand Painting", price: 30 },
      { name: "Ombré", price: 20 },
      { name: "Blooming", price: 30 },
    ],
    "Other Services": [
      { name: "Tip", price: "8 /per" },
      { name: "Diamond", price: "5-10 /per" },
      { name: "Applique", price: 5 },
    ],
  },
  zh: {
    美甲服务: [
      { name: "普通胶油", price: 48 },
      { name: "建构（单色）", price: 65 },
      { name: "足部-单色Gels（包含普通修脚）", price: 85 },
      { name: "甲片延长", price: 80 },
      { name: "卸甲", price: 15 },
      { name: "太空舱手部护理", price: 68 },
      { name: "德国贵妇LCN足部护理", price: 88 },
    ],
    美甲设计: [
      { name: "猫眼", price: 20 },
      { name: "魔法粉", price: 20 },
      { name: "法式", price: 20 },
      { name: "手绘", price: 30 },
      { name: "渐变", price: 20 },
      { name: "晕染", price: 30 },
    ],
    其他项目: [
      { name: "单个甲片", price: "8 /per" },
      { name: "单颗钻石", price: "5-10 /per" },
      { name: "饰品", price: 5 },
    ],
  },
};

const className = {
  card: "md:min-w-[30rem]",
  card_table: "md:text-lg",
};
const styles = className;

export default function Manicure() {
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
                  ].map((service) => (
                    <TableRow key={service.name}>
                      <TableCell>{service.name}</TableCell>
                      <TableCell className="text-right font-semibold">{`$${service.price}`}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
