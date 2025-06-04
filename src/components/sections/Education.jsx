import { motion } from "framer-motion";

export const Education = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full bg-gradient-to-b from-[#6885b6] to-[#c9d9f4] py-16"
    >
      <h2 className="text-4xl font-serif font-bold text-center text-white mb-10">Education</h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto px-4">
        {/* Card 1 */}
        <div className="flex-1 bg-white/10 rounded-2xl shadow-lg flex flex-col items-center p-8">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            {/* Example: Compass Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="M16 8l-4 8-4-4 8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
            </svg>
          </div>
          <div className="text-xl font-bold text-center text-white mb-2">University of Technology Sydney</div>
          <div className="text-blue-100 text-center mb-4">Bachelor of Computing Science (Honours)</div>
          <div className="w-full h-px bg-blue-200 my-2"></div>
          <div className="text-blue-200 font-semibold text-sm mt-2">WAM: 90 GPA: 6.75</div>
        </div>
        {/* Card 2 */}
        <div className="flex-1 bg-white/10 rounded-2xl shadow-lg flex flex-col items-center p-8">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            {/* Example: Museum Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="6" y="10" width="12" height="8" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M6 10V8a6 6 0 0112 0v2" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="text-xl font-bold text-center text-white mb-2">Fairvale High School</div>
          <div className="text-blue-100 text-center mb-4">HSC Graduate</div>
          <div className="w-full h-px bg-blue-200 my-2"></div>
          <div className="text-blue-200 font-semibold text-sm mt-2">Listed among "2021 HSC Distinguished Achievers"</div>
        </div>
      </div>
    </motion.section>
  );
};