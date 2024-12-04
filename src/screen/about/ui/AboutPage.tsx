import { AboutClinicSection } from "@/src/features/about/aboutClinicSection";
import { AdvantagesSection } from "@/src/features/about/advantagesSection";
import { DecryptionSection } from "@/src/features/about/decryptionSection";
import { OnlineSection } from "@/src/features/about/onlineSection";
import { StaffSection } from "@/src/features/about/staffSection";
import { StatisticSection } from "@/src/features/about/statisticsSection";
import React, { FC } from "react";

const AboutPage: FC = () => {
  return (
    <div className="mb-16 flex flex-col gap-16 sm:mb-30 sm:gap-32">
      <AboutClinicSection />
      <AdvantagesSection />
      <StaffSection />
      <DecryptionSection />
      <StatisticSection />
      <OnlineSection />
    </div>
  );
};

export default AboutPage;
