"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Droplets, Heart, Eye, Target, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative bg-[#fcfcf9] pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      
      {/* 🌿 AMBIENT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[600px] h-[600px] bg-[#c8a24c]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-0 w-[500px] h-[500px] bg-[#0f7b65]/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🧠 HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div {...fadeIn}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-[#c8a24c]" />
              <span className="text-[#c8a24c] font-black text-[10px] uppercase tracking-[0.4em]">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0b3d33] leading-[0.9] mb-8">
              Rooted in <br /> <span className="text-[#c8a24c] italic text-6xl md:text-8xl">Tradition.</span>
            </h1>
            <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
              At Prasatti, we preserve the ancient art of wood-pressed extraction. 
              We don't just make oil; we revive a legacy of wellness that has been 
              lost to industrial processing. Every drop is a testament to purity.
            </p>

            <div className="flex gap-12 mt-12">
              <div>
                <h3 className="text-4xl font-serif font-bold text-[#0b3d33]">100%</h3>
                <p className="text-[#c8a24c] text-[10px] font-black uppercase tracking-widest mt-1">Organic Seeds</p>
              </div>
              <div className="w-[1px] h-12 bg-gray-200" />
              <div>
                <h3 className="text-4xl font-serif font-bold text-[#0b3d33]">Lakdi</h3>
                <p className="text-[#c8a24c] text-[10px] font-black uppercase tracking-widest mt-1">Ghani Method</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden group shadow-2xl"
          >
            <Image
              src="/images/wood-press-process.png" // Ensure this path is correct
              alt="Wood Press Process"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b3d33]/40 to-transparent" />
          </motion.div>
        </div>

        {/* 🎯 MISSION & VISION - MODERN ASYMMETRICAL LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <motion.div 
            {...fadeIn}
            className="bg-[#0b3d33] p-12 md:p-16 rounded-[3rem] text-white flex flex-col justify-between"
          >
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="text-[#c8a24c]" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#c8a24c]">Our Mission</h2>
              <p className="text-white/70 leading-relaxed text-lg">
                To eliminate chemically processed oils from every kitchen by providing 
                access to 100% natural, wood-pressed oils that prioritize health 
                over shelf-life.
              </p>
            </div>
          </motion.div>

          <motion.div 
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="bg-white p-12 md:p-16 rounded-[3rem] border border-gray-100 shadow-xl flex flex-col justify-between"
          >
            <div className="w-14 h-14 bg-[#c8a24c]/10 rounded-2xl flex items-center justify-center mb-8">
              <Eye className="text-[#c8a24c]" size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6 italic text-[#0b3d33]">Our Vision</h2>
              <p className="text-gray-500 leading-relaxed text-lg">
                To become the global standard for purity in the edible oil industry, 
                fostering a world where tradition and modern wellness coexist 
                harmoniously for future generations.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ✨ CORE VALUES - GLASSMORPHIC CARDS */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0b3d33] mb-4">
              The Prasatti <span className="text-[#c8a24c] italic">Way</span>
            </h2>
            <p className="text-gray-500 uppercase text-[10px] font-black tracking-[0.4em]">Our Core Principles</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Leaf />, title: "Zero Chemicals", desc: "No hexanes, no argemone, just pure seeds." },
              { icon: <ShieldCheck />, title: "Authenticity", desc: "Sourced directly from local sustainable farms." },
              { icon: <Droplets />, title: "Living Nutrients", desc: "Cold processing retains 100% of the enzymes." },
              { icon: <Heart />, title: "Holistic Health", desc: "Designed to improve heart and skin vitality." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#c8a24c]/30 hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#fcfcf9] text-[#0b3d33] group-hover:bg-[#c8a24c] group-hover:text-white transition-all duration-500 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0b3d33] mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🌾 THE PROCESS SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-xl lg:order-1"
          >
            <Image
              src="/images/oil-bg.png"
              alt="Our Process"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0b3d33] mb-8 leading-tight">
              Slow Crafted for <br /> <span className="text-[#c8a24c] italic text-5xl md:text-6xl">Full Flavor.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Unlike industrial refined oils that use high heat and solvents, our 
              Lakdi Ghani method operates at room temperature. This slow, patient 
              crushing preserves the natural fatty acids and smoky aroma that 
              defines real oil.
            </p>
            <ul className="space-y-4">
              {["Sustainably harvested seeds", "Traditional wood-press extraction", "Natural sedimentation (No filtering)"].map((text, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-[#0b3d33]">
                  <div className="w-2 h-2 rounded-full bg-[#c8a24c]" />
                  {text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 🔥 FINAL CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative bg-[#0b3d33] rounded-[4rem] px-8 py-20 text-center overflow-hidden"
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#c8a24c]/10 rounded-full translate-y-1/2 -translate-x-1/2" />

          <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 relative z-10">
            Join the <span className="text-[#c8a24c] italic">Purity</span> Movement
          </h3>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto relative z-10">
            Ready to taste the difference that wood-pressing makes? 
            Start your journey toward a healthier kitchen today.
          </p>

          <button className="group relative px-12 py-5 bg-[#c8a24c] text-[#0b3d33] font-black rounded-full uppercase text-[10px] tracking-[0.3em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl">
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Oils <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}