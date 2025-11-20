"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
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

  const experiences = [
    {
      position: "Assistant Manager",
      company: "NYK-FIL MARITIME E-TRAINING, INC.",
      period: "2025 - Present",
      duration: "Current",
      type: "Management Role",
      achievements: [
        "Leading development initiatives",
        "Managing development team and project coordination",
        "Overseeing system architecture and technical strategy",
        "Ensuring project delivery excellence and quality standards",
        "Collaborating with process owners on business objectives",
      ],
      technologies: [
        "Laravel",
        "React",
        "Next.js",
        "Livewire",
        "Tailwind CSS",
        "Capacitor.js",
        "MySQL",
        "Git",
      ],
    },
    {
      position: "Senior Developer",
      company: "NYK-FIL MARITIME E-TRAINING, INC.",
      period: "2021-2025",
      duration: "4 years",
      type: "Senior Role",
      achievements: [
        "Successfully delivered 11+ major projects including Online Enrollment System, Meal Tracker System, and SpoonPH Fitness App",
        "Developed full-stack web applications and mobile applications (Android and IOS)",
        "Implemented React (Next.js) + Laravel",
        "Led development of systems including Procurement, Inventory, Library, and Work Order Monitoring systems",
        "Established development best practices and coding standards",
        "Mentored junior developers and conducted code reviews",
      ],
      technologies: [
        "Laravel",
        "React",
        "Next.js",
        "Livewire",
        "Tailwind CSS",
        "Capacitor.js",
        "MySQL",
        "Git",
      ],
    },
    {
      position: "Junior Developer",
      company: "NYK-FIL MARITIME E-TRAINING, INC.",
      period: "2018-2021",
      duration: "3 years",
      type: "Junior Role",
      achievements: [
        "Contributed to development of web-based systems and applications",
        "Gained proficiency in PHP, Laravel Framework, and JavaScript",
        "Participated in full software development lifecycle",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "jQuery",
        "HTML/CSS",
        "Git",
      ],
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
        {/* Page Title */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h1 className="text-5xl font-bold mb-4 text-purple-400">
            Work Experience
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey spanning 7+ years of software development
            experience at NYK-FIL MARITIME E-TRAINING, INC.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.section
          className="relative max-w-4xl mx-auto"
          variants={itemVariants}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-400 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0 ? "flex-row-reverse" : "flex-row"
              } mb-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-slate-900 z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.3 + 0.2 }}
                whileHover={{ scale: 1.5, backgroundColor: "#a855f7" }}
              />

              {/* Content card */}
              <motion.div
                className={`w-5/12 ${
                  index % 2 === 0 ? "ml-auto pr-8" : "mr-auto pl-8"
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.1 }}
                >
                  {/* Header */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          exp.type === "Management Role"
                            ? "bg-green-600/20 text-green-300"
                            : exp.type === "Senior Role"
                            ? "bg-purple-600/20 text-purple-300"
                            : "bg-blue-600/20 text-blue-300"
                        }`}
                      >
                        {exp.type}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {exp.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-purple-400 mb-1">
                      {exp.position}
                    </h3>
                    <p className="text-xl text-gray-300 mb-2">{exp.company}</p>
                    <p className="text-gray-400 font-medium">{exp.period}</p>
                  </motion.div>

                  {/* Achievements */}
                  <motion.div
                    className="mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.3 + 0.5 + i * 0.1,
                          }}
                        >
                          <span className="text-purple-400 mr-2 mt-1">▸</span>
                          <span className="text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Technologies */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.3 + 0.6 }}
                  >
                    <h4 className="text-lg font-semibold text-purple-300 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-xs font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.3 + 0.7 + i * 0.05,
                          }}
                          whileHover={{
                            scale: 1.1,
                            backgroundColor: "rgba(147, 51, 234, 0.3)",
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Experience;
