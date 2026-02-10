import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Growth & Learning',
    description: 'Annual learning budget, guilds, mentorship programs, and quarterly hack weeks focused on experimentation.',
  },
  {
    title: 'Flexibility & Wellbeing',
    description: 'Remote-first with regional studios, flexible paid time off, wellness stipends, and inclusive benefits packages.',
  },
  {
    title: 'Impact & Ownership',
    description: 'Pod-based autonomy, exposure to global clients, and transparent career frameworks with shared success metrics.',
  },
];

const BenefitsSection = () => (
  <section className="relative overflow-hidden bg-white py-16 lg:py-24">
    {/* Background Accents */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px)`,
        backgroundSize: '40px 40px'
      }} />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-600" />
          The Reward
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
          Supporting your <span className="italic">whole</span> journey.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
              <span className="text-blue-600 font-bold text-xs">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">{benefit.title}</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              {benefit.description}
            </p>

            <div className="mt-8 pt-8 border-t border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Wellness First</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
