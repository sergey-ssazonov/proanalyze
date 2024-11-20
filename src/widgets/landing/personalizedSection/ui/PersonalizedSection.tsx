import { Flex, Form } from "antd";
import React, { FC } from "react";

const PersonalizedSection: FC = () => {
  return (
    <section className="w-full bg-transparent">
      <Flex justify="space-between" className="mb-9">
        <h2 className="text-5xl">Быстрый подбор анализов </h2>
        <h3 className="text-xl font-normal w-80">
          Только ключевые показатели, без лишних назначений
        </h3>
      </Flex>
      <Form className="w-full h-vh80 bg-white  rounded-3xl"></Form>
    </section>
  );
};

export default PersonalizedSection;
