import React from 'react';
import ServicesHero from './services/ServicesHero';
import CapabilityMatrixSection from './services/CapabilityMatrixSection';
import EngagementModelsSection from './services/EngagementModelsSection';
import ProcessSection from './services/ProcessSection';
import CaseStudiesSection from './services/CaseStudiesSection';
import ServicesCTASection from './services/ServicesCTASection';
import ServiceDetailSections from './services/ServiceDetailSections';

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServiceDetailSections />
      <CapabilityMatrixSection />
      <EngagementModelsSection />
      <ProcessSection />
      <CaseStudiesSection />
      <ServicesCTASection />
    </div>
  );
};

export default Services;
