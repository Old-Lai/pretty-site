import nails1 from "@/assets/nails/nails-1.webp";
import nails2 from "@/assets/nails/nails-2.webp";
import nails3 from "@/assets/nails/nails-3.webp";
import nails4 from "@/assets/nails/nails-4.webp";
import nails5 from "@/assets/nails/nails-5.webp";
import nails6 from "@/assets/nails/nails-6.webp";
import nails7 from "@/assets/nails/nails-7.webp";
import nails8 from "@/assets/nails/nails-8.webp";
import nails9 from "@/assets/nails/nails-9.webp";
import nails10 from "@/assets/nails/nails-10.webp";
import nails11 from "@/assets/nails/nails-11.webp";
import nails12 from "@/assets/nails/nails-12.webp";
import nails13 from "@/assets/nails/nails-13.webp";
import nails14 from "@/assets/nails/nails-14.webp";
import nails15 from "@/assets/nails/nails-15.webp";
import nails16 from "@/assets/nails/nails-16.webp";

interface NailsImg {
  src: string;
  alt: string;
  title: string;
}

const nails_img: { [key: string]: NailsImg } = {
  nails1: {
    src: nails1,
    alt: "manicure sample board",
    title: "Nail 1",
  },
  nails2: {
    src: nails2,
    alt: "manicure sample board",
    title: "Nail 2",
  },
  nails3: {
    src: nails3,
    alt: "manicure on nails",
    title: "Nail 3",
  },
  nails4: {
    src: nails4,
    alt: "manicure sample board",
    title: "Nail 4",
  },
  nails5: {
    src: nails5,
    alt: "manicure sample board",
    title: "Nail 5",
  },
  nails6: {
    src: nails6,
    alt: "manicure sample board",
    title: "Nail 6",
  },
  nails7: {
    src: nails7,
    alt: "manicure sample board",
    title: "Nail 7",
  },
  nails8: {
    src: nails8,
    alt: "manicure sample board",
    title: "Nail 8",
  },
  nails9: {
    src: nails9,
    alt: "manicure sample board",
    title: "Nail 9",
  },
  nails10: {
    src: nails10,
    alt: "manicure sample board",
    title: "Nail 10",
  },
  nails11: {
    src: nails11,
    alt: "manicure sample board",
    title: "Nail 11",
  },
  nails12: {
    src: nails12,
    alt: "manicure sample board",
    title: "Nail 12",
  },
  nails13: {
    src: nails13,
    alt: "manicure sample board",
    title: "Nail 13",
  },
  nails14: {
    src: nails14,
    alt: "manicure sample board",
    title: "Nail 14",
  },
  nails15: {
    src: nails15,
    alt: "manicure sample board",
    title: "Nail 15",
  },
  nails16: {
    src: nails16,
    alt: "manicure sample board",
    title: "Nail 16",
  },
};

export const img_manager = {
  get: {
    nails: nails_img,
  },
};
