"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, MoveRight, ShoppingBag, Sparkles } from "lucide-react";

export default function AdvancedFeatured() {
  return (
    <section className="relative py-24 px-6 md:py-32 overflow-hidden bg-[#fcfcf9]">
      {/* 🌫️ ARCHITECTURAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[40%] bg-[#c8a24c]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[50%] bg-[#0b3d33]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* 🏺 LEFT: THE VISUAL ORBIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Animated Orbiting Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[320px] h-[320px] md:w-[500px] md:h-[500px] border-[1px] border-dashed border-[#c8a24c]/30 rounded-full"
          />

          {/* Product Glow Base */}
          <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-gradient-to-tr from-[#c8a24c]/20 to-transparent rounded-full blur-3xl" />

          {/* Floating Product Image */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative z-10 w-[260px] md:w-[420px] h-[350px] md:h-[550px]"
          >
            <Image
              src="/images/oils/groundnut.png"
              alt="Premium Groundnut Oil"
              fill
              className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
            />
          </motion.div>

          {/* Floating Feature Badge */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute right-0 top-20 z-20 bg-white/80 backdrop-blur-md border border-[#c8a24c]/20 p-4 rounded-2xl shadow-xl hidden md:block"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#c8a24c] p-2 rounded-lg text-white">
                <Sparkles size={16} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Purity Level</p>
                <p className="text-sm font-bold text-[#0b3d33]">100% Cold Pressed</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* 📜 RIGHT: EDITORIAL CONTENT */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Super-Header */}
            <div className="space-y-2">
              <span className="text-[#c8a24c] font-black text-xs uppercase tracking-[0.4em] block">
                The Gold Standard
              </span>
              <h2 className="text-5xl md:text-7xl font-serif font-bold text-[#0b3d33] leading-[0.9]">
                Groundnut <br />
                <span className="italic text-[#c8a24c] font-medium text-4xl md:text-6xl">Liquid Tradition</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg border-l-4 border-[#c8a24c]/20 pl-6">
              Sourced from single-origin farms, our groundnut oil undergoes a slow wood-pressing process that preserves every vital nutrient and the deep, nutty aroma your kitchen deserves.
            </p>

            {/* Benefit Grid (Unique Chips) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Omega-6 Fatty Acids",
                "Vitamin E Rich",
                "Zero Cholesterol",
                "High Smoke Point",
                "No Chemical Solvents",
                "Unrefined Purity",
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02, backgroundColor: "rgba(200, 162, 76, 0.05)" }}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 bg-white shadow-sm transition-all"
                >
                  <CheckCircle2 size={18} className="text-[#c8a24c]" />
                  <span className="text-sm font-bold text-[#0b3d33]/80">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Interactive CTA Group */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full sm:w-auto px-10 py-5 bg-[#0b3d33] text-white rounded-full overflow-hidden transition-all shadow-2xl shadow-[#0b3d33]/20"
              >
                <div className="absolute inset-0 bg-[#c8a24c] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3 font-bold text-sm uppercase tracking-widest">
                  Shop This Blend <ShoppingBag size={18} />
                </span>
              </motion.button>

              <button className="flex items-center gap-3 text-[#0b3d33] font-black text-xs uppercase tracking-widest group hover:text-[#c8a24c] transition-colors">
                View Lab Reports <MoveRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}