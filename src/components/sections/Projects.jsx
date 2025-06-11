import React from "react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      title: "AI Chatbox???",
      img: "/testingimg.jpg",
      desc: "Work in Progress...",
    },
    {
      title: "Untitles Project",
      img: "/testingimg.jpg",
      desc: "Work in Progress...",
    },
    {
      title: "Untitled Project",
      img: "/testingimg.jpg",
      desc: "Work in Progress...",
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <>
      <div className="w-full shadow-inner h-[1px] w-full bg-[#e5e7eb]" />
      <section id="projects" className="w-full min-h-screen  py-20 px-30 flex flex-col items-center">
        <div className="w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 w-full">
          {/* Left: Button */}
          <motion.button
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="flex items-center gap-2 px-6 py-2 bg-blue-200 text-blue-900 font-semibold rounded-lg shadow hover:bg-blue-100 transition mt-8 md:mt-0 order-2 md:order-1"
          >
            <span>See All Projects</span>
            {/* Arrow Icon */}
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          {/* Right: Title */}
          <div className="flex flex-col items-end text-right order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="flex items-center gap-4 justify-end"
            >
              <hr className="border-blue-500 w-27" />
              <span className="text-4xl font-small text-blue-500">Recent</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
              className="text-5xl font-extrabold text-blue-500 tracking-wider mt-2"
            >
              PROJECTS
            </motion.h1>
          </div>
        </div>
        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="relative group overflow-hidden shadow-lg h-[1000px] flex items-center justify-center bg-white/10 cursor-pointer transition-transform duration-300 hover:scale-105 rounded-4xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-300 group-hover:brightness-50"
              />
              <div className="relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-3xl font-bold text-white mb-4 drop-shadow-lg">{project.title}</h1>
                <p className="text-blue-100 text-base">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </section>
    </>
  );
};
