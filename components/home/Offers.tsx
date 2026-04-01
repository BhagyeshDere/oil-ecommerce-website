"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Plus, Sparkles, TrendingDown } from "lucide-react";

const offers = [
  {
    name: "Coconut Oil",
    volume: "5 Litres",
    price: 1999,
    oldPrice: 2100,
    image: "/images/oils/coconut.png",
    tag: "Best Seller",
  },
  {
    name: "Groundnut Oil",
    volume: "5 Litres",
    price: 1999,
    oldPrice: 2100,
    image: "/images/oils/groundnut.png",
    tag: "Popular",
  },
  {
    name: "Sesame Oil",
    volume: "5 Litres",
    price: 1999,
    oldPrice: 2100,
    image: "/images/oils/sesame.png",
    tag: "New Offer",
  },
  {
    name: "Mustard Oil",
    volume: "5 Litres",
    price: 2050,
    oldPrice: 2100,
    image: "/images/oils/mustard.png",
    tag: "Limited",
  },
];

export default function AdvancedOffers() {
  return (
    <section className="relative py-16 md:py-24 px-4 md:px-10 overflow-hidden bg-[#fcfcf9]">
      {/* 🧩 ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-[#c8a24c]/5 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0f7b65]/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 HEADER WITH VELOCITY - Reduced bottom margin for tighter fit */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-[#c8a24c]/10 border border-[#c8a24c]/20"
          >
            <Sparkles size={14} className="text-[#c8a24c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8b5e34]">Exclusive Deals</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0b3d33] text-center"
          >
            This Month's <span className="text-[#c8a24c] italic">Specials</span>
          </motion.h2>
        </div>

        {/* 🛒 ADVANCED GRID - Standard spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {offers.map((item, i) => {
            const savings = item.oldPrice - item.price;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-[2rem] p-1.5 border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_25px_50px_-15px_rgba(200,162,76,0.12)]"
              >
                {/* 🏷️ FLOATING SAVINGS BADGE */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                  <div className="bg-[#0f7b65] text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <TrendingDown size={12} />
                    SAVE ₹{savings}
                  </div>
                  <span className="bg-white/95 backdrop-blur-sm text-[#c8a24c] text-[9px] font-bold px-2 py-0.5 rounded-md border border-gray-100 shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* 🖼️ IMAGE WRAPPER - Normalized aspect ratio */}
                <div className="relative aspect-[4/5] rounded-[1.75rem] bg-gradient-to-b from-gray-50/50 to-white overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c8a24c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="relative w-36 h-36 md:w-44 md:h-44 z-10"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.08)]"
                    />
                  </motion.div>
                </div>

                {/* 📄 PRODUCT SPECS */}
                <div className="px-5 py-5 space-y-3.5">
                  <div className="text-center">
                    <h3 className="text-[#0b3d33] font-bold text-lg leading-tight group-hover:text-[#c8a24c] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mt-1">
                      {item.volume}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-2.5">
                    <span className="text-gray-300 line-through text-xs font-semibold">₹{item.oldPrice}</span>
                    <span className="text-xl font-black text-[#0b3d33]">₹{item.price}</span>
                  </div>

                  {/* ADVANCED ADD TO CART BUTTON */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    className="w-full relative h-11 bg-[#0b3d33] rounded-xl overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-[#c8a24c] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <div className="relative z-10 flex items-center justify-center gap-2 text-white group-hover/btn:text-[#0b3d33] transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest">Add To Basket</span>
                      <div className="bg-white/10 p-1 rounded-lg group-hover/btn:bg-[#0b3d33]/10">
                        <Plus size={12} />
                      </div>
                    </div>
                  </motion.button>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gray-100 rounded-full group-hover:bg-[#c8a24c]/40 transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* 🔗 BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 text-center"
        >
          <button className="inline-flex items-center gap-3 text-[#0b3d33] font-black text-[10px] uppercase tracking-[0.25em] hover:text-[#c8a24c] transition-colors group">
            View All Bundle Offers
            <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#c8a24c] group-hover:shadow-md transition-all">
              <ShoppingCart size={14} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}