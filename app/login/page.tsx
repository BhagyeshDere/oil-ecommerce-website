"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#051a16] selection:bg-[#c8a24c]/30 selection:text-[#c8a24c]">
      
      {/* 🌌 DYNAMIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/oil-bg.png" 
          alt="Texture"
          fill
          className="object-cover opacity-30 mix-blend-overlay scale-110"
          priority
        />
        {/* Animated Glow Orbs */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#c8a24c]/10 blur-[120px] rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#051a16]/0 via-[#051a16]/80 to-[#051a16]" />
      </div>

      {/* ✨ MAIN INTERFACE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[440px] px-6 py-12"
      >
        {/* Floating Brand Icon */}
        <div className="flex justify-center mb-10">
          <div className="relative p-4">
            <div className="absolute inset-0 bg-[#c8a24c] blur-2xl opacity-20 rounded-full animate-pulse" />
            <div className="relative h-16 w-16 border border-[#c8a24c]/30 rounded-full flex items-center justify-center bg-[#051a16]/50 backdrop-blur-md">
              <Sparkles className="text-[#c8a24c] w-8 h-8" />
            </div>
          </div>
        </div>

        {/* 🧱 GLASS CARD */}
        <div className="relative backdrop-blur-[40px] bg-white/[0.03] border border-white/10 rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)] p-8 md:p-12 overflow-hidden">
          
          {/* Subtle Inner Glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          <header className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-serif italic text-white mb-3"
            >
              The Purity Vault
            </motion.h2>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#c8a24c]">
              Authorized Personnel Only
            </p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* EMAIL INPUT */}
            <div className="group relative">
              <label className="text-[9px] uppercase tracking-[0.3em] font-black text-white/40 ml-1 mb-2 block group-focus-within:text-[#c8a24c] transition-colors">
                Account Identity
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-all" size={18} />
                <input
                  type="email"
                  placeholder="nature@prasatti.com"
                  className="w-full pl-12 pr-4 py-4 bg-black/20 border border-white/5 rounded-2xl text-white placeholder:text-white/30 focus:bg-black/40 focus:border-[#c8a24c]/50 focus:ring-4 focus:ring-[#c8a24c]/5 outline-none transition-all duration-500"
                />
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div className="group relative">
              <div className="flex justify-between items-center px-1 mb-2">
                <label className="text-[9px] uppercase tracking-[0.3em] font-black text-white/40 group-focus-within:text-[#c8a24c] transition-colors">
                  Security Key
                </label>
                <Link href="#" className="text-[9px] font-bold text-[#c8a24c]/60 hover:text-[#c8a24c] transition-colors uppercase tracking-widest">
                  Reset?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-all" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-black/20 border border-white/5 rounded-2xl text-white placeholder:text-white/30 focus:bg-black/40 focus:border-[#c8a24c]/50 focus:ring-4 focus:ring-[#c8a24c]/5 outline-none transition-all duration-500"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="pt-4">
              <motion.button
                whileHover={{ 
                  y: -2, 
                  boxShadow: "0 20px 40px -12px rgba(200, 162, 76, 0.4)" 
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full py-5 bg-[#c8a24c] rounded-2xl overflow-hidden shadow-xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                
                <div className="relative z-10 flex items-center justify-center gap-3 text-[#051a16]">
                  <ShieldCheck size={18} />
                  <span className="font-black uppercase tracking-[0.2em] text-xs">Enter The Tradition</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </div>

            {/* FOOTER */}
            <div className="text-center pt-6 space-y-4">
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                New to the collection?{" "}
                <Link 
                  href="/register" 
                  className="text-[#c8a24c] hover:text-white transition-colors underline underline-offset-4 decoration-[#c8a24c]/30"
                >
                  Request Access
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Floating Regulatory Text */}
        <div className="mt-8 flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           <div className="text-[8px] font-bold text-white uppercase tracking-widest border border-white/20 px-2 py-1 rounded-md">FSSAI Certified</div>
           <div className="text-[8px] font-bold text-white uppercase tracking-widest border border-white/20 px-2 py-1 rounded-md">ISO 22000</div>
        </div>
      </motion.div>

      {/* Decorative Corner Element - Fixed Styles */}
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <p 
          className="text-[10px] text-white/10 uppercase tracking-[1em] transform rotate-180" 
          style={{ writingMode: 'vertical-rl' }}
        >
          PRASATTI ORGANICS 2026
        </p>
      </div>
    </div>
  );
}