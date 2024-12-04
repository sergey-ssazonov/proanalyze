import Image from "next/image";
import React from "react";
import FaqImage from "@/public/images/landing/faq-image.png";
import CollapseFaq from "./CollapseFaq";

const FaqSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-6 text-3xl sm:mb-9 sm:text-5xl">Часто задаваемые вопросы </h2>
      <div className="grid  grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <Image
          src={FaqImage.src}
          width={2000}
          height={2500}
          alt="Часто задаваемые вопросы"
          className="h-auto w-full rounded-3xl object-cover order-2 sm:order-1"
          loading="eager"
        />
        <CollapseFaq />
      </div>
    </section>
  );
};

export default FaqSection;
