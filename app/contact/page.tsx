"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin size={22} />,
      title: "Our Corporate Base",
      desc: "Bengaluru - 560100, Karnataka, India",
      color: "bg-[#0f7b65]",
    },
    
    {
      icon: <MessageCircle size={22} />,
      title: "Live Chat",
      desc: "+91 98765 43210",
      color: "bg-[#c8a24c]",
    },
    {
      icon: <Mail size={22} />,
      title: "Digital Correspondence",
      desc: "support@prasatti.com",
      color: "bg-[#0b3d33]",
    },
  ];

  return (
    <section className="relative bg-[#fcfcf9] py-20 md:py-32 px-6 overflow-hidden">
      
      {/* 🌿 ORGANIC ARTISTIC BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] bg-[#c8a24c]/5 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-[#0f7b65]/5 rounded-full blur-[100px]" />
        <span className="absolute bottom-10 left-10 text-[15vw] font-serif font-black text-black/[0.03] leading-none uppercase select-none">
          Purity
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 🧠 EDITORIAL HEADER */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[1px] bg-[#c8a24c]" />
            <span className="text-[#0f7b65] font-black text-[11px] uppercase tracking-[0.4em]">Inquiry Hub</span>
            <span className="w-12 h-[1px] bg-[#c8a24c]" />
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0b3d33] leading-tight">
            Connect with the <br />
            <span className="text-[#c8a24c] italic px-2">Source of Wellness</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* 📍 CONTACT INFO CARDS (Left Side - 5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-4 mb-10">
              <h2 className="text-3xl font-serif font-bold text-[#0b3d33]">Our Sanctuary</h2>
              <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
                Whether you're a wellness enthusiast or a retail partner, our doors (and ears) are always open.
              </p>
            </div>

            {contactInfo.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10, backgroundColor: "#fff" }}
                className="group p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex items-center gap-6 transition-all"
              >
                <div className={`w-14 h-14 shrink-0 flex items-center justify-center rounded-2xl ${item.color} text-white shadow-lg shadow-black/5`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#0b3d33] font-black text-[11px] uppercase tracking-widest opacity-80 mb-1">{item.title}</h3>
                  <p className="text-[#0b3d33] font-bold text-base md:text-lg leading-tight">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            <div className="pt-6 flex items-center gap-4 text-gray-400">
               <Clock size={18} className="text-[#c8a24c]" />
               <span className="text-sm font-semibold tracking-wide">Mon - Sat: 9:00 AM - 7:00 PM</span>
            </div>
          </div>

          {/* 📩 PREMIUM FORM (Right Side - 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-14 shadow-[0_30px_100px_-20px_rgba(11,61,51,0.08)] border border-gray-100 relative"
          >
            <div className="mb-12">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-[#0b3d33] mb-3">Send a Message</h3>
              <p className="text-sm text-gray-500 font-semibold tracking-wide">Average response time: Within 24 hours.</p>
            </div>

            <form className="space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#c8a24c] transition-all text-[#0b3d33] font-bold placeholder:text-gray-300 placeholder:font-medium"
                    placeholder="Full Name"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8a24c] group-focus-within:w-full transition-all duration-500" />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#c8a24c] transition-all text-[#0b3d33] font-bold placeholder:text-gray-300 placeholder:font-medium"
                    placeholder="Email Address"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8a24c] group-focus-within:w-full transition-all duration-500" />
                </div>
              </div>

              <div className="relative group">
                <textarea
                  rows={4}
                  required
                  className="w-full py-3 bg-transparent border-b-2 border-gray-100 outline-none focus:border-[#c8a24c] transition-all text-[#0b3d33] font-bold placeholder:text-gray-300 placeholder:font-medium resize-none"
                  placeholder="How can we assist you today?"
                />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#c8a24c] group-focus-within:w-full transition-all duration-500" />
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="group w-full relative py-6 bg-[#0b3d33] text-white rounded-2xl font-black uppercase text-[11px] tracking-[0.4em] overflow-hidden shadow-xl shadow-[#0b3d33]/20"
              >
                <div className="absolute inset-0 bg-[#c8a24c] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-4">
                  Dispatch Message <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                </span>
              </motion.button>
            </form>
          </motion.div>

        </div>

        {/* 🗺️ IMMERSIVE FULL-WIDTH MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl relative group"
        >
          <div className="absolute inset-0 bg-[#0b3d33]/5 pointer-events-none group-hover:bg-transparent transition-all duration-700" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.579633215644!2d73.5414593148671!3d16.20853508879647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc00ef2a233364f%3A0x6730101b09228807!2sSindhudurg%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1647412345678!5m2!1sen!2sin"
            className="w-full h-[450px] md:h-[550px] border-0 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
            title="Prasatti Office Location"
          />
          <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-md px-8 py-4 rounded-3xl shadow-xl border border-white/20">
            <p className="text-[11px] font-black text-[#0b3d33] uppercase tracking-[0.3em]">Visit Our Headquarters</p>
            <p className="text-xs text-[#c8a24c] font-bold mt-1">Bengaluru, Karnataka</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}