import React from 'react';
import { motion } from 'framer-motion';
import usaImage from '../../../assets/about-section/usa.jpg';
import hydImage from '../../../assets/about-section/hyd.jpg';

const locations = [
  {
    title: 'Nexus AI Headquarters',
    location: 'USA',
    address: '11020 David Taylor Dr #100, Charlotte, NC 28262, USA',
    phone: '+1 (980) 781-9639',
    phoneLink: '+19807819639',
    email: 'careers@nexusaisol.com',
    mapQuery: encodeURIComponent('11020 David Taylor Dr #100 Charlotte, NC 28262'),
    image: usaImage,
  },
  {
    title: 'Nexus AI Development Center',
    location: 'Hyderabad, India',
    address: 'Unit no. 1020, 9th floor, Vasavi MPM Grand, Ameerpet, Near by metro station, Hyderabad, Telangana, India',
    phone: '+91 77939 92217',
    phoneLink: '+917793992217',
    email: 'careers@nexusaisol.com',
    mapQuery: encodeURIComponent('Unit no. 1020, 9th floor Vasavi MPM Grand, Ameerpet Near by metro station, Hyderabad, Telangana, India'),
    image: hydImage,
  },
];

const ContactInfoSection = () => {
  const getMapUrl = (query) => `https://www.google.com/maps/search/?api=1&query=${query}`;
  const getMapEmbedUrl = (query) => `https://www.google.com/maps?q=${query}&output=embed&maptype=roadmap&zoom=15`;

  return (
    <section className="relative bg-gradient-to-br from-blue-100 via-blue-50 to-red-100 py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
      </div>
      <div className="container relative mx-auto px-4 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800">Our Locations</h2>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {locations.map((location, index) => (
            <motion.div
              key={location.location}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl border p-8 shadow-xl ${
                index === 0 
                  ? 'border-blue-200 bg-gradient-to-br from-white to-blue-50' 
                  : 'border-red-200 bg-gradient-to-br from-white to-red-50'
              }`}
            >
              {/* Header with location pin */}
              <div className="flex items-center gap-3 mb-6">
                <svg className={`h-6 w-6 ${index === 0 ? 'text-blue-600' : 'text-red-600'}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <h3 className="text-xl font-bold text-gray-800">{location.location}</h3>
              </div>

              {/* Top section: Contact info and Image side by side */}
              <div className="grid grid-cols-[1fr_auto] gap-6 items-start mb-6">
                {/* Left side - Contact info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-gray-800 mb-1">Address:</p>
                    <a
                      href={getMapUrl(location.mapQuery)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-800 hover:text-blue-600 transition-colors"
                    >
                      {location.address}
                    </a>
                  </div>
                  
                  <div className='flex items-center gap-2'>
                    <p className="text-sm font-bold text-gray-800 mb-1">Phone:</p>
                    <a
                      href={`tel:${location.phoneLink}`}
                      className={`text-sm ${index === 0 ? 'text-blue-600 hover:text-blue-700' : 'text-red-600 hover:text-red-700'} transition-colors`}
                    >
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className='flex items-center gap-2'>
                    <p className="text-sm font-bold text-gray-800 mb-1">Email:</p>
                    <a
                      href={`mailto:${location.email}`}
                      className={`text-sm ${index === 0 ? 'text-blue-600 hover:text-blue-700' : 'text-red-600 hover:text-red-700'} transition-colors`}
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                {/* Right side - Image */}
                <div className="w-36 h-36 flex-shrink-0 rounded-lg overflow-hidden">
                  <img 
                    src={location.image} 
                    alt={location.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Map - Full width below address and image */}
              <div className="rounded-lg overflow-hidden border border-gray-300 h-64">
                <iframe
                  title={`${location.title} Map`}
                  src={getMapEmbedUrl(location.mapQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
