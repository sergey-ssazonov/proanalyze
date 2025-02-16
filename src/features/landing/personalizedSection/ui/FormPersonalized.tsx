"use client";

import { Button, Flex, Form, Progress, Row } from "antd";
import React, { FC, useEffect } from "react";
import { usePersonalizedModel } from "../model/PersonalizedModel";

import Loading from "@/app/loading";
import GenderSelect from "./formField/GenderSelect";
import AgeSelect from "./formField/AgeSelect";
import EmailField from "./formField/EmailField";
import SymptomField from "./formField/SymptomField";
import DoctorField from "./formField/DoctorField";
import { env } from "next-runtime-env";

const FormPersonalized: FC = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);

    if (typeof window !== "undefined") {
      console.log("API URL useRuntimeEnv:", env("NEXT_PUBLIC_API_URL"));
    }
  }, []);

  const {
    handleValuesFormChange,
    nextStep,
    formProgress,
    handleResetForm,
    handleSubmitForm,
    isFormEmpty,
    isPending,
  } = usePersonalizedModel(form);

  return (
    <Form
      layout="vertical"
      form={form}
      name="formPersonalized"
      className="relative flex w-full flex-col items-center justify-center rounded-2xl bg-blueBg"
      onValuesChange={handleValuesFormChange}
      onFinish={handleSubmitForm}
      initialValues={{ isEmailRequired: true }}
    >
      <div
        className={`absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-white bg-opacity-50 ${isPending ? "block" : "hidden"}`}
      >
        <Loading />
      </div>
      <div className="flex w-full flex-col items-center p-4 sm:w-2/3 sm:py-16">
        <h3 className="mb-7 w-full text-2xl sm:mb-14 sm:w-fit sm:text-3xl">Введите данные</h3>

        <div className="w-full sm:mb-5">
          <span className="text-xl">Заполнено</span>
          <Progress
            trailColor="#fff"
            percent={formProgress}
            aria-label={`Прогресс заполнения формы: ${formProgress}%`}
          />
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
        <Row
          className="h-auto w-full"
          gutter={[
            { sm: 0, md: 16 },
            { sm: 8, md: 10 },
          ]}
        >
          <GenderSelect />
          <AgeSelect />

          <DoctorField />

          <SymptomField form={form} />

          <EmailField form={form} />
        </Row>
        <Form.Item shouldUpdate noStyle>
          <Button
            className="mb-3 mt-10 w-full sm:mt-14 sm:w-fit"
            type="primary"
            size="large"
            shape="round"
            htmlType="submit"
          >
            Получить перечень
          </Button>
        </Form.Item>
        <h3 className="text-sm text-lightGray">Стоимость перечня анализов 150₽</h3>
      </div>
    </Form>
  );
};

export default FormPersonalized;
