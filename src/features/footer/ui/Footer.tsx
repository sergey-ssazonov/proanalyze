import { Logo } from '@/src/shared/components/logo';
import { Button, Flex } from 'antd';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white  rounded-3xl p-12">
      <Logo className="text-8xl mb-10" />

      <p className="text-lg font-normal mb-5">
        Общество с ограниченной ответственностью «Аймед»
      </p>
      <Flex vertical gap={12} className="mb-5">
        <p className="text-lg font-normal leading-5">
          Адрес: г. Екатеринбург, мкрн. Светлый, д. 4
        </p>
        <p className="text-lg font-normal leading-5">ОГРН 1186658082973</p>
        <p className="text-lg font-normal leading-5">ИНН 6679119938</p>
        <p className="text-lg font-normal leading-5">КПП 667901001</p>
        <p className="text-lg font-normal leading-5">
          Лицензия: Л041-01021-66/00396056
        </p>
      </Flex>

      <ul className="text-lg underline mb-5">
        <li>
          <Link
            href={'/legal'}
            className="duration-300 hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Политика конфиденциальности
          </Link>
        </li>
        <li>
          <Link
            href={'/legal'}
            className="duration-300 hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пользовательское соглашение
          </Link>
        </li>
        <li >
          <Link
            href={'/legal'}
            className="duration-300 hover:opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            База знаний
          </Link>
        </li>
      </ul>

      <p className="mb-6 font-normal">
        По всем вопросам:{' '}
        <span className="underline">
          <Link
            href="mailto:support@proanalizy.ru"
            className="duration-300 underline hover:opacity-75"
            target="_blank"
            rel="noopener noreferrer"
          >
            support@proanalizy.ru
          </Link>
        </span>
      </p>

      <p className="text-grayText2 text-lg leading-5 font-normal">
        Онлайн - консультация не является аналогом медицинского приема,
        медицинского вмешательства и/или медицинской услугой, не может являться
        основанием для постановки диагноза , назначения медикаментов или плана
        лечения.
      </p>
    </footer>
  );
};

export default Footer;
