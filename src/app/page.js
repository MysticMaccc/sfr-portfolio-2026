"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "../components/Navigation";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const sections = [
    {
      title: "My Expertise",
      description: "Explore my technical skills and specializations",
      href: "/expertise",
      icon: "🚀",
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Work Experience",
      description: "Discover my professional experience and achievements",
      href: "/experience",
      icon: "💼",
      gradient: "from-green-600 to-green-800",
    },
    {
      title: "Projects",
      description: "Browse through my portfolio of completed projects",
      href: "/projects",
      icon: "🛠️",
      gradient: "from-orange-600 to-orange-800",
    },
    {
      title: "Technical Skills",
      description: "View my comprehensive technical skill set",
      href: "/skills",
      icon: "⚙️",
      gradient: "from-red-600 to-red-800",
    },
    {
      title: "Training & Certifications",
      description: "Check out my continuous learning journey",
      href: "/trainings",
      icon: "🎓",
      gradient: "from-indigo-600 to-indigo-800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      <motion.div
        className="container mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center py-20 mb-20"
          variants={itemVariants}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Sherwin Christopher
              </motion.span>
              <br />
              <motion.span
                className="text-purple-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                F. Roxas
              </motion.span>
            </h1>

            <motion.h2
              className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              FULL STACK DEVELOPER
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Welcome to my portfolio!
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="block text-center bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg"
                >
                  Get In Touch
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/projects"
                  className="block text-center border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg"
                >
                  View My Work
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="https://drive.google.com/file/d/1AwBwn1towM0A40_bNgY3OKSYE5Od-w6A/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg"
                >
                  View My CV
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-3xl mx-auto px-4"
          variants={itemVariants}
        >
          {[
            { number: "7+", label: "Years Experience", icon: "📅" },
            { number: "11+", label: "Projects Completed", icon: "🚀" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(51, 65, 85, 0.6)",
              }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Navigation Sections */}
        <motion.section variants={itemVariants}>
          <motion.div
            className="text-center mb-12 sm:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-purple-400">
              Explore My Portfolio
            </h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Discover different aspects of my professional journey and
              technical expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <Link href={section.href}>
                  <div
                    className={`bg-gradient-to-br ${section.gradient} p-8 rounded-lg border border-slate-600 relative overflow-hidden cursor-pointer group h-full`}
                  >
                    {/* Background decoration */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-24 h-24 opacity-20 group-hover:opacity-30 transition-opacity"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <div className="text-6xl">{section.icon}</div>
                    </motion.div>

                    <div className="relative z-10">
                      <motion.div
                        className="flex items-center mb-6"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="text-4xl mr-4">{section.icon}</span>
                        <h3 className="text-2xl font-bold text-white">
                          {section.title}
                        </h3>
                      </motion.div>

                      <motion.p
                        className="text-gray-100 leading-relaxed group-hover:text-white transition-colors"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {section.description}
                      </motion.p>

                      <motion.div
                        className="flex items-center mt-6 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={{ x: -20 }}
                        whileHover={{ x: 0 }}
                      >
                        <span className="font-semibold mr-2">Explore</span>
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section className="text-center mt-16 sm:mt-20 px-4" variants={itemVariants}>
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg border border-slate-700 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              Ready to Work Together?
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              Let's collaborate and bring your ideas to life with cutting-edge
              technology solutions. I'm always excited to work on challenging
              projects and deliver exceptional results.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Link
                  href="/contact"
                  className="block text-center bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg"
                >
                  Contact Me
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="https://github.com/MysticMaccc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg"
                >
                  View GitHub
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="text-center py-8 mt-16 border-t border-slate-700"
          variants={itemVariants}
        >
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.8 }}
          >
            © 2025 Sherwin Christopher F. Roxas. All rights reserved.
          </motion.p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
