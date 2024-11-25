import Image from 'next/image';
import React from 'react';
import FaqImage from '@/public/images/faq-image.png';
import CollapseFaq from './CollapseFaq';


const FaqSection = () => {
  return (
    <section className="w-full h-vh80">
      <h2 className="text-5xl mb-9">Часто задаваемые вопросы </h2>
      <div className='grid grid-cols-2 gap-5'>
        <Image
          src={FaqImage.src}
          width={2000}
          height={2500} 
          alt="Часто задаваемые вопросы"
          className="rounded-3xl object-cover w-full h-auto"
          loading="eager"
        />
        <CollapseFaq/>
      </div>
    </section>
  );
};

export default FaqSection;
