"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Sparkles } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to access your premium organic collection"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          
          {/* Email Input Group */}
          <div className="group relative space-y-2">
            <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0b3d33]/60 ml-1">
              Account Email
            </label>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b3d33]/40 group-focus-within:text-[#c8a24c] transition-colors">
                <Mail size={18} strokeWidth={2.5} />
              </div>
              <input
                type="email"
                placeholder="nature@prasatti.com"
                className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#c8a24c] focus:ring-4 focus:ring-[#c8a24c]/10 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium text-[#0b3d33]"
              />
            </div>
          </div>

          {/* Password Input Group */}
          <div className="group relative space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#0b3d33]/60">
                Security Key
              </label>
              <Link href="#" className="text-[10px] font-bold text-[#c8a24c] hover:underline uppercase tracking-wider">
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0b3d33]/40 group-focus-within:text-[#c8a24c] transition-colors">
                <Lock size={18} strokeWidth={2.5} />
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-100 rounded-2xl focus:bg-white focus:border-[#c8a24c] focus:ring-4 focus:ring-[#c8a24c]/10 outline-none transition-all duration-300 placeholder:text-gray-300 font-medium text-[#0b3d33]"
              />
            </div>
          </div>

          {/* Premium Submit Button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full py-4 bg-[#0b3d33] text-white overflow-hidden rounded-2xl shadow-[0_20px_40px_-12px_rgba(11,61,51,0.3)] hover:shadow-[0_20px_40px_-12px_rgba(200,162,76,0.3)] transition-all duration-500"
          >
            <div className="absolute inset-0 bg-[#c8a24c] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="relative z-10 flex items-center justify-center gap-3">
              <span className="font-black uppercase tracking-[0.2em] text-xs">Authorize Access</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>

          {/* Decorative Divider */}
          <div className="relative py-4 flex items-center gap-4">
            <div className="h-[1px] flex-grow bg-gray-100" />
            <Sparkles size={14} className="text-[#c8a24c]/40" />
            <div className="h-[1px] flex-grow bg-gray-100" />
          </div>

          {/* Footer Navigation */}
          <div className="text-center space-y-4">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              New to the tradition?{" "}
              <Link 
                href="/register" 
                className="text-[#0b3d33] hover:text-[#c8a24c] transition-colors border-b-2 border-[#c8a24c]/20 hover:border-[#c8a24c]"
              >
                Create Account
              </Link>
            </p>
          </div>
        </form>
      </motion.div>
    </AuthLayout>
  );
}