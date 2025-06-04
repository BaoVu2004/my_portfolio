import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { LogoTicker } from "../LogoTicker";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "HTML", "CSS"];
  const backendSkills = ["Node.js", "Python", "Java", "C", "JavaScript"];

  return (
    <section
      id="about"
      className="min-h-screen py-20 flex flex-col items-center bg-gradient-to-b from-[#c9d9f4] to-white"
    >
      <RevealOnScroll>
        {/* Logo Ticker */}
        <div className="flex justify-center mb-8 w-full">
          <div className="w-[1000px] sm:w-[1400px] max-w-full overflow-hidden">
            <LogoTicker />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="w-full max-w-full mx-auto py-10 flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20"
        >
          {/* Photo and text side by side */}
          <div className="flex flex-col md:flex-row items-start justify-left mb-10 gap-12 w-full pl-30">
            {/* Photo */}
            <div className="ring-1 ring-blue-200 shadow-md rounded-xl hover:scale-105 transition-transform duration-300 flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-8 md:mb-0 mt-3 ml-3 p-3">
              <img
                src="/testingimg.jpg"
                alt="Bao Vu"
                className="w-[700px] h-[700px] object-cover rounded-xl shadow-lg border-2 border-blue-200"
              />
            </div>
            {/* Text */}
            <div className="flex-1 max-w-1xl text-center md:text-left justify-right pl-20 pr-50">
              {/* Heading */}
              <div className="mb-8 flex items-center gap-30">
                <h2 className="text-5xl font-extrabold text-[#1f3b73]">
                  ABOUT ME
                </h2>
                <div className="w-100 h-1 bg-blue-900 rounded-full flex-1" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Hello <span className="wave-hand">👋</span>, my name is
              </h3>
              <h1 className="text-7xl font-bold text-slate-800 mb-5">
                Bao <span className="text-blue-500"> Vu </span>{" "}
              </h1>
              <p className="text-[20px] text-gray-900 text-lg leading-relaxed mb-4">
                a Sydney-based Computer Science student with big dreams, decent biceps, and an even bigger love for building cool stuff with code. 
                Currently studying Computer Science at UTS, I spend my days toggling between front-end finesse, back-end logic, and figuring out 
                how AI and fintech can make the world a little smarter (and my projects a little cooler).
              </p>
              <p className="text-[20px] text-gray-900 text-lg leading-relaxed mb-4">
                My goal? To design clean, scalable solutions that blend technical depth with real-world value especially in the field of sportstech and fintech. 
                Whether it's machine learning, system design, or creative problem-solving, I’m here for it.
              </p>
              <p className="text-[20px] text-gray-900 text-lg leading-relaxed mb-4">
                When I’m not shipping code or debugging life, you’ll probably catch me at the gym trying to outlift yesterday’s self, or out 
                on a spontaneous run to chase down both fitness and inspiration. I'm always up for building something meaningful — one line of code 
                (or sip of matcha) at a time.
              </p>
              {/* Download Resume Button */}
              <div className="mt-6 flex justify-center md:justify-start">
                <a
                  href="/BaoVu_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition mt-8"
                >
                  📄 View My Resume
                </a>
              </div>
              {/* Soft divider */}
              <div className="my-10 w-full h-6 bg-gradient-to-b from-transparent via-blue-200/30 to-transparent rounded-full" />
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};