export interface ImgInfo {
  src: string;
  alt: string;
  title: string;
}
export interface ServiceObject {
  name: string;
  description?: string;
  special?: string;
  price: number | string;
  bulk?: number | string;
  image?: ImgInfo;
}

export type LanguageServices = {
  [key: string]: {
    [key: string]: Array<ServiceObject>;
  };
};

export enum Available_Lang {
  English = "en",
  Chinese = "zh",
}

export interface OutletContext {
  current_lang: Available_Lang;
}
