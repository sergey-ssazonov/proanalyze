import IStaffItem from "../model/Staff";

import FarinaYulia from "@/public/images/staff/farina_yulia.webp";
import BersenevDenis from "@/public/images/staff/bersenev_denis.webp";
import SalihovaAlphia from "@/public/images/staff/salihova_alphia.webp";
import PotkinMaksim from "@/public/images/staff/potkin_maksim.webp";
import MakarovaLarisa from "@/public/images/staff/makarova_larisa.webp";
import SodikovaShaphoat from "@/public/images/staff/sodikova_shaphoat.webp";

const STAFF_ITEMS: IStaffItem[] = [
  {
    name: "Фарина Юлия Анатольевна",
    post: "Дерматовенеролог, Педиатр",
    description:
      "Врач высшей категории, стаж 17 лет. Окончила Уральскую государственную медицинскую академию, ординатуру по дерматовенерологии. Соучредитель компании",
    imageSrc: FarinaYulia.src,
  },
  {
    name: "Берсенёв Денис Владиславович",
    post: "Хирург, Педиатр",
    description:
      "Окончил Уральский медицинский университет в 2018 году педиатрический факультет, ординатура по детской хирургии",
    imageSrc: BersenevDenis.src,
  },
  {
    name: "Салихова Альфия Фаритовна",
    post: "Аллерголог-иммунолог",
    description:
      " окончила Оренбургский медицинский университет (2001), повышение квалификации в 2011 и 2016 гг., РМАНПО (2021)",
    imageSrc: SalihovaAlphia.src,
  },
  {
    name: "Поткин Максим Евгеньевич",
    post: "Детский хирург-уролог, дежурный врач",
    description:
      "Врач с 17-летним стажем, окончил Уральскую медакадемию (2007), интернатуру по детской хирургии, специализация по урологии (2014)",
    imageSrc: PotkinMaksim.src,
  },
  {
    name: "Макарова Лариса Анатольевна",
    post: "Инфекционист",
    description:
      "Врач высшей категории, окончила ННГМА (1996) и интернатуру в КГМУ (1997). Стаж работы с детьми и взрослыми 28 лет",
    imageSrc: MakarovaLarisa.src,
  },
  {
    name: "Содикова Шафоат Ашурбоевна",
    post: "Терапевт, гинеколог, детский гинеколог",
    description:
      "Окончила в 2022 году Башкирский государственный медицинский университет, факультет Лечебное дело",
    imageSrc: SodikovaShaphoat.src,
  },
];

export default STAFF_ITEMS;
