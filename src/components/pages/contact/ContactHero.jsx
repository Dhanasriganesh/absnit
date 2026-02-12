import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import backgroundImage from '../../../assets/about-section/contactus.webp';

const contactStats = [
  { label: 'Global Response', value: '< 2hrs', icon: Mail },
  { label: 'Studio Network', value: '12+', icon: Globe },
  { label: 'Timezones', value: '24/7', icon: Phone },
  { label: 'HQ Presence', value: 'India', icon: MapPin },
];

const ContactHero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.6em] text-white flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-white/50" />
              Global Connection
              <span className="w-12 h-[1px] bg-white/50" />
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1] mb-12"
          >
            Let's build <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 font-normal">the future</span>, together.
          </motion.h1>

          {/* Metrics / Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl px-8 py-10 rounded-[48px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
          >
            {contactStats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-sm">
                  <stat.icon className="w-4 h-4 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-white tabular-nums">{stat.value}</p>
                  <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - absolute bottom */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30"
      >
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">Collaborate</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
      </motion.div>
    </section>
  );
};

export default ContactHero;
