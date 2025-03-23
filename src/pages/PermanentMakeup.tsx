import { img_manager } from "@/assets";
import { cn } from "@/lib/utils";
import { LanguageServices, OutletContext } from "@/lib/interfaces";
import { useOutletContext } from "react-router-dom";

const text_obj = {
  en: {
    brows: "Brows Services",
    eyeline: "Eyeline Services",
    hairline: "Hairline Services",
  },
  zh: {
    brows: "眉系列-价格表",
    eyeline: "眼线系列-价格表",
    hairline: "发线系列-价格表",
  },
};

const brows_img = img_manager.get.permanent.brows;
const eyeline_img = img_manager.get.permanent.eyeline;
const hairline_img = img_manager.get.permanent.hairline;

const services: LanguageServices = {
  en: {
    brows: [
      {
        name: "Ombre/Powder Brow",
        price: "599",
        description: "Whisked starlight gradient glow",
        image: brows_img.brows2,
      },
      {
        name: "Combo Brow",
        price: "650",
        description: "Fusion of line and mist for a lifelike hair effect",
        image: brows_img.brows3,
      },
      {
        name: "Hair Stroke Brow",
        price: "780",
        description: "Defined strands for authentic, natural realism",
        image: brows_img.brows4,
      },
      {
        name: "Man Brow",
        price: "680",
        description: "Farewell chaos, reveal natural elegance",
        image: brows_img.brows5,
      },
      {
        name: "Eyebrow Cleaning",
        price: "199",
        description: "Eyebrow washing / single clean",
        image: brows_img.brows1,
      },
    ],
    eyeline: [
      {
        name: "Invisible Eyeliner",
        price: "500",
        description: "Double eyelid-friendly, natural style",
        image: eyeline_img.eyeline1,
      },
      {
        name: "Winged Natural Eyeliner",
        price: "550",
        description: "For those who prefer light makeup",
        image: eyeline_img.eyeline2,
      },
      {
        name: "Enhanced Makeup Eyeliner",
        price: "599",
        description:
          "Ideal for those with big eyes and a passion for daily makeup",
        image: eyeline_img.eyeline3,
      },
    ],
    hairline: [
      {
        name: "SMP Hair Line",
        price: "999 ~ 1200",
        image: hairline_img.hairline1,
      },
      {
        name: "SMP Parting",
        price: "1300 ~ 1600",
        image: hairline_img.hairline2,
      },
      {
        name: "SMP Baldness",
        price: "2800",
        image: hairline_img.hairline3,
      },
    ],
  },
  zh: {
    brows: [
      {
        name: "轻氧雾眉",
        price: "599",
        description: "像眉粉亲扫出来的感觉 星雾状光影渐变感",
        image: brows_img.brows2,
      },
      {
        name: "原生丝雾眉",
        price: "650",
        description: "线+雾合二为一 有装感又有毛发的真实感",
        image: brows_img.brows3,
      },
      {
        name: "空气野生眉",
        price: "780",
        description: "根根分明仿真人毛发 达到自然原生逼真效果",
        image: brows_img.brows4,
      },
      {
        name: "男士仿真眉",
        price: "680",
        description: "告别杂乱展现自然骨相之英气",
        image: brows_img.brows5,
      },
      {
        name: "洗眉 / 单次",
        price: "199",
        description: "单次洗眉",
        image: brows_img.brows1,
      },
    ],
    eyeline: [
      {
        name: "美睫线",
        price: "500",
        description: "位置：睫毛根部\n适合：内双顾客想要自然妆感",
        image: eyeline_img.eyeline1,
      },
      {
        name: "美瞳线",
        price: "550",
        description: "位置：睫毛根部 + 灰白线\n适合：喜欢淡妆",
        image: eyeline_img.eyeline2,
      },
      {
        name: "妆感美瞳线",
        price: "599",
        description:
          "位置：睫毛根部 + 灰白线 + 睫毛根部外边缘\n适合：眼睛大，喜欢每天化妆的",
        image: eyeline_img.eyeline3,
      },
    ],
    hairline: [
      {
        name: "发际线",
        price: "999 ~ 1200",
        image: hairline_img.hairline1,
      },
      {
        name: "发缝",
        price: "1300 ~ 1600",
        image: hairline_img.hairline2,
      },
      {
        name: "光头",
        price: "2800",
        image: hairline_img.hairline3,
      },
    ],
  },
};

export default function PermanentMakeup() {
  const context: OutletContext = useOutletContext();
  const current_lang = context.current_lang;
  return (
    <div className="flex w-full flex-col items-center justify-center p-0 text-justify md:space-y-10 md:bg-gradient-to-t md:from-(--color-secondary) md:to-white md:p-15">
      <section className="h-full w-full max-w-5xl space-y-5 bg-gradient-to-t from-(--color-secondary) to-white px-2 pt-5 pb-10 md:rounded-2xl md:from-white md:px-10 md:py-15 md:shadow-xl lg:px-20">
        <h1 className="w-full text-center text-3xl font-medium md:text-left">
          {text_obj[current_lang].brows}
        </h1>
        {services[current_lang].brows.map((service_obj, index) => {
          const img_obj = service_obj.image;
          return (
            <div
              className={cn(
                "flex h-20 min-w-full overflow-hidden rounded-full bg-white shadow-md md:h-30 md:bg-(--color-secondary)",
                index % 2 && "flex-row-reverse",
              )}
              key={service_obj.name + index}
            >
              <div className="h-full w-[33%] overflow-hidden rounded-full bg-neutral-300">
                {img_obj ? (
                  <img
                    src={img_obj.src}
                    alt={img_obj.alt}
                    className="min-h-full w-auto object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-lg italic">
                      Image Coming Soon
                    </p>
                  </div>
                )}
              </div>
              <div className="flex h-full w-[70%] flex-col items-center justify-center bg-white md:bg-(--color-secondary)">
                <div className="flex w-[90%] items-center space-x-1 md:w-[80%]">
                  <div className="full h-1 w-1 rounded bg-neutral-700" />
                  <p className="text-md font-medium md:text-2xl">
                    {service_obj.name}
                  </p>
                  <p className="flex-1 text-right text-xl font-semibold md:text-4xl">{`$${service_obj.price}`}</p>
                </div>
                <div className="h-1 w-[90%] border-b-1 border-neutral-400 md:w-[80%]" />
                <p className="w-[90%] text-xs text-neutral-600 md:w-[80%] md:text-base">
                  {service_obj.description}
                </p>
              </div>
            </div>
          );
        })}
      </section>
      <section className="h-full w-full max-w-5xl space-y-5 rounded-md bg-(--color-secondary) bg-gradient-to-t from-white to-(--color-secondary) px-2 pt-5 pb-10 md:rounded-2xl md:to-white md:px-10 md:py-15 md:shadow-xl lg:px-20">
        <h1 className="w-full text-center text-3xl font-medium md:text-left">
          {text_obj[current_lang].eyeline}
        </h1>
        {services[current_lang].eyeline.map((service_obj, index) => {
          const img_obj = service_obj.image;
          return (
            <div
              className={cn(
                "flex h-20 min-w-full overflow-hidden rounded-full bg-white shadow-md md:h-30 md:bg-(--color-secondary)",
                index % 2 && "flex-row-reverse",
              )}
              key={service_obj.name + index}
            >
              <div className="h-full w-[33%] overflow-hidden rounded-full bg-neutral-300">
                {img_obj ? (
                  <img
                    src={img_obj.src}
                    alt={img_obj.alt}
                    className="min-h-full w-full object-center"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <p className="text-center text-lg italic">
                      Image Coming Soon
                    </p>
                  </div>
                )}
              </div>
              <div className="flex h-full w-[70%] flex-col items-center justify-center bg-white md:bg-(--color-secondary)">
                <div className="flex w-[90%] items-center space-x-1 md:w-[80%]">
                  <div className="full h-1 w-1 rounded bg-neutral-700" />
                  <p className="text-md text-left font-medium md:text-2xl">
                    {service_obj.name}
                  </p>
                  <p className="flex-1 text-right text-xl font-semibold md:text-4xl">{`$${service_obj.price}`}</p>
                </div>
                <div className="h-1 w-[90%] border-b-1 border-neutral-400 md:w-[80%]" />
                <div className="w-[90%] text-left text-xs text-neutral-600 md:w-[80%] md:text-base">
                  <p>{service_obj.description?.split("\n")[0]}</p>
                  <p>{service_obj.description?.split("\n")[1]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="h-full w-full max-w-5xl space-y-5 rounded-md bg-white bg-gradient-to-t from-(--color-secondary) to-white px-2 pt-5 pb-10 md:rounded-2xl md:from-white md:px-10 md:py-15 md:shadow-xl lg:px-20">
        <h1 className="w-full text-center text-3xl font-medium md:text-left">
          {text_obj[current_lang].hairline}
        </h1>
        {services[current_lang].hairline.map((service_obj, index) => {
          const img_obj = service_obj.image;
          return (
            <div
              className={cn(
                "flex min-h-30 w-full items-center justify-center md:min-h-60",
                index % 2 === 1 && "flex-row-reverse",
              )}
              key={service_obj.name}
            >
              <div className="min-h-30 w-1/2 overflow-hidden rounded-xl bg-white shadow-lg md:min-h-60">
                {img_obj ? (
                  <img
                    src={img_obj.src}
                    alt={img_obj.alt}
                    className="h-full w-full object-center"
                  />
                ) : (
                  <div className="flex min-h-30 items-center justify-center md:min-h-60">
                    <p className="text-center text-lg italic">
                      Image Coming Soon
                    </p>
                  </div>
                )}
              </div>
              <div className="w-1/2 pl-5">
                <p className="flex-1 text-left text-xl md:text-4xl">
                  {service_obj.name}
                </p>
                <div className="h-1 w-[90%] border-b-1 border-neutral-400 md:w-[80%]" />
                <p className="flex-1 text-left text-xl font-semibold md:text-4xl">{`$${service_obj.price}`}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
