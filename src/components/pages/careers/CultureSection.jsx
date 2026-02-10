import React from 'react';
import { motion } from 'framer-motion';

const cultureHighlights = [
  {
    title: 'Community guilds',
    description: 'Weekly guild sessions across design, data, engineering, and delivery to share experiments and level up together.',
  },
  {
    title: 'Impact weeks',
    description: 'Company-wide events where teams focus on social impact, sustainability, and pro-bono innovation challenges.',
  },
  {
    title: 'Transparent rituals',
    description: 'Quarterly business reviews, open-source decision logs, and AMA sessions with leadership.',
  },
];

const CultureSection = () => (
  <section className="relative overflow-hidden bg-white py-16 lg:py-24">
    {/* Advanced Animated Background */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] opacity-50"
      />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-red-600" />
          The Rituals
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
          People-first <span className="italic">rituals</span> that <br />
          spark <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Innovation</span>.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {cultureHighlights.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-10 rounded-[48px] bg-white border border-slate-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-blue-400 transition-all" />

            <div className="relative z-10">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8 group-hover:text-blue-600 transition-colors">
                Cultural Pilot
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-6 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">
                {item.description}
              </p>

              <div className="mt-10 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-slate-100 group-hover:bg-blue-600 group-hover:w-12 transition-all" />
                <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest group-hover:text-slate-900 transition-colors">Read more</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CultureSection;
