import React from 'react';
import backgroundImage from '../../../assets/about-section/15.png';

const ContactHero = () => (
  <section 
    data-header-theme="hero"
    className="relative overflow-hidden min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
  </section>
);

export default ContactHero;
