import IStaffItem from "../model/Staff";

import FarinaYulia from '@/public/images/staff/farina_yulia.png'
import BersenevDenis from '@/public/images/staff/bersenev_denis.jpg'
import FilipovIgor from '@/public/images/staff/filipov_igor.png'
import PotkinMaksim from '@/public/images/staff/potkin_maksim.jpg'
import PopovKirill from '@/public/images/staff/popov_kirill.png'
import KorchemkinaLilia from '@/public/images/staff/korchemkina_lilia.png'


const STAFF_ITEMS: IStaffItem[] = [
    {
        name:"Фарина Юлия Анатольевна",
        post: "Дерматовенеролог, Педиатр",
        description:"Врач высшей категории, стаж 17 лет. Окончила Уральскую государственную медицинскую академию, ординатуру по дерматовенерологии. Соучредитель компании",
        imageSrc: FarinaYulia.src,
    },
    {
        name:"Берсенёв Денис Владиславович",
        post: "Хирург, Педиатр",
        description:"Окончил Уральский медицинский университет в 2018 году педиатрический факультет, ординатура по детской хирургии",
        imageSrc: BersenevDenis.src,
    },
    {
        name:"Филипов Игорь Юрьевич",
        post: "Психиатр",
        description:"Стаж работы более 25 лет. В 2000 году окончил Уральскую государственную медицинскую академию, прошел интернатуру по специализации психиатрия",
        imageSrc: FilipovIgor.src,
    },
    {
        name:"Поткин Максим Евгеньевич",
        post: "Детский хирург-уролог, дежурный врач",
        description:"Врач с 17-летним стажем, окончил Уральскую медакадемию (2007), интернатуру по детской хирургии, специализация по урологии (2014).",
        imageSrc: PotkinMaksim.src,
    },
    {
        name:"Попов Кирилл Сергеевич",
        post: "Дерматолог, Педиатр, Дежурный врач",
        description:"Окончил Уральскую государственную медицинскую академию",
        imageSrc: PopovKirill.src,
    },
    {
        name:"Корчёмкина Лилия Владиковна",
        post: "Врач педиатр",
        description:"Врач с более чем 10-летним стажем. Окончила Уральский медицинский университет (2015). Работала врачом скорой помощи в Екатеринбурге (2015–2019), с 2019 года — заведующая отделением неотложной помощи в крупной больнице.",
        imageSrc: KorchemkinaLilia.src,
    },
] 

export default STAFF_ITEMS