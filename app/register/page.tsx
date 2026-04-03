"use client";

import React, { useState } from "react";
import Link from "next/link";
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
  Leaf,
  Truck,
  Award
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#051a16] selection:bg-[#c8a24c]/30 selection:text-[#c8a24c]">
      
      {/* 🌿 LEFT PANEL: CLEAN EDITORIAL STYLE (Solid Background) */}
      <div className="hidden lg:flex lg:w-[40%] xl:w-[45%] relative flex-col justify-between p-16 bg-[#041411] border-r border-white/5">
        
        {/* Brand Identity */}
        <div className="relative z-10">
          <Link href="/" className="flex items-center gap-3">
            <Sparkles className="text-[#c8a24c] w-8 h-8" />
            <span className="text-white font-serif text-3xl tracking-wider">Prasatti</span>
          </Link>
        </div>

        {/* Value Propositions */}
        <div className="relative z-10 space-y-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-serif text-white leading-tight"
          >
            Join our <span className="text-[#c8a24c] italic">Circle</span> of Purity.
          </motion.h1>

          <div className="space-y-8">
            {[
              { icon: <Leaf size={24} />, title: "Authentic Sourcing", desc: "Access limited batches of harvest-fresh oils." },
              { icon: <Award size={24} />, title: "Member Rewards", desc: "Earn 'Purity Points' on every organic purchase." },
              { icon: <Truck size={24} />, title: "Priority Delivery", desc: "Standard free shipping for all registered members." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="flex gap-5 items-start"
              >
                <div className="mt-1 text-[#c8a24c]">{item.icon}</div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="relative z-10 flex gap-6 opacity-30">
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-black text-white uppercase tracking-widest">ISO 9001:2015</span>
             <div className="h-[1px] w-full bg-[#c8a24c]/30" />
          </div>
          <div className="flex flex-col gap-1">
             <span className="text-[10px] font-black text-white uppercase tracking-widest">Organic Certified</span>
             <div className="h-[1px] w-full bg-[#c8a24c]/30" />
          </div>
        </div>
      </div>

      {/* 🔒 RIGHT PANEL: FOCUS FORM (No Gradients) */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-20 relative bg-[#051a16]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[440px] relative z-10"
        >
          {/* Logo for Mobile Only */}
          <div className="lg:hidden flex justify-center mb-10">
            <Sparkles className="text-[#c8a24c] w-10 h-10" />
          </div>

          <header className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-serif text-white mb-3">Create Account</h2>
            <p className="text-white/40 text-sm">Become a part of the Prasatti organic tradition today.</p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* FULL NAME */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Full Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/10 focus:border-[#c8a24c]/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/10 focus:border-[#c8a24c]/50 outline-none transition-all"
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest font-black text-white/30 ml-1">Security Key</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-white/10 focus:border-[#c8a24c]/50 outline-none transition-all"
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

            {/* TERMS CHECKBOX */}
            <div className="flex items-start gap-3 px-1 pt-1">
              <div className="relative flex items-center justify-center mt-0.5">
                <input type="checkbox" className="peer appearance-none w-4 h-4 rounded border border-white/20 checked:bg-[#c8a24c] transition-all cursor-pointer" />
                <CheckCircle2 size={10} className="absolute text-[#051a16] opacity-0 peer-checked:opacity-100 pointer-events-none" />
              </div>
              <p className="text-[11px] text-white/40 leading-snug">
                I agree to the <Link href="#" className="text-[#c8a24c] hover:underline">Terms of Service</Link> and <Link href="#" className="text-[#c8a24c] hover:underline">Privacy Policy</Link>.
              </p>
            </div>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="group w-full py-5 bg-[#c8a24c] hover:bg-[#d4b36d] text-[#051a16] rounded-xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all"
            >
              <ShieldCheck size={18} />
              Create My Account
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            {/* REDIRECT TO LOGIN */}
            <div className="text-center pt-4">
              <p className="text-sm text-white/30 font-medium">
                Already have an account?{" "}
                <Link href="/login" className="text-[#c8a24c] font-bold hover:underline underline-offset-4">
                  Log in here
                </Link>
              </p>
            </div>
          </form>

          {/* Standard Page Footer */}
          <footer className="mt-16 flex flex-wrap justify-center gap-6 opacity-20 text-[9px] font-black text-white uppercase tracking-widest border-t border-white/5 pt-8">
             <span>© 2026 Prasatti Organics</span>
             <span>Customer Support</span>
             <span>Legacy & Safety</span>
          </footer>
        </motion.div>
      </div>
    </div>
  );
}