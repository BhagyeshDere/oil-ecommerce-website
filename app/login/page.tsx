"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Lock, 
  ArrowRight, 
  Sparkles, 
  Eye, 
  EyeOff, 
  ShieldCheck, 
  ChevronLeft,
  CheckCircle2,
  Leaf
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full bg-[#FCFAF7] selection:bg-[#c8a24c]/20 selection:text-[#8b5e34] flex flex-col items-center justify-center p-4 md:p-6">
      
      {/* 🌿 AMBIENT BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#0b3d33]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#c8a24c]/10 rounded-full blur-[100px]" />
      </div>

      {/* 🔗 BACK TO STORE */}
      <Link 
        href="/" 
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-[#0b3d33]/40 hover:text-[#0b3d33] transition-all font-bold text-[10px] uppercase tracking-widest group"
      >
        <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        Back to Store
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[480px] relative z-10"
      >
        {/* BRAND LOGO */}
        <div className="flex flex-col items-center mb-10">
          <div className="h-14 w-14 bg-white border border-[#c8a24c]/20 rounded-2xl flex items-center justify-center shadow-sm mb-4 rotate-3 hover:rotate-0 transition-transform duration-500">
            <Sparkles className="text-[#c8a24c] w-7 h-7" />
          </div>
          <h1 className="text-3xl font-serif text-[#0b3d33] font-bold">Prasatti</h1>
          <p className="text-[#8b5e34]/50 text-[10px] font-black uppercase tracking-[0.4em] mt-1">Nature's Reserve</p>
        </div>

        {/* 💳 MAIN LOGIN CARD */}
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(11,61,51,0.06)] border border-white p-8 md:p-12 relative overflow-hidden">
          
          <header className="mb-10 text-center">
            <h2 className="text-2xl font-serif text-[#0b3d33] font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-sm">Please enter your account details</p>
          </header>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            {/* EMAIL INPUT */}
            <div className="space-y-1.5 relative group">
              <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 ml-1 group-focus-within:text-[#0b3d33] transition-colors">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#c8a24c] transition-colors" size={18} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-12 pr-4 py-4 bg-[#f8f9fa] border border-transparent rounded-2xl text-[#0b3d33] placeholder:text-gray-300 focus:bg-white focus:border-[#c8a24c]/30 outline-none transition-all shadow-sm focus:shadow-md"
                />
              </div>
            </div>

            {/* PASSWORD INPUT */}
            <div className="space-y-1.5 relative group">
              <div className="flex justify-between items-center px-1">
                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400 group-focus-within:text-[#0b3d33] transition-colors">
                  Security Key
                </label>
                <Link href="#" className="text-[9px] font-black text-[#c8a24c] hover:text-[#0b3d33] uppercase tracking-widest transition-colors">
                  Forgot Password?
                </Link>
              </div>
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

            {/* LOGIN BUTTON */}
            <div className="pt-4">
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-[#0b3d33] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-3 transition-all hover:bg-[#0f4d41] shadow-xl shadow-[#0b3d33]/10"
              >
                <ShieldCheck size={18} className="text-[#c8a24c]" />
                Secure Login
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </form>

          {/* 🔗 REGISTER REDIRECT */}
          <div className="mt-8 pt-8 border-t border-gray-50 text-center">
            <p className="text-xs text-gray-400 tracking-wide font-medium">
              New to Prasatti? 
              <Link href="/register" className="text-[#c8a24c] font-black ml-2 hover:underline decoration-2 underline-offset-4">
                Create an account
              </Link>
            </p>
          </div>

          {/* 🛡️ AMAZON-STYLE TRUST FOOTER */}
          <div className="mt-8 grid grid-cols-3 gap-2">
            {[
              { icon: Leaf, label: "Pure" },
              { icon: ShieldCheck, label: "Secure" },
              { icon: CheckCircle2, label: "Verified" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-[#FCFAF7] border border-gray-50">
                <item.icon size={14} className="text-[#0b3d33]/40" />
                <span className="text-[8px] font-black uppercase tracking-tighter text-gray-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 📜 BOTTOM LINKS */}
        <footer className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 px-4 opacity-40">
           <span className="text-[10px] font-bold text-[#0b3d33] uppercase tracking-widest">© 2026 Prasatti Industries</span>
           <div className="flex gap-6">
             <Link href="#" className="text-[10px] font-bold text-[#0b3d33] uppercase tracking-widest hover:text-[#c8a24c]">Terms</Link>
             <Link href="#" className="text-[10px] font-bold text-[#0b3d33] uppercase tracking-widest hover:text-[#c8a24c]">Privacy</Link>
             <Link href="#" className="text-[10px] font-bold text-[#0b3d33] uppercase tracking-widest hover:text-[#c8a24c]">Support</Link>
           </div>
        </footer>
      </motion.div>
    </div>
  );
}