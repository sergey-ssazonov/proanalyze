import { Logo } from "@/src/shared/components/logo";
import { Flex } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full rounded-3xl bg-white p-12">
      <Logo className="mb-10 text-8xl" />

      <p className="mb-5 text-lg font-normal">Общество с ограниченной ответственностью «Аймед»</p>
      <Flex vertical gap={12} className="mb-5">
        <p className="text-lg font-normal leading-5">Адрес: г. Екатеринбург, мкрн. Светлый, д. 4</p>
        <p className="text-lg font-normal leading-5">ОГРН 1186658082973</p>
        <p className="text-lg font-normal leading-5">ИНН 6679119938</p>
        <p className="text-lg font-normal leading-5">КПП 667901001</p>
        <p className="text-lg font-normal leading-5">Лицензия: Л041-01021-66/00396056</p>
      </Flex>

      <ul className="mb-5 text-lg underline">
        <li>
          <Link
            href={"/legal"}
            className="duration-300 hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика конфиденциальности
          </Link>
        </li>
        <li>
          <Link
            href={"/legal"}
            className="duration-300 hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пользовательское соглашение
          </Link>
        </li>
        <li>
          <Link
            href={"/legal"}
            className="duration-300 hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            База знаний
          </Link>
        </li>
      </ul>

      <p className="mb-6 font-normal">
        По всем вопросам:{" "}
        <span className="underline">
          <Link
            href="mailto:support@proanalizy.ru"
            className="underline duration-300 hover:opacity-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            support@proanalizy.ru
          </Link>
        </span>
      </p>

      <p className="text-lg font-normal leading-5 text-grayText2">
        Онлайн - консультация не является аналогом медицинского приема, медицинского вмешательства
        и/или медицинской услугой, не может являться основанием для постановки диагноза , назначения
        медикаментов или плана лечения.
      </p>
    </footer>
  );
};

export default Footer;
