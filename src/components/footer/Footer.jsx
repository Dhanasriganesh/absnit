import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoImage from '../../assets/absnit.png';
import SkeletonImage from '../shared/SkeletonImage';

function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const exploreLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    // { name: 'Clients', path: '/clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  const servicesLinks = [
    { name: 'Consulting', path: '/services/consulting' },
    { name: 'Staffing', path: '/services/staffing' },
    { name: 'Training', path: '/services/training' },
    { name: 'IT Solutions', path: '/services/it-solutions' },
  ];

  const industriesLinks = [
    { name: 'Banking & Financial Services', path: '/industries' },
    { name: 'Healthcare & Life Sciences', path: '/industries' },
    { name: 'Media & Entertainment', path: '/industries' },
    { name: 'Telecommunications', path: '/industries' },
    { name: 'Energy & Utilities', path: '/industries' },
    { name: 'Oil & Gas', path: '/industries' },
    { name: 'Retail & Consumer Goods', path: '/industries' },
    { name: 'Manufacturing', path: '/industries' },
    { name: 'Transportation & Logistics', path: '/industries' },
    { name: 'Travel & Hospitality', path: '/industries' },
    { name: 'Automotive', path: '/industries' },
    { name: 'Education', path: '/industries' },
    { name: 'Government & Public Sector', path: '/industries' },
    { name: 'Insurance', path: '/industries' },
  ];

  const locations = [
    {
      title: '📍 ABSN IT Headquarters',
      address: 'H No 1-111, Madannapet, Narsampet Mandal, Warangal, Telangana, India',
      phone: '+91 9948550646',
      email: 'info@absnit.com',
      mapUrl: 'https://www.google.com/maps?q=H+No+1-111,+Madannapet,+Narsampet+Mandal,+Warangal,+Telangana,+India',
    },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 overflow-hidden border-t border-slate-700/50">
      {/* Modern Dark Background with Animated Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-800/98 to-slate-900/95"></div>
        
        {/* Animated Mesh Gradient */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(239, 68, 68, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `,
            backgroundSize: '100% 100%',
          }}
        />

        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        />

        {/* Animated Orb Effects */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-indigo-500/8 blur-3xl"
        />

        {/* Subtle Dot Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />

        {/* Top Border Glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-10 md:py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 mb-8 sm:mb-10">
          {/* Logo and Description - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2 md:col-span-3 lg:col-span-3"
          >
            <div className="mb-2 sm:mb-4">
              <SkeletonImage
                src={logoImage}
                alt="ABSN IT Solutions Logo"
                className="h-20 sm:h-12 md:h-16 lg:h-44 w-auto lg:w-44 object-contain brightness-0 invert"
              />
              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                ABSN IT is an independent technology company and digital transformation partner. We help businesses design, integrate, and scale their digital solutions.
              </p>
            </div>


          </motion.div>

          {/* Explore Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="sm:col-span-1 md:col-span-1 lg:col-span-3"
          >
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">Explore</h4>
            <div className="grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              {exploreLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="sm:col-span-1 md:col-span-1 lg:col-span-2"
          >
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                  >
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="truncate">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sm:col-span-2 md:col-span-1 lg:col-span-4"
          >
            <h4 className="text-white font-bold text-sm sm:text-base mb-4 sm:mb-6">Industries</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3">
              {industriesLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 group"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="truncate">{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter/Demo Request Section - OfficeSpace Style */}


        {/* Location Sections */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
            <div className="h-8 sm:h-10 w-0.5 sm:w-1 bg-blue-500 rounded-full" />
            <h3 className="text-white font-semibold text-base sm:text-lg">Our Location</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {locations.map((location, idx) => (
              <motion.div
                key={location.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="rounded-lg sm:rounded-xl border border-slate-700/50 bg-slate-800/30 p-4 sm:p-5 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
                  <div className="flex-1 space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="mt-0.5 sm:mt-1 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 flex-shrink-0">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="space-y-1 flex-1 min-w-0">
                        <h4 className="text-white font-semibold text-sm sm:text-base">{location.title}</h4>
                        <a
                          href={location.mapUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-blue-400 text-xs sm:text-sm leading-relaxed break-words transition-colors"
                        >
                          {location.address}
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 text-xs sm:text-sm text-gray-300">
                      <a href={`tel:${location.phone.replace(/[^+\d]/g, '')}`} className="inline-flex items-center gap-1.5 sm:gap-2 hover:text-blue-400 transition-colors">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="break-all">{location.phone}</span>
                      </a>
                      <a href={`mailto:${location.email}`} className="inline-flex items-center gap-1.5 sm:gap-2 hover:text-blue-400 transition-colors">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="break-all">{location.email}</span>
                      </a>
                    </div>
                  </div>
                  <div className="w-full sm:w-24 md:w-32 lg:w-36 h-32 sm:h-auto rounded-lg overflow-hidden border border-slate-700/50 shadow-sm self-center sm:self-auto">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address)}&output=embed&z=15`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map for ${location.title}`}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Copyright Centered */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="border-t border-slate-700/50 pt-4 sm:pt-5 md:pt-6"
        >
          <div className="flex justify-center items-center">
            <p className="text-xs sm:text-sm text-gray-400 text-center px-2">© 2020 ABSN IT. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
