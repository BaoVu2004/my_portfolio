import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { LogoTicker } from "../LogoTicker";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "HTML", "CSS"];
  const backendSkills = ["Node.js", "Python", "Java", "C", "JavaScript"];

  return (
    <section
      id="about"
      className="min-h-screen py-20 flex justify-center items-center bg-[#c9d9f4]"
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
          className="w-full max-w-full mx-auto py-10 flex flex-col items-center p-6 bg-white/60 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">

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
              {/* Heading moved here */}
                <div className="mb-8">
                  <h2 className="text-5xl font-extrabold text-[#1f3b73] mb-2">
                    ABOUT ME
                  </h2>
                <div className="w-70 h-1 bg-blue-900 rounded-full" />
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
                My goal? To design clean, scalable solutions that blend technical depth with real-world value — ideally with some slick UI along 
                the way. Whether it's machine learning, system design, or creative problem-solving, I’m here for it.
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

          {/* Skills Section */}
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all w-full bg-white/70">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center text-[#2c4470]">Frontend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {frontendSkills.map((skills) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                      key={skills}
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center text-[#2c4470]">Backend</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {backendSkills.map((skills) => (
                    <span
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                      key={skills}
                    >
                      {skills}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/70">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2c4470]">🎓 Education</h3>
              <ul className="list-disc list-inside text-gray-900 space-y-2 text-center">
                <li>
                  <strong>
                    Studying Bachelor of Computing Science (Honours) - University of Technology Sydney
                  </strong>
                </li>
                <li>
                  Relevant Coursework: Data Structures and Algorithms, Web Development, Cloud Computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all bg-white/70">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2c4470]" >💼 Work Experience</h3>
              <div className="space-y-4 text-gray-900 text-center">
                <div>
                  <h4 className="font-semibold">Pending Internship at ...</h4>
                  <p>Currently applying to a lot of internships</p>
                </div>
                <div>
                  <h4 className="font-semibold">Pending Internship at ...</h4>
                  <p>Currently applying to a lot of internships</p>
                </div>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all md:col-span-2 bg-white/70">
              <h3 className="text-xl font-bold mb-4 text-center text-[#2c4470]">🏋️‍♂️ Hobbies</h3>
              <ul className="list-disc list-inside text-gray-900 space-y-2 text-center">
                <li>Going to the gym</li>
                <li>Playing weekend Basketball with friends</li>
                <li>Going on random hikes and runs</li>
                <li>Building interesting side projects</li>
                <li>Watching anime during my free time</li>
                <li>Trying new coffee and matcha places</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};