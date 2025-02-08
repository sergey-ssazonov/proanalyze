import { Logo } from "@/src/shared/components/logo";
import { Col, Row } from "antd";
import React, { FC } from "react";
import { FOOTER_ITEMS_DOCS } from "../data/Footer.data";
import Link from "next/link";
import INavigationItem from "@/src/shared/types/navigation";
import { NAVIGATION_ITEMS_USER } from "../../header";
import AlfaBank from "./AlfaBank";
import { IFooterItem } from "../model/Footer";

interface IOneSectionNavProps {
  labelSection: string;
  data: INavigationItem[];
}

const FooterLink: FC<IFooterItem> = ({ url, label, rel, target }) => (
  <li>
    <Link
      href={url}
      className="text-sm duration-300 hover:opacity-60 sm:text-base"
      target={target}
      rel={rel}
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
        <FooterLink key={index} {...item} />
      ))}
    </ul>
  </Col>
);

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mt-16 flex w-full flex-col gap-6 rounded-2xl bg-white p-4 sm:p-12"
    >
      <nav>
        <Row gutter={[25, 25]}>
          <Col xs={24} md={8} lg={6}>
            <Logo className="mb-6 text-3xl sm:mb-11" />
            <h3 className="mb-1 font-medium sm:mb-4 sm:text-xl">Контакты</h3>
            <span className="block">По всем вопросам:</span>
            <a href="mailto:support@proanalizy.ru" target="_blank" rel="noopener noreferrer">
              support@proanalizy.ru
            </a>
          </Col>
          <OneSectionNav labelSection="Пользователям" data={NAVIGATION_ITEMS_USER} />
          <OneSectionNav labelSection="Документы" data={FOOTER_ITEMS_DOCS} />
        </Row>
      </nav>

      <div className="w-full border" />

      <div className="flex justify-between gap-6 max-sm:flex-col sm:items-center">
        <div>
          <p className="text-sm font-normal text-lightGray2 sm:text-base">
            ООО &ldquo;АЙМЕД&rdquo;, все права защищены.
            <br /> ИНН: 6679119938, КПП: 667901001
            <br /> ул. ЯКУТСКАЯ, д. 10 - 25, г. ЕКАТЕРИНБУРГ
          </p>
          <p className="mt-3 text-sm font-normal text-lightGray2 sm:w-1/2 sm:text-base">
            Онлайн - консультация не является аналогом медицинского приема, медицинского
            вмешательства и/или медицинской услугой, не может являться основанием для постановки
            диагноза, назначения медикаментов или плана лечения.
          </p>
        </div>
        <AlfaBank />
      </div>
    </footer>
  );
};

export default Footer;
