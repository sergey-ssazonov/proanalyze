import { Logo } from "@/src/shared/components/logo";
import { Col, Row } from "antd";
import React, { FC } from "react";
import { FOOTER_ITEMS_CLIENTS, FOOTER_ITEMS_DOCS, FOOTER_ITEMS_DOCTORS } from "../data/Footer.data";
import Link from "next/link";
import { IFooterItem } from "../model/Footer";
import Image from "next/image";
import AlfaBankLogo from "@/public/images/landing/alfa-bank-logo.webp";

interface IOneSectionNavProps {
  labelSection: string;
  data: IFooterItem[];
}

const FooterLink: FC<IFooterItem> = ({ url, label }) => (
  <li>
    <Link
      href={url}
      className="text-sm duration-300 hover:opacity-60 sm:text-base"
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </Link>
  </li>
);

const OneSectionNav: FC<IOneSectionNavProps> = ({ labelSection, data }) => (
  <Col xs={24} md={8} lg={6}>
    <h3 className="mb-1 font-medium sm:mb-4 sm:text-xl">{labelSection}</h3>
    <ul>
      {data.map((item, index) => (
        <FooterLink key={index} label={item.label} url={item.url} />
      ))}
    </ul>
  </Col>
);

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-6 rounded-2xl bg-white p-4 sm:p-12">
      <nav>
        <Row gutter={[25, 25]}>
          <Col xs={24} md={8} lg={6}>
            <Logo className="mb-6 text-3xl sm:mb-11" />
            <h3 className="mb-1 font-medium sm:mb-4 sm:text-xl">Контакты</h3>
            <Link
              href="mailto:mail@imedsvetliy.ru"
              className="underline duration-300 hover:opacity-75"
              target="_blank"
              rel="noopener noreferrer"
            >
              mail@imedsvetliy.ru
            </Link>
          </Col>
          <OneSectionNav labelSection="Пользователям" data={FOOTER_ITEMS_CLIENTS} />
          <OneSectionNav labelSection="Врачам" data={FOOTER_ITEMS_DOCTORS} />
          <OneSectionNav labelSection="Документы" data={FOOTER_ITEMS_DOCS} />
        </Row>
      </nav>

      <div className="w-full border" />

      <div className="flex flex-col justify-between gap-6 sm:flex-row">
        <p className="text-sm font-normal text-lightGray2 sm:text-base">
          ООО &ldquo;АЙМЕД&rdquo;, все права защищены.
          <br /> ИНН: 6679119938, КПП: 667901001
          <br /> ул. ЯКУТСКАЯ, д. 10 - 25, г. ЕКАТЕРИНБУРГ
        </p>
        <Image src={AlfaBankLogo.src} width={115} height={40} alt="Альфа банк" className="h-10" />
      </div>
    </footer>
  );
};

export default Footer;
