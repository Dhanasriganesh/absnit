import React from 'react';
import { motion } from 'framer-motion';
import financialImg from '../../../assets/about-section/financial.webp';
import SkeletonImage from '../../shared/SkeletonImage';
import healthcareImg from '../../../assets/about-section/healthcare.webp';
import entertainmentImg from '../../../assets/about-section/entertainment.webp';
import telecommunicationImg from '../../../assets/about-section/telecommunication.webp';
import energyImg from '../../../assets/about-section/energy.webp';
import consumerImg from '../../../assets/about-section/consumer.webp';
import transportImg from '../../../assets/about-section/transport.webp';
import automobileImg from '../../../assets/about-section/automobile.webp';
// Additional industry images
import educationImg from '../../../assets/about-section/technology.webp';
import governmentImg from '../../../assets/about-section/govt_public.webp';
import insuranceImg from '../../../assets/about-section/insurance.webp';
import logisticsImg from '../../../assets/about-section/transport.webp';
import oilGasImg from '../../../assets/about-section/Oil-Gas.webp';
import manufacturingImg from '../../../assets/about-section/manufacturing.webp';
import travelHospitalityImg from '../../../assets/about-section/travel-hospitality.webp';

const industries = [
  {
    name: 'Banking & Financial Services',
    image: financialImg,
    summary:
      'Cloud-native cores, real-time risk and fraud controls, and personalized digital channels that meet regulatory rigor without slowing growth.',
    strengths: ['RegTech & compliance automation', 'Risk, fraud & credit intelligence', 'Digital banking platforms'],
  },
  {
    name: 'Healthcare & Life Sciences',
    image: healthcareImg,
    summary:
      'Interoperable data fabrics, virtual care, and AI-assisted clinical workflows that elevate outcomes and operational resilience.',
    strengths: ['EHR integration & interoperability', 'Clinical decision support & AI copilots', 'HIPAA-compliant architectures'],
  },
  {
    name: 'Media & Entertainment',
    image: entertainmentImg,
    summary:
      'Low-latency streaming, live ops, and personalization engines that maximize engagement and monetization across every surface.',
    strengths: ['Edge/CDN acceleration', 'Real-time analytics & recommendations', 'Multi-platform distribution'],
  },
  {
    name: 'Telecommunications',
    image: telecommunicationImg,
    summary:
      '5G, edge, and IoT stacks with automated assurance so networks stay performant while customer journeys feel effortless.',
    strengths: ['Network optimization & automation', 'Edge computing strategies', 'CX transformation'],
  },
  {
    name: 'Energy & Utilities',
    image: energyImg,
    summary:
      'Smart grids, renewables orchestration, and OT/IT convergence with predictive maintenance to keep uptime and sustainability high.',
    strengths: ['Grid modernization & IoT', 'Energy trading & dispatch platforms', 'Predictive maintenance systems'],
  },
  {
    name: 'Oil & Gas',
    image: oilGasImg,
    summary:
      'Upstream and downstream solutions, exploration technologies, and operational systems for the oil and gas industry.',
    strengths: ['Exploration & production systems', 'Pipeline management', 'Refining operations'],
  },
  {
    name: 'Retail & Consumer Goods',
    image: consumerImg,
    summary:
      'E-commerce platforms, retail management systems, and consumer engagement solutions that drive sales and customer loyalty.',
    strengths: ['E-commerce platforms', 'Inventory management', 'Customer experience solutions'],
  },
  {
    name: 'Manufacturing',
    image: manufacturingImg,
    summary:
      'Digitized plants and supply chains, demand sensing, and Industry 4.0 solutions that shrink cycle times and boost margin.',
    strengths: ['Supply chain visibility', 'Manufacturing automation', 'IoT & smart factories'],
  },
  {
    name: 'Transportation & Logistics',
    image: logisticsImg,
    summary:
      'Supply chain optimization, warehouse management systems, and logistics platforms that improve efficiency and visibility.',
    strengths: ['Fleet & route optimization', 'Warehouse management systems', 'Supply chain analytics'],
  },
  {
    name: 'Travel & Hospitality',
    image: travelHospitalityImg,
    summary:
      'Hospitality management systems, booking platforms, and travel technology solutions that enhance guest experiences and operations.',
    strengths: ['Property management systems', 'Booking & reservation platforms', 'Guest experience solutions'],
  },
  {
    name: 'Automotive',
    image: automobileImg,
    summary:
      'Software-defined vehicles, connected services, and in-cabin experiences backed by telemetry and safety-grade platforms.',
    strengths: ['Connected vehicle platforms', 'Predictive maintenance & telematics', 'In-vehicle UX & infotainment'],
  },
  {
    name: 'Education',
    image: educationImg,
    summary:
      'EdTech solutions, learning management systems, and educational platforms that transform teaching and learning experiences.',
    strengths: ['Learning management systems', 'Student information systems', 'Online education platforms'],
  },
  {
    name: 'Government & Public Sector',
    image: governmentImg,
    summary:
      'Digital government services, public sector transformation, and citizen engagement platforms that improve governance and accessibility.',
    strengths: ['Digital government platforms', 'Citizen services portals', 'Public sector modernization'],
  },
  {
    name: 'Insurance',
    image: insuranceImg,
    summary:
      'Insurance technology platforms, claims processing systems, and risk assessment tools that streamline operations and customer service.',
    strengths: ['Claims management systems', 'Policy administration platforms', 'Risk analytics & underwriting'],
  },
];

const IndustryOverviewSection = () => (
  <section className="relative overflow-hidden bg-white py-16 lg:py-24">
    {/* Advanced Layered Background */}
    <div className="absolute inset-0 pointer-events-none">
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-50/30 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-red-50/20 rounded-full blur-[100px]"
      />

      {/* Subtle Geometric Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px)`,
        backgroundSize: '30px 30px'
      }} />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-600" />
          Industry Expertise
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight mb-8">
          Purpose-built industry <span className="italic">playbooks</span>. <br />
          Designed for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Transformation</span>.
        </h2>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          Every industry squad is backed by accelerators, research, and compliance experts so we can move from ideation to measurable impact quickly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {industries.map((industry, index) => (
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="group relative overflow-hidden rounded-[40px] bg-white border border-slate-100/50 hover:shadow-2xl transition-all duration-500"
          >
            {/* Visual Accent Overlay */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Image Container */}
            <div className="relative h-56 overflow-hidden">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
              >
                <SkeletonImage
                  src={industry.image}
                  alt={industry.name}
                  className="h-full w-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            <div className="p-8">
              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-4 block">
                {String(index + 1).padStart(2, '0')} — Solution
              </span>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                {industry.name}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-8 h-12 overflow-hidden">
                {industry.summary}
              </p>

              <div className="space-y-3">
                {industry.strengths.slice(0, 3).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-slate-200 group-hover:bg-red-500 transition-colors" />
                    <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">{item}</span>
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

export default IndustryOverviewSection;
