import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/10.webp';
import BackgroundImage from '../../shared/BackgroundImage';

const stats = [
  { label: 'AI builds delivered', value: '180+' },
  { label: 'Median launch', value: '6 wks' },
  { label: 'Reusable accelerators', value: '25' },
  { label: 'Cloud migrations', value: '140+' },
];

const signals = [
  'Product + data + engineering in one pod',
  'Launch, observe, and iterate — no handoffs',
  'Safety, privacy, and compliance baked in',
];

const floaters = [
  { top: '10%', left: '14%', size: 10, delay: 0, speed: 5.5 },
  { top: '18%', left: '70%', size: 12, delay: 0.3, speed: 6.5 },
  { top: '32%', left: '24%', size: 9, delay: 0.6, speed: 7 },
  { top: '42%', left: '52%', size: 8, delay: 1, speed: 5.8 },
  { top: '60%', left: '18%', size: 11, delay: 0.8, speed: 6.8 },
  { top: '64%', left: '74%', size: 13, delay: 0.1, speed: 7.3 },
  { top: '78%', left: '46%', size: 9, delay: 0.5, speed: 6.1 },
  { top: '26%', left: '88%', size: 8, delay: 1.2, speed: 5.6 },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28" data-header-theme="hero">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Mesh Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#f8fafc_0%,#ffffff_100%)]" />

        {/* Advanced Moving Orbs */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-48 right-1/4 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-[140px]"
        />

        {/* Dynamic Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(#1e40af 1px, transparent 1px), linear-gradient(90deg, #1e40af 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
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
                Our Solutions
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-8 leading-[1.1]">
                AI Built for <span className="italic">Production</span>, <br />
                Not just <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Prototypes</span>.
              </h1>
              <p className="text-base md:text-lg text-slate-600 mb-12 max-w-xl leading-relaxed">
                One embedded pod—product, design, data, and engineering—shipping with observability, guardrails, and accelerators so you move faster without breaking things.
              </p>

              <div className="flex flex-wrap gap-4">
                {signals.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="flex items-center gap-3 py-2 px-4 rounded-full bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700 hover:border-blue-200 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Side Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="p-8 rounded-[32px] bg-white border border-slate-100 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Proof of Delivery</p>

              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, idx) => (
                  <div key={stat.label} className="relative group">
                    <p className="text-2xl md:text-3xl font-light text-slate-900 mb-1">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-slate-50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Production Focused</p>
                    <p className="text-[10px] text-slate-500 italic">"Scaling from day zero."</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
