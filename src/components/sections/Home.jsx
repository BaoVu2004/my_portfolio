import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

const words = ["Aspiring Developer.", "Athletic Aficionado.", "Hopeful Procrastinator."];

export const Home = () => {

    const [index, setIndex] = useState(0);

    useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#6885b6] to-[#c9d9f4]">
     

      {/* Hero Content */}
      <div className="md:w-1/2 flex flex-col items-start space-y-6 z-10">
        <motion.h1
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white font-extrabold text-5xl md:text-8xl text-center tracking-tight drop-shadow-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
        >
          BAO VU
        </motion.h1>
        <div className="h-14 relative">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-white text-xl md:text-3xl text-center font-light absolute whitespace-nowrap overflow-hidden"
            >
              {words[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex space-x-6 mb-8">
          <a href="https://github.com/BaoVu2004" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors">
            <SiGithub />
          </a>
          <a href="https://instagram.com/_baovu" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-3xl transition-colors">
            <FaLinkedin />
          </a>
        </div>

        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-blue-600 text-white py-3 px-8 rounded font-semibold text-lg shadow-lg hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-500 py-3 px-8 rounded font-semibold text-lg hover:bg-blue-600 hover:text-white transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};