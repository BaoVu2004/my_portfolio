import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const logos = [
  { src: '/python-logo.svg', width: 52, height: 52, name:'Python' },
  { src: '/css3-logo.svg', width: 48, height: 48, name:'CSS' },
  { src: '/html5-logo.svg', width: 48, height: 48, name:'HTML' },
  { src: '/javascript-logo.svg', width: 48, height: 48, name:'JavaScript' },
  { src: '/node-logo.svg', width: 48, height: 48, name:'Node' },
  { src: '/react-logo.svg', width: 48, height: 48, name:'React' },
  { src: '/tailwind-logo.svg', width: 48, height: 48, name:'Tailwind' },
  { src: '/mysql.svg', width: 48, height: 48, name:'MySQL' },
  { src: '/git.svg', width: 48, height: 48, name:'Git' },
];

export const LogoTicker = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className="py-8 md:py-12 mt-8 bg-[#82A7BE]/20] backdrop-blur-sm rounded-lg">
      <div className="overflow-hidden">
        <div className="flex text-grey-900 [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]">
          <motion.div
            className="flex gap-14 md:gap-20 flex-none pr-14"
            animate={shouldAnimate ? { translateX: "-50%" } : { translateX: "0%" }}
            initial={{ translateX: "0%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center gap-4">
                <img
                  src={logo.src}
                  alt={`${logo.name} Logo`}
                  width={logo.width}
                  height={logo.height}
                  className="grayscale brightness-0 invert opacity-70 hover:grayscale-0 hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300"
                  draggable={false}
                />
                <span className="text-xl font-bold text-blue-900 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};