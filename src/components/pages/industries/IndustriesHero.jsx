import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../../../assets/about-section/industries.webp';

const stats = [
  { label: 'Industry pods shipped', value: '120+' },
  { label: 'Markets covered', value: '18' },
  { label: 'Avg. uplift', value: '24%' },
];

const IndustriesHero = () => (
  <section 
    className="relative overflow-hidden min-h-screen flex items-center py-20 lg:py-28" 
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
      <div className="grid lg:grid-cols-5 gap-16 items-center">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-white" />
              Custom Playbooks
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 leading-[1.1]">
              Industry-Grade <span className="italic">Execution</span>, <br />
              at Startup <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400 font-normal">Velocity</span>.
            </h1>
            <p className="text-base md:text-lg text-white/90 mb-12 max-w-xl leading-relaxed">
              We build with the nuance of your vertical and the rigor of production-scale engineering. No generic solutions—only targeted impact.
            </p>

            <div className="flex flex-wrap gap-4">
              {['Fintech', 'HealthTech', 'Automotive', 'Logistics', 'Energy'].map((item, idx) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-3 py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white/90 hover:border-white/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
          <div className="p-8 rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 to-red-400" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/70 mb-10">Proof of Impact</p>

            <div className="space-y-8">
              {stats.map((stat, idx) => (
                <div key={stat.label} className="relative group">
                  <div className="flex items-end justify-between mb-2">
                    <p className="text-3xl font-light text-white">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-white/70 group-hover:text-white transition-colors">
                      {stat.label}
                    </p>
                  </div>
                  <div className="h-[1px] w-full bg-white/20 relative">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.8 + idx * 0.2 }}
                      className="absolute top-0 left-0 h-full bg-white/50"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest">Vertically Integrated</p>
                  <p className="text-[10px] text-white/70 italic">"Scaling domain expertise."</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IndustriesHero;
