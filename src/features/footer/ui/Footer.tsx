import { Logo } from "@/src/shared/components/logo";
import { Flex } from "antd";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full rounded-3xl bg-white p-4 sm:p-12">
      <Logo className="mb-5 text-5xl sm:mb-10 sm:text-8xl" />

      <p className="mb-5 text-sm font-normal sm:text-lg">
        Общество с ограниченной ответственностью «Аймед»
      </p>
      <Flex vertical gap={12} className="mb-3 sm:mb-5">
        <p className="text-sm font-normal leading-4 sm:text-lg sm:leading-5">
          Адрес: г. Екатеринбург, мкрн. Светлый, д. 4
        </p>
        <p className="text-sm font-normal leading-4 sm:text-lg sm:leading-5">ОГРН 1186658082973</p>
        <p className="text-sm font-normal leading-4 sm:text-lg sm:leading-5">ИНН 6679119938</p>
        <p className="text-sm font-normal leading-4 sm:text-lg sm:leading-5">КПП 667901001</p>
        <p className="text-sm font-normal leading-4 sm:text-lg sm:leading-5">
          Лицензия: Л041-01021-66/00396056
        </p>
      </Flex>

      <ul className="mb-3 text-sm underline sm:mb-5 sm:text-lg">
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

      <p className="mb-4 text-sm font-normal sm:mb-6">
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

      <p className="text-sm font-normal leading-5 text-grayText2 sm:text-lg">
        Онлайн - консультация не является аналогом медицинского приема, медицинского вмешательства
        и/или медицинской услугой, не может являться основанием для постановки диагноза , назначения
        медикаментов или плана лечения.
      </p>
    </footer>
  );
};

export default Footer;
