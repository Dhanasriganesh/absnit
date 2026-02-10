import React from 'react';
import { motion } from 'framer-motion';
import partnershipImage from '../../../assets/banners/fullstackbanner.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const commitments = [
  'Co-create a 90-day transformation roadmap',
  'Stand up a blended team in under 3 weeks',
  'Prototype AI copilots with measurable ROI',
];

const AboutCTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-slate-900" />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/2 w-[150%] h-[150%] opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(59,130,246,0.3) 0%, transparent 70%)`,
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative p-10 md:p-16 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden text-center max-w-5xl mx-auto"
        >
          {/* Subtle Gradient Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-red-500" />

          <p className="text-xs font-bold uppercase tracking-[0.5em] text-blue-400 mb-8">
            Next Steps
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-10 leading-tight">
            Ready to design the <span className="italic">next chapter</span> <br />
            of your digital <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">journey</span>?
          </h2>
          <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Kick off with a strategy sprint or an AI co-creation workshop. We'll tailor the first 90 days to your specific business outcomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 rounded-full bg-white text-slate-900 font-bold text-sm uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-xl shadow-white/5">
              Start a Conversation
            </button>
            <button className="px-10 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all duration-300">
              Our Methodology
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCTASection;
