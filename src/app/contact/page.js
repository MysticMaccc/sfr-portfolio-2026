"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

const Contact = () => {
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

  const cardHoverVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      <motion.div
        className="container mx-auto px-6 py-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Page Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 text-purple-400">
            Contact Me
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's connect!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.section
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
          variants={itemVariants}
        >
          {/* Phone */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 text-center"
            variants={cardHoverVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Phone</h3>
            <div className="space-y-2">
              <motion.p
                className="text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                +(63) 950 909 8702
              </motion.p>
              <motion.p
                className="text-gray-300 hover:text-purple-300 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                +(63) 994 215 2415
              </motion.p>
            </div>
            <p className="text-sm text-gray-400 mt-4">Available for calls</p>
          </motion.div>

          {/* Email */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 text-center"
            variants={cardHoverVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Email</h3>
            <motion.a
              href="mailto:scfr.dev.96@gmail.com"
              className="text-gray-300 hover:text-purple-300 transition-colors break-all"
              whileHover={{ scale: 1.05 }}
            >
              scfr.dev.96@gmail.com
            </motion.a>
            {/* <p className="text-sm text-gray-400 mt-4">
              Professional inquiries and collaborations
            </p> */}
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 text-center"
            variants={cardHoverVariants}
            whileHover="hover"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">GitHub</h3>
            <motion.a
              href="https://github.com/MysticMaccc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              github.com/MysticMaccc
            </motion.a>
            <p className="text-sm text-gray-400 mt-4">Check out my projects</p>
          </motion.div>
        </motion.section>

        {/* Additional Info */}
        <motion.section
          className="text-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-6 text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Let's Work Together
            </motion.h3>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.span
                className="bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(147, 51, 234, 0.3)",
                }}
              >
                Available for freelance
              </motion.span>
              <motion.span
                className="bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(34, 197, 94, 0.3)",
                }}
              >
                Open to full-time roles
              </motion.span>
              <motion.span
                className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-sm"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(37, 99, 235, 0.3)",
                }}
              >
                Remote-friendly
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Contact;
