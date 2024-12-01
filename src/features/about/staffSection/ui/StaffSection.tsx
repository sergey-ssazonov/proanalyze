import { Col, Row } from "antd";
import React, { FC } from "react";
import STAFF_ITEMS from "../data/Staff.data";
import PersonCard from "./PersonCard";

const StaffSection: FC = () => {
  return (
    <section>
      <h2 className="sm:mb-9 mb-6 w-2/3 text-5xl">Коллектив</h2>
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
