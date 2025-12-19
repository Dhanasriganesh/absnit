import React, { useEffect } from 'react';
import backgroundImage from '../../../assets/about-section/GET IN TOUCH WITH US.png';

const ContactHero = () => {
  // Preload hero image since it's above the fold
  useEffect(() => {
    if (typeof window !== 'undefined' && backgroundImage) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = backgroundImage;
      document.head.appendChild(link);
    }
  }, []);

  return (
  <section 
    data-header-theme="hero"
    className="relative overflow-hidden min-h-screen"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
  </section>
  );
};

export default ContactHero;
