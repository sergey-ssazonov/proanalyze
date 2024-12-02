import Image from "next/image";
import React from "react";
import FaqImage from "@/public/images/landing/faq-image.png";
import CollapseFaq from "./CollapseFaq";

const FaqSection = () => {
  return (
    <section className="w-full">
      <h2 className="mb-9 text-5xl">Часто задаваемые вопросы </h2>
      <div className="grid grid-cols-2 gap-5">
        <Image
          src={FaqImage.src}
          width={2000}
          height={2500}
          alt="Часто задаваемые вопросы"
          className="h-auto w-full rounded-3xl object-cover"
          loading="eager"
        />
        <CollapseFaq />
      </div>
    </section>
  );
};

export default FaqSection;
