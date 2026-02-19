import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import heroVideo from '../../../assets/videos/absnit.mp4';
import SkeletonVideo from '../../shared/SkeletonVideo';

const stats = [
  { value: 3480, suffix: '+', label: 'Projects Completed' },
  { value: 428, suffix: '+', label: 'IT Specialists' },
  { value: 6980, suffix: '+', label: 'Happy Clients' },
  { value: 256, suffix: '+', label: 'Smart Solutions' },
];

const AnimatedNumber = ({ value, suffix = '+' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: latest => setDisplayValue(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero Section - Optimized for mobile screens */}
      <section
        id="hero-mobile"
        data-header-theme="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 md:hidden w-full"
      >
        {/* Mobile Background - Gradient with subtle pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-blue-900/90 to-slate-900/95"></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          ></div>
        </div>

        {/* Mobile Content */}
        <div className="container mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col items-center justify-center min-h-screen py-12 text-center">
            {/* Mobile Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs font-medium border border-white/20">
                Next-Generation AI Solutions
              </span>
            </motion.div>

            {/* Mobile Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl font-bold mb-6 text-white leading-tight px-2"
              style={{
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '-0.01em',
                lineHeight: '1.3',
              }}
            >
              <span className="block mb-2">Shaping the Future of</span>
              <span className="block mb-2 bg-gradient-to-r from-blue-400 via-blue-300 to-red-400 bg-clip-text text-transparent">
                Business Through
              </span>
              <span className="block text-white">Innovation and Excellence</span>
            </motion.h1>

            {/* Mobile Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-sm text-white/90 mb-8 px-4 leading-relaxed max-w-md mx-auto"
            >
              Transforming businesses with cutting-edge technology solutions and strategic innovation.
            </motion.p>

            {/* Mobile Stats - Compact Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-4 w-full max-w-sm mx-auto pt-6 border-t border-white/20"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[10px] text-white/80 font-medium" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/70 text-[10px] font-medium uppercase tracking-wider">
              Scroll
            </span>
            <motion.svg
              className="w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </section>

      {/* Desktop Hero Section - Video background for larger screens */}
      <section
        id="hero-desktop"
        data-header-theme="hero"
        className="relative min-h-screen hidden md:flex items-center justify-center overflow-hidden bg-black w-full"
      >
        {/* Main Video Background - Desktop only */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <SkeletonVideo
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
            }}
            onError={(e) => {
              console.error('Video loading error:', e);
            }}
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </SkeletonVideo>
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-0 pointer-events-none"></div>

        {/* Desktop Content - Centered */}
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-10 w-full pointer-events-none">
          <div className="flex items-center justify-center min-h-screen py-8 sm:py-12 md:py-16">
            <div className="text-center max-w-5xl mx-auto w-full px-2 sm:px-4">
              {/* Desktop content can be added here if needed */}
            </div>
          </div>
        </div>

        {/* Desktop Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-10 pointer-events-auto"
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-white/70 text-[10px] font-medium uppercase tracking-wider"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Scroll
            </span>
            <motion.svg
              className="w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
