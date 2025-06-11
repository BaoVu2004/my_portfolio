import React from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section id="contact" className="w-full bg-[#f0f4fc] py-24 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold italic text-[#2a3550] tracking-widest mb-1">LET'S</h2>
          <h1 className="text-3xl md:text-4xl font-extrabold italic text-[#2a3550] tracking-wider">CONNECT</h1>
        </motion.div>
        {/* Contact Area */}
        <div className="flex flex-col md:flex-row justify-between items-stretch w-full gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex-1 flex flex-col justify-center items-start text-left"
          >
            <h1 className="text-[#2a3550] font-extrabold uppercase leading-[1.1] text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "IBM Plex Sans, sans-serif" }}>
              LET'S START<br />
              <span className="ml-12 md:ml-16 block">OUR STORY</span><br />
              TOGETHER
            </h1>
          </motion.div>
          {/* Right Side (Form) */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            className="flex-1 flex flex-col gap-6 justify-center"
            onSubmit={e => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="YOUR NAME"
              className="bg-transparent border-b border-white text-white placeholder-white placeholder-opacity-70 p-4 text-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL ADDRESS"
              className="bg-transparent border-b border-white text-white placeholder-white placeholder-opacity-70 p-4 text-lg focus:outline-none"
            />
            <textarea
              placeholder="WHAT CAN I HELP FOR YOU?"
              className="bg-transparent border-b border-white text-white placeholder-white placeholder-opacity-70 p-4 text-lg focus:outline-none resize-none min-h-[100px]"
            />
            <button
              type="submit"
              className="mt-4 border border-white text-white font-bold rounded-md py-2 transition hover:bg-white hover:text-black uppercase tracking-wider"
            >
              SEND
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};