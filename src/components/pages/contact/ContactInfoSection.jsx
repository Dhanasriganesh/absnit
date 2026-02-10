import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import hydImage from '../../../assets/about-section/hyd.webp';
import SkeletonImage from '../../shared/SkeletonImage';

const locations = [
  {
    title: 'ABSN IT Headquarters',
    location: 'Telangana, India',
    address: 'H No 1-111, Madannapet, Narsampet Mandal, Warangal, Telangana, India',
    phone: '+91 9948550646',
    phoneLink: '+919948550646',
    email: 'info@absnit.com',
    hours: '09:00 - 18:00 IST',
    mapQuery: encodeURIComponent('H No 1-111, Madannapet, Narsampet Mandal, Warangal, Telangana, India'),
    image: hydImage,
  },
];

const ContactInfoSection = () => {
  const getMapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${query}`;
  const getMapEmbedUrl = (query) => `https://www.google.com/maps?q=${query}&output=embed&maptype=roadmap&zoom=15`;

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50" />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-red-600 mb-6 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-red-600" />
            Our Studios
          </p>
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 leading-tight">
            Connecting <span className="italic">locally</span>, <br />
            impacting <span className="italic">globally</span>.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-1">
          {locations.map((location, index) => (
            <motion.div
              key={location.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative grid lg:grid-cols-2 gap-0 rounded-[56px] overflow-hidden border border-slate-100 bg-slate-50 shadow-2xl"
            >
              {/* Info Column */}
              <div className="p-10 md:p-16 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                      <MapPin className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 leading-none mb-2">{location.location}</h3>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{location.title}</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="group/item">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Principal Address</p>
                      <a
                        href={getMapUrl(location.mapQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-slate-600 leading-relaxed hover:text-red-600 transition-colors block max-w-sm"
                      >
                        {location.address}
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Operations</p>
                        <div className="space-y-2">
                          <a href={`tel:${location.phoneLink}`} className="flex items-center gap-2 text-sm text-slate-900 hover:text-red-600 transition-colors group/link">
                            <Phone className="w-3 h-3 text-slate-300 group-hover/link:text-red-600 transition-colors" />
                            {location.phone}
                          </a>
                          <a href={`mailto:${location.email}`} className="flex items-center gap-2 text-sm text-slate-900 hover:text-red-600 transition-colors group/link">
                            <Mail className="w-3 h-3 text-slate-300 group-hover/link:text-red-600 transition-colors" />
                            {location.email}
                          </a>
                        </div>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Local Time</p>
                        <div className="flex items-center gap-2 text-sm text-slate-900">
                          <Clock className="w-3 h-3 text-slate-300" />
                          {location.hours}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-10 border-t border-slate-200/60">
                  <a
                    href={getMapUrl(location.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 group/btn hover:text-red-600 transition-colors"
                  >
                    View on Digital Maps
                    <div className="w-8 h-[1px] bg-slate-900 group-hover/btn:bg-red-600 group-hover/btn:w-12 transition-all" />
                  </a>
                </div>
              </div>

              {/* Map Column */}
              <div className="relative min-h-[400px] lg:min-h-full">
                <iframe
                  title={`${location.title} Map`}
                  src={getMapEmbedUrl(location.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  allowFullScreen
                />

                {/* Visual Accent on Image */}
                <div className="absolute top-10 right-10 w-32 h-32 rounded-3xl overflow-hidden border-4 border-white shadow-2xl z-10 hidden md:block">
                  <SkeletonImage
                    src={location.image}
                    alt={location.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
