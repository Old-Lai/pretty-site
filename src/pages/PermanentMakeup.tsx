import { img_manager } from "@/assets";
import { cn } from "@/lib/utils";
import { LanguageServices, Available_Lang } from "@/lib/interfaces";

const current_lang = Available_Lang.Chinese;
const brows_img = img_manager.get.brows;

const brows_obj: LanguageServices = {
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
        price: "99",
        description: "Eyebrow washing / single clean",
        image: brows_img.brows1,
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
        price: "99",
        description: "单次洗眉",
        image: brows_img.brows1,
      },
    ],
  },
};

export default function PermanentMakeup() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-(--color-secondary) p-0 text-justify md:space-y-10 md:p-15">
      <div className="h-full w-full max-w-5xl space-y-5 bg-white px-2 py-5 md:rounded-2xl md:px-10 md:py-15 lg:px-20">
        {brows_obj[current_lang].brows.map((service_obj, index) => {
          const img_obj = service_obj.image;
          return (
            <div
              className={cn(
                "flex h-20 min-w-full overflow-hidden rounded-full bg-(--color-secondary) md:h-30",
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
              <div className="flex h-full w-[70%] flex-col items-center justify-center bg-(--color-secondary)">
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
      </div>
      <div className="h-full w-full max-w-5xl rounded-md bg-(--color-secondary) md:rounded-2xl md:bg-white md:px-10 md:py-15 lg:px-20">
        <p>Other permanent makeup services</p>
      </div>
    </div>
  );
}
