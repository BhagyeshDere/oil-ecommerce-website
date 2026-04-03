"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Sparkles, Eye, EyeOff, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#051a16] selection:bg-[#c8a24c]/30 selection:text-[#c8a24c]">
      
      {/* 🌿 LEFT SIDE: BRAND STORYTELLING (Solid Background) */}
      <div className="hidden lg:flex lg:w-1/2 relative flex-col justify-between p-16 bg-[#041411] border-r border-white/5">
        
        {/* Brand Identity */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="h-10 w-10 border border-[#c8a24c]/40 rounded-full flex items-center justify-center bg-white/5">
              <Sparkles className="text-[#c8a24c] w-5 h-5" />
            </div>
            <span className="text-white font-serif text-2xl tracking-wider">Prasatti</span>
          </Link>
        </div>

        {/* Narrative Content */}
        <div className="relative z-10 max-w-md">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-serif text-white leading-tight mb-8"
          >
            Experience the <br />
            <span className="text-[#c8a24c] italic">Essence</span> of <br />
            Purity.
          </motion.h1>
          
          <div className="space-y-6">
            {[
              "Direct from the farm to your vault.",
              "Traditional wood-pressed extraction.",
              "Zero chemicals, 100% transparency."
            ].map((text, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex items-center gap-4 text-white/50 text-sm font-medium tracking-wide"
              >
                <div className="h-px w-6 bg-[#c8a24c]/50" />
                {text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Minimal Badges */}
        <div className="relative z-10 flex gap-8 opacity-20">
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">FSSAI Certified</span>
          <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">ISO 22000</span>
        </div>
      </div>

      {/* 🔒 RIGHT SIDE: THE LOGIN INTERFACE (Clean Matte) */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 relative bg-[#051a16]">
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[400px]"
        >
          {/* Logo for Mobile */}
          <div className="lg:hidden flex justify-center mb-12">
            <Sparkles className="text-[#c8a24c] w-10 h-10" />
          </div>

          <header className="mb-12 text-center lg:text-left">
            <h2 className="text-4xl font-serif text-white mb-3">Welcome Back</h2>
            <p className="text-white/40 text-sm tracking-wide">Enter your credentials to access the reserve.</p>
          </header>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            
            {/* EMAIL */}
            <div className="space-y-3 group">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 ml-1 group-focus-within:text-[#c8a24c] transition-colors">
                Account Email
              </label>
              <div className="relative">
                <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-[#c8a24c] transition-colors" size={16} />
                <input
                  type="email"
                  placeholder="nature@prasatti.com"
                  className="w-full pl-8 pr-4 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/5 focus:border-[#c8a24c] outline-none transition-all"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-3 group">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-white/30 group-focus-within:text-[#c8a24c] transition-colors">
                  Security Key
                </label>
                <Link href="#" className="text-[10px] font-bold text-[#c8a24c]/60 hover:text-[#c8a24c] uppercase tracking-widest transition-colors">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-white/10 group-focus-within:text-[#c8a24c] transition-colors" size={16} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-8 pr-10 py-3 bg-transparent border-b border-white/10 text-white placeholder:text-white/5 focus:border-[#c8a24c] outline-none transition-all"
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-white/20 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* ACTION BUTTON */}
            <div className="pt-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-5 bg-[#c8a24c] text-[#051a16] rounded-lg font-black uppercase tracking-[0.3em] text-[10px] flex items-center justify-center gap-3 transition-all hover:bg-white"
              >
                <ShieldCheck size={16} />
                Authorize Login
                <ArrowRight size={16} />
              </motion.button>
            </div>

            {/* REGISTER LINK */}
            <p className="text-center text-xs text-white/20 tracking-widest pt-4">
              NOT A MEMBER?{" "}
              <Link href="/register" className="text-[#c8a24c] font-black hover:text-white transition-colors ml-2 border-b border-[#c8a24c]/30">
                JOIN TRADITION
              </Link>
            </p>
          </form>

          {/* Minimal Footer */}
          <footer className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center opacity-20">
             <span className="text-[9px] font-bold text-white uppercase tracking-widest">© 2026 Prasatti</span>
             <div className="flex gap-6">
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">Privacy</span>
               <span className="text-[9px] font-bold text-white uppercase tracking-widest">Support</span>
             </div>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}