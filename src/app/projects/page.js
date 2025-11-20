"use client";

import { motion } from "framer-motion";
import Navigation from "../../components/Navigation";

const Projects = () => {
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

  const projects = [
    {
      title: "Online Enrollment System",
      category: "Web Application",
      company: "NYK-FIL MARITIME E-TRAINING, INC.",
      description:
        "Comprehensive enrollment management system for maritime training courses with student registration, course management, and payment processing.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
      features: [
        "Student registration and profile management",
        "Course catalog and scheduling",
        "Payment gateway integration",
        "Certificate generation",
        "Admin dashboard with analytics",
      ],
      icon: "🎓",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      title: "Online Enrollment Mobile App",
      category: "Mobile Application",
      company: "NYK-FIL MARITIME E-TRAINING, INC.",
      description:
        "Cross-platform mobile application for the enrollment system, allowing students to register and manage their courses on-the-go.",
      technologies: [
        "React Native",
        "Capacitor.js",
        "Next.js",
        "API Integration",
      ],
      features: [
        "Cross-platform compatibility (iOS & Android)",
        "Offline course viewing",
        "Push notifications",
        "Mobile payment integration",
        "Real-time course updates",
      ],
      icon: "📱",
      gradient: "from-purple-600 to-purple-800",
    },
    {
      title: "Meal Tracker System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Digital meal tracking and management system for maritime training facilities with inventory management and nutritional tracking.",
      technologies: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
      features: [
        "Daily meal planning and tracking",
        "Nutritional information database",
        "Inventory management",
        "Cost analysis and reporting",
        "Dietary restriction management",
      ],
      icon: "🍽️",
      gradient: "from-green-600 to-green-800",
    },
    {
      title: "SpoonPH Fitness App",
      category: "Web & Mobile App",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Comprehensive fitness and nutrition tracking application with meal planning, workout routines, and progress monitoring.",
      technologies: ["React", "Laravel", "MySQL", "Capacitor.js"],
      features: [
        "Workout routine planning",
        "Nutrition tracking and meal plans",
        "Progress monitoring with charts",
        "Social features and challenges",
        "Personal trainer connectivity",
      ],
      icon: "💪",
      gradient: "from-orange-600 to-orange-800",
    },
    {
      title: "Telephone Directory System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Internal communication directory system for managing contacts, departments, and communication within the organization.",
      technologies: ["PHP", "MySQL", "Bootstrap", "jQuery"],
      features: [
        "Employee directory management",
        "Department-wise organization",
        "Advanced search and filtering",
        "Contact import/export",
        "Role-based access control",
      ],
      icon: "📞",
      gradient: "from-teal-600 to-teal-800",
    },
    {
      title: "Library System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Digital library management system for tracking books, managing loans, and maintaining library inventory.",
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js"],
      features: [
        "Book catalog and inventory management",
        "Loan tracking and due date management",
        "Student/member management",
        "Fine calculation and payment",
        "Report generation and analytics",
      ],
      icon: "📚",
      gradient: "from-indigo-600 to-indigo-800",
    },
    {
      title: "Procurement System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Enterprise procurement management system for handling purchase requests, vendor management, and approval workflows.",
      technologies: ["Laravel", "MySQL", "Vue.js", "PDF Generation"],
      features: [
        "Purchase request management",
        "Vendor and supplier database",
        "Approval workflow system",
        "Budget tracking and reporting",
        "Purchase order generation",
      ],
      icon: "🛒",
      gradient: "from-red-600 to-red-800",
    },
    {
      title: "Work Order Monitoring System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Comprehensive work order tracking system for facility maintenance and task management with real-time status updates.",
      technologies: ["Laravel", "MySQL", "Bootstrap", "WebSocket"],
      features: [
        "Work order creation and tracking",
        "Real-time status updates",
        "Technician assignment and scheduling",
        "Asset and equipment management",
        "Performance analytics and reporting",
      ],
      icon: "🔧",
      gradient: "from-yellow-600 to-yellow-800",
    },
    {
      title: "Inventory System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Advanced inventory management system for tracking stock levels, managing suppliers, and automating reorder processes.",
      technologies: ["Laravel", "MySQL", "Chart.js", "Barcode Scanner"],
      features: [
        "Real-time inventory tracking",
        "Barcode scanning integration",
        "Automated reorder alerts",
        "Supplier management",
        "Inventory analytics and forecasting",
      ],
      icon: "📦",
      gradient: "from-cyan-600 to-cyan-800",
    },
    {
      title: "NYK Lecturer Payroll System",
      category: "Web Application",
      company: "NYK-Fil Maritime E-Training, Inc.",
      description:
        "Automated payroll management system for maritime training lecturers with timesheet integration and tax calculations.",
      technologies: ["Laravel", "MySQL", "PDF Generation", "Excel Export"],
      features: [
        "Automated payroll calculations",
        "Timesheet and attendance tracking",
        "Tax and deduction management",
        "Payslip generation",
        "Financial reporting and analytics",
      ],
      icon: "💰",
      gradient: "from-emerald-600 to-emerald-800",
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
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4"
          variants={itemVariants}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-purple-400">
            My Projects
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-6"></div>
          {/* <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of successful projects delivered during my professional journey,
            demonstrating expertise across web and mobile development.
          </p> */}
        </motion.div>

        {/* Stats Overview */}
        {/* <motion.section
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          variants={itemVariants}
        >
          <motion.div
            className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-400 mb-2">
              {projects.length}+
            </h3>
            <p className="text-gray-300">Projects Completed</p>
          </motion.div>

          <motion.div
            className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-400 mb-2">7+</h3>
            <p className="text-gray-300">Years Experience</p>
          </motion.div>

          <motion.div
            className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-400 mb-2">2</h3>
            <p className="text-gray-300">Mobile Apps</p>
          </motion.div>

          <motion.div
            className="text-center bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg border border-slate-700"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-purple-400 mb-2">100%</h3>
            <p className="text-gray-300">Success Rate</p>
          </motion.div>
        </motion.section> */}

        {/* Projects Grid */}
        <motion.section
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-4"
          variants={itemVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${project.gradient} p-6 sm:p-8 rounded-lg border border-slate-600 relative overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {/* Background decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 opacity-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="text-5xl">{project.icon}</div>
              </motion.div>

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.05 }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-3xl mr-3">{project.icon}</span>
                    <div>
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-100 text-xs sm:text-sm font-medium">
                    {project.company}
                  </p>
                </motion.div>

                {/* Description */}
                <motion.p
                  className="text-gray-100 text-sm sm:text-base mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.05 }}
                >
                  {project.description}
                </motion.p>

                {/* Technologies */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                >
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-100">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.05 + techIndex * 0.02,
                        }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.05 }}
                >
                  <h4 className="text-base sm:text-lg font-semibold mb-3 text-gray-100">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features
                      .slice(0, 3)
                      .map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-start text-gray-100"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.6 + index * 0.05 + featureIndex * 0.02,
                          }}
                        >
                          <span className="text-white mr-2 mt-1">•</span>
                          <span className="text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    {project.features.length > 3 && (
                      <motion.li
                        className="flex items-start text-gray-100"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.7 + index * 0.05,
                        }}
                      >
                        <span className="text-white mr-2 mt-1">•</span>
                        <span className="text-sm">
                          +{project.features.length - 3} more features
                        </span>
                      </motion.li>
                    )}
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="text-center mt-12 sm:mt-16 px-4"
          variants={itemVariants}
        >
          <motion.div
            className="bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-lg border border-slate-700 max-w-4xl mx-auto"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold mb-4 text-purple-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ready to Start Your Next Project?
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Let's collaborate and bring your ideas to life with cutting-edge
              technology solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
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
                href="https://github.com/MysticMaccc"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 px-6 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View GitHub
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Projects;
