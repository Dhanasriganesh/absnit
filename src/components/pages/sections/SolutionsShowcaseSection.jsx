import React from 'react';
import { motion } from 'framer-motion';
import { Search, Rocket, Network, Activity, ArrowUpRight } from 'lucide-react';
import solutionsImage from '../../../assets/home-section/solutions.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const solutions = [
  {
    title: 'Customer Blueprinting',
    description: 'Full-funnel research, journey orchestration, and service blueprinting to unlock new value pools.',
    tags: ['Research', 'Service Design', 'Experimentation'],
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    title: 'AI Copilot Studio',
    description: 'Rapid ideation, guardrail design, and deployment of trustworthy AI copilots for every team.',
    tags: ['GenAI', 'Safety', 'Enablement'],
    icon: Rocket,
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    title: 'Modern Platform Fabric',
    description: 'Composable architectures, API ecosystems, and automation that connect legacy and cloud.',
    tags: ['Platforms', 'Integration', 'Automation'],
    icon: Network,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    title: 'Intelligent Operations',
    description: 'Telemetry-driven ops, FinOps, and continuous improvement programs keeping releases fast and safe.',
    tags: ['SRE', 'FinOps', 'Observability'],
    icon: Activity,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
];

const SolutionsShowcaseSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Solution Patterns
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Modular offerings built to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">plug into your roadmap</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-600 max-w-3xl mx-auto"
          >
            Select exactly what you need—strategy sprints, platform pods, AI accelerators, or managed evolution. Every capability is composable.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-2xl ${solution.bg} ${solution.color} transition-transform duration-500 group-hover:scale-110`}>
                    <solution.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-black text-slate-200 tracking-tighter text-2xl leading-none">0{index + 1}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {solution.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  {solution.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {solution.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-500 group-hover:bg-white group-hover:border-blue-100 group-hover:text-blue-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest group-hover:text-red-600 transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

              {/* Decorative side accent */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-blue-600 to-red-600 rounded-l-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcaseSection;

