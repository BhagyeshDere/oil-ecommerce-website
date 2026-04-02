"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ThermometerSnowflake, HeartPulse, Sparkles, MoveRight } from "lucide-react";

const slides = [
  {
    img: "/images/wood-press-process.png",
    label: "Methodology",
    text: "Slow churned at 14 RPM to preserve the soul of the seed.",
  },
  {
    img: "/images/oil-bg.png", // Replace with your actual slider images
    label: "Purity",
    text: "Natural sedimentation process without toxic filtration.",
  },
  {
    img: "/images/hero-oil1.png", // Replace with your actual slider images
    label: "Harvest",
    text: "Sourced from sun-dried, pesticide-free local farms.",
  }
];

const benefits = [
  {
    title: "100% Natural",
    desc: "Zero chemicals, hexanes, or artificial preservatives.",
    icon: <Leaf className="w-5 h-5" />,
    delay: 0.1,
  },
  {
    title: "Nutrient Rich",
    desc: "Preserves cellular integrity of vitamins & minerals.",
    icon: <HeartPulse className="w-5 h-5" />,
    delay: 0.2,
  },
  {
    title: "Cold Processed",
    desc: "Extracted below 45°C to prevent oxidation.",
    icon: <ThermometerSnowflake className="w-5 h-5" />,
    delay: 0.3,
  },
  {
    title: "Better Taste",
    desc: "Authentic nutty aroma that enhances every dish.",
    icon: <Sparkles className="w-5 h-5" />,
    delay: 0.4,
  },
];

export default function AdvancedWhy() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-32 px-6 md:px-12 overflow-hidden bg-[#fcfcf9]">
      {/* 🏛️ EDITORIAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden">
        <span className="absolute top-20 right-[-5%] text-[15vw] font-serif font-black text-black/[0.02] leading-none uppercase">
          Tradition
        </span>
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-[#0f7b65]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* 🖼️ THE VISUAL ANCHOR: CUSTOM SHAPE IMAGE SLIDER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "circOut" }}
          className="relative"
        >
          {/* Decorative Back-Frame */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-[#c8a24c]/20 rounded-tr-[10rem] rounded-bl-[10rem] -z-10 hidden md:block" />
          
          <div className="relative h-[400px] md:h-[600px] w-full rounded-tr-[8rem] md:rounded-tr-[12rem] rounded-bl-[8rem] md:rounded-bl-[12rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={slides[index].img}
                  alt={slides[index].label}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* The "Living" Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b3d33]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Floating Info Card with Active Content */}
            <motion.div 
              className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl text-white z-20"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-80">{slides[index].label}</p>
                  <p className="text-sm md:text-lg font-serif italic">{slides[index].text}</p>
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Bar Indicators */}
              <div className="flex gap-2 mt-4">
                {slides.map((_, i) => (
                  <div 
                    key={i} 
                    className="h-[2px] flex-1 bg-white/20 overflow-hidden rounded-full"
                  >
                    {index === i && (
                      <motion.div 
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="h-full bg-[#c8a24c]"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 📄 THE CONTENT: STAGGERED INFO */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[2px] bg-[#c8a24c]" />
                <span className="text-[#0f7b65] font-black text-xs uppercase tracking-[0.4em]">The Purity Quotient</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0b3d33] leading-[1.1]">
                Beyond <span className="text-[#c8a24c] italic">Extraction</span>, <br />
                We Practice Preservation.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                Refined oils use extreme heat and solvents. We use gravity and patience. Our wooden <i>Lakdi Ghani</i> churners ensure no nutrient is left behind.
              </p>
            </div>

            {/* ADVANCED BENEFITS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.delay }}
                  whileHover={{ scale: 1.02 }}
                  className="group p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(15,123,101,0.08)] transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#0f7b65]/5 flex items-center justify-center text-[#0f7b65] group-hover:bg-[#c8a24c] group-hover:text-white transition-all duration-500 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-[#0b3d33] mb-1 group-hover:text-[#c8a24c] transition-colors uppercase tracking-tight text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* ACTION CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full sm:w-auto flex items-center justify-center gap-4 px-8 py-4 bg-[#0b3d33] text-white rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl shadow-[#0b3d33]/20 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-[#c8a24c] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                <span className="relative z-10">Compare Processes</span>
                <MoveRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              </motion.button>
              
              <button className="text-[#0b3d33] font-black text-[10px] uppercase tracking-[0.3em] border-b-2 border-[#c8a24c] pb-1 hover:text-[#c8a24c] transition-all">
                Our Lab Certifications
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}