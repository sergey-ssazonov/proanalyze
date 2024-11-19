import { PersonalizedSection } from '@/src/widgets/landing/personalizedSection';
import { PreviewSection } from '@/src/widgets/landing/previewSection';
import React, { FC } from 'react';

const LandingPage: FC = () => {
  return (
    <>
      <PreviewSection />
      <PersonalizedSection/>
    </>
  );
};

export default LandingPage;
