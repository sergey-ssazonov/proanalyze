"use client";

import { Button, Col, Flex, Form, Progress, Row, Select } from "antd";
import React from "react";
import { AGE_OPTIONS, DOCTOR_OPTIONS, GENDER_OPTIONS, MENSES_OPTIONS } from "../data/Form.data";
import { usePersonalizedModel } from "../model/PersonalizedModel";

const FormPersonalized = () => {
  const {
    form,
    isFemale,
    handleValuesChange,
    nextStep,
    formProgress,
    handleResetForm,
    isFormEmpty,
  } = usePersonalizedModel();

  return (
    <Form
      layout="vertical"
      form={form}
      name="formPersonalized"
      className="flex h-vh80 w-full flex-col items-center justify-center rounded-3xl bg-white"
      onValuesChange={handleValuesChange}
    >
      <Flex vertical align="center" className="w-2/3">
        <h3 className="mb-14 text-3xl font-medium">Введите данные</h3>

        <div className="mb-5 w-full">
          <span className="text-xl">Заполнено</span>
          <Progress percent={formProgress} />
        </div>

        <Flex justify="space-between" className="mb-5 w-full">
          <span className="mt-2 block text-lg">
            {formProgress >= 100 ? 'Форма заполнена, нажмите "Получить перечень"' : nextStep}
          </span>
          <Button
            size="small"
            type="text"
            onClick={handleResetForm}
            style={{ visibility: isFormEmpty ? "hidden" : "visible" }}
          >
            Очистить форму
          </Button>
        </Flex>
        <Row className="h-auto w-full" gutter={[16, 10]}>
          <Col span={12} className="">
            <Form.Item
              name="gender"
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
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="age"
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
              />
            </Form.Item>
          </Col>
          <Col span={12}>
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
              <Select
                size="large"
                virtual={false}
                placeholder="К какому врачу планируете визит?"
                options={DOCTOR_OPTIONS}
                dropdownStyle={{
                  borderRadius: "8px",
                }}
                className="w-full"
              />
            </Form.Item>
          </Col>

          {isFemale && (
            <Col span={12}>
              <Form.Item
                name="menses_day"
                rules={[
                  {
                    required: true,
                    message: "Укажите последний день менструации",
                  },
                ]}
                style={{
                  marginBottom: "0.5rem",
                }}
              >
                <Select
                  size="large"
                  virtual={false}
                  placeholder="Последний день менструации"
                  options={MENSES_OPTIONS}
                  dropdownStyle={{
                    borderRadius: "8px",
                  }}
                  className="w-full"
                />
              </Form.Item>
            </Col>
          )}
        </Row>
        <Form.Item shouldUpdate noStyle>
          <Button
            className="mb-4 mt-14 w-fit"
            type="primary"
            size="large"
            shape="round"
            htmlType="submit"
          >
            Получить перечень
          </Button>
        </Form.Item>
        <h3 className="text-sm text-lightGray">Стоимость перечня анализов 150₽</h3>
      </Flex>
    </Form>
  );
};

export default FormPersonalized;

