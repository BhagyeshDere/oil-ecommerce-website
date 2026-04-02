"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, Mail, Phone, MapPin, CreditCard, 
  ArrowLeft, ShieldCheck, Lock, ChevronRight,
  Truck, CheckCircle2
} from "lucide-react";

export default function CheckoutPage() {
  const { cart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    try {
      const res = await fetch("/api/payment", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }) 
      });
      
      const data = await res.json();

      if (!data.id) {
        alert("Order failed ❌");
        setIsProcessing(false);
        return;
      }

      if (!(window as any).Razorpay) {
        alert("Razorpay not loaded ❌");
        setIsProcessing(false);
        return;
      }

      const options = {
        key: "rzp_test_SYlexFtZKue0w0",
        amount: data.amount,
        currency: "INR",
        order_id: data.id,
        name: "Prasatti Oils",
        description: "Premium Wood Pressed Oils",
        handler: function (response: any) {
          console.log("PAYMENT SUCCESS:", response);
          alert("Payment Successful 🎉");
          window.location.href = "/"; 
        },
        prefill: {
          name: "",
          email: "",
          contact: "",
        },
        notes: {
          address: "Prasatti Store",
        },
        theme: {
          color: "#0b3d33",
        },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed", error);
      alert("Something went wrong with the payment link.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcf9] selection:bg-[#c8a24c]/20">
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      {/* 🧩 AMBIENT BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#c8a24c]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#0f7b65]/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 min-h-screen">
          
          {/* 📝 LEFT COLUMN: SHIPPING & INFO */}
          <div className="lg:col-span-7 px-4 md:px-10 py-12 md:py-20">
            <Link href="/cart" className="inline-flex items-center gap-2 text-[#0b3d33]/50 hover:text-[#0b3d33] transition-colors mb-12 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">Return to Selection</span>
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-[1px] bg-[#c8a24c]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#c8a24c]">Final Step</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0b3d33]">Checkout <span className="text-[#c8a24c] italic">& Delivery</span></h1>
            </header>

            <section className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <User size={18} className="text-[#c8a24c]" />
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#0b3d33]">Customer Profile</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField placeholder="Full Name" icon={<User size={16} />} />
                  <InputField placeholder="Email Address" icon={<Mail size={16} />} />
                  <InputField placeholder="Phone Number" icon={<Phone size={16} />} />
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <MapPin size={18} className="text-[#c8a24c]" />
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#0b3d33]">Delivery Destination</h3>
                </div>
                <div className="space-y-6">
                  <InputField placeholder="Street Address / House No." icon={<MapPin size={16} />} />
                  <div className="grid md:grid-cols-3 gap-6">
                    <InputField placeholder="City" />
                    <InputField placeholder="State" />
                    <InputField placeholder="PIN Code" />
                  </div>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-sm border border-gray-100 rounded-[2rem] p-6 flex flex-wrap gap-8 justify-between items-center shadow-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-[#0f7b65]" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Buyer<br/>Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck size={20} className="text-[#c8a24c]" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Priority<br/>Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock size={20} className="text-[#0b3d33]" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Razorpay<br/>Secured</span>
                </div>
              </div>
            </section>
          </div>

          {/* 💰 RIGHT COLUMN: ORDER SUMMARY */}
          <div className="lg:col-span-5 bg-[#0b3d33] lg:min-h-screen px-6 md:px-12 py-12 md:py-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            
            <div className="relative z-10 sticky top-24">
              <h2 className="text-2xl font-serif font-bold text-white mb-10">Order <span className="text-[#c8a24c] italic">Review</span></h2>

              <div className="space-y-6 mb-12 max-h-[40vh] overflow-y-auto custom-scrollbar pr-4">
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-3 border border-white/10"
                    >
                      <div className="w-16 h-20 bg-white rounded-xl flex-shrink-0 p-2 relative overflow-hidden">
                        <Image src={item.image} alt={item.name} fill className="object-contain" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-bold text-white leading-tight">{item.name}</p>
                        <p className="text-[10px] text-[#c8a24c] font-black uppercase tracking-widest mt-1">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-sm font-black text-white">₹{(item.price * item.quantity).toLocaleString()}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-8">
                <div className="flex justify-between text-white/60 text-sm">
                  <span className="uppercase tracking-widest text-[10px] font-black">Subtotal</span>
                  <span className="font-bold text-white">₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-white/60 text-sm">
                  <span className="uppercase tracking-widest text-[10px] font-black">Shipping Fee</span>
                  <span className="text-[#0f7b65] font-black text-[10px] uppercase tracking-widest">Complimentary</span>
                </div>
                <div className="flex justify-between items-baseline pt-4 border-t border-white/10">
                  <span className="text-lg text-white font-serif font-bold">Total Amount</span>
                  <span className="text-4xl font-black text-[#c8a24c]">₹{total.toLocaleString()}</span>
                </div>
              </div>

              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={handlePayment}
                disabled={isProcessing}
                className="group relative w-full h-20 bg-[#c8a24c] hover:bg-white text-[#0b3d33] rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs transition-all duration-500 overflow-hidden shadow-2xl mt-12 disabled:opacity-50"
              >
                <div className="relative z-10 flex items-center justify-center gap-4">
                  {isProcessing ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-5 h-5 border-2 border-[#0b3d33] border-t-transparent rounded-full" 
                    />
                  ) : (
                    <>
                      <CreditCard size={18} />
                      Complete Purchase
                      <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </div>
              </motion.button>
              
              <p className="text-center text-white/30 text-[9px] font-bold uppercase tracking-[0.3em] mt-8 flex items-center justify-center gap-2">
                <CheckCircle2 size={12} className="text-[#0f7b65]" />
                Authorized Secured Transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ placeholder, icon }: { placeholder: string; icon?: React.ReactNode }) {
  return (
    <div className="relative group">
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within:text-[#c8a24c] transition-colors">
          {icon}
        </div>
      )}
      <input
        type="text"
        required
        placeholder={placeholder}
        className={`w-full ${icon ? 'pl-12' : 'pl-6'} pr-6 py-5 bg-white border border-gray-100 rounded-[1.5rem] text-[#0b3d33] text-sm font-bold placeholder:text-gray-300 outline-none focus:border-[#c8a24c] focus:ring-4 focus:ring-[#c8a24c]/5 transition-all shadow-sm`}
      />
    </div>
  );
}