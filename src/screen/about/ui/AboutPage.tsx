import { AboutClinicSection } from "@/src/features/about/aboutClinicSection";
import { AdvantagesSection } from "@/src/features/about/advantagesSection";
import { DecryptionSection } from "@/src/features/about/decryptionSection";
import { StaffSection } from "@/src/features/about/staffSection";
import React, { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="mb-30 flex flex-col gap-16 sm:gap-32">
      <AboutClinicSection />
      <AdvantagesSection />
      <StaffSection />
      <DecryptionSection />
    </div>
  );
};

export default AboutPage;
