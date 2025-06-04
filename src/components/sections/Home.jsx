import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import Spline from "@splinetool/react-spline";

const words = [
  "Aspiring Developer.",
  "Athletic Aficionado.",
  "Computer Science Student."
];

export const Home = () => {
  const sectionRef = useRef(null);
  const [index, setIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#6885b6] to-[#c9d9f4] text-gray-100"
    >
      <div className="flex flex-col md:flex-row items-center w-full z-10 pl-50 md:pl-125">
        {/* Hero Content */}
        <motion.div
          style={{ opacity }}
          className="md:w-1/2 flex flex-col items-start space-y-6 z-10 md:pr-12"
        >
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1]
            }}
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
            <a
              href="https://github.com/BaoVu2004"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl transition-colors"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/_baovu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/_baovu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-3xl transition-colors"
            >
              <FaFacebook />
            </a>
          </div>

          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 1.1,
              ease: [0.22, 1, 0.36, 1]
            }}
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
          <span className="absolute bottom-8 left-8 text-xs md:text-sm text-white/80 font-mono tracking-wide z-20">
            Based in Sydney, Australia
          </span> 
        </motion.div>

      </div>

      <motion.a
        href="#about"
        initial={{ y: 0, opacity: 0.7 }}
        animate={{ y: [0, 24, 0], opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-9xl cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <svg width="100" height="50" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto animate-pulse drop-shadow-lg">
          <circle cx="18" cy="18" r="16" strokeOpacity="0.5"/>
          <path d="M12 18l6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  );
};