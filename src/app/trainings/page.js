"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

const Trainings = () => {
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

  const trainingCategories = [
    {
      category: "Web Development",
      icon: "🌐",
      color: "from-blue-600 to-blue-800",
      trainings: [
        {
          title: "Bootstrap 5",
          provider: "Udemy",
          type: "Online Course",
          certificateUrl: "https://drive.google.com/file/d/1-Zpg6cj3j3l8buQW3TSxhc5N377WrhA2/view?usp=sharing",
          skills: ["Responsive Design", "CSS Framework", "UI Components"],
        },
        {
          title: "CSS",
          provider: "Udemy",
          type: "Online Course",
          certificateUrl: "https://drive.google.com/file/d/1Leuz3Aa_MDxhsiokLrO3JxdHGRKprXPW/view?usp=sharing",
          skills: ["Advanced Styling", "Animations", "Grid & Flexbox"],
        },
        {
          title: "React JS",
          provider: "Udemy",
          type: "Online Course",
          certificateUrl: "https://drive.google.com/file/d/1xAT7xl8Af7QnCTMdM9p-d3lWciJXdVnn/view?usp=sharing",
          skills: ["Component Development", "State Management", "Hooks"],
        },
        {
          title: "Fullstack Laravel + Vue.js",
          provider: "Udemy",
          type: "Online Course",
          certificateUrl: "https://drive.google.com/file/d/1bkDmkgKQkPvAbqpbZIDPrOa1iaRE1r3X/view?usp=sharing",
          skills: [
            "Full Stack Development",
            "SPA Development",
            "API Integration",
          ],
        },
        {
          title: "Laravel",
          provider: "Inventive Media",
          type: "Professional Training",
          certificateUrl: "https://drive.google.com/file/d/1YECbQUQgiB9ITiwIpzbKNsHN4Oe0_h9p/view?usp=sharing",
          skills: ["MVC Architecture", "Eloquent ORM", "API Development"],
        },
        {
          title: "OutSystems",
          provider: "Transnational E-Business Solutions, Inc.",
          type: "Professional Training",
          certificateUrl: "https://drive.google.com/file/d/10DLg6nCSm7wxNUoVCmgAFWfwhYqIzRzk/view?usp=sharing",
          skills: [
            "Low-Code Development",
            "Rapid Application Development",
            "Enterprise Apps",
          ],
        },
        {
          title: "Web Programming Training",
          provider: "UP IT Development Center",
          type: "Certification Course",
          certificateUrl: "https://drive.google.com/file/d/1kEB8CHonYIkRI30Ck1RfQN3ZwqFUVOUm/view?usp=sharing",
          skills: [
            "Web Development Fundamentals",
            "Programming Logic",
            "Best Practices",
          ],
        },
      ],
    },
    {
      category: "Mobile Development",
      icon: "📱",
      color: "from-green-600 to-green-800",
      trainings: [
        {
          title: "IOS Mobile Application Development",
          provider: "FIT Academy",
          type: "Certification Course",
          certificateUrl: "https://drive.google.com/file/d/1x_jHv-kA3wod7q0p90hQd1GMCDOeAacE/view?usp=sharing",
          skills: ["Swift Programming", "iOS SDK", "App Store Deployment"],
        },
        {
          title: "iOS Apps and iOS Development",
          provider: "UP IT Development Center",
          type: "Certification Course",
          certificateUrl: "https://drive.google.com/file/d/1T3fqyihP3_aa5bKoZrtZvwNl_Qesiq7h/view?usp=sharing",
          skills: ["Swift", "Xcode", "iOS Development"],
        },
        {
          title: "Android Mobile Development Training (Advance)",
          provider: "FIT Academy",
          type: "Advanced Certification",
          certificateUrl: "https://drive.google.com/file/d/1X8UWEs16iJq2OAb3IC_-Cc2uWjyTg16l/view?usp=sharing",
          skills: [
            "Advanced Android APIs",
            "Performance Optimization",
            "Material Design",
          ],
        },
        {
          title: "Basic Android Training",
          provider: "FIT Academy",
          type: "Certification Course",
          certificateUrl: "https://drive.google.com/file/d/1sQwyMFtyF27iCsnUY_PNnoUMiq1Qyzit/view?usp=sharing",
          skills: ["Java/Kotlin", "Android SDK", "UI Development"],
        },
      ],
    },
    {
      category: "AI & Productivity",
      icon: "🤖",
      color: "from-purple-600 to-purple-800",
      trainings: [
        {
          title: "ChatGPT Course",
          provider: "Udemy",
          type: "Online Course",
          certificateUrl: "https://drive.google.com/file/d/1hQ88GEoO_AiEKNHrQY_ILTTK7xSLXr2D/view?usp=sharing",
          skills: ["AI Integration", "Prompt Engineering", "Automation"],
        },
      ],
    },
    {
      category: "Project Management & Business",
      icon: "📊",
      color: "from-orange-600 to-orange-800",
      trainings: [
        {
          title: "Scrum Master",
          provider: "APEX Global",
          type: "Professional Certification",
          certificateUrl: "https://drive.google.com/file/d/1PKdYxlJqM-m9BbfdLsKbb2haL0oC0B_c/view?usp=sharing",
          skills: ["Agile Methodology", "Sprint Planning", "Team Leadership"],
        },
        {
          title: "G Suite Admin Training",
          provider: "IPC Empowering Business",
          type: "Professional Training",
          certificateUrl: "https://drive.google.com/file/d/1vjF6JVpSUSXh12mDTcU2Sw7X_Agu16HZ/view?usp=sharing",
          skills: [
            "Google Workspace",
            "Admin Console",
            "Business Productivity",
          ],
        },
        {
          title: "Career Service Examination (Professional)",
          provider: "Civil Service Commission",
          type: "Government Certification",
          certificateUrl: "https://drive.google.com/file/d/1M_aSYoQyTbg80kCfutIrtBRkuxdzbChR/view?usp=sharing",
          skills: [
            "Professional Ethics",
            "Public Service",
            "Career Development",
          ],
        },
      ],
    },
  ];

  const stats = [
    { number: "16", label: "Certifications", icon: "🏆" },
    { number: "7", label: "Training Providers", icon: "🎓" },
    { number: "7+", label: "Years Learning", icon: "📚" },
    { number: "30+", label: "Skills Acquired", icon: "🛠️" },
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
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 text-purple-400">
            Training & Certifications
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Continuous learning journey through professional development
            courses, certifications, and specialized training programs.
          </p> */}
        </motion.div>

        {/* Stats Overview */}
        {/* <motion.section
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
        </motion.section> */}

        {/* Training Categories */}
        <motion.section className="space-y-12" variants={itemVariants}>
          {trainingCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              {/* Category Header */}
              <motion.div
                className="flex items-center mb-8"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`bg-gradient-to-r ${category.color} w-16 h-16 rounded-full flex items-center justify-center mr-4`}
                >
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-purple-400">
                    {category.category}
                  </h2>
                  <p className="text-gray-400">
                    {category.trainings.length} training
                    {category.trainings.length > 1 ? "s" : ""} completed
                  </p>
                </div>
              </motion.div>

              {/* Training Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.trainings.map((training, trainingIndex) => (
                  <motion.a
                    key={training.title}
                    href={training.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700 relative overflow-hidden cursor-pointer block"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + trainingIndex * 0.1,
                    }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(51, 65, 85, 0.6)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {/* Background Decoration */}
                    <motion.div
                      className="absolute top-2 right-2 opacity-10"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <span className="text-4xl">{category.icon}</span>
                    </motion.div>

                    <div className="relative z-10">
                      {/* Training Header */}
                      <motion.div
                        className="mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay:
                            categoryIndex * 0.2 + trainingIndex * 0.1 + 0.2,
                        }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-bold text-purple-300 leading-tight flex-1 mr-2 hover:text-purple-200 transition-colors">
                            {training.title}
                          </h3>
                          <span className="bg-purple-600/20 text-purple-300 px-2 py-1 rounded-full text-xs font-medium">
                            {training.type}
                          </span>
                        </div>
                        <p className="text-gray-400 font-medium mb-2">
                          {training.provider}
                        </p>
                        <div className="flex items-center gap-1 text-blue-400 text-xs font-semibold">
                          <span>📜</span>
                          <span>View Certificate</span>
                        </div>
                      </motion.div>

                      {/* Skills */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay:
                            categoryIndex * 0.2 + trainingIndex * 0.1 + 0.3,
                        }}
                      >
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">
                          Skills Acquired:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {training.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{
                                duration: 0.4,
                                delay:
                                  categoryIndex * 0.2 +
                                  trainingIndex * 0.1 +
                                  0.4 +
                                  skillIndex * 0.05,
                              }}
                              whileHover={{
                                scale: 1.1,
                                backgroundColor: "rgba(51, 65, 85, 0.8)",
                                transition: { duration: 0.2 },
                              }}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>

                      {/* Completion Badge */}
                      <motion.div
                        className="absolute bottom-4 right-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay:
                            categoryIndex * 0.2 + trainingIndex * 0.1 + 0.5,
                        }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">✓</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Learning Philosophy */}
        {/* <motion.section className="mt-16" variants={itemVariants}>
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 max-w-4xl mx-auto text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-3xl font-bold mb-6 text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Continuous Learning Philosophy
            </motion.h3>

            <motion.p
              className="text-lg text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              In the rapidly evolving world of technology, I believe in the
              importance of continuous learning and skill development. These
              certifications and training programs represent my commitment to
              staying current with industry trends and best practices.
            </motion.p>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <motion.div
                className="bg-slate-700/50 p-6 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(51, 65, 85, 0.7)",
                }}
              >
                <div className="text-2xl mb-3">🎯</div>
                <h4 className="text-xl font-semibold text-purple-300 mb-2">
                  Industry Standards
                </h4>
                <p className="text-gray-300 text-sm">
                  Staying aligned with current industry standards and best
                  practices
                </p>
              </motion.div>

              <motion.div
                className="bg-slate-700/50 p-6 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(51, 65, 85, 0.7)",
                }}
              >
                <div className="text-2xl mb-3">🚀</div>
                <h4 className="text-xl font-semibold text-blue-300 mb-2">
                  Emerging Technologies
                </h4>
                <p className="text-gray-300 text-sm">
                  Exploring and adapting to new technologies and methodologies
                </p>
              </motion.div>

              <motion.div
                className="bg-slate-700/50 p-6 rounded-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(51, 65, 85, 0.7)",
                }}
              >
                <div className="text-2xl mb-3">💡</div>
                <h4 className="text-xl font-semibold text-green-300 mb-2">
                  Problem Solving
                </h4>
                <p className="text-gray-300 text-sm">
                  Developing innovative solutions through continuous skill
                  enhancement
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section> */}

        {/* Call to Action */}
        <motion.section className="text-center mt-16" variants={itemVariants}>
          <motion.div
            className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm p-8 rounded-lg border border-purple-500/30 max-w-3xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-2xl font-bold mb-4 text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Ready to Apply These Skills?
            </motion.h3>
            <motion.p
              className="text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              Let's discuss how my diverse training background can contribute to
              your next project.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a
                href="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/projects"
                className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Trainings;
