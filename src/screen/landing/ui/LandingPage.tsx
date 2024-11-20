import { CatalogSection } from "@/src/widgets/landing/catalogSection";
import { PersonalizedSection } from "@/src/widgets/landing/personalizedSection";
import { PreviewSection } from "@/src/widgets/landing/previewSection";
import { Flex } from "antd";
import React, { FC } from "react";

const LandingPage: FC = () => {
  return (
    <Flex vertical gap={120}>
      <PreviewSection />
      <PersonalizedSection />
      <CatalogSection />
    </Flex>
  );
};

export default LandingPage;
