import { CatalogSection } from "@/src/features/landing/catalogSection";
import { FaqSection } from "@/src/features/landing/faqSection";
import { PersonalizedSection } from "@/src/features/landing/personalizedSection";
import { PreviewSection } from "@/src/features/landing/previewSection";
import { Flex } from "antd";
import React, { FC } from "react";

const LandingPage: FC = () => {
  return (
    <Flex vertical gap={120} className="mb-30">
      <PreviewSection />
      <PersonalizedSection />
      <CatalogSection />
      <FaqSection />
    </Flex>
  );
};

export default LandingPage;
