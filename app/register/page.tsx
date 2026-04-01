"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";

export default function RegisterPage() {
  return (
    <AuthLayout
      title="Join the Tradition"
      subtitle="Start your journey towards pure, wood-pressed wellness"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full"
      >
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          
          {/* Full Name Input Group */}
          <div className="group relative space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.25em] font-black text-[#0b3d33]/50 ml-1">
              Member Name
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b3d33]/30 group-focus-within:text-[#c8a24c] transition-colors">
                <User size={18} strokeWidth={2.5} />
              </div>
              <input
                type="text"
                placeholder="Aarav Sharma"
                className="w-full pl-12 pr-4 py-4 bg-gray-50/40 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#c8a24c] focus:ring-4 focus:ring-[#c8a24c]/10 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium text-[#0b3d33]"
              />
            </div>
          </div>

          {/* Email Input Group */}
          <div className="group relative space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.25em] font-black text-[#0b3d33]/50 ml-1">
              Contact Email
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b3d33]/30 group-focus-within:text-[#c8a24c] transition-colors">
                <Mail size={18} strokeWidth={2.5} />
              </div>
              <input
                type="email"
                placeholder="aarav@example.com"
                className="w-full pl-12 pr-4 py-4 bg-gray-50/40 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#c8a24c] focus:ring-4 focus:ring-[#c8a24c]/10 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium text-[#0b3d33]"
              />
            </div>
          </div>

          {/* Password Input Group */}
          <div className="group relative space-y-1.5">
            <label className="text-[10px] uppercase tracking-[0.25em] font-black text-[#0b3d33]/50 ml-1">
              Create Password
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b3d33]/30 group-focus-within:text-[#c8a24c] transition-colors">
                <Lock size={18} strokeWidth={2.5} />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-gray-50/40 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#c8a24c] focus:ring-4 focus:ring-[#c8a24c]/10 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium text-[#0b3d33]"
              />
            </div>
          </div>

          {/* Security Disclaimer */}
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="w-5 h-5 rounded-full bg-[#0f7b65]/10 flex items-center justify-center text-[#0f7b65]">
              <ShieldCheck size={12} />
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Secure 256-bit encrypted account
            </p>
          </div>

          {/* Premium Submit Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full py-4.5 bg-[#c8a24c] text-[#0b3d33] overflow-hidden rounded-2xl shadow-[0_20px_40px_-15px_rgba(200,162,76,0.4)] transition-all duration-500"
          >
            {/* Hover Slide Effect */}
            <div className="absolute inset-0 bg-[#0b3d33] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            
            <div className="relative z-10 flex items-center justify-center gap-3">
              <span className="font-black uppercase tracking-[0.2em] text-xs group-hover:text-white transition-colors duration-300">
                Begin Journey
              </span>
              <ArrowRight size={16} className="group-hover:translate-x-1 group-hover:text-white transition-all" />
            </div>
          </motion.button>

          {/* Footer Navigation */}
          <div className="text-center space-y-6 pt-2">
            <div className="relative flex items-center gap-4">
              <div className="h-[1px] flex-grow bg-gray-100" />
              <Sparkles size={14} className="text-[#c8a24c]/30" />
              <div className="h-[1px] flex-grow bg-gray-100" />
            </div>
            
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Part of the family?{" "}
              <Link 
                href="/login" 
                className="text-[#0f7b65] hover:text-[#c8a24c] transition-colors border-b-2 border-[#0f7b65]/20 hover:border-[#c8a24c]"
              >
                Access Account
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </AuthLayout>
  );
}