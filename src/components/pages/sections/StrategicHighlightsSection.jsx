import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, RefreshCcw, Sparkles, TrendingUp, Layers } from 'lucide-react';
import whyImage from '../../../assets/home-section/why.webp';

const stats = [
  { label: 'AI-native launches', value: '280+', icon: Sparkles },
  { label: 'Design systems deployed', value: '42', icon: Layers },
  { label: 'Experience score uplift', value: '37%', icon: TrendingUp },
];

const pillars = [
  {
    title: 'Strategy x Delivery',
    description: 'Integrated pods bring strategists, designers, engineers, and change partners to every engagement.',
    icon: Cpu,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Responsible Intelligence',
    description: 'Guardrails, data governance, and explainability baked into every AI solution.',
    icon: Shield,
    color: 'from-red-500 to-orange-400',
  },
  {
    title: 'Adaptive Operations',
    description: 'Telemetry, automation, and playbooks ensure programs keep evolving after launch.',
    icon: RefreshCcw,
    color: 'from-purple-500 to-indigo-400',
  },
];

const StrategicHighlightsSection = () => {
  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
      {/* Unique Background Architecture */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Diagonal Tech Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(135deg, #f1f5f9 1px, transparent 1px), linear-gradient(225deg, #f1f5f9 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          opacity: '0.3'
        }} />

        {/* Moving Gradient Entities */}
        <motion.div
          animate={{
            x: [-50, 50, -50],
            y: [20, -20, 20],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50/40 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [50, -50, 50],
            y: [-30, 30, -30],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-blue-50/50 rounded-full blur-[120px]"
        />

        {/* Textured Glass Layer */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Why teams choose ABSN IT</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Operating models <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">built for reinvention.</span>
            </h2>

            <p className="text-base text-slate-600 mb-8 leading-relaxed max-w-xl">
              We combine vision-led consulting with relentless product delivery. Our studios co-create with your teams, transferring playbooks so you keep scaling long after launch.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm transition-shadow hover:shadow-md"
                >
                  <stat.icon className="w-4 h-4 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Key Pillars */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-[32px] overflow-hidden group shadow-xl"
            >
              <img
                src={whyImage}
                alt="Why ABSN IT"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/20 shadow-lg">
                <p className="text-slate-900 font-bold text-sm">Vision Driven Delivery</p>
              </div>
            </motion.div>

            <div className="grid gap-4">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
                >
                  <div className={`absolute left-0 top-0 w-1 h-full bg-gradient-to-b ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                  <div className="flex gap-5 items-start">
                    <div className={`p-3 rounded-2xl bg-slate-50 group-hover:bg-opacity-100 transition-colors flex-shrink-0`}>
                      <pillar.icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{pillar.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategicHighlightsSection;

