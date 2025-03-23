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
    bulk: "Bulk Special",
  },
  zh: {
    service: "项目",
    price: "价格",
    bulk: "套餐优惠",
  },
};

const nails_imgs = img_manager.get.facial;
const nails_service_list: LanguageServices = {
  en: {
    "Beauty treatments": [
      { name: "Valmont Facial Moisturizing", price: 228, bulk: "5 for $999" },
      { name: "Acne Treatment", price: 280, bulk: "5 for $1250" },
      {
        name: "Carbon Peed (once a month)",
        price: 299,
        description:
          "Pigmentation Removal, Shrinking pores, Brightening, Firming",
      },
      {
        name: "Aqua Bubble",
        price: 228,
        bulk: "5 for $990",
        description: "Get rid of blackheads cleaning of pores",
      },
      {
        name: "Laser Skin Rejuvenation",
        price: 399,
        bulk: "5 for $1750",
        description:
          "Enhance skin tone, Reduce acne marks, Treat acne an sensitivity, Alleviate hyperpigmentation",
      },
      {
        name: "klarity removal - no down time",
        price: 2800,
        special: "Includes: 8 facials, 1 set of skincare products",
      },
      {
        name: "Remove melasma",
        price: 550,
        description: "Remove ota mole, age spots, and freckles",
        special: "Once a month, recovery mask on us",
      },
      {
        name: "Sensitive Skin Repair Efficacy",
        price: 1680,
        special: "Includes: 5 facials, 1 set of skincare products",
      },
      {
        name: "Hair removal",
        price: "450-650/year",
        description: "Underarms, arms, face, thighs, calves, bikini line",
      },
      { name: "Millia Seed removal", price: "20/pcs" },
    ],
  },
  zh: {
    美容项目: [
      { name: "法尔曼水润保湿护理", price: 228, bulk: "$999（5次）" },
      { name: "抗痘消炎护理", price: 280, bulk: "$1250（5次）" },
      {
        name: "黑脸娃娃 （每月做一次）",
        price: 299,
        description: "淡斑，提亮，紧致皮肤，缩小毛孔，深层清洁",
      },
      {
        name: "韩式小气泡",
        price: 228,
        bulk: "$990（5次）",
        description: "祛黑头粉刺，深层清洁皮肤",
      },
      {
        name: "光子嫩肤",
        price: 399,
        bulk: "$1750（5次）",
        description: "提高肤色，淡化痘印，祛痘祛敏，缓解色斑",
      },
      {
        name: "无感祛斑",
        price: 2800,
        special: "含：8次美容，1套护肤产品",
      },
      {
        name: "蜂巢皮秒祛斑",
        price: 550,
        description: "祛除黄褐斑，痣，老年斑，雀斑",
        special: "每月做一次，送修复面膜",
      },
      {
        name: "敏感肌修复管理",
        price: 1680,
        special: "含：5次美容，1套护肤产品",
      },
      {
        name: "冰点脱毛（每年一次）",
        price: "450-650",
        description: "腋下，手臂，面部，大腿，小腿，比基尼",
      },
      { name: "祛除肉粒，油粒，扁平疣", price: "-（每粒）$20" },
    ],
  },
};

const className = {
  card: "md:min-w-[30rem]",
  card_table: "md:text-lg",
  description: "text-wrap text-xs md:text-sm text-neutral-500 italic",
  special: "text-xs md:text-sm text-neutral-500 underline",
};
const styles = className;

export default function Facial() {
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
      <section className="mb-5 w-full space-y-5 px-5 md:mb-0 md:max-w-[45rem] md:text-2xl">
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
                    <TableHead className="text-right">
                      {text_obj[current_lang].bulk}
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
                        <TableCell className="flex flex-col">
                          <p>{service.name}</p>
                          <p className={styles.description}>
                            {service.description}
                          </p>
                          <p className={styles.special}>{service.special}</p>
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {priceStr}
                        </TableCell>
                        {service.bulk && (
                          <TableCell className="text-right font-semibold">{`${service.bulk}`}</TableCell>
                        )}
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
