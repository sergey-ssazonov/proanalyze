import { Flex } from "antd";
import React, { FC } from "react";
import FormPersonalized from "./FormPersonalised";

const PersonalizedSection: FC = () => {
  return (
    <section className="w-full bg-transparent">
      <Flex justify="space-between" className="mb-6 sm:mb-9">
        <h2 className="text-3xl sm:text-5xl">Быстрый подбор анализов</h2>
        <h3 className="hidden w-80 text-xl font-normal sm:static">
          Только ключевые показатели, без лишних назначений
        </h3>
      </Flex>
      <FormPersonalized />
    </section>
  );
};

export default PersonalizedSection;
