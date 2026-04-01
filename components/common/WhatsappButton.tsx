"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsappButton() {
  const phoneNumber = "919876543210"; // 👉 change to your number
  const message = "Hello, I want to know more about your oils!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-[999] group"
    >
      {/* 🌿 Glow Effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-40 group-hover:opacity-70 transition-all" />

      {/* 💬 Main Button */}
      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl border border-white/20">
        <FaWhatsapp className="text-white text-2xl" />
      </div>

      {/* 🟢 Pulse Ring */}
      <span className="absolute inset-0 rounded-full border-2 border-green-400 animate-ping opacity-30" />

      {/* 💡 Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 bg-[#0b3d33] text-white text-xs px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap shadow-lg">
        Chat with us
      </div>
    </motion.a>
  );
}