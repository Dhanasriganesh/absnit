import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    industry: 'Retail & Consumer',
    headline: 'AI-driven forecasting trims inventory costs by 19%',
    summary: 'Partnered with a global retailer to build a unified data fabric, predictive demand models, and store associate copilots.',
    impact: ['8 week pilot to nationwide rollout', '35k associates enabled', '$50M working capital unlocked'],
  },
  {
    industry: 'Healthcare',
    headline: 'Virtual care platform expands access across 42 hospitals',
    summary: 'Designed patient journeys, integrated EHR APIs, and implemented remote monitoring with clinician insights.',
    impact: ['NPS up 23 points', '82% clinician adoption', 'Launch in 6 months'],
  },
  {
    industry: 'Energy & Utilities',
    headline: 'Automation control tower saves 1.2M field hours',
    summary: 'Built a secure automation platform with digital twins, workflow orchestration, and workforce enablement programs.',
    impact: ['90 day roadmap to production', '5 times more releases', 'Enterprise academy for 600 employees'],
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Subtle Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-600" />
            Outcome Proof
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
            Realized value for our <span className="italic">partners</span>. <br />
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Scale</span>.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Every story is co-authored. We share playbooks, embed teams, and leave behind systems clients can grow without us.
          </p>
        </div>

        {/* Dense Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.headline}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[40px] bg-white border border-slate-100 hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Industry Badge */}
              <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-6 py-1 px-3 rounded-full bg-blue-50 border border-blue-100">
                {item.industry}
              </span>

              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                {item.headline}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed mb-8 h-20">
                {item.summary}
              </p>

              <div className="pt-8 border-t border-slate-50">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6">Key Impacts</p>
                <div className="space-y-4">
                  {item.impact.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <span className="w-1 h-1 rounded-full bg-blue-600 group-hover:bg-white transition-colors" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
