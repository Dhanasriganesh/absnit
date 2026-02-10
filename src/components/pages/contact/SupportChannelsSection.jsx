import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Headphones, Users } from 'lucide-react';

const channels = [
  {
    title: 'Partnerships & Sales',
    description: 'Exploring new initiatives, co-innovation, or platform builds.',
    email: 'contact@absnit.com',
    response: '2 business days',
    icon: Shield,
  },
  {
    title: 'Support & Client Delivery',
    description: 'Active engagement support, production issues, or roadmap planning.',
    email: 'contact@absnit.com',
    response: 'Same day',
    icon: Headphones,
  },
  {
    title: 'Talent & Media',
    description: 'Careers, speaking opportunities, or media inquiries.',
    email: 'contact@absnit.com',
    response: '3 business days',
    icon: Users,
  },
];

const SupportChannelsSection = () => (
  <section className="relative overflow-hidden bg-white py-24 lg:py-32">
    {/* Subtle Background Accent */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(#1e40af 0.5px, transparent 0.5px)`,
        backgroundSize: '40px 40px'
      }} />
    </div>

    <div className="container relative z-10 mx-auto px-4 lg:px-12">
      <div className="max-w-3xl mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600 mb-6 flex items-center gap-3">
          <span className="w-8 h-[1px] bg-blue-600" />
          Direct Access
        </p>
        <h2 className="text-3xl md:text-4xl font-light text-slate-900 leading-tight">
          Specialized <span className="italic">channels</span> for <br />
          faster <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 font-normal">Resolution</span>.
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {channels.map((channel, index) => (
          <motion.div
            key={channel.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Moving Glow Effect */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                <channel.icon className="w-5 h-5 text-blue-600" />
              </div>

              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                {channel.response} SLA
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">
                {channel.title}
              </h3>

              <p className="text-xs text-slate-500 leading-relaxed font-light mb-8">
                {channel.description}
              </p>

              <div className="pt-8 border-t border-slate-200/60">
                <a
                  href={`mailto:${channel.email}`}
                  className="flex items-center gap-3 text-xs font-bold text-blue-600 group/link"
                >
                  {channel.email}
                  <div className="w-6 h-[1px] bg-blue-600 group-hover/link:w-10 transition-all" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SupportChannelsSection;
