import React from 'react';
import { motion } from 'framer-motion';

const models = [
  {
    title: 'Advisory Sprints',
    description: 'Two to four week intensives to align leadership, quantify value, and provide a prioritized roadmap.',
    outcomes: ['North-star architecture', 'Investable business case', 'Operating model blueprint'],
  },
  {
    title: 'Integrated Pods',
    description: 'Cross-functional squads embedded with your teams to deliver products, AI copilots, or platform upgrades.',
    outcomes: ['Joint OKRs', 'Design + build + change expertise', 'Weekly value demos'],
  },
  {
    title: 'Managed Programs',
    description: 'Longer-term run + optimize partnerships with transparent KPIs and governance cadences.',
    outcomes: ['SLO management', 'Continuous experimentation', 'Capability uplift'],
  },
];

const EngagementModelsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Connection Flow Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="dot-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#1e40af" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-600" />
              Engagement Models
            </p>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
              Partnership levels <span className="italic">designed</span> to fit your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">pace</span>.
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-8">
              We flex between strategic advisory, outcome-based pods, and managed services. Every model anchors to measurable outcomes with joint governance.
            </p>
          </div>

          <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-6">Our Commitments</p>
            <ul className="space-y-4">
              {[
                'Transparent backlog and decision logs',
                'Integrated change and enablement plans',
                'Shared metrics and weekly value reviews'
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5" />
                  <span className="text-xs font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-blue-100 hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-4">{model.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-8 h-12">
                {model.description}
              </p>

              <div className="space-y-3">
                {model.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 py-2 px-4 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-medium text-slate-600 group-hover:bg-white transition-colors">
                    <span className="w-1 h-1 rounded-full bg-blue-600" />
                    {outcome}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModelsSection;
