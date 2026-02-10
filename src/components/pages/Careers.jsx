import React from 'react';
import CareersHero from './careers/CareersHero';
import BenefitsSection from './careers/BenefitsSection';
import OpenRolesSection from './careers/OpenRolesSection';
import CultureSection from './careers/CultureSection';
import ApplicationFormSection from './careers/ApplicationFormSection';

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">
      <CareersHero />
      <ApplicationFormSection />
      <BenefitsSection />
      {/* <OpenRolesSection /> */}
      <CultureSection />

    </div>
  );
};

export default Careers;
