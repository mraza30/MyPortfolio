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
  route: string;
  id: number;
}

const sitePages: IPage[] = [
  { name: "About", ficon: faAddressCard, route: "/about", id: 1 },
  { name: "Skills", ficon: faSkull, route: "/skills", id: 2 },
  { name: "My Work", ficon: faCodeMerge, route: "/work", id: 3 },
  { name: "Blog", ficon: faBlog, route: "/blog", id: 4 },
  { name: "Contact", ficon: faContactBook, route: "/contactme", id: 5 },
];

export { sitePages };
