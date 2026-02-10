import React from 'react';
import { motion } from 'framer-motion';

const details = [
  {
    name: 'Product Design',
    focus: 'Customer and employee experiences',
    deliverables: ['Vision sprints + prototypes', 'Multi-channel design systems', 'Experimentation + analytics rituals'],
    quote: 'The ABSN IT design guild rebuilt our product strategy and design ops in 10 weeks.',
  },
  {
    name: 'Smart Vision',
    focus: 'Edge-to-cloud intelligence',
    deliverables: ['Sensor strategy + labeling ops', 'MLOps pipelines + monitors', 'Integration with OT and safety systems'],
    quote: 'We moved from pilot to 600+ active cameras with measurable compliance wins.',
  },
  {
    name: 'Web Development',
    focus: 'Growth-ready web platforms',
    deliverables: ['Composable front-ends + CMS', 'Performance + accessibility tuning', 'Growth experiments + SEO playbooks'],
    quote: 'Site speed doubled and conversion lifted 28% within two quarters.',
  },
  {
    name: 'Platform Integration',
    focus: 'Unified ecosystems',
    deliverables: ['API marketplaces', 'Workflow orchestration', 'Partner onboarding accelerators'],
    quote: 'Our legacy and SaaS stack now feels like one cohesive platform.',
  },
  {
    name: 'Tech Solutions',
    focus: 'Modern engineering + automation',
    deliverables: ['Product + platform squads', 'Automation control towers', 'Runbooks, enablement, and managed evolution'],
    quote: 'We gained 5 times release cadence with full observability.',
  },
];

const IndustryDetailPanels = () => (
  <section className="relative overflow-hidden bg-white py-16 lg:py-24">
    {/* Background Pattern */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <pattern id="pods-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#1e40af" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pods-pattern)" />
      </svg>
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-red-600" />
          Delivery Pods
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
          Specialized pods for <span className="italic">domain-specific</span> outcomes.
        </h2>
      </div>

      <div className="space-y-6">
        {details.map((detail, index) => (
          <motion.div
            key={detail.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col gap-12 rounded-[40px] bg-slate-50 border border-slate-100 p-8 md:p-12 hover:bg-white hover:shadow-2xl transition-all duration-500 lg:flex-row items-center"
          >
            {/* Left Column: Context */}
            <div className="lg:w-1/3">
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.4em] block mb-4">
                {detail.name}
              </span>
              <h3 className="text-2xl font-light text-slate-900 mb-6 leading-tight">
                {detail.focus}
              </h3>
              <p className="text-xs text-slate-500 italic leading-relaxed">
                "{detail.quote}"
              </p>
            </div>

            {/* Right Column: Execution */}
            <div className="flex-1 grid md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-6">Execution Deliverables</p>
              </div>
              {detail.deliverables.map((item) => (
                <div key={item} className="p-6 rounded-3xl bg-white border border-slate-100 group-hover:bg-slate-50 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-blue-600 mt-2" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">{item}</span>
                  </div>
                </div>
              ))}

              {/* Visual Indicator */}
              <div className="col-span-2 md:col-span-1 p-6 rounded-3xl bg-slate-900 text-white flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Status</p>
                  <p className="text-xs font-medium">Production Ready</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustryDetailPanels;
