import React from 'react';
import { motion } from 'framer-motion';
import missionImage from '../../../assets/banners/cloudbanner.webp';
import visionImage from '../../../assets/banners/databanner.webp';
import promiseImage from '../../../assets/banners/devopsbanner.webp';
import featuredImage from '../../../assets/ppl/girl2.webp';
import whyImage from '../../../assets/about-section/why.webp';
import SkeletonImage from '../../shared/SkeletonImage';
const pillars = [
  {
    title: 'Mission',
    description:
      'Engineer trustworthy AI and digital ecosystems that amplify human decision-making, accelerate innovation, and drive resilient growth for our clients.',
    highlights: ['Strategy, product, and delivery under one roof', 'Outcome-focused agile governance'],
    image: missionImage,
  },
  {
    title: 'Vision',
    description:
      'Be the partner enterprises trust to navigate every wave of technological disruption with purpose, clarity, and measurable impact.',
    highlights: ['Industry blueprints for faster execution', 'Embedded change enablement'],
    image: visionImage,
  },
  {
    title: 'Promise',
    description:
      'Design experiences people love, platforms teams can scale, and cultures empowered to continuously learn.',
    highlights: ['Inclusive collaboration rituals', 'Transparent impact metrics'],
    image: promiseImage,
  },
];

const MissionVisionSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -left-12 w-96 h-96 bg-blue-100/30 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 -right-12 w-96 h-96 bg-red-100/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        {/* Intro */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-4 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Our Purpose
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-6">
            Beyond delivering software, we build adaptive operating models where <span className="font-normal italic">innovation</span> is constant.
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
            Success isn't just about the code shipped; it's about the cultural readiness and business impact we co-create with every partnership.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative h-40 overflow-hidden">
                <SkeletonImage
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-white font-bold tracking-widest uppercase text-xs">
                    0{index + 1} — {pillar.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-1">
                <p className="text-sm text-slate-600 mb-6 flex-1 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="space-y-3">
                  {pillar.highlights.map((point) => (
                    <div key={point} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 transition-colors">
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      {point}
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

export default MissionVisionSection;
