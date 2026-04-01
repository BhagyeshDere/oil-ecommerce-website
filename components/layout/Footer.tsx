"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  ArrowRight, 
  Globe, 
  ShieldCheck,
  MapPin 
} from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
);

export default function AdvancedFooter() {
  const footerLinks = {
    services: [
      { name: "Shop", href: "/products" },
      { name: "Track Order", href: "/track-order" },
      { name: "Our Story", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Contact Us", href: "/contact" },
    ],
    policies: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Shipping Policy", href: "/shipping-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  return (
    <footer className="relative bg-[#0b5d4a] text-white pt-20 pb-10 px-6 md:px-12 overflow-hidden">
      
      {/* 🌿 Background Image */}
      <div 
        className="absolute inset-0 opacity-40 bg-[url('/images/footer-bg.png')] bg-cover bg-center pointer-events-none"
        aria-hidden="true"
      />

      {/* 🌑 Subtle Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#0b5d4a]/80 via-transparent to-[#0b5d4a]/90 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* 🟢 BRAND & NEWSLETTER */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col gap-1">
              <h1 className="text-3xl md:text-4xl font-serif font-black tracking-tighter text-white drop-shadow-md">
                PRASATTI
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-[1px] w-6 bg-[#c8a24c]" />
                <span className="text-[#c8a24c] text-[10px] font-black uppercase tracking-[0.3em] drop-shadow-sm">
                  Wood Press Oil
                </span>
              </div>
            </motion.div>

            <p className="text-white font-medium text-sm leading-relaxed max-w-xs drop-shadow-sm">
              Traditional wood-pressed oils, preserving nutrients and taste just as nature intended.
            </p>

            <div className="space-y-4 pt-2">
              <h4 className="text-[9px] font-black uppercase tracking-[0.4em] text-[#c8a24c]">Newsletter</h4>
              <form className="relative flex items-center max-w-xs" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs outline-none focus:border-[#c8a24c] transition-all text-white placeholder:text-white/60 backdrop-blur-sm"
                />
                <button type="submit" className="absolute right-1.5 p-2 bg-[#c8a24c] rounded-lg text-[#0b5d4a] hover:bg-white transition-colors">
                  <ArrowRight size={16} strokeWidth={3} />
                </button>
              </form>
            </div>
          </div>

          {/* 📦 EXPLORE NAVIGATION */}
          <div className="lg:pl-10">
            <h3 className="text-[11px] font-bold mb-8 text-[#c8a24c] tracking-[0.25em] uppercase text-left">Explore</h3>
            <ul className="space-y-4 text-left">
              {footerLinks.services.map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.href}
                    className="text-white hover:text-[#c8a24c] text-sm font-medium transition-all drop-shadow-sm block w-fit"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🛡️ ASSURANCE NAVIGATION */}
          <div className="lg:pl-5">
            <h3 className="text-[11px] font-bold mb-8 text-[#c8a24c] tracking-[0.25em] uppercase text-left">Assurance</h3>
            <ul className="space-y-4 text-left">
              {footerLinks.policies.map((item, i) => (
                <li key={i}>
                  <Link 
                    href={item.href}
                    className="text-white hover:text-[#c8a24c] text-sm font-medium transition-all drop-shadow-sm block w-fit"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 📞 CONTACT & SOCIALS (Address Added Here) */}
          <div className="space-y-8">
            <h3 className="text-[11px] font-bold text-[#c8a24c] tracking-[0.25em] uppercase text-left">Connect</h3>
            <div className="space-y-5">
              {/* Address Section */}
              <div className="flex items-start gap-4 group cursor-default w-full">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center transition-all backdrop-blur-sm">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#c8a24c] font-black uppercase tracking-widest mb-1">Our Base</span>
                  <span className="text-xs text-white/90 font-medium leading-relaxed drop-shadow-sm">
                    Bengaluru - 560100,<br />Karnataka, India
                  </span>
                </div>
              </div>

              <a href="tel:+919876543210" className="flex items-center gap-4 group cursor-pointer w-fit">
                <div className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-[#c8a24c] transition-all backdrop-blur-sm">
                  <Phone size={14} />
                </div>
                <span className="text-xs text-white font-semibold drop-shadow-sm group-hover:text-[#c8a24c] transition-colors">+91 98765 43210</span>
              </a>
              
              <a href="mailto:purity@prasatti.com" className="flex items-center gap-4 group cursor-pointer w-fit">
                <div className="w-9 h-9 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center group-hover:bg-[#c8a24c] transition-all backdrop-blur-sm">
                  <Mail size={14} />
                </div>
                <span className="text-xs text-white font-semibold drop-shadow-sm group-hover:text-[#c8a24c] transition-colors">purity@prasatti.com</span>
              </a>
            </div>

            <div className="flex gap-3 pt-2">
              <Link href="https://instagram.com" target="_blank" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#c8a24c] hover:bg-[#c8a24c] transition-all bg-white/10 backdrop-blur-sm group">
                <InstagramIcon />
              </Link>
              <Link href="https://x.com" target="_blank" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#c8a24c] hover:bg-[#c8a24c] transition-all bg-white/10 backdrop-blur-sm group">
                <XIcon />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#c8a24c] hover:bg-[#c8a24c] transition-all bg-white/10 backdrop-blur-sm group">
                <Globe size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* 🏛️ FOOTER BAR */}
        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-center md:text-left">
            <ShieldCheck size={14} className="text-[#c8a24c]" />
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
              © 2026 Prasatti Wood Press Oil All rights reserved.
            </p>
          </div>

          <motion.div 
            whileHover={{ y: -2 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-md"
          >
            <span className="text-[9px] text-white/70 uppercase tracking-widest">Dev by</span>
            <div className="h-3 w-[1px] bg-white/20" />
            <Link 
              href="https://qirotech.com" 
              target="_blank"
              className="text-[10px] font-black tracking-[0.15em] text-white hover:text-[#c8a24c] transition-colors"
            > 
              QIRO TECH INNOVATION PVT. LTD. 
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}