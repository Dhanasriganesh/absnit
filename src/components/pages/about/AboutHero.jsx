import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/about.webp';

const stats = [
  { label: 'AI Launches', value: '320+' },
  { label: 'Avg Shipped', value: '6 Weeks' },
  { label: 'System Uptime', value: '99.9%' },
];

const AboutHero = () => {
  return (
    <section 
      className="relative overflow-hidden py-20 lg:py-28 min-h-screen flex items-center" 
      data-header-theme="hero"
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
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white" />
              About ABSN IT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.1]">
              Architecting the <span className="italic">Future</span> <br />
              of Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 font-normal">Intelligence</span>.
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-12 max-w-2xl leading-relaxed">
              We are a collective of engineers, designers, and strategists dedicated to bridging the gap between complexity and human-centric outcomes.
            </p>
          </motion.div>

          {/* Minimal Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-xl hover:border-white/40 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-white group-hover:h-full transition-all duration-300" />
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Floating Quote Block */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="inline-flex items-center gap-4 py-3 px-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm italic"
          >
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            "Stable AI is a practice, not a handoff."
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
