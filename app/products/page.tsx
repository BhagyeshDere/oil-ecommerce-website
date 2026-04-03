"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, SlidersHorizontal, Star } from "lucide-react";
import { oils } from "@/data/oils";

export default function ProductsPage() {
  return (
    <section className="relative bg-[#fcfcf9] pt-28 pb-20 px-4 md:px-8 overflow-hidden">

      {/* 🔥 BACKGROUND DESIGN */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#c8a24c]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0f7b65]/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* 🧠 HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-14">

          <div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-[#0b3d33] leading-tight">
              Discover Pure <span className="text-[#c8a24c] italic">Oils</span>
            </h1>
            <p className="text-gray-500 mt-2 max-w-xl text-sm md:text-base">
              Cold-pressed, chemical-free oils crafted to preserve nutrition and taste.
            </p>
          </div>

          <button className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all">
            <SlidersHorizontal size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">
              Filters
            </span>
          </button>
        </div>

        {/* 🛒 PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {oils.map((oil, i) => (
            <motion.div
              key={oil.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-[2rem] p-3 border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-20px_rgba(200,162,76,0.2)] transition-all"
            >

              {/* 🔗 FULL CARD CLICK */}
              <Link
                href={`/products/${oil.id}`}
                className="absolute inset-0 z-10"
              />

              {/* 🌟 BADGE */}
              <div className="absolute top-4 left-4 bg-[#c8a24c] text-white text-[10px] px-3 py-1 rounded-full font-bold shadow z-20">
                Premium
              </div>

              {/* IMAGE */}
              <div className="relative aspect-square rounded-[1.5rem] bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="relative w-36 h-36 md:w-44 md:h-44"
                >
                  <Image
                    src={oil.images[0]} // ✅ FIXED
                    alt={oil.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.1)]"
                  />
                </motion.div>
              </div>

              {/* CONTENT */}
              <div className="px-4 py-5 space-y-3 relative z-20">

                {/* NAME */}
                <div className="text-center">
                  <h3 className="text-[#0b3d33] font-bold text-base md:text-lg group-hover:text-[#c8a24c] transition-colors">
                    {oil.name}
                  </h3>
                  <p className="text-gray-400 text-[11px] uppercase">
                    5 Litres
                  </p>
                </div>

                {/* RATING */}
                <div className="flex items-center justify-center gap-1 text-[#c8a24c]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#c8a24c" />
                  ))}
                </div>

                {/* PRICE */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-gray-300 line-through text-sm">
                    ₹{oil.originalPrice || 2100}
                  </span>
                  <span className="text-xl md:text-2xl font-black text-[#0b3d33]">
                    ₹{oil.price}
                  </span>
                </div>

                {/* BUTTON */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // 🚨 stop navigation
                    e.stopPropagation();
                    console.log("Add to cart:", oil);
                  }}
                  className="w-full mt-2 h-11 bg-[#0b3d33] text-white rounded-xl flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest hover:bg-[#0f7b65] transition-all"
                >
                  Add to Cart <ShoppingCart size={14} />
                </button>
              </div>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-[#c8a24c]/30 transition-all" />
            </motion.div>
          ))}
        </div>

        {/* 🔗 LOAD MORE */}
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-[#c8a24c] text-[#0b3d33] font-black uppercase text-xs tracking-widest rounded-full shadow-lg hover:scale-105 transition-all">
            Load More Products
          </button>
        </div>

      </div>
    </section>
  );
}