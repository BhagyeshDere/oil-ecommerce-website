"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Droplet,
  Leaf,
  BadgeCheck,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Transparency",
    icon: Droplet,
    desc: "Every batch is traceable to its source farm with full processing logs.",
    offset: "lg:mt-0",
  },
  {
    title: "Authenticity",
    icon: Leaf,
    desc: "Extracted using heirloom wood-pressing techniques—never refined.",
    offset: "lg:mt-24",
  },
  {
    title: "Quality Assurance",
    icon: BadgeCheck,
    desc: "Triple-filtered and lab-certified for 0% chemical residue.",
    offset: "lg:mt-0",
  },
  {
    title: "Sustainability",
    icon: HeartHandshake,
    desc: "Ethically sourced directly from farmers to ensure fair-trade value.",
    offset: "lg:mt-24",
  },
];

export default function AdvancedTrust() {
  return (
    <section className="relative min-h-[140vh] w-full overflow-visible bg-[#051a16]">
      
      {/* 🖼️ THE STICKY BACKGROUND LAYER */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <Image
          src="/images/oilbg.jpeg"
          alt="Purity Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        {/* Advanced Radial Mask: Fading to Deep Forest Green instead of Black */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#051a16_85%)]" />
        
        {/* Vertical gradient to blend with surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#051a16] via-transparent to-[#051a16] opacity-80" />
        
        {/* Subtle Paper Texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-5 pointer-events-none" />
      </div>

      {/* 🧱 THE SCROLLING CONTENT LAYER */}
      <div className="relative z-10 mt-[-100vh] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* 🔥 HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-32 md:mb-48">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-8 md:w-12 bg-[#c8a24c]" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-[#c8a24c] drop-shadow-md">
                The Gold Standard
              </span>
              <div className="h-[1px] w-8 md:w-12 bg-[#c8a24c]" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl md:text-8xl font-serif text-white max-w-5xl leading-[1.1] drop-shadow-[0_4px_12px_rgba(5,26,22,0.9)]"
            >
              Built on <span className="text-[#c8a24c] italic">Foundations</span> <br className="hidden md:block" /> of Absolute Purity
            </motion.h2>
          </div>

          {/* 🧱 FLOATING GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 lg:gap-8 relative pb-20">
            {features.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
                  className={`relative flex flex-col items-center group ${item.offset}`}
                >
                  {/* ICON ORB - High Visibility Deep Green Glassmorphism */}
                  <div className="relative mb-8 md:mb-10">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#051a16]/60 backdrop-blur-xl flex items-center justify-center relative z-10 border border-white/10 shadow-2xl group-hover:border-[#c8a24c]/60 group-hover:bg-[#051a16]/80 transition-all duration-500">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#c8a24c] drop-shadow-[0_0_8px_rgba(200,162,76,0.3)] group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    {/* Animated Outer Ring */}
                    <div className="absolute inset-[-8px] rounded-full border border-[#c8a24c]/20 group-hover:border-[#c8a24c]/40 group-hover:scale-110 transition-all duration-700" />
                  </div>

                  {/* TEXT CONTENT - Using Dark Green Scrim-Shadows for readability */}
                  <div className="text-center px-4 sm:px-0 max-w-[280px]">
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-white mb-3 group-hover:text-[#c8a24c] transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(5,26,22,0.8)]">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-100/90 leading-relaxed font-light tracking-wide drop-shadow-[0_2px_4px_rgba(5,26,22,1)]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 🏷️ BOTTOM CERTIFICATION BAR */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-24 md:mt-40 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-x-12 md:gap-x-20 gap-y-8"
          >
            {["Certified Organic", "ISO 22000", "Lab Tested", "Fair Trade"].map((cert, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <ShieldCheck size={16} className="text-[#c8a24c] opacity-80 group-hover:opacity-100 transition-opacity" />
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] text-white/50 group-hover:text-white/80 transition-colors drop-shadow-sm">
                  {cert}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Section Blend - Using Dark Green */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#051a16] to-transparent pointer-events-none z-20" />
    </section>
  );
}