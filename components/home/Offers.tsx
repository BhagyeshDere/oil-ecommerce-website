"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Sparkles, TrendingDown, ArrowRight, CheckCircle2, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { oils } from "@/data/oils"; // ✅ Imported master data

export default function AdvancedOffers() {
  const { addToCart, cart } = useCart();
  const [showPopup, setShowPopup] = useState(false);
  const [lastAdded, setLastAdded] = useState<any>(null);

  const handleAddToCart = (item: any) => {
    const product = {
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.images[0], // ✅ Using first image from array
      quantity: 1,
    };
    addToCart(product);
    setLastAdded(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 5000);
  };

  const subtotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

  // ✅ Take the first 4 oils for the "Seasonal Offerings" section
  const displayOils = oils.slice(0, 4);

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-10 overflow-hidden bg-[#fcfcf9] selection:bg-[#c8a24c]/20">
      
      {/* 🧩 ARCHITECTURAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] bg-[#c8a24c]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-1/4 w-[600px] h-[600px] bg-[#0f7b65]/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🔥 HEADER SECTION */}
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-4 px-5 py-2 rounded-full bg-white border border-[#c8a24c]/20 shadow-sm"
          >
            <Sparkles size={14} className="text-[#c8a24c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#8b5e34]">The Harvest Collection</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0b3d33] text-center leading-[1.1]"
          >
            Seasonal <span className="text-[#c8a24c] italic">Offerings</span>
          </motion.h2>
          <div className="w-24 h-1 bg-[#c8a24c]/20 mt-8 rounded-full" />
        </div>

        {/* 🛒 PRODUCT GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {displayOils.map((item, i) => {
            // ✅ Fallback logic for missing data fields
            const oldPrice = item.originalPrice || item.price + 150;
            const savings = oldPrice - item.price;
            const volumeLabel = "5 Litres • Wood Pressed";
            const badgeTag = i === 0 ? "Best Seller" : "Premium";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -12 }}
                className="group relative bg-white rounded-[2.5rem] p-2 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] transition-all hover:shadow-[0_40px_70px_-20px_rgba(200,162,76,0.15)]"
              >
                {/* SAVINGS TAG */}
                <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2 pointer-events-none">
                  <motion.div className="bg-[#0b3d33] text-white text-[9px] font-black px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xl">
                    <TrendingDown size={12} className="text-[#c8a24c]" />
                    SAVE ₹{savings}
                  </motion.div>
                  <span className="bg-white/90 backdrop-blur-md text-[#c8a24c] text-[8px] font-black px-2.5 py-1 rounded-md border border-[#c8a24c]/10 shadow-sm uppercase tracking-widest">
                    {badgeTag}
                  </span>
                </div>

                {/* 🔗 CLICKABLE PRODUCT AREA */}
                <Link href={`/products/${item.id}`} className="block outline-none">
                  {/* IMAGE */}
                  <div className="relative aspect-[4/5] rounded-[2.2rem] bg-gradient-to-tr from-[#fcfcf9] via-white to-[#c8a24c]/5 overflow-hidden flex items-center justify-center p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -2, y: -5 }}
                      className="relative w-full h-full z-10"
                    >
                      {item.images?.[0] ? (
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-50 rounded-2xl animate-pulse" />
                      )}
                    </motion.div>
                  </div>

                  {/* TITLE + INFO */}
                  <div className="px-6 py-7 space-y-5 text-center">
                    <h3 className="text-[#0b3d33] font-serif font-bold text-2xl group-hover:text-[#c8a24c] transition-colors duration-300">
                      {item.name}
                    </h3>

                    <p className="text-[#8b5e34]/60 text-[10px] font-black tracking-[0.2em] uppercase mt-2">
                      {volumeLabel}
                    </p>

                    <div className="flex items-center justify-center gap-3">
                      <span className="text-gray-300 line-through text-xs font-medium italic">
                        ₹{oldPrice}
                      </span>
                      <span className="text-2xl font-black text-[#0b3d33]">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                </Link>

                {/* 🛒 ADD TO CART BUTTON */}
                <div className="px-6 pb-6">
                  <motion.button
                    whileTap={{ scale: 0.96 }}
                    onClick={(e) => {
                      e.preventDefault(); 
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="group/btn relative w-full h-14 bg-[#0b3d33] rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-500 shadow-lg"
                  >
                    <div className="absolute inset-0 bg-[#c8a24c] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                    <div className="relative z-10 flex items-center gap-3 text-white group-hover/btn:text-[#0b3d33] transition-colors duration-500">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em]">Add to Cart</span>
                      <div className="h-5 w-[1px] bg-white/20 group-hover/btn:bg-[#0b3d33]/20" />
                      <Plus size={16} className="group-hover/btn:rotate-90 transition-transform duration-500" />
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🔗 EXPLORE MORE CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mt-20 flex justify-center">
          <Link href="/products" className="group flex items-center gap-6 px-10 py-5 bg-white border border-gray-100 rounded-full shadow-md hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col items-start">
              <span className="text-[10px] font-black text-[#c8a24c] uppercase tracking-widest">Discover All</span>
              <span className="text-sm font-bold text-[#0b3d33]">View Collection</span>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#0b3d33] flex items-center justify-center text-white group-hover:rotate-[-45deg] transition-all duration-500">
              <ArrowRight size={20} />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* ✨ UNIQUE ADVANCED CART ALERT */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, x: 100, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-6 right-6 z-[100] w-[340px] md:w-[400px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(11,61,51,0.25)] border border-[#0b3d33]/5 overflow-hidden"
          >
            <div className="bg-[#e8f3f1] px-5 py-3 flex items-center justify-between border-b border-[#0b3d33]/5">
              <div className="flex items-center gap-2 text-[#0f7b65]">
                <CheckCircle2 size={18} strokeWidth={3} />
                <span className="text-[11px] font-black uppercase tracking-widest">Added to your cart</span>
              </div>
              <button onClick={() => setShowPopup(false)} className="text-[#0b3d33]/40 hover:text-[#0b3d33] transition-colors">
                <X size={18} />
              </button>
            </div>

            <div className="p-5 flex gap-5 items-center">
              <div className="relative w-20 h-24 bg-[#fcfcf9] rounded-xl flex-shrink-0 border border-gray-100 p-2">
                {lastAdded && (
                  <Image src={lastAdded.image} alt="Added Product" fill className="object-contain" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[#0b3d33] font-serif font-bold text-lg leading-tight">{lastAdded?.name}</span>
                <span className="text-[#8b5e34] text-[10px] font-bold uppercase tracking-widest mt-1">5 Litres • Wood Pressed</span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[#0b3d33] font-black text-xl">₹{lastAdded?.price.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="px-5 pb-5 pt-2 border-t border-gray-50 bg-[#fcfcf9]/50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Subtotal ({cart.length} items):</span>
                <span className="text-[#0b3d33] font-black text-lg">₹{subtotal.toLocaleString()}</span>
              </div>
              
              <Link 
                href="/cart" 
                onClick={() => setShowPopup(false)}
                className="w-full h-14 bg-[#8ca691] hover:bg-[#0b3d33] text-white rounded-xl font-bold uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all group shadow-md active:scale-95"
              >
                <ShoppingBag size={16} />
                View Cart
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}