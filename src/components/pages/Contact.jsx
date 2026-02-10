import React from 'react';
import ContactHero from './contact/ContactHero';
import ContactInfoSection from './contact/ContactInfoSection';
import SupportChannelsSection from './contact/SupportChannelsSection';
import ContactFormSection from './contact/ContactFormSection';

const Contact = () => {
  return (
    <div className="bg-white">
      <ContactHero />
      <ContactFormSection />
      <ContactInfoSection />
      <SupportChannelsSection />
    </div>
  );
};

export default Contact;
