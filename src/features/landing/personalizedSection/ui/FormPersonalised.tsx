'use client';

import { Button, Col, Flex, Form, Progress, Row, Select } from 'antd';
import React from 'react';
import {
  selectAgeOptions,
  selectDoctorOptions,
  selectGenderOptions,
} from '../data/Form.data';
import { usePersonalizedModel } from '../model/PersonalizedModel';

const FormPersonalized = () => {
  const { form, isFemale, handleValuesChange, formProgress } =
    usePersonalizedModel();

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

        <div className="w-full mb-10">
          <span className="text-xl ">Заполнено</span>
          <Progress percent={formProgress} />
          <span className="text-xl  ">
            Укажите пол
            {/* {formProgress < 25
            ? 'Укажите пол'
            : formProgress !== 100
              ? `${stepProgress}-й шаг из 3`
              : ''} */}
          </span>
        </div>

        {/* <Flex justify="end" className="mb-2 w-full">
        {!formIsEmpty ? (
          <Button
            disabled={loader}
            size="small"
            type="text"
            onClick={handleResetForm}
          >
            Очистить форму
          </Button>
        ) : (
          <div className="h-6" />
        )}
      </Flex> */}
        <Row className="h-auto w-full" gutter={[16, 16]}>
          <Col span={12} className="">
            <Form.Item name="gender" noStyle>
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
            <Form.Item name="age" noStyle>
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
            <Form.Item name="doctor" noStyle>
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
              <Form.Item name="menses_day" noStyle>
                <Select
                  size="large"
                  virtual={false}
                  placeholder="Последний день менструации"
                  options={selectDoctorOptions}
                  dropdownStyle={{
                    borderRadius: '8px',
                  }}
                  className="w-full"
                />
              </Form.Item>
            </Col>
          )}
        </Row>
        <Button
          className="mt-6 w-fit"
          type="primary"
          size="large"
          shape="round"
        >
          Получить перечень
        </Button>
      </Flex>
    </Form>
  );
};

export default FormPersonalized;
