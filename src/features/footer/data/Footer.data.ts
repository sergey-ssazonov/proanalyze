import INavigationItem from "@/src/shared/types/navigation";
import { IFooterItem } from "../model/Footer";

const FOOTER_ITEMS_CLIENTS: INavigationItem[] = [
  { label: "Задать вопрос врачу", url: "" },
  { label: "Консультации", url: "" },
  { label: "О нас", url: "" },
  { label: "Пакеты услуг", url: "" },
  { label: "Помощь", url: "" },
  { label: "Часто задаваемые вопросы", url: "" },
  { label: "Отзывы", url: "" },
];

const FOOTER_ITEMS_DOCTORS: INavigationItem[] = [
  { label: "Стать консультантом", url: "" },
  { label: "Помощь", url: "" },
  { label: "Заполнение профиля", url: "" },
  { label: "Наши врачи", url: "" },
];

const createFooterItem = (
  label: string,
  url: string,
  target: string = "_blank",
  rel: string = "noopener noreferrer nofollow"
): IFooterItem => ({
  label,
  url,
  target,
  rel,
});

const FOOTER_ITEMS_DOCS: IFooterItem[] = [
  createFooterItem("Соглашение для пользователей", "/agreement"),
  createFooterItem("Обработка персональных данных", "/policy"),
];

export { FOOTER_ITEMS_CLIENTS, FOOTER_ITEMS_DOCTORS, FOOTER_ITEMS_DOCS };
