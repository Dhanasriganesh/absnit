import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/abt-hero.webp';
import BackgroundImage from '../../shared/BackgroundImage';

const stats = [
  { label: 'AI Launches', value: '320+' },
  { label: 'Avg Shipped', value: '6 Weeks' },
  { label: 'System Uptime', value: '99.9%' },
];

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28" data-header-theme="hero">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f8fafc_0%,#ffffff_100%)]" />

        {/* Advanced Moving Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-48 left-12 w-[600px] h-[600px] bg-red-400/10 rounded-full blur-[140px]"
        />

        {/* Dynamic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.4]" style={{
          backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              About ABSN IT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-[1.1]">
              Architecting the <span className="italic">Future</span> <br />
              of Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Intelligence</span>.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-12 max-w-2xl leading-relaxed">
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
                className="group relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-blue-600 group-hover:h-full transition-all duration-300" />
                <p className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
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
            className="inline-flex items-center gap-4 py-3 px-6 rounded-full bg-slate-50 border border-slate-200 text-slate-500 text-xs sm:text-sm italic"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            "Stable AI is a practice, not a handoff."
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
