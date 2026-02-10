import React from 'react';
import { motion } from 'framer-motion';

const ecosystem = [
  {
    title: 'Research & Insight Labs',
    description: 'Trend scanning, ethnography, and data partnerships that keep us plugged into changing behaviors.',
  },
  {
    title: 'Technology Alliances',
    description: 'Deep partnerships with hyperscalers, design platforms, and AI innovators to accelerate delivery.',
  },
  {
    title: 'Regulatory & Compliance Network',
    description: 'Advisors covering healthcare, finance, retail, manufacturing, automotive, and public sector guardrails.',
  },
];

const stats = [
  { label: 'Industry advisors', value: '40+' },
  { label: 'Co-innovation partners', value: '25' },
  { label: 'Joint accelerators', value: '18' },
];

const IndustryEcosystemSection = () => (
  <section className="relative overflow-hidden bg-white py-16 lg:py-24">
    {/* Subtle Mesh Background */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[140px]"
      />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left: Ecosystem Context */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-600" />
            Partner Network
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
            Expertise <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Surrounding</span> <br />
            Every Engagement.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-12 max-w-xl">
            We collaborate with hyperscalers, research labs, and regulatory advisors to ensure your solution is built on a foundation of industry excellence.
          </p>

          <div className="space-y-4">
            {ecosystem.map((item) => (
              <div key={item.title} className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-500">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Stats & Impact */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:sticky lg:top-32"
        >
          <div className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-red-600" />
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Network Scale</p>

            <div className="space-y-10">
              {stats.map((stat) => (
                <div key={stat.label} className="group">
                  <p className="text-4xl font-light text-slate-900 mb-2">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 group-hover:text-blue-600 transition-colors">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-10 border-t border-slate-50">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Global Reach</p>
                  <p className="text-[10px] text-slate-500 italic">"Connected ecosystems."</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default IndustryEcosystemSection;
