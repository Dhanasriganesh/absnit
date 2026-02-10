import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import backgroundImage from '../../../assets/about-section/GET IN TOUCH WITH US.webp';

const contactStats = [
  { label: 'Global Response', value: '< 2hrs', icon: Mail },
  { label: 'Studio Network', value: '12+', icon: Globe },
  { label: 'Timezones', value: '24/7', icon: Phone },
  { label: 'HQ Presence', value: 'Singapore', icon: MapPin },
];

const ContactHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Contact Us"
          className="w-full h-full object-cover opacity-[0.07] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* Advanced Animated Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dynamic Dual Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          opacity: '0.4'
        }} />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #f1f5f9 1px, transparent 1px),
            linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
          opacity: '0.2'
        }} />

        {/* Moving Lens Flare / Orb */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-red-50/50 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 120, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-[140px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.6em] text-red-600 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-red-600/30" />
              Global Connection
              <span className="w-12 h-[1px] bg-red-600/30" />
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-[1.1] mb-12"
          >
            Let's build <br />
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">the future</span>, together.
          </motion.h1>

          {/* Metrics / Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-5xl px-8 py-10 rounded-[48px] bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl shadow-slate-200/50"
          >
            {contactStats.map((stat, index) => (
              <div key={stat.label} className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <stat.icon className="w-4 h-4 text-slate-600" />
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-slate-900 tabular-nums">{stat.value}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
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
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Collaborate</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>
  );
};

export default ContactHero;
