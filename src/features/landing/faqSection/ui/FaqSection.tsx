import Image from "next/image";
import React from "react";
import FaqImage from "@/public/images/landing/faq-image.png";
import CollapseFaq from "./CollapseFaq";
import { TitleSection } from "@/src/shared/components/titleSection";

const FaqSection = () => {
  return (
    <section className="w-full">
      <TitleSection title="Часто задаваемые вопросы " />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        <Image
          src={FaqImage.src}
          width={2000}
          height={2500}
          alt="Часто задаваемые вопросы"
          className="h-auto w-full rounded-2xl object-cover"
          loading="eager"
        />
        <CollapseFaq />
      </div>
    </section>
  );
};

export default FaqSection;
