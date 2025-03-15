import nails1 from "@/assets/nails/nails-1.webp";
import nails2 from "@/assets/nails/nails-2.webp";
import nails3 from "@/assets/nails/nails-3.webp";
import nails4 from "@/assets/nails/nails-4.webp";
import nails5 from "@/assets/nails/nails-5.webp";

interface NailsImg {
  src: string;
  alt: string;
  title: string;
}

const nails_img: { [key: string]: NailsImg } = {
  nails1: {
    src: nails1,
    alt: "nail-1",
    title: "Nail 1",
  },
  nails2: {
    src: nails2,
    alt: "nail-2",
    title: "Nail 2",
  },
  nails3: {
    src: nails3,
    alt: "nail-3",
    title: "Nail 3",
  },
  nails4: {
    src: nails4,
    alt: "nail-4",
    title: "Nail 4",
  },
  nails5: {
    src: nails5,
    alt: "nail-5",
    title: "Nail 5",
  },
};

export const img_manager = {
  get: {
    nails: nails_img,
  },
};
