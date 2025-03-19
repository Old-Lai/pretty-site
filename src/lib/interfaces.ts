export interface ServiceObject {
  name: string;
  description?: string;
  special?: string;
  price: number | string;
  bulk?: number | string;
}

export type LanguageServices = {
  [key: string]: {
    [key: string]: Array<ServiceObject>;
  };
};
