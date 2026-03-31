"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Droplets } from "lucide-react";

const categories = [
  {
    name: "Groundnut Oil",
    tagline: "Rich & Hearty",
    image: "/images/Categories/groundnut.png",
    color: "from-amber-500/20",
  },
  {
    name: "Sunflower Oil",
    tagline: "Light & Versatile",
    image: "/images/Categories/sunflower.png",
    color: "from-yellow-400/20",
  },
  {
    name: "Safflower Oil",
    tagline: "Pure Wellness",
    image: "/images/Categories/safflower.png",
    color: "from-orange-400/20",
  },
  {
    name: "Sesame Oil",
    tagline: "Aromatic Essence",
    image: "/images/Categories/sesame.png",
    color: "from-emerald-500/20",
  },
];

export default function AdvancedCategories() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#fcfcf9]">
      {/* 🎨 ADVANCED TEXTURED BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* 🔥 HEADER WITH DYNAMIC UNDERLINE */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-12 h-[2px] bg-[#c8a24c]" />
              <span className="text-[#0b3d33] font-black uppercase tracking-[0.3em] text-xs">Premium Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0b3d33] leading-none">
              Shop by <span className="text-[#c8a24c] italic">Essence</span>
            </h2>
          </motion.div>
          
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-gray-500 max-w-xs text-sm font-medium leading-relaxed border-l-2 border-gray-100 pl-4"
          >
            Cold-pressed to preserve cellular integrity. Choose the oil that aligns with your culinary lifestyle.
          </motion.p>
        </div>

        {/* 🧱 STAGGERED BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {categories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "circOut" }}
              // Adds staggered Y offset for LG screens only
              className={`group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer ${
                i % 2 !== 0 ? "lg:mt-12" : "lg:mb-12"
              }`}
            >
              {/* IMAGE LAYER */}
              <motion.div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1"
                />
                {/* Dynamic Tint Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b ${item.color} to-[#0b3d33]/80 opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
              </motion.div>

              {/* FLOATING BADGE (TOP) */}
              <div className="absolute top-6 left-6 overflow-hidden">
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-full text-white"
                >
                  <Droplets size={18} />
                </motion.div>
              </div>

              {/* CONTENT (BOTTOM) */}
              <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                <motion.div 
                  className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-[#c8a24c] font-bold text-[10px] uppercase tracking-[0.2em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {item.tagline}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-serif font-bold leading-tight mb-4">
                    {item.name}
                  </h3>
                  
                  {/* EXPLORE BUTTON REVEAL */}
                  <div className="flex items-center gap-2 text-white/0 group-hover:text-white transition-all duration-500 overflow-hidden">
                    <span className="text-xs font-black uppercase tracking-widest translate-x-[-20px] group-hover:translate-x-0 transition-transform">
                      Explore Details
                    </span>
                    <ArrowUpRight size={16} className="translate-y-4 group-hover:translate-y-0 transition-transform" />
                  </div>
                </motion.div>
              </div>

              {/* INTERACTIVE BORDER GLOW */}
              <div className="absolute inset-0 rounded-[2rem] border-[1px] border-white/10 group-hover:border-[#c8a24c]/50 transition-colors duration-500" />
              
              {/* ADVANCED SHINE ANIMATION */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-1000 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🏷️ BACKGROUND DECOR */}
      <div className="absolute -bottom-10 -right-10 text-[20vw] font-serif font-black text-black/[0.02] pointer-events-none select-none">
        NATURE
      </div>
    </section>
  );
}