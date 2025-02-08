import { Col, Form, FormInstance, Input, Select } from "antd";
import React, { FC } from "react";
import { SYMPTOMS_OPTIONS } from "../../data/Form.data";
import { FormNames } from "../../model/FormInterfaces";

const SymptomField: FC<{ form: FormInstance }> = ({ form }) => {
  const haveSymptoms = Form.useWatch(FormNames.haveSymptoms, form);

  return (
    <>
      <Col xs={24} lg={12}>
        <Form.Item
          name={FormNames.haveSymptoms}
          rules={[{ required: true, message: "Укажите ваш возраст" }]}
          style={{
            marginBottom: "0.5rem",
          }}
        >
          <Select
            size="large"
            virtual={false}
            placeholder="Есть ли жалобы / симптомы?"
            options={SYMPTOMS_OPTIONS}
            dropdownStyle={{
              borderRadius: "8px",
            }}
            className="w-full"
          />
        </Form.Item>
      </Col>

      {haveSymptoms && (
        <Col xs={24}>
          <Form.Item
            name={FormNames.symptoms}
            rules={[
              {
                required: true,
                message: "Напишите жалобы / симптомы",
              },
            ]}
            style={{
              marginBottom: "0.5rem",
            }}
          >
            <Input.TextArea
              rows={3}
              size="large"
              placeholder="Напишите жалобы / симптомы"
              className="w-full"
              style={{
                resize: "none",
              }}
            />
          </Form.Item>
        </Col>
      )}
    </>
  );
};

export default SymptomField;
