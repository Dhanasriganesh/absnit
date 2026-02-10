import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Car, Palette, Eye, Code, Layers, Landmark, HeartPulse,
  Monitor, Cpu, Phone, Zap, Factory, Plane, Briefcase,
  GraduationCap, Building2, Shield, Box, ShoppingBag,
  Droplets, Hotel, Globe, Mic, Radio
} from 'lucide-react';

const industryList = [
  { title: 'Automobile & Mobility', icon: Car, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Product Design', icon: Palette, color: 'text-red-500', bg: 'bg-red-50' },
  { title: 'Smart Vision', icon: Eye, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { title: 'Web Development', icon: Code, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { title: 'Platform Integration', icon: Layers, color: 'text-purple-500', bg: 'bg-purple-50' },
  { title: 'Financial Services', icon: Landmark, color: 'text-amber-600', bg: 'bg-amber-50' },
  { title: 'Healthcare', icon: HeartPulse, color: 'text-rose-500', bg: 'bg-rose-50' },
  { title: 'Media & Entertainment', icon: Mic, color: 'text-sky-500', bg: 'bg-sky-50' },
  { title: 'Technology Enablement', icon: Cpu, color: 'text-slate-600', bg: 'bg-slate-50' },
  { title: 'Telecommunications', icon: Phone, color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: 'Energy & Utility', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { title: 'Industrial Products', icon: Factory, color: 'text-orange-600', bg: 'bg-orange-50' },
  { title: 'Transportation & Travel', icon: Plane, color: 'text-cyan-600', bg: 'bg-cyan-50' },
  { title: 'Banking & Finance', icon: Briefcase, color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { title: 'Education', icon: GraduationCap, color: 'text-violet-600', bg: 'bg-violet-50' },
  { title: 'Government', icon: Building2, color: 'text-slate-700', bg: 'bg-slate-50' },
  { title: 'Insurance', icon: Shield, color: 'text-blue-700', bg: 'bg-blue-50' },
  { title: 'Logistics', icon: Box, color: 'text-amber-700', bg: 'bg-amber-50' },
  { title: 'Retail & Consumer Goods', icon: ShoppingBag, color: 'text-pink-600', bg: 'bg-pink-50' },
  { title: 'Telecom & Media', icon: Radio, color: 'text-blue-400', bg: 'bg-blue-50' },
  { title: 'Oil & Gas', icon: Droplets, color: 'text-blue-800', bg: 'bg-blue-50' },
  { title: 'Travel & Hospitality', icon: Hotel, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Smart Cities', icon: Building2, color: 'text-indigo-400', bg: 'bg-indigo-50' },
  { title: 'E-commerce', icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50' },
];

const IndustriesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="industries"
      ref={ref}
      className="relative bg-white py-16 lg:py-24 overflow-hidden"
    >
      {/* Industry Lattice Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Cross-Hatch Grid */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: `
            linear-gradient(45deg, #475569 1px, transparent 1px),
            linear-gradient(-45deg, #475569 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />

        {/* Dynamic Vertical Accents */}
        <motion.div
          animate={{
            y: [-100, 100],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-[1px] h-64 bg-gradient-to-b from-transparent via-blue-600 to-transparent"
        />
        <motion.div
          animate={{
            y: [100, -100],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 left-1/3 w-[1px] h-64 bg-gradient-to-b from-transparent via-red-600 to-transparent"
        />

        {/* Soft Radial Gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(59,130,246,0.03)_0%,transparent_50%),radial-gradient(circle_at_100%_100%,rgba(239,68,68,0.03)_0%,transparent_50%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">Domain Depth</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Industries we <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">power</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 max-w-2xl mx-auto"
          >
            From mobility to media, every program is tailored with industry-specific playbooks, controls, and partners.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {industryList.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="group p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`p-3 rounded-xl ${industry.bg} ${industry.color} mb-3 transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                  <industry.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {industry.title}
                </h4>
                <div className="mt-4 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;

