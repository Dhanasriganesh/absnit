import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/14.webp';
import BackgroundImage from '../../shared/BackgroundImage';

const metrics = [
  { label: 'Studios worldwide', value: '6' },
  { label: 'Team members', value: '420+' },
  { label: 'Employee engagement', value: '82%' },
];

const signals = [
  'Hybrid-first: hubs + remote-friendly pods',
  'Learning budget, guilds, and mentorship',
  'Inclusive rituals and transparent growth paths',
];

const floaters = [
  { top: '12%', left: '16%', size: 10, delay: 0, speed: 5.5 },
  { top: '22%', left: '68%', size: 12, delay: 0.3, speed: 6.5 },
  { top: '34%', left: '28%', size: 9, delay: 0.6, speed: 7 },
  { top: '46%', left: '54%', size: 8, delay: 1, speed: 5.8 },
  { top: '60%', left: '20%', size: 11, delay: 0.8, speed: 6.8 },
  { top: '66%', left: '76%', size: 13, delay: 0.1, speed: 7.3 },
  { top: '78%', left: '46%', size: 9, delay: 0.5, speed: 6.1 },
  { top: '30%', left: '86%', size: 8, delay: 1.1, speed: 5.6 },
];

const CareersHero = () => (
  <section className="relative overflow-hidden bg-white py-20 lg:py-28" data-header-theme="hero">
    {/* Advanced Animated Background */}
    <div className="absolute inset-0 pointer-events-none">
      {/* Subtle Mesh Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#f8fafc_0%,#ffffff_100%)]" />

      {/* Moving Orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[140px]"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-48 right-1/4 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[120px]"
      />

      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              People & Culture
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-[1.1]">
              Join the <span className="italic">Pod</span> that ships <br />
              AI people can <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Trust</span>.
            </h1>
            <p className="text-base md:text-lg text-slate-600 mb-12 max-w-xl leading-relaxed">
              Cross-functional squads of designers, engineers, and researchers building products end-to-end—backed by growth, autonomy, and inclusive rituals.
            </p>

            <div className="flex flex-wrap gap-4">
              {signals.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3 py-2 px-4 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-widest text-slate-500 hover:border-blue-200 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Side Metrics Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-2"
        >
          <div className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-red-600" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Studio Vitality</p>

            <div className="space-y-8">
              {metrics.map((stat, idx) => (
                <div key={stat.label} className="relative group">
                  <div className="flex items-end justify-between mb-2">
                    <p className="text-3xl font-light text-slate-900">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                  <div className="h-[1px] w-full bg-slate-50 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.8 + idx * 0.2 }}
                      className="absolute top-0 left-0 h-full bg-slate-200"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Growth First</p>
                  <p className="text-[10px] text-slate-500 italic">"Scaling together."</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default CareersHero;
