"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Eye,
  EyeOff,
  CheckCircle2,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#051a16] selection:bg-[#c8a24c]/30 selection:text-[#c8a24c]">
      
      {/* 🌌 DEPTH LAYER */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/oil-bg.png" 
          alt="Texture"
          fill
          className="object-cover opacity-25 mix-blend-overlay scale-110"
          priority
        />
        {/* Organic Light Leak */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#c8a24c]/10 blur-[130px] rounded-full"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#051a16] via-[#051a16]/90 to-[#c8a24c]/10" />
      </div>

      {/* ✨ MAIN INTERFACE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[480px] px-6 py-10"
      >
        
        {/* 🧱 PREMIUM FORM CARD */}
        <div className="relative backdrop-blur-[35px] bg-white/[0.02] border border-white/10 rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7)] p-8 md:p-12">
          
          {/* Progress Header */}
          <div className="flex justify-center items-center gap-3 mb-10">
            <div className="h-[2px] w-6 bg-[#c8a24c]" />
            <span className="text-[9px] uppercase tracking-[0.5em] font-black text-[#c8a24c]">
              Account Creation
            </span>
            <div className="h-[2px] w-6 bg-[#c8a24c]" />
          </div>

          <header className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-serif italic text-white mb-2">
              Join the Tradition
            </h2>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/40">
              Access the private organic reserve
            </p>
          </header>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            
            {/* NAME FIELD */}
            <div className="group relative">
              <label className="text-[9px] uppercase tracking-[0.3em] font-black text-white/30 ml-1 mb-2 block group-focus-within:text-[#c8a24c] transition-colors">
                Full Legal Name
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-all" size={17} />
                <input
                  type="text"
                  placeholder="Aarav Sharma"
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border border-white/5 rounded-2xl text-white placeholder:text-white/10 focus:bg-black/50 focus:border-[#c8a24c]/40 outline-none transition-all duration-500"
                />
              </div>
            </div>

            {/* EMAIL FIELD */}
            <div className="group relative">
              <label className="text-[9px] uppercase tracking-[0.3em] font-black text-white/30 ml-1 mb-2 block group-focus-within:text-[#c8a24c] transition-colors">
                Communication Path
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-all" size={17} />
                <input
                  type="email"
                  placeholder="aarav@prasatti.com"
                  className="w-full pl-12 pr-4 py-4 bg-black/30 border border-white/5 rounded-2xl text-white placeholder:text-white/10 focus:bg-black/50 focus:border-[#c8a24c]/40 outline-none transition-all duration-500"
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div className="group relative">
              <label className="text-[9px] uppercase tracking-[0.3em] font-black text-white/30 ml-1 mb-2 block group-focus-within:text-[#c8a24c] transition-colors">
                Security Key
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-all" size={17} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-black/30 border border-white/5 rounded-2xl text-white placeholder:text-white/10 focus:bg-black/50 focus:border-[#c8a24c]/40 outline-none transition-all duration-500"
                />
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-[#c8a24c] transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* TRUST INDICATOR */}
            <div className="flex items-center justify-between px-1 py-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={12} className="text-[#c8a24c]" />
                <span className="text-[9px] uppercase tracking-widest text-white/40 font-bold">End-to-End Encrypted</span>
              </div>
              <ShieldCheck size={14} className="text-white/20" />
            </div>

            {/* SUBMIT ACTION */}
            <div className="pt-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full py-5 bg-[#c8a24c] rounded-2xl overflow-hidden shadow-[0_20px_40px_-15px_rgba(200,162,76,0.3)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]" />
                
                <div className="relative z-10 flex items-center justify-center gap-3 text-[#051a16]">
                  <span className="font-black uppercase tracking-[0.3em] text-[10px]">Begin The Tradition</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform duration-500" />
                </div>
              </motion.button>
            </div>

            {/* DIVIDER */}
            <div className="relative flex items-center justify-center py-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/5" />
              </div>
              <div className="relative bg-transparent px-4">
                <Sparkles size={14} className="text-[#c8a24c]/30" />
              </div>
            </div>

            {/* FOOTER */}
            <p className="text-center text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              Existing Member?{" "}
              <Link 
                href="/login" 
                className="text-[#c8a24c] hover:text-white transition-colors underline-offset-4 decoration-[#c8a24c]/30 hover:underline"
              >
                Access Vault
              </Link>
            </p>
          </form>
        </div>

        {/* Global Support Text */}
        <div className="mt-8 text-center">
           <p className="text-[8px] font-medium text-white/20 uppercase tracking-[0.6em]">
             Crafted for quality • Sourced for purity • Delivered for life
           </p>
        </div>
      </motion.div>
    </div>
  );
}