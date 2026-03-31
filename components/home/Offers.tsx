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
    <section className="relative py-32 px-6 overflow-hidden bg-[#fcfcf9]">
      {/* 🧩 ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c8a24c]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#0f7b65]/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 HEADER WITH VELOCITY */}
        <div className="flex flex-col items-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-[#c8a24c]/10 border border-[#c8a24c]/20"
          >
            <Sparkles size={14} className="text-[#c8a24c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#8b5e34]">Exclusive Deals</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold text-[#0b3d33] text-center"
          >
            This Month's <span className="text-[#c8a24c] italic">Specials</span>
          </motion.h2>
        </div>

        {/* 🛒 ADVANCED GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {offers.map((item, i) => {
            const savings = item.oldPrice - item.price;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_30px_60px_-20px_rgba(200,162,76,0.15)]"
              >
                {/* 🏷️ FLOATING SAVINGS BADGE */}
                <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
                  <div className="bg-[#0f7b65] text-white text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                    <TrendingDown size={12} />
                    SAVE ₹{savings}
                  </div>
                  <span className="bg-white/90 backdrop-blur-sm text-[#c8a24c] text-[9px] font-bold px-2 py-0.5 rounded-md border border-gray-100 shadow-sm">
                    {item.tag}
                  </span>
                </div>

                {/* 🖼️ IMAGE WRAPPER WITH INNER GLOW */}
                <div className="relative aspect-square rounded-[2rem] bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#c8a24c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative w-40 h-40 md:w-48 md:h-48 z-10"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
                    />
                  </motion.div>
                </div>

                {/* 📄 PRODUCT SPECS */}
                <div className="px-6 py-6 space-y-4">
                  <div className="text-center">
                    <h3 className="text-[#0b3d33] font-bold text-lg leading-tight group-hover:text-[#c8a24c] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-gray-400 text-xs font-medium tracking-widest uppercase mt-1">
                      {item.volume}
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3">
                    <span className="text-gray-300 line-through text-sm font-medium">₹{item.oldPrice}</span>
                    <span className="text-2xl font-black text-[#0b3d33]">₹{item.price}</span>
                  </div>

                  {/* ADVANCED ADD TO CART BUTTON */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    className="w-full relative h-12 bg-[#0b3d33] rounded-2xl overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-[#c8a24c] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                    <div className="relative z-10 flex items-center justify-center gap-2 text-white group-hover/btn:text-[#0b3d33] transition-colors">
                      <span className="text-xs font-black uppercase tracking-widest">Add To Basket</span>
                      <div className="bg-white/10 p-1 rounded-lg group-hover/btn:bg-[#0b3d33]/10">
                        <Plus size={14} />
                      </div>
                    </div>
                  </motion.button>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-100 rounded-full group-hover:bg-[#c8a24c]/30 transition-colors" />
              </motion.div>
            );
          })}
        </div>

        {/* 🔗 BOTTOM CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <button className="inline-flex items-center gap-3 text-[#0b3d33] font-black text-xs uppercase tracking-[0.3em] hover:text-[#c8a24c] transition-colors group">
            View All Bundle Offers
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#c8a24c] transition-all">
              <ShoppingCart size={14} />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}