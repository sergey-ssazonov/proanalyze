import { Col, Form, Select } from "antd";
import React, { FC } from "react";
import { GENDER_OPTIONS } from "../../data/Form.data";
import { FormNames } from "../../model/FormInterfaces";

const GenderSelect: FC = () => {
  return (
    <Col xs={24} lg={12} className="w-full">
      <Form.Item
        name={FormNames.gender}
        rules={[{ required: true, message: "Укажите ваш пол" }]}
        style={{
          marginBottom: "0.5rem",
        }}
      >
        <Select
          size="large"
          virtual={false}
          placeholder="Ваш пол"
          options={GENDER_OPTIONS}
          dropdownStyle={{
            borderRadius: "8px",
          }}
          className="w-full"
          aria-label="Выберите ваш пол"
          aria-required="true"
        />
      </Form.Item>
    </Col>
  );
};

export default GenderSelect;
