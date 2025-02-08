interface ISelectOption {
  label: string;
  value: string | boolean;
}

export const GENDER_OPTIONS: ISelectOption[] = [
  { label: "Мужской", value: "male" },
  { label: "Женский", value: "female" },
];

export const SYMPTOMS_OPTIONS: ISelectOption[] = [
  { label: "Да", value: true },
  { label: "Нет", value: false },
];

export const TOOLTIP_COMMENT: string =
  " Если на текущий момент жалобы, какие-либо симптомы (например: Обратились с ребенком 9 лет с жалобами на постоянный насморк по утрам. Сдали кровь. Просим вас прокомментировать результаты анализов). Если симптомов, жалоб нет, оставьте это поле пустым";

export const TOOLTIP_EMAIL: string =
  "Он нужен для отправки результатов на почту. Мы не храним ваши контактные данные";

export const BASE_EMAIL_LIST: string[] = [
  "mail.ru",
  "yandex.ru",
  "gmail.com",
  "list.ru",
  "rambler.ru",
  "icloud.com",
];

export const AGE_OPTIONS: ISelectOption[] = [
  { value: "до 1 года", label: "до 1 года" },
  ...Array.from({ length: 100 }, (_, i) => ({
    value: (i + 1).toString(),
    label: (i + 1).toString(),
  })),
];
