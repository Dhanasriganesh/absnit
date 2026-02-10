import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: 'Strategy & Advisory',
    description: 'Operating model design, value stream mapping, capability roadmaps, and responsible AI governance.',
    tags: ['AI strategy', 'Enterprise architecture', 'Value acceleration'],
  },
  {
    title: 'Digital Product & Experience',
    description: 'End-to-end product incubation combining research, UX, design systems, and experimentation frameworks.',
    tags: ['Service design', 'Product leadership', 'Growth experiments'],
  },
  {
    title: 'Data, AI & Automation',
    description: 'Modern data platforms, MLOps, GenAI copilots, and automation programs built with guardrails.',
    tags: ['Data fabric', 'Responsible AI', 'Intelligent automation'],
  },
  {
    title: 'Cloud & Platforms',
    description: 'Cloud native engineering, DevSecOps, platform reliability, and ecosystem integrations.',
    tags: ['Cloud transformation', 'Platform ops', 'APIs'],
  },
  {
    title: 'Talent & Enablement',
    description: 'Capability academies, change orchestration, and embedded pods that upskill teams while delivering value.',
    tags: ['Agile coaching', 'Academies', 'Embedded squads'],
  },
  {
    title: 'Managed Evolution',
    description: 'Run and optimize digital programs with continuous improvement, FinOps, and reliability SLAs.',
    tags: ['SRE', 'FinOps', 'Lifecycle support'],
  },
];

const CapabilityMatrixSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-50 opacity-40" />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]"
        />

        {/* Subtle Dots pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(#1e40af 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6">Execution Pillars</p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
            A unified service catalog for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal italic">high-velocity</span> teams.
          </h2>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500"
            >
              {/* Vertical Index Marker */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-12 bg-slate-100 group-hover:bg-blue-600 group-hover:h-20 transition-all duration-500" />

              <div className="mb-6">
                <span className="text-[10px] font-bold text-slate-300 group-hover:text-blue-200 transition-colors">0{index + 1}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-2">{capability.title}</h3>
              </div>

              <p className="text-sm text-slate-500 leading-relaxed mb-8">
                {capability.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {capability.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-600">
                    #{tag.replace(/\s+/g, '')}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrixSection;
