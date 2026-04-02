"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
// ✅ FIXED: Added ArrowRight to the imports
import { 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Sparkles 
} from "lucide-react";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#fcfcf9] selection:bg-[#c8a24c]/20 pb-20">
      {/* 🧩 ARCHITECTURAL BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c8a24c]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0f7b65]/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
        
        {/* 🧭 NAVIGATION & BREADCRUMB */}
        <header className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <Link href="/" className="group flex items-center gap-2 text-[#0b3d33]/60 hover:text-[#0b3d33] transition-colors">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-xs font-black uppercase tracking-widest">Back to Store</span>
            </Link>
          </motion.div>

          <div className="flex items-center gap-4">
            <span className="h-[2px] w-8 bg-[#c8a24c]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c8a24c]">01 Cart</span>
            <span className="h-[2px] w-8 bg-gray-200" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">02 Checkout</span>
          </div>
        </header>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-serif font-bold text-[#0b3d33] mb-12"
        >
          Your <span className="text-[#c8a24c] italic">Selection</span>
        </motion.h1>

        <AnimatePresence mode="wait">
          {cart.length === 0 ? (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-32 bg-white rounded-[3rem] border border-dashed border-gray-200"
            >
              <div className="w-20 h-20 bg-[#fcfcf9] rounded-full flex items-center justify-center text-[#c8a24c] mb-6">
                <ShoppingBag size={32} />
              </div>
              <p className="text-xl font-serif text-[#0b3d33] mb-8">Your vault is currently empty.</p>
              <Link href="/" className="px-10 py-4 bg-[#0b3d33] text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#c8a24c] transition-all">
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* 🛒 LEFT - PRODUCT LIST */}
              <div className="lg:col-span-8 space-y-6">
                {cart.map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group relative flex flex-col sm:flex-row items-center gap-8 bg-white p-6 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-[#c8a24c]/20 transition-all"
                  >
                    <div className="w-32 h-40 relative bg-[#fcfcf9] rounded-2xl p-4 overflow-hidden flex-shrink-0">
                       <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    <div className="flex-1 text-center sm:text-left space-y-2">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-black text-[#c8a24c] uppercase tracking-widest">Premium Selection</span>
                          <h2 className="text-2xl font-serif font-bold text-[#0b3d33] leading-tight">{item.name}</h2>
                          <p className="text-xs text-gray-400 font-medium italic">Wood-Pressed • Cold Filtered</p>
                        </div>
                        <p className="text-2xl font-black text-[#0b3d33]">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>

                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 pt-4 border-t border-gray-50 mt-4">
                        <div className="flex items-center bg-[#fcfcf9] rounded-xl p-1 border border-gray-100">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="w-10 h-10 flex items-center justify-center text-[#0b3d33] hover:bg-white rounded-lg transition-all"
                          >
                            <Minus size={14} strokeWidth={3} />
                          </button>
                          <span className="px-5 font-black text-[#0b3d33] text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-10 flex items-center justify-center text-[#0b3d33] hover:bg-white rounded-lg transition-all"
                          >
                            <Plus size={14} strokeWidth={3} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex items-center gap-2 text-red-400 hover:text-red-600 transition-colors text-[10px] font-black uppercase tracking-widest"
                        >
                          <Trash2 size={14} />
                          Remove
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* 💰 RIGHT - ORDER SUMMARY */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="lg:col-span-4 sticky top-10"
              >
                <div className="bg-[#0b3d33] rounded-[3rem] p-8 text-white shadow-2xl shadow-[#0b3d33]/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
                  
                  <h2 className="text-2xl font-serif font-bold mb-8">Summary</h2>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-white/60 text-sm">
                      <span>Subtotal</span>
                      <span className="font-bold text-white">₹{total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-white/60 text-sm">
                      <span>Shipping</span>
                      <span className="text-[#c8a24c] font-black uppercase text-[10px] tracking-widest">Free Delivery</span>
                    </div>
                    <div className="h-[1px] bg-white/10 w-full" />
                    <div className="flex justify-between items-baseline pt-2">
                      <span className="text-lg font-medium">Total</span>
                      <span className="text-3xl font-black text-[#c8a24c]">₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => router.push("/checkout")}
                    className="group relative w-full h-16 bg-[#c8a24c] hover:bg-white text-[#0b3d33] rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 overflow-hidden shadow-lg"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Proceed to Checkout
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                  </button>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                      <ShieldCheck size={14} className="text-[#c8a24c]" />
                      Secure Encrypted Payment
                    </div>
                    <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest">
                      <Truck size={14} className="text-[#c8a24c]" />
                      Ethically Packaged
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 bg-white rounded-[2rem] border border-gray-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#fcfcf9] flex items-center justify-center text-[#c8a24c]">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Member Bonus</p>
                    <p className="text-xs font-bold text-[#0b3d33]">Earn purity points on this purchase</p>
                  </div>
                </div>
              </motion.div>

            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}