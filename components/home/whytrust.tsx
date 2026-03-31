"use client";

import React from "react";
import { motion } from "framer-motion";
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
    <section className="relative py-32 px-6 overflow-hidden bg-[#fdfcf9]">
      
      {/* 🌫️ KINETIC ENERGY FIELD (Amended for Purity Theme) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-emerald-100/40 rounded-full blur-[140px]" 
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🔥 MINIMALIST HEADER */}
        <div className="flex flex-col items-center text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-[#c8a24c]/40" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1F7A63]">The Standard</span>
            <div className="h-[1px] w-12 bg-[#c8a24c]/40" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl md:text-7xl font-serif text-[#0b3d33] max-w-4xl leading-[1.1]"
          >
            Built on <span className="text-[#c8a24c] italic">Foundations</span> <br className="hidden md:block" /> of Absolute Purity
          </motion.h2>
        </div>

        {/* 🧱 ORGANIC FLOATING GRID (No Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c8a24c]/20 to-transparent z-0" />

          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                className={`relative z-10 flex flex-col items-center group ${item.offset}`}
              >
                {/* FLOATING ICON ORB */}
                <div className="relative mb-10">
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="w-24 h-24 rounded-full bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] flex items-center justify-center relative z-10 border border-emerald-50/50"
                  >
                    <Icon className="w-9 h-9 text-[#1F7A63] transition-transform duration-500 group-hover:scale-110" />
                  </motion.div>
                  
                  {/* Outer Pulsing Halo */}
                  <div className="absolute inset-[-15px] rounded-full border border-dashed border-[#c8a24c]/20 animate-[spin_20s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Dot Indicator */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#c8a24c]" />
                </div>

                {/* TEXT CONTENT (Frameless) */}
                <div className="text-center max-w-[240px] px-2">
                  <h3 className="text-2xl font-serif font-bold text-[#0b3d33] mb-4 group-hover:text-[#c8a24c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500/90 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                {/* Number Watermark (Subtle) */}
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[100px] font-black text-[#0b3d33]/[0.02] pointer-events-none select-none">
                  0{index + 1}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* 🏷️ CERTIFICATION BAR */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-40 flex flex-wrap justify-center items-center gap-x-12 gap-y-6"
        >
          {["Certified Organic", "ISO 22000", "Lab Tested", "Fair Trade"].map((cert, i) => (
            <div key={i} className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#c8a24c]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0b3d33]/40">
                {cert}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}