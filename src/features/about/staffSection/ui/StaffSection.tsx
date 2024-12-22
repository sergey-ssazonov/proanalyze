import { Col, Row } from "antd";
import React, { FC } from "react";
import STAFF_ITEMS from "../data/Staff.data";
import PersonCard from "./PersonCard";
import { TitleSection } from "@/src/shared/components/titleSection";

const StaffSection: FC = () => {
  return (
    <section>
      <TitleSection title="Коллектив" />

      <Row gutter={[20, 20]}>
        {STAFF_ITEMS.map((person, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <PersonCard {...person} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default StaffSection;
