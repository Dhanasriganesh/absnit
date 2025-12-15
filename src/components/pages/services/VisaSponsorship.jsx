import React from 'react';
import { motion } from 'framer-motion';

const visaTypes = [
  {
    title: 'H1B Visas',
    body: 'Specialty occupation visas for skilled professionals. TetraX AI provides comprehensive H1B sponsorship and processing support.',
    support: '✓ Full support by TetraX AI',
  },
  {
    title: 'F1 Visa (Student Visas)',
    body: 'Academic student visas for educational purposes. Our team assists with F1 visa applications and status maintenance.',
    support: '✓ Full support by TetraX AI',
  },
  {
    title: 'Optional Practical Training (OPT/OPT-STEM)',
    body: 'Work authorization for F1 students in STEM fields. We help extend OPT visas for up to 24 months with E-Verify certification.',
    support: '✓ Full support by TetraX AI',
  },
  {
    title: 'Curricular Practical Training (CPT)',
    body: 'Work authorization as part of academic curriculum. TetraX AI facilitates CPT authorization for eligible students.',
    support: '✓ Full support by TetraX AI',
  },
  {
    title: 'TN1, TN2',
    body: 'NAFTA professional visas for Canadian and Mexican citizens. Complete sponsorship and processing support provided by TetraX AI.',
    support: '✓ Full support by TetraX AI',
  },
  {
    title: 'Green Card Process (EB-2/EB-3)',
    body: 'Permanent residency sponsorship provided by TetraX AI. Complete support for EB-2 and EB-3 employment-based green card applications.',
    support: '✓ Full support by TetraX AI Immigration Team',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Initial Consultation',
    body: 'We assess your visa status and career goals to determine the best sponsorship path forward.',
  },
  {
    number: '02',
    title: 'Documentation Review',
    body: 'Our team reviews all necessary documentation and ensures USCIS compliance requirements are met.',
  },
  {
    number: '03',
    title: 'Client Matching & Sponsorship by TetraX AI',
    body: 'TetraX AI directly matches you with suitable clients and provides visa sponsorship. Our immigration team handles all sponsorship documentation and ensures TetraX AI sponsors your visa for the right opportunity. All sponsorship is provided directly by TetraX AI, not through third parties.',
  },
  {
    number: '04',
    title: 'Application Processing',
    body: 'We handle the entire visa application process, keeping you informed at every step.',
  },
  {
    number: '05',
    title: 'Ongoing Support',
    body: 'Continuous support throughout your engagement and assistance with future career moves.',
  },
];

const experienceBenefits = [
  {
    title: 'E-Verify Certification',
    body: 'Our e-verify certification offers students in STEM majors the potential to extend their OPT visa for 24 months. TetraX AI handles all certification processes.',
    support: '✓ 24-month OPT extension support',
  },
  {
    title: 'Visa Issue Resolution',
    body: 'Our immigration specialists apply their deep subject matter expertise to quickly address and resolve even the most complex visa issues. Direct support from TetraX AI team.',
    support: '✓ Expert problem resolution',
  },
  {
    title: 'Direct Client Relationships',
    body: 'TetraX AI directly markets candidates to end clients, alleviating third-party channel issues and ensuring smooth processes. No intermediaries involved.',
    support: '✓ Direct client connections',
  },
  {
    title: 'Comprehensive Green Card Support',
    body: 'TetraX AI provides full support for your green card journey. We facilitate EB-2 and EB-3 employment-based applications, handle PERM certification, and I-140 petitions.',
    support: '✓ EB-2/EB-3, PERM, I-140 support',
  },
  {
    title: 'Consultant Redeployment',
    body: 'Before your current assignment ends, our redeployment team is already working to find your next opportunity. Continuous career support from TetraX AI.',
    support: '✓ Proactive opportunity matching',
  },
  {
    title: 'Industry Recognition',
    body: "As a leading AI company, TetraX AI's client portfolio includes partnerships with Fortune 500 companies across multiple industries. Trusted by top employers.",
    support: '✓ Fortune 500 partnerships',
  },
];

const VisaSponsorship = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Background accents */}
      <motion.div
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 10, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-red-300/25 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -12, 0], opacity: [0.22, 0.4, 0.22] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-300/20 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Hero */}
      <motion.section
        className="relative pt-28 pb-12"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              TETRAX AI IMMIGRATION TEAM
            </p>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              TetraX AI Immigration Team - Your Trusted Visa Sponsorship Partner
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Navigate your visa sponsorship journey with confidence through TetraX AI&apos;s dedicated in-house immigration team.
            </p>
            <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              Our comprehensive immigration support services are provided directly by TetraX AI, ensuring personalized attention and seamless sponsorship processes.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-800 font-semibold">
              ✨ Visa Sponsorship Provided Directly by TetraX AI - No Third-Party Intermediaries
            </p>
            <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-700">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>In-house immigration experts who understand both technology roles and visa pathways.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-purple-500" />
                <span>End-to-end support from initial assessment through long-term status planning.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" />
                <span>Transparent communication so you always know what comes next.</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 18px 35px rgba(37,99,235,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                Start a Conversation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)' }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full border border-blue-600 px-6 py-2.5 text-sm font-semibold text-blue-700 bg-white/80 shadow-md"
              >
                Contact TetraX AI Immigration Team
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Best-In-Class section */}
      <motion.section
        className="relative bg-white/80 backdrop-blur-sm py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 lg:px-12 space-y-10">
          <div className="max-w-4xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              TETRAX AI IMMIGRATION TEAM
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-red-500 bg-clip-text text-transparent">
                Best-In-Class Visa Sponsorship Solutions by TetraX AI
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              As the global workforce rapidly evolves, choosing the right partner for your visa sponsorship and employment needs is crucial.
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              TetraX AI&apos;s internal immigration team guides you through each step of the visa sponsorship process and provides tailored solutions to international consultants facing immigration challenges.
            </p>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              As a leading AI technology company, we specialize in helping our consultants find meaningful work with top companies nationwide, including Fortune 500 enterprises.
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-800 font-semibold">
              ✓ Visa Sponsorship Provided Directly by TetraX AI
            </p>
            <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed">
              Our immigration team is an integral part of TetraX AI, ensuring direct communication, faster processing, and dedicated support throughout your visa journey. We handle all sponsorship processes internally, eliminating third-party delays and ensuring transparency at every step.
            </p>
          </div>
          
          {/* Visual highlight cards so content isn't just paragraphs */}
          <div className="grid gap-5 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl border border-blue-100 bg-blue-50/80 p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                Direct sponsorship
              </p>
              <p className="mt-2 text-sm text-gray-800">
                All visa sponsorship is handled in‑house by TetraX AI—no third‑party intermediaries.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="rounded-2xl border border-purple-100 bg-purple-50/70 p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-700">
                Tailored solutions
              </p>
              <p className="mt-2 text-sm text-gray-800">
                Support designed specifically for international consultants navigating complex immigration paths.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="rounded-2xl border border-red-100 bg-red-50/70 p-4 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-700">
                Fortune 500 reach
              </p>
              <p className="mt-2 text-sm text-gray-800">
                Access opportunities with top companies nationwide, including multiple Fortune 500 employers.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Immigration Team */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-50/80 via-white to-red-50/90 py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        <div className="container mx-auto px-4 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
              TETRAX AI IMMIGRATION TEAM
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
              Our Immigration Team is Here to Help You Every Step of the Way
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              Connect directly with TetraX AI&apos;s immigration specialists. Our in-house team provides personalized support throughout your visa sponsorship journey.
            </p>
            <ul className="mt-5 space-y-2 text-sm sm:text-base text-gray-700">
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-blue-600" />
                <span>Single point of contact from assessment through approval.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-600" />
                <span>Proactive updates on case status and next steps.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-red-500" />
                <span>Guidance aligned with current USCIS policies and timelines.</span>
              </li>
            </ul>
            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 16px 32px rgba(37,99,235,0.45)' }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg"
              >
                Contact TetraX AI Immigration Team
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What to Expect / Visa Types */}
      <section className="relative bg-white/90 py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            What to Expect
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
            Our subject matter expertise and strict adherence to the United States Citizenship and Immigration Services (USCIS) regulations enables us to secure visa sponsorship for multiple visa types, including:
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {visaTypes.map((visa) => (
              <motion.div
                key={visa.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}
                className="rounded-2xl border border-blue-100 bg-white/95 p-5 sm:p-6 shadow-md backdrop-blur-sm"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {visa.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {visa.body}
                </p>
                <p className="mt-3 text-sm font-semibold text-blue-700">
                  {visa.support}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Sponsorship Process */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Visa Sponsorship Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
            Our streamlined process ensures a smooth visa sponsorship experience from start to finish.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}
                className="rounded-2xl border border-blue-100 bg-white/95 p-5 sm:p-6 shadow-md flex flex-col h-full backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
                  {step.number}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Benefits */}
      <section className="relative bg-white/95 py-16">
        <div className="container mx-auto px-4 lg:px-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            With TetraX AI, You Can Expect an Exceptional Sponsorship Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed max-w-3xl">
            Our comprehensive benefits package ensures you have the support you need throughout your visa sponsorship journey.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {experienceBenefits.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, scale: 1.02, boxShadow: '0 18px 40px rgba(15,23,42,0.08)' }}
                className="rounded-2xl border border-blue-100 bg-white/95 p-5 sm:p-6 shadow-md flex flex-col backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                  {item.body}
                </p>
                <p className="mt-3 text-sm font-semibold text-blue-700">
                  {item.support}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 lg:px-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to Start Your Visa Sponsorship Journey?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Let our experienced team guide you through the process and help you achieve your career goals in the United States.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.06, boxShadow: '0 20px 45px rgba(15,23,42,0.45)' }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 shadow-lg"
            >
              Contact Our Team
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.06, backgroundColor: 'rgba(255,255,255,0.14)' }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white px-6 py-2.5 text-sm font-semibold text-white"
            >
              Submit Your Resume
            </motion.button>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default VisaSponsorship;


