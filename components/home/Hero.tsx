"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Leaf, ChevronRight, ChevronLeft } from "lucide-react";

const HERO_SLIDES = [
  {
    title: "GOLDEN",
    subtitle: "TRADITION",
    desc: "Preserving the cellular integrity of every seed. Experience the purity of wood-pressed oils crafted for your daily wellness.",
    img: "/images/hero-oil1.png",
  },
  {
    title: "PURE",
    subtitle: "ESSENCE",
    desc: "Slow-crafted at room temperature to retain natural antioxidants and smoky aromas in every drop.",
    img: "/images/oil-bg.png",
  },
  {
    title: "VITAL",
    subtitle: "HEALTH",
    desc: "From farm to bottle, zero chemicals, zero heat. Just 100% liquid wellness delivered to your kitchen.",
    img: "/images/wood-press-process.png",
  },
];

export default function StandardHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));

  return (
    <section className="relative w-full min-h-screen md:h-[80vh] md:min-h-[700px] md:max-h-[900px] bg-[#0b3d33] overflow-hidden">
      
      {/* 🖼️ BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[current].img}
              alt="Background"
              fill
              priority
              className="object-cover brightness-[0.45] contrast-[1.05]"
              sizes="100vw"
            />
            {/* 🌑 Centralized Radial Overlay for better text contrast */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(11,61,51,0.5)_100%)]" />
            <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center text-center">
        
        {/* 📝 CENTRALIZED CONTENT CONTAINER */}
        <div className="max-w-4xl flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-[#c8a24c]/20 rounded-full">
                  <Leaf size={16} className="text-[#c8a24c]" />
                </div>
                <span className="text-white/80 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">
                  Authentic Wood Pressed
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-white font-serif font-bold text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-6 select-none">
                {HERO_SLIDES[current].title} <br />
                <span className="text-[#c8a24c] italic font-light block md:inline-block">
                  {HERO_SLIDES[current].subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="text-white/70 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-medium">
                {HERO_SLIDES[current].desc}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group relative px-10 py-4 bg-[#c8a24c] text-[#0b3d33] font-black rounded-full overflow-hidden transition-all hover:shadow-[0_10px_40px_rgba(200,162,76,0.4)] active:scale-95">
                  <span className="relative z-10 flex items-center gap-3 tracking-widest text-xs uppercase">
                    Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                
                <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all text-xs tracking-widest uppercase backdrop-blur-sm">
                  Our Story
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🧭 NAVIGATION (Centralized at bottom) */}
        <div className="absolute bottom-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          
          <div className="flex items-center gap-6">
            <button 
              onClick={prevSlide}
              className="text-white/40 hover:text-[#c8a24c] transition-colors p-2"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>

            {/* Progress Indicators */}
            <div className="flex gap-3">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className="group py-2 focus:outline-none"
                  aria-label={`Go to slide ${idx + 1}`}
                >
                  <div className={`h-[2px] transition-all duration-700 rounded-full ${
                    current === idx ? "w-10 bg-[#c8a24c]" : "w-4 bg-white/20 group-hover:bg-white/40"
                  }`} />
                </button>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className="text-white/40 hover:text-[#c8a24c] transition-colors p-2"
              aria-label="Next slide"
            >
              <ChevronRight size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* 🏷️ BACKGROUND WATERMARK (Centered behind text) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <AnimatePresence mode="wait">
          <motion.h2 
            key={current}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.03, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="text-white text-[22vw] font-serif font-black select-none uppercase leading-none opacity-[0.03]"
          >
            PRASATTI
          </motion.h2>
        </AnimatePresence>
      </div>

    </section>
  );
}