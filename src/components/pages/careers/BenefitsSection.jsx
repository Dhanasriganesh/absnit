import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'Growth & Learning',
    description: 'Annual learning budget, guilds, mentorship programs, and quarterly hack weeks focused on experimentation.',
  },
  {
    title: 'Flexibility & Wellbeing',
    description: 'Remote-first with regional studios, flexible paid time off, wellness stipends, and inclusive benefits packages.',
  },
  {
    title: 'Impact & Ownership',
    description: 'Pod-based autonomy, exposure to global clients, and transparent career frameworks with shared success metrics.',
  },
];

const BenefitsSection = () => (
  <section className="relative bg-gradient-to-br from-red-100 via-white to-blue-100 py-20 overflow-hidden">
    {/* Decorative background elements */}
    <div className="absolute inset-0 opacity-30">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
    </div>
    <div className="container relative mx-auto px-4 lg:px-12">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Why Nexus AI</p>
        <h2 className="mt-4 text-4xl font-bold text-gray-900">Benefits that support your whole journey</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
          Our people programs are designed to keep you energized, challenged, and supported no matter where you are in your career.
        </p>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="rounded-3xl border border-gray-100 bg-gray-50 p-6 text-left shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-900">{benefit.title}</h3>
            <p className="mt-3 text-sm text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
