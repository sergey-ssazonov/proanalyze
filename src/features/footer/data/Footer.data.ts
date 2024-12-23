import { IFooterItem } from "../model/Footer";

const FOOTER_ITEMS_CLIENTS: IFooterItem[] = [
  { label: "Задать вопрос врачу", url: "" },
  { label: "Консультации", url: "" },
  { label: "О нас", url: "" },
  { label: "Пакеты услуг", url: "" },
  { label: "Помощь", url: "" },
  { label: "Часто задаваемые вопросы", url: "" },
  { label: "Отзывы", url: "" },
];

const FOOTER_ITEMS_DOCTORS: IFooterItem[] = [
  { label: "Стать консультантом", url: "" },
  { label: "Помощь", url: "" },
  { label: "Заполнение профиля", url: "" },
  { label: "Наши врачи", url: "" },
];

const FOOTER_ITEMS_DOCS: IFooterItem[] = [
  { label: "Соглашение для пользователей", url: "" },
  { label: "Соглашение для врачей", url: "" },
  { label: "Обработка персональных данных", url: "" },
  { label: "Редакционная политика", url: "" },
];

export { FOOTER_ITEMS_CLIENTS, FOOTER_ITEMS_DOCTORS, FOOTER_ITEMS_DOCS };
