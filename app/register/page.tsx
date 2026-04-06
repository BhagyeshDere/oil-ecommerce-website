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
  Award,
  ChevronLeft
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[#FCFAF7] selection:bg-[#c8a24c]/20 selection:text-[#8b5e34] flex flex-col items-center justify-center p-4 md:p-8">
      
      {/* 🌿 AMBIENT BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] bg-[#0b3d33]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[500px] h-[500px] bg-[#c8a24c]/10 rounded-full blur-[120px]" />
      </div>

      {/* 🔗 BACK LINK */}
      <Link 
        href="/login" 
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[#0b3d33]/40 hover:text-[#0b3d33] transition-all font-bold text-[10px] uppercase tracking-widest group"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Already a member?
      </Link>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* 🍃 LEFT SIDE: THE PROMISE (Visible on Desktop) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col space-y-12 pr-12">
          <div>
            <div className="h-12 w-12 bg-white border border-[#c8a24c]/20 rounded-2xl flex items-center justify-center shadow-sm mb-6">
              <Sparkles className="text-[#c8a24c] w-6 h-6" />
            </div>
            <h1 className="text-5xl font-serif text-[#0b3d33] leading-[1.1] mb-6">
              Join the <span className="text-[#c8a24c] italic">Circle</span> <br /> of Purity.
            </h1>
            <p className="text-[#8b5e34]/60 text-lg leading-relaxed">
              Create an account to access our harvest-fresh reserves and traditional oil blends.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { icon: Leaf, title: "Farm Traceability", desc: "Know the source of every drop." },
              { icon: Award, title: "Purity Rewards", desc: "Earn points on every organic purchase." },
              { icon: Truck, title: "Priority Fulfillment", desc: "Members get harvest-first shipping." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-[#0b3d33]/5 flex items-center justify-center">
                  <item.icon size={18} className="text-[#0b3d33]" />
                </div>
                <div>
                  <h4 className="text-[#0b3d33] font-bold text-sm tracking-tight">{item.title}</h4>
                  <p className="text-[#8b5e34]/50 text-xs mt-0.5">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-8 border-t border-[#0b3d33]/5 flex gap-8 opacity-40">
             <span className="text-[9px] font-black text-[#0b3d33] uppercase tracking-widest">FSSAI Certified</span>
             <span className="text-[9px] font-black text-[#0b3d33] uppercase tracking-widest">ISO 22000</span>
          </div>
        </div>

        {/* 🔒 RIGHT SIDE: THE FORM CARD */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-7"
        >
          <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(11,61,51,0.08)] border border-white p-8 md:p-14 relative overflow-hidden">
            
            <header className="mb-10 lg:hidden text-center">
              <h2 className="text-3xl font-serif text-[#0b3d33] font-bold mb-2">Join Prasatti</h2>
              <p className="text-gray-400 text-sm">Experience the essence of purity</p>
            </header>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* FULL NAME */}
              <div className="space-y-2 md:col-span-2 group">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1 group-focus-within:text-[#0b3d33] transition-colors">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-4 bg-[#f8f9fa] border border-transparent rounded-2xl text-[#0b3d33] placeholder:text-gray-300 focus:bg-white focus:border-[#c8a24c]/30 outline-none transition-all shadow-sm focus:shadow-md"
                  />
                </div>
              </div>

              {/* EMAIL ADDRESS */}
              <div className="space-y-2 md:col-span-2 group">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1 group-focus-within:text-[#0b3d33] transition-colors">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-[#f8f9fa] border border-transparent rounded-2xl text-[#0b3d33] placeholder:text-gray-300 focus:bg-white focus:border-[#c8a24c]/30 outline-none transition-all shadow-sm focus:shadow-md"
                  />
                </div>
              </div>

              {/* SECURITY KEY (PASSWORD) */}
              <div className="space-y-2 md:col-span-2 group">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1 group-focus-within:text-[#0b3d33] transition-colors">
                  Create Security Key
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full pl-12 pr-12 py-4 bg-[#f8f9fa] border border-transparent rounded-2xl text-[#0b3d33] placeholder:text-gray-300 focus:bg-white focus:border-[#c8a24c]/30 outline-none transition-all shadow-sm focus:shadow-md"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 hover:text-[#0b3d33] transition-colors"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* TERMS */}
              <div className="md:col-span-2 flex items-start gap-3 px-1">
                <div className="relative flex items-center justify-center mt-1">
                  <input type="checkbox" className="peer appearance-none w-4 h-4 rounded border border-gray-200 checked:bg-[#0b3d33] checked:border-[#0b3d33] transition-all cursor-pointer shadow-sm" />
                  <CheckCircle2 size={10} className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" />
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
                  By joining, I agree to the <Link href="#" className="text-[#c8a24c] font-black">Membership Terms</Link> and recognize Prasatti's <Link href="#" className="text-[#c8a24c] font-black">Data Privacy Standards</Link>.
                </p>
              </div>

              {/* REGISTER BUTTON */}
              <div className="md:col-span-2 pt-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-[#0b3d33] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all hover:bg-[#0f4d41] shadow-xl shadow-[#0b3d33]/10"
                >
                  <ShieldCheck size={18} className="text-[#c8a24c]" />
                  Establish Account
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </form>

            {/* REDIRECT */}
            <div className="mt-8 pt-8 border-t border-gray-50 text-center">
              <p className="text-xs text-gray-400 tracking-wide font-medium">
                Part of the family? 
                <Link href="/login" className="text-[#0b3d33] font-black ml-2 border-b-2 border-[#c8a24c] pb-0.5">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="fixed bottom-8 w-full hidden md:flex justify-center opacity-30 pointer-events-none">
        <span className="text-[9px] font-black text-[#0b3d33] uppercase tracking-[0.4em]">Prasatti Legacy Organics © 2026</span>
      </footer>
    </div>
  );
}