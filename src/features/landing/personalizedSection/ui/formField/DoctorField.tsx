import { Col, Form, Input } from "antd";
import React from "react";

const DoctorField = () => {
  return (
    <Col xs={24} lg={12}>
      <Form.Item
        name="doctor"
        rules={[
          {
            required: true,
            message: "Укажите врача",
          },
        ]}
        style={{
          marginBottom: "0.5rem",
        }}
      >
        <Input size="large" placeholder="К какому врачу планируете визит?" className="w-full" />
      </Form.Item>
    </Col>
  );
};

export default DoctorField;
