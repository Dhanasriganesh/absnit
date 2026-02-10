import React from 'react';
import { motion } from 'framer-motion';
import buildImage from '../../../assets/home-section/build.webp';
import { Link } from 'react-router-dom';

const HomeCTASection = () => (
  <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
    {/* Final Impact Background */}
    <div className="absolute inset-0 pointer-events-none">
      {/* High-Contrast Dual Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        opacity: '0.5'
      }} />
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, #f1f5f9 1px, transparent 1px), linear-gradient(to bottom, #f1f5f9 1px, transparent 1px)`,
        backgroundSize: '160px 160px',
        opacity: '0.8'
      }} />

      {/* Moving Energy Converters */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-100/30 rounded-full blur-[100px]"
      />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-slate-100 bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden group"
      >
        {/* Subtle Gradient Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-red-600" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Let's build together</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Ready to design the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">next chapter</span> of your business?
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Kick off with a strategy sprint, AI co-creation workshop, or platform modernization plan. We'll tailor the first 90 days to your outcomes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <button className="px-8 py-4 rounded-xl bg-slate-900 text-white font-bold text-sm uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg shadow-slate-900/10">
                Start a Conversation
              </button>
            </Link>
            <Link to="/services">
              <button className="px-8 py-4 rounded-xl bg-white border border-slate-200 text-slate-900 font-bold text-sm uppercase tracking-widest hover:border-slate-300 transition-colors shadow-sm">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HomeCTASection;
