import { Col, Form, Select } from "antd";
import React, { FC } from "react";
import { AGE_OPTIONS } from "../../data/Form.data";
import { FormNames } from "../../model/FormInterfaces";

const AgeSelect: FC = () => {
  return (
    <Col xs={24} lg={12}>
      <Form.Item
        name={FormNames.age}
        rules={[{ required: true, message: "Укажите ваш возраст" }]}
        style={{
          marginBottom: "0.5rem",
        }}
      >
        <Select
          size="large"
          virtual={false}
          placeholder="Ваш возраст"
          options={AGE_OPTIONS}
          dropdownStyle={{
            borderRadius: "8px",
          }}
          className="w-full"
          aria-label="Выберите ваш возраст"
          aria-required="true"
        />
      </Form.Item>
    </Col>
  );
};

export default AgeSelect;
