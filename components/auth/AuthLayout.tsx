"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#fcfcf9] px-4 relative overflow-hidden">

      {/* 🌿 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-[#c8a24c]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-[#0f7b65]/10 rounded-full blur-[140px]" />
      </div>

      {/* 🧊 Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[2rem] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
      >
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#0b3d33]">
            {title}
          </h1>
          <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
        </div>

        {children}
      </motion.div>
    </section>
  );
}