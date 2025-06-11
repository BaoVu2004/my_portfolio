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

  // Animated background blobs
  // You can add more or change colors as you like!
  // No need for scrollY here, just looping animation
  // If you want parallax for an image, use useScroll/useTransform as in previous answers

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
      {/* Animated background blobs */}
      <motion.div
        animate={{ y: [0, -60, 0] }}
        transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-[80px] right-[80px] w-[220px] h-[220px] bg-blue-400/40 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-[100px] right-[-60px] w-[180px] h-[180px] bg-blue-400/40 rounded-full blur-2xl z-0"
      />
      <motion.div
        animate={{ y: [0, -40, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-[20%] left-[200px] w-[200px] h-[200px] bg-blue-400/40 rounded-full blur-2xl z-0"
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[600px] w-[160px] h-[160px] bg-blue-400/40 rounded-full blur-2xl z-0"
      />
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
        transition={{ duration: 11, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute top-[40%] left-[40%] w-[120px] h-[120px] bg-blue-400/40 rounded-full blur-2xl z-0"
      />

      {/* Absolute profile circle on the right with animation and fade on scroll */}
      <motion.div
        initial={{ scale: 0.7, opacity: 0, y: 80 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        style={{ opacity }} // <-- fade away on scroll
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden md:block absolute top-1/2 right-[20%] -translate-y-1/2 z-30"
      >
      <div className="w-180 h-180 rounded-full bg-white/80 shadow-2xl border-5 border-blue-400 flex items-center justify-center overflow-hidden">
        <img
          src="/testingimg.jpg"
          alt="Bao Vu"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center w-full z-10 pl-50 md:pl-185">
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
            className="text-white font-extrabold text-9xl md:text-10xl text-center tracking-tight drop-shadow-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
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
                className="text-white text-4xl md:text-4xl text-center font-light absolute whitespace-pre"
              >
                {"\t\t"}{words[index]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/baovu-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-4xl transition-colors"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/baovudev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-4xl transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://instagram.com/_baovu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-4xl transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/_baovu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-4xl transition-colors"
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
              className="bg-blue-600 text-white py-3 px-8 rounded font-semibold text-xl shadow-lg hover:bg-blue-700 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-600 text-blue-500 py-3 px-8 rounded font-semibold text-xl hover:bg-blue-600 hover:text-white transition"
            >
              Contact Me
            </a>
          </motion.div>
          <span className="absolute bottom-8 left-8 font-bold text-md md:text-xl text-white font-mono tracking-wide z-20">
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