import IAdvantage from "../model/Advantages";

import HospitalIcon from "@/public/icons/hospital-icon.svg";
import TabletIcon from "@/public/icons/tablet-icon.svg";
import FlaskIcon from "@/public/icons/flask-icon.svg";
import NurseIcon from "@/public/icons/nurse-icon.svg";
import BagIcon from "@/public/icons/bag-icon.svg";
import HeardIcon from "@/public/icons/heard-icon.svg";

const ADVATAGES_DATA: IAdvantage[] = [
  {
    title: "2 офлайн клиники смарт формата в Екатеринбурге",
    Icon: HospitalIcon,
  },
  {
    title: "Расшифровка анализов онлайн",
    subTitle: "Удобный сервис для понимания результатов",
    Icon: TabletIcon,
  },
  {
    title: "Персонализированные чек-апы",
    subTitle: "Подбор анализов для профилактики и самодиагностики",
    Icon: FlaskIcon,
  },
  {
    title: "Онлайн-консультации врачей",
    subTitle: "Помощь без визита в клинику",
    Icon: NurseIcon,
  },
  {
    title: "Медицинское сопровождение мероприятий",
    subTitle: "Безопасность и здоровье участников",
    Icon: BagIcon,
  },
  {
    title: "Социальный проект «Долгожители»",
    subTitle: "Медико-социальный уход и поддержка одиноких пенсионеров.",
    Icon: HeardIcon,
  },
];

export default ADVATAGES_DATA;
