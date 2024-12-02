interface IHeaderItem {
  label: string;
  url: string;
}

const HEADER_ITEMS: IHeaderItem[] = [
  { label: "Каталог анализов", url: "" },
  { label: "Подбор анализов", url: "" },
  { label: "О нас", url: "/about" },
  { label: "Отзывы", url: "" },
  { label: "Контакты", url: "" },
];

export default HEADER_ITEMS;
