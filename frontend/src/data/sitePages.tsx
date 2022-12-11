import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faAddressCard,
  faBlog,
  faCodeMerge,
  faContactBook,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";

interface IPage {
  name: string;
  ficon: IconDefinition;
  route?: string;
  id: number;
}

const sitePages: IPage[] = [
  { name: "About", ficon: faAddressCard, id: 1 },
  { name: "Skills", ficon: faSkull, id: 2 },
  { name: "My Work", ficon: faCodeMerge, id: 3 },
  { name: "Blog", ficon: faBlog, id: 4 },
  { name: "Contact", ficon: faContactBook, id: 5 },
];

export { sitePages };
