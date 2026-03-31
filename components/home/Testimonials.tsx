"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Home Chef",
    text: "Absolutely pure and authentic oil. The aroma reminds me of traditional village oils. It's rare to find this quality nowadays.",
  },
  {
    name: "Priya Patel",
    role: "Fitness Enthusiast",
    text: "Great quality! My cooking tastes much better now. I specifically love the wood-pressed texture. Highly recommended for health-conscious families.",
  },
  {
    name: "Amit Verma",
    role: "Daily Consumer",
    text: "Healthy and chemical-free. You can actually feel the difference in the lightness of the food. The mustard oil is a game changer.",
  },
  {
    name: "Sneha Kulkarni",
    role: "Nutritionist",
    text: "Perfect for daily use. Loved the packaging and freshness! As a nutritionist, I approve of their cold-pressing methods.",
  },
];

export default function AdvancedTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextStep, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.6, type: "spring", stiffness: 300, damping: 30 },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -45 : 45,
      transition: { duration: 0.4 },
    }),
  };

  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#fcfcf9]">
      {/* 🎨 BACKGROUND DECOR */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0f7b65]/5 rounded-full blur-[120px]" />
        <Quote className="absolute top-20 left-20 w-64 h-64 text-[#0f7b65]/5 -rotate-12" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* 🔥 HEADER */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }}
            className="text-[#c8a24c] font-black text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Voice of our Tribe
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0b3d33]">
            Trust in every <span className="text-[#c8a24c] italic text-3xl md:text-5xl">drop</span>
          </h2>
        </div>

        {/* 💬 INTERACTIVE STACK */}
        <div className="relative perspective-1000 h-[400px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 bg-white/40 backdrop-blur-2xl border border-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(15,123,101,0.1)] flex flex-col items-center justify-center text-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#c8a24c" className="text-[#c8a24c]" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="relative">
                <p className="text-[#0b3d33] text-xl md:text-3xl font-medium leading-relaxed italic">
                  "{reviews[index].text}"
                </p>
              </blockquote>

              {/* Author Details */}
              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0f7b65] flex items-center justify-center text-white font-black shadow-lg shadow-[#0f7b65]/20">
                  {reviews[index].name.charAt(0)}
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-[#0b3d33] uppercase tracking-tighter">
                    {reviews[index].name}
                  </h4>
                  <p className="text-[10px] font-black text-[#c8a24c] uppercase tracking-widest">
                    {reviews[index].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons (Desktop) */}
          <div className="hidden md:block">
            <button 
              onClick={prevStep}
              className="absolute -left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#0f7b65]/20 flex items-center justify-center text-[#0f7b65] hover:bg-[#0f7b65] hover:text-white transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextStep}
              className="absolute -right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-[#0f7b65]/20 flex items-center justify-center text-[#0f7b65] hover:bg-[#0f7b65] hover:text-white transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* 🔘 MODERN PROGRESS INDICATORS */}
        <div className="flex justify-center gap-6 mt-20">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="relative group"
            >
              <div className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-[#0f7b65]" : "w-4 bg-[#0f7b65]/20 group-hover:bg-[#0f7b65]/40"
              }`} />
              {/* Tooltip on hover */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#0f7b65] opacity-0 group-hover:opacity-100 transition-opacity">
                0{i + 1}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}