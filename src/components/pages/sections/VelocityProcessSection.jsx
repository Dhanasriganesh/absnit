import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Zap, BarChart, ArrowRight } from 'lucide-react';
import phasesImage from '../../../assets/home-section/phases.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const steps = [
  {
    phase: 'Discover',
    detail: 'Immersion, value modeling, and rapid concept validation to align executives and product teams.',
    icon: Search,
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    phase: 'Design',
    detail: 'Blueprint customer journeys, platform architectures, and AI guardrails with measurable hypotheses.',
    icon: PenTool,
    color: 'text-red-500',
    bg: 'bg-red-50'
  },
  {
    phase: 'Build',
    detail: 'Multidisciplinary pods ship increments with automated QA, telemetry, and enablement baked in.',
    icon: Zap,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    phase: 'Scale',
    detail: 'Launch kits, capability academies, and managed evolution ensure adoption and continuous improvement.',
    icon: BarChart,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50'
  },
];

const VelocityProcessSection = () => {
  return (
    <section className="relative py-16 lg:py-24 overflow-hidden bg-white">
      {/* Kinetic Velocity Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Rapid Horizontal Lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: '100% 40px',
          opacity: '0.2'
        }} />

        {/* Pulsing Accelerator Orbs */}
        <motion.div
          animate={{
            x: [-50, 50, -50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-blue-600 to-transparent shadow-[0_0_20px_blue]"
        />
        <motion.div
          animate={{
            x: [50, -50, 50],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent shadow-[0_0_20px_red]"
        />

        {/* Depth Fog */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-white" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Delivery Rhythm
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight"
          >
            Velocity without <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">sacrificing rigor</span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 h-full w-[1px] bg-slate-200 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`p-6 md:p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all h-full`}>
                    <p className={`text-xs font-black tracking-widest uppercase mb-3 ${step.color}`}>Phase 0{index + 1}</p>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">{step.phase}</h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {step.detail}
                    </p>
                  </div>
                </div>

                {/* Center Icon Node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-14 h-14 rounded-[1.25rem] ${step.bg} ${step.color} flex items-center justify-center shadow-lg border border-white`}
                  >
                    <step.icon className="w-6 h-6" />
                  </motion.div>
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 rounded-[1.25rem] ${step.bg} opacity-20 animate-ping -z-10`} />
                </div>

                {/* Empty Side for Grid Balance */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing CTA or Visual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 text-slate-400 font-bold text-sm tracking-widest uppercase hover:text-blue-600 transition-colors cursor-pointer group">
            <span>Our Approach in detail</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VelocityProcessSection;

