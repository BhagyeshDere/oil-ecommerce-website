"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, User, Search, MapPin, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Subtle logic to change navbar appearance on scroll for that "advanced" feel
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-500 ${isScrolled ? "translate-y-[-2px]" : ""}`}>
      
      {/* 🔝 Minimalist Utility Bar */}
      <div className="bg-[#0b3d33] text-white/80 text-[10px] px-8 py-1.5 flex justify-between items-center tracking-[0.1em] font-semibold uppercase">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 group cursor-default">
            <MapPin size={10} className="text-[#c8a24c] animate-pulse" /> 
            <span className="group-hover:text-white transition-colors text-[9px]">Direct from Source, India</span>
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-white/20" />
          <span className="hidden sm:inline-block hover:text-white cursor-pointer transition-colors text-[9px]">🌿 Lab Tested Purity</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="hover:text-[#c8a24c] cursor-pointer transition-all flex items-center gap-1">
            Track <ChevronRight size={10} />
          </span>
          <span className="text-[#c8a24c] bg-white/5 px-2 py-0.5 rounded-sm">Replacement Guaranteed</span>
        </div>
      </div>

      {/* 🧭 Advanced Glass Navbar */}
      <div className={`transition-all duration-500 backdrop-blur-2xl ${
        isScrolled 
          ? "bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-gray-100" 
          : "bg-white/95 border-b border-transparent"
      }`}>
        
        <div className="flex items-center justify-between px-8 py-2.5 max-w-[1500px] mx-auto">

          {/* Logo Section */}
          <div className="flex-shrink-0 cursor-pointer relative group">
            <div className="absolute -inset-2 bg-[#0f7b65]/5 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500" />
            <Image
              src="/images/logo.png"
              alt="OilStore Logo"
              width={95} 
              height={35}
              className="relative object-contain transition-all duration-500 group-hover:brightness-110"
            />
          </div>

          {/* Bento-Style Search Interface */}
          <div className="hidden md:flex items-center w-[38%] relative group">
            <div className="flex items-center w-full bg-gray-100/50 rounded-2xl border border-transparent group-focus-within:border-[#0f7b65]/20 group-focus-within:bg-white group-focus-within:shadow-[0_0_20px_rgba(15,123,101,0.05)] transition-all duration-500 overflow-hidden">
              <div className="pl-4 text-gray-400 group-focus-within:text-[#0f7b65] transition-colors">
                <Search size={16} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Find your perfect cold-pressed oil..."
                className="w-full px-3 py-2.5 bg-transparent outline-none text-[13px] text-gray-700 placeholder-gray-400 font-medium italic"
              />
              <button className="mr-1 my-1 px-5 py-1.5 bg-[#0b3d33] text-[#c8a24c] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#0f7b65] hover:text-white active:scale-95 transition-all shadow-lg shadow-[#0b3d33]/10">
                Search
              </button>
            </div>
          </div>

          {/* Luxury Action Icons */}
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-50 transition-all group relative overflow-hidden">
              <User size={18} className="text-gray-600 group-hover:text-[#0b3d33] group-hover:scale-110 transition-all" />
              <span className="text-[11px] font-black text-gray-800 hidden lg:block uppercase tracking-tighter">Profile</span>
            </button>

            <div className="w-[1px] h-4 bg-gray-200 mx-2" />

            <button className="relative flex items-center gap-2 px-4 py-2 bg-[#0b3d33] text-white rounded-xl hover:shadow-[0_10px_20px_rgba(11,61,51,0.15)] transition-all group active:scale-95">
              <div className="relative">
                <ShoppingCart size={18} className="group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-2.5 -right-2.5 bg-[#c8a24c] text-[#0b3d33] text-[9px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full border-2 border-[#0b3d33] shadow-sm">
                  0
                </span>
              </div>
              <span className="text-[11px] font-black hidden lg:block uppercase tracking-tighter">My Cart</span>
            </button>
          </div>
        </div>

        {/* 📂 Premium Category Ribbon */}
        <div className="flex justify-center border-t border-gray-50/50 bg-[#fcfcf9]/40">
          <nav className="flex gap-10 px-8 py-2 overflow-x-auto no-scrollbar scroll-smooth">
            {[
              "Cold Pressed",
              "Wood Pressed",
              "Virgin Coconut",
              "Premium Mustard",
              "Organic Sesame",
              "Pure Almond",
              "Wellness Castor",
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center gap-1.5 cursor-pointer whitespace-nowrap text-[10px] font-black text-gray-500 hover:text-[#0b3d33] uppercase tracking-[0.15em] transition-all duration-500 group"
              >
                {/* Micro-Dot Indicator */}
                <span className="w-1 h-1 rounded-full bg-[#c8a24c] opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                
                {item}
                
                {/* Modern Soft Indicator */}
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#c8a24c]/40 rounded-full transition-all duration-700 ease-out group-hover:w-full group-hover:bg-[#c8a24c]" />
              </div>
            ))}
          </nav>
        </div>

      </div>
    </header>
  );
}