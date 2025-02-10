import { CatalogSection } from "@/src/features/landing/catalogSection";
import { FaqSection } from "@/src/features/landing/faqSection";
import { PersonalizedSection } from "@/src/features/landing/personalizedSection";
import { PreviewSection } from "@/src/features/landing/previewSection";
import { ReviewSection } from "@/src/features/landing/reviewSection";
import { PageUpButton } from "@/src/shared/components/buttons/pageUpButton";
import React, { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div className="flex flex-col gap-16 sm:gap-32">
      <PageUpButton />

      <PreviewSection />
      <PersonalizedSection />
      <CatalogSection />
      <FaqSection />
      <ReviewSection />
    </div>
  );
};

export default LandingPage;
