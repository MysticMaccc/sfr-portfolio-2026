"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: "FULL STACK DEVELOPMENT",
      icon: "🚀",
      color: "purple",
      skills: ["React(Next JS) + Laravel"],
    },
    {
      title: "FRONT END DEVELOPMENT",
      icon: "🎨",
      color: "blue",
      skills: ["React JS", "Typescript", "Next JS", "Laravel-livewire"],
    },
    {
      title: "BACK END DEVELOPMENT",
      icon: "⚙️",
      color: "green",
      skills: ["Laravel Framework"],
    },
    {
      title: "Mobile Application (Android and iOS)",
      icon: "📱",
      color: "orange",
      skills: ["React(Next JS) + Capacitor JS"],
    },
    {
      title: "FUNDAMENTALS",
      icon: "🔧",
      color: "yellow",
      skills: ["HTML", "CSS", "Javascript", "PHP"],
    },
    {
      title: "CSS FRAMEWORKS",
      icon: "🎭",
      color: "pink",
      skills: ["Tailwind CSS", "Bootstrap CSS"],
    },
    {
      title: "RELATIONAL DATABASE",
      icon: "🗄️",
      color: "indigo",
      skills: ["MySQL"],
    },
    {
      title: "UI/UX",
      icon: "🎯",
      color: "red",
      skills: ["Figma"],
    },
    {
      title: "Cloud Hosting",
      icon: "☁️",
      color: "cyan",
      skills: ["Vercel", "Hostinger", "GoDaddy"],
    },
    {
      title: "VERSION CONTROL",
      icon: "📝",
      color: "emerald",
      skills: ["Git", "GitHub"],
    },
    {
      title: "PACKAGE MANAGER",
      icon: "📦",
      color: "violet",
      skills: ["Composer", "npm", "yarn"],
    },
    {
      title: "OTHERS",
      icon: "🛠️",
      color: "rose",
      skills: [
        "Object Oriented Programming",
        "Model-View-Controller",
        "Test Driven Development",
        "API Development",
        "API Authentication and Authorization",
      ],
    },
    {
      title: "PROJECT MANAGEMENT",
      icon: "📊",
      color: "teal",
      skills: [
        "Project Planning & Scheduling (WBS creation, timelines, milestones)",
        "Scope Management (requirement gathering, change control)",
        "Budgeting & Resource Allocation",
        "Scrum Facilitation & Sprint Management",
        "Project Documentation & Reporting",
        "Requirement Analysis & User Story Creation",
        "Technical Specification Drafting",
        "API, Database, and System Architecture",
        "QA & UAT Coordination",
        "Version Control Understanding (Git)",
        "Deployment & Release Management",
        "Notion Project Management Tool",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: "from-purple-600 to-purple-800 border-purple-500",
      blue: "from-blue-600 to-blue-800 border-blue-500",
      green: "from-green-600 to-green-800 border-green-500",
      orange: "from-orange-600 to-orange-800 border-orange-500",
      yellow: "from-yellow-600 to-yellow-800 border-yellow-500",
      pink: "from-pink-600 to-pink-800 border-pink-500",
      indigo: "from-indigo-600 to-indigo-800 border-indigo-500",
      red: "from-red-600 to-red-800 border-red-500",
      cyan: "from-cyan-600 to-cyan-800 border-cyan-500",
      emerald: "from-emerald-600 to-emerald-800 border-emerald-500",
      violet: "from-violet-600 to-violet-800 border-violet-500",
      rose: "from-rose-600 to-rose-800 border-rose-500",
      teal: "from-teal-600 to-teal-800 border-teal-500",
    };
    return colors[color] || colors.purple;
  };

  const proficiencyLevels = [
    { name: "Expert", percentage: 40, color: "bg-green-500" },
    { name: "Advanced", percentage: 35, color: "bg-blue-500" },
    { name: "Intermediate", percentage: 20, color: "bg-yellow-500" },
    { name: "Learning", percentage: 5, color: "bg-purple-500" },
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
        {/* Page Title */}
        <motion.div className="text-center mb-12 sm:mb-16 px-4" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            Technical Skills
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive overview of my technical expertise across various domains of software development.
          </p> */}
        </motion.div>

        {/* Proficiency Overview */}

        {/* Skills Grid */}
        <motion.section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4"
          variants={itemVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${getColorClasses(
                category.color
              )} p-4 sm:p-6 rounded-lg border-2 relative overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 },
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Background decoration */}
              <motion.div
                className="absolute -top-2 -right-2 w-20 h-20 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-4xl">{category.icon}</div>
              </motion.div>

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  className="flex items-center mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                >
                  <span className="text-xl sm:text-2xl mr-2 sm:mr-3">{category.icon}</span>
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills List */}
                <motion.ul
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="flex items-center text-gray-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.4 + index * 0.05 + skillIndex * 0.02,
                      }}
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-white rounded-full mr-3"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.5 + index * 0.05 + skillIndex * 0.02,
                        }}
                        whileHover={{ scale: 1.5 }}
                      />
                      <span className="text-sm font-medium">{skill}</span>
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Skill count badge */}
                <motion.div
                  className="absolute top-2 right-2 bg-white/20 text-white text-xs px-2 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                >
                  {category.skills.length}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Call to Action */}
        <motion.section className="text-center mt-12 sm:mt-16 px-4" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-purple-500/30 max-w-3xl mx-auto"
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(147, 51, 234, 0.15)",
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-xl sm:text-2xl font-bold mb-4 text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Ready to Put These Skills to Work?
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Let's discuss how my technical expertise can help bring your
              project to life.
            </motion.p>
            <motion.a
              href="/contact"
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Conversation
            </motion.a>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Skills;
