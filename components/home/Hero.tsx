"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Star } from "lucide-react";

export default function CentralizedHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effects
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#fcfcf9]"
    >
      {/* 🌿 FULL-SIZE DYNAMIC BACKGROUND LAYER */}
      <motion.div 
        style={{ scale: imageScale, y: imageY, opacity }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero-oil1.png" 
          alt="Premium Wood Pressed Oil Collection"
          fill
          priority
          className="object-cover object-[center_top] brightness-[0.7] contrast-[1.05]"
        />
        
        {/* Advanced Multi-Layer Overlay for Legibility */}
        <div className="absolute inset-0 bg-black/20 z-10" /> 
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b3d33]/50 via-transparent to-[#fcfcf9] z-10" />
      </motion.div>

      {/* ✨ MAIN CONTENT (CENTERED) */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 text-center">
        <motion.div style={{ y: textY }} className="flex flex-col items-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full mb-6"
          >
            <Leaf size={16} className="text-[#c8a24c]" />
            <span className="text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              100% Cold Pressed Essence
            </span>
          </motion.div>

          {/* Headline: Refined Massive Bold Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white font-serif font-bold text-5xl md:text-7xl lg:text-9xl leading-[0.9] tracking-tighter mb-6"
          >
            GOLDEN <br />
            <span className="text-[#c8a24c]">TRADITION</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-10 drop-shadow-lg"
          >
            Preserving the cellular integrity of every seed. Experience the 
            purity of wood-pressed oils crafted for your wellness.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 mb-12"
          >
            <button className="group relative px-12 py-5 bg-[#c8a24c] text-[#0b3d33] font-black rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 tracking-widest text-sm uppercase">
                Shop Now <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </button>

            <button className="px-12 py-5 border-2 border-white/40 text-white font-bold rounded-full backdrop-blur-lg hover:bg-white hover:text-black transition-all">
              EXPLORE OUR STORY
            </button>
          </motion.div>

          {/* Horizontal Metrics Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 pt-10 border-t border-white/20 w-full max-w-3xl">
            {[
              { icon: <ShieldCheck size={20} />, label: "Certified Organic" },
              { icon: <Star size={20} />, label: "Wood Pressed" },
              { icon: <Leaf size={20} />, label: "Zero Chemicals", className: "hidden md:flex" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className={`flex flex-col items-center gap-3 text-[#c8a24c] ${item.className}`}
              >
                <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white">
                  {item.icon}
                </div>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>

      {/* 🏷️ SUBTLE BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
        <h2 className="text-white/[0.05] text-[22vw] font-serif font-black select-none uppercase leading-none">
          PURE
        </h2>
      </div>

      {/* 🌊 SECTION TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fcfcf9] to-transparent z-30" />
    </section>
  );
}