import { CatalogSection } from "@/src/features/landing/catalogSection";
import { FaqSection } from "@/src/features/landing/faqSection";
import { PersonalizedSection } from "@/src/features/landing/personalizedSection";
import { PreviewSection } from "@/src/features/landing/previewSection";
import React, { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div className="mb-16 flex flex-col gap-16 sm:mb-30 sm:gap-32">
      <PreviewSection />
      <PersonalizedSection />
      <CatalogSection />
      <FaqSection />
    </div>
  );
};

export default LandingPage;
