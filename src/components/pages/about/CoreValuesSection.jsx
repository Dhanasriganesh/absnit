import React from 'react';
import { motion } from 'framer-motion';
import valuesImage from '../../../assets/about-section/core.webp';
import teamworkImage from '../../../assets/banners/webbanner.webp';
import integrityImage from '../../../assets/about-section/int.webp';
import innovationImage from '../../../assets/about-section/invent.webp';
import peopleImage from '../../../assets/about-section/elevate.webp';
import outcomesImage from '../../../assets/banners/sponsership.webp';
import sustainabilityImage from '../../../assets/banners/mediabanner.webp';
import partnershipImage from '../../../assets/about-section/partnership.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const values = [
  {
    title: 'Integrity in Action',
    description: 'We operate with radical transparency - clarity in scope, inclusive decision making, and accountable delivery.',
    image: integrityImage,
  },
  {
    title: 'Invent Boldly',
    description: 'Curiosity drives us. We prototype early, test quickly, and shape new playbooks informed by data and empathy.',
    image: innovationImage,
  },
  {
    title: 'Elevate People',
    description: 'We invest in talent mobility, mentorship, and equitable opportunities so multidisciplinary teams thrive.',
    image: peopleImage,
  },
  {
    title: 'Outcomes over Output',
    description: 'Success is measured by business impact, adoption, and cultural readiness - not just code shipped.',
    image: outcomesImage,
  },
  {
    title: 'Sustainable Delivery',
    description: 'From responsible AI guardrails to carbon-aware architectures, we build solutions that last.',
    image: sustainabilityImage,
  },
  {
    title: 'Partnership Mindset',
    description: 'We co-create with clients, blending our expertise with their domain depth for shared success.',
    image: partnershipImage,
  },
];

const CoreValuesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Dynamic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-50 opacity-40" />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03)_0%,transparent_70%)]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6">Foundational Pillars</p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
            Principles that guide every <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal italic">engagement</span>.
          </h2>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              {/* Subtle Icon/Number */}
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                  <span className="text-sm font-bold tracking-tighter">V{index + 1}</span>
                </div>
                <div className="h-[1px] flex-1 bg-slate-100 mx-4" />
                <div className="w-2 h-2 rounded-full bg-red-600 opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {value.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>

              {/* Advanced Link (Subtle) */}
              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                Read More
                <div className="w-4 h-[1px] bg-slate-300 group-hover:bg-slate-900 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;
