interface IStatisticItem {
  digit: string;
  title: string;
}

const STATISTIC_ITEMS: IStatisticItem[] = [
  { digit: "100+", title: "Довольных пациентов" },
  { digit: "10+", title: "Лет опыта" },
  { digit: "500+", title: "Успешных процедур" },
  { digit: "90%", title: "Пациентов рекомендуют нас" },
];

export default STATISTIC_ITEMS;
