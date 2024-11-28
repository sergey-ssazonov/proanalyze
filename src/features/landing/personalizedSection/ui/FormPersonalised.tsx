'use client';

import { Button, Col, Flex, Form, Progress, Row, Select } from 'antd';
import React from 'react';
import {
  selectAgeOptions,
  selectDoctorOptions,
  selectGenderOptions,
  selectMensesOptions,
} from '../data/Form.data';
import { usePersonalizedModel } from '../model/PersonalizedModel';

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
      className="w-full h-vh80 bg-white  rounded-3xl flex flex-col justify-center items-center"
      onValuesChange={handleValuesChange}
    >
      <Flex vertical align="center" className="w-2/3">
        <h3 className="text-3xl mb-14 font-medium">Введите данные</h3>

        <div className="w-full mb-5">
          <span className="text-xl ">Заполнено</span>
          <Progress percent={formProgress} />
        </div>

        <Flex justify="space-between" className="mb-5 w-full">
          <span className="text-lg block mt-2">
            {formProgress >= 100
              ? 'Форма заполнена, нажмите "Получить перечень"'
              : nextStep}
          </span>
          <Button
            size="small"
            type="text"
            onClick={handleResetForm}
            style={{ visibility: isFormEmpty ? 'hidden' : 'visible' }}
          >
            Очистить форму
          </Button>
        </Flex>
        <Row className="h-auto w-full" gutter={[16, 16]}>
          <Col span={12} className="">
            <Form.Item
              name="gender"
              rules={[{ required: true, message: 'Укажите ваш пол' }]}
              noStyle
            >
              <Select
                size="large"
                virtual={false}
                placeholder="Ваш пол"
                options={selectGenderOptions}
                dropdownStyle={{
                  borderRadius: '8px',
                }}
                className="w-full"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="age"
              rules={[{ required: true, message: 'Укажите ваш возраст' }]}
              noStyle
            >
              <Select
                size="large"
                virtual={false}
                placeholder="Ваш возраст"
                options={selectAgeOptions}
                dropdownStyle={{
                  borderRadius: '8px',
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
                  message: 'Укажите к какому врачу планируете визит',
                },
              ]}
              noStyle
            >
              <Select
                size="large"
                virtual={false}
                placeholder="К какому врачу планируете визит?"
                options={selectDoctorOptions}
                dropdownStyle={{
                  borderRadius: '8px',
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
                    message: 'Укажите последний день менструации',
                  },
                ]}
                noStyle
              >
                <Select
                  size="large"
                  virtual={false}
                  placeholder="Последний день менструации"
                  options={selectMensesOptions}
                  dropdownStyle={{
                    borderRadius: '8px',
                  }}
                  className="w-full"
                />
              </Form.Item>
            </Col>
          )}
        </Row>
        <Form.Item shouldUpdate noStyle>
          <Button
            className="mt-14 w-fit"
            type="primary"
            size="large"
            shape="round"
            htmlType="submit"
          >
            Получить перечень
          </Button>
        </Form.Item>
      </Flex>
    </Form>
  );
};

export default FormPersonalized;
