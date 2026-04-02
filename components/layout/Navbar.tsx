"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, MapPin, ChevronRight, Leaf, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ✅ Access dynamic cart data
  const { cart } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    "Cold Pressed", "Wood Pressed", "Virgin Coconut", 
    "Premium Mustard", "Organic Sesame", "Pure Almond", 
    "Wellness Castor"
  ];

  return (
    <header className={`w-full sticky top-0 z-50 transition-all duration-500 ${isScrolled ? "translate-y-[-2px]" : ""}`}>
      
      {/* 🔝 Utility Bar */}
      <div className="bg-[#0b3d33] text-white/90 text-[10px] px-4 md:px-8 py-2 flex justify-between items-center tracking-[0.12em] font-bold uppercase border-b border-white/5">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="flex items-center gap-2 group cursor-default">
            <MapPin size={11} className="text-[#c8a24c] animate-pulse" /> 
            <span className="group-hover:text-[#c8a24c] transition-colors text-[8px] md:text-[9px]">India Source</span>
          </span>
          <span className="hidden lg:flex items-center gap-1.5 hover:text-[#c8a24c] cursor-pointer transition-colors text-[9px]">
            <Leaf size={10} className="text-[#c8a24c]" /> Lab Tested
          </span>
        </div>
        <div className="flex items-center gap-3 md:gap-5">
          <span className="hover:text-[#c8a24c] cursor-pointer transition-all flex items-center gap-1 text-[8px] md:text-[9px]">
            Track <ChevronRight size={10} className="hidden sm:inline" />
          </span>
          <span className="text-[#0b3d33] bg-[#c8a24c] px-2 py-0.5 rounded-sm font-black text-[7px] md:text-[8px] whitespace-nowrap">Replacement Guaranteed</span>
        </div>
      </div>

      {/* 🧭 Navbar */}
      <div className={`transition-all duration-500 backdrop-blur-3xl ${
        isScrolled 
          ? "bg-white/95 shadow-[0_10px_40px_rgba(11,61,51,0.08)] border-b border-gray-100" 
          : "bg-[#fcfcf9]/95 border-b border-transparent"
      }`}>
        
        <div className="flex items-center justify-between px-4 md:px-8 py-4 max-w-[1600px] mx-auto gap-4">

          {/* 🍔 Mobile Toggle */}
          <button 
            className="lg:hidden text-[#0b3d33] p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 cursor-pointer relative group flex items-center gap-2">
            <div className="flex flex-col leading-none">
              <span className="text-[#0b3d33] font-serif text-xl md:text-3xl font-black tracking-tighter group-hover:text-[#0f7b65] transition-colors">
                PRASATTI
              </span>
              <div className="flex items-center gap-1">
                <div className="h-[1px] w-3 md:w-4 bg-[#c8a24c]" />
                <span className="text-[#c8a24c] text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                  Wood Press Oil
                </span>
              </div>
            </div>
          </Link>

          {/* Search */}
          <div className="hidden lg:flex items-center w-[35%] relative group">
            <div className="flex items-center w-full bg-white rounded-2xl border border-gray-200 group-focus-within:border-[#c8a24c] transition-all duration-500 overflow-hidden">
              <div className="pl-4 text-gray-400">
                <Search size={16} strokeWidth={3} />
              </div>
              <input
                type="text"
                placeholder="Search for pure health..."
                className="w-full px-3 py-3 bg-transparent outline-none text-[13px] text-[#0b3d33]"
              />
              <button className="mr-1.5 my-1.5 px-6 py-2 bg-[#0b3d33] text-[#c8a24c] text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-[#0f7b65] hover:text-white transition-all shadow-md">
                Find
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 md:gap-3">

            {/* Account */}
            <Link href="/login" className="hidden sm:flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-xl hover:bg-[#0b3d33]/5 transition-all group">
              <User size={20} className="text-[#0b3d33] group-hover:scale-110 transition-all" />
              <span className="text-[11px] font-black text-[#0b3d33] hidden xl:block uppercase tracking-wider">Account</span>
            </Link>

            <div className="hidden sm:block w-[1px] h-5 bg-gray-200 mx-1" />

            {/* Dynamic Cart Link */}
            <Link href="/cart" className="relative flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2.5 bg-[#0b3d33] text-white rounded-xl hover:shadow-[0_15px_30px_rgba(11,61,51,0.2)] transition-all group active:scale-95 overflow-hidden">
              <div className="relative z-10 flex items-center gap-2">
                <div className="relative">
                  <ShoppingCart size={18} className="md:size-[19px] group-hover:-rotate-12 transition-transform text-[#c8a24c]" />
                  <span className="absolute -top-3 -right-3 bg-[#c8a24c] text-[#0b3d33] text-[8px] md:text-[9px] font-black min-w-4 h-4 md:min-w-5 md:h-5 px-1 flex items-center justify-center rounded-full border-2 border-[#0b3d33] shadow-md transition-all">
                    {cart.length}
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] font-black hidden md:block uppercase tracking-wider">Cart</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Categories Nav */}
        <div className="flex justify-center border-t border-gray-100 bg-white/50 backdrop-blur-md overflow-hidden">
          <nav className="flex gap-6 md:gap-10 px-4 md:px-8 py-3.5 overflow-x-auto no-scrollbar w-full justify-start lg:justify-center">
            {categories.map((item, index) => (
              <div key={index} className="relative flex items-center gap-2 cursor-pointer whitespace-nowrap text-[9px] md:text-[10px] font-extrabold text-[#0b3d33]/60 hover:text-[#0b3d33] uppercase tracking-[0.2em] transition-colors">
                {item}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* 📱 Mobile Menu Sidebar */}
      <div className={`lg:hidden fixed inset-0 bg-[#0b3d33] z-[60] transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-12">
            <span className="text-white font-serif text-2xl font-black italic">PRASATTI</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-[#c8a24c]">
              <X size={32} />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/products" className="text-white/70 text-xl font-bold uppercase tracking-widest hover:text-[#c8a24c] transition-colors">Shop All</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/about" className="text-white/70 text-xl font-bold uppercase tracking-widest hover:text-[#c8a24c] transition-colors">Our Story</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/login" className="text-white/70 text-xl font-bold uppercase tracking-widest hover:text-[#c8a24c] transition-colors">My Account</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} href="/contact" className="text-white/70 text-xl font-bold uppercase tracking-widest hover:text-[#c8a24c] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}