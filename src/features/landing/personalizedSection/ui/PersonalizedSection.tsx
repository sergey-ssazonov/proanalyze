import React, { FC } from "react";
import FormPersonalized from "./FormPersonalised";
import { TitleSection } from "@/src/shared/components/titleSection";

const PersonalizedSection: FC = () => {
  return (
    <section className="w-full bg-transparent">
      <TitleSection
        title="Индивидуальный подбор анализов"
        subTitle="Только ключевые показатели, без лишних назначений"
      />
      <FormPersonalized />
    </section>
  );
};

export default PersonalizedSection;
