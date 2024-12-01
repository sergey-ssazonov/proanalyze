import { Flex } from "antd";
import React, { FC } from "react";
import FormPersonalized from "./FormPersonalised";

const PersonalizedSection: FC = () => {
  return (
    <section className="w-full bg-transparent">
      <Flex justify="space-between" className="mb-9">
        <h2 className="text-5xl">Быстрый подбор анализов</h2>
        <h3 className="text-xl font-normal w-80">
          Только ключевые показатели, без лишних назначений
        </h3>
      </Flex>
      <FormPersonalized />
    </section>
  );
};

export default PersonalizedSection;
