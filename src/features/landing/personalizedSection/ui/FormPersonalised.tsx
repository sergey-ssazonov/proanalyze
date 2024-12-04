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
      className="flex w-full flex-col items-center justify-center rounded-3xl bg-white sm:h-vh80"
      onValuesChange={handleValuesChange}
    >
      <Flex vertical align="center" className="w-full p-4 sm:w-2/3 sm:p-0">
        <h3 className="mb-7 w-full text-2xl sm:mb-14 sm:w-fit sm:text-3xl">Введите данные</h3>

        <div className="w-full sm:mb-5">
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
            className="mt-2 sm:mt-0"
          >
            Очистить форму
          </Button>
        </Flex>
        <Row className="h-auto w-full" gutter={[{sm:0, md:16}, {sm:8, md:10}]}>
          <Col xs={24} lg={12} className="w-full">
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
          <Col xs={24} lg={12}>
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
            <Col xs={24} lg={12}>
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
            className="mb-4 mt-10 w-full sm:mt-14 sm:w-fit"
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
