import React from 'react';
import backgroundImage from '../../../assets/about-section/GET IN TOUCH WITH US.png';
import BackgroundImage from '../../shared/BackgroundImage';

const ContactHero = () => (
  <BackgroundImage 
    src={backgroundImage}
    data-header-theme="hero"
    className="relative overflow-hidden min-h-screen"
  >
  </BackgroundImage>
);

export default ContactHero;
