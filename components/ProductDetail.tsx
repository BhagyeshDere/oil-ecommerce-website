"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Added for navigation
import { 
  Star, ShieldCheck, Truck, ArrowLeft, 
  ShoppingBag, Zap, Heart, Share2, Check 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { oils } from "@/data/oils";

export default function ProductDetail({ product }: any) {
  const { addToCart } = useCart();
  const router = useRouter(); // Initialize router
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [isLiked, setIsLiked] = useState(false);
  const [activeImg, setActiveImg] = useState(0);
  const [isAdding, setIsAdding] = useState(false);

  // Fallback for missing data
  const originalPrice = product.originalPrice || product.price + 150;
  const discount = Math.round(((originalPrice - product.price) / originalPrice) * 100);

  const relatedProducts = oils
    .filter((item) => item.id !== product.id)
    .slice(0, 4);

  // --- Handlers ---
  
  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      ...product,
      image: product.images[0],
      quantity: 1,
      size: selectedSize,
    });
    
    // Reset "Adding" state after 2 seconds
    setTimeout(() => setIsAdding(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      ...product,
      image: product.images[0],
      quantity: 1,
      size: selectedSize,
    });
    // Navigate immediately to the cart page
    router.push("/cart");
  };

  return (
    <div className="bg-[#fcfcf9] min-h-screen pb-24 selection:bg-[#c8a24c]/20">
      
      {/* 🧭 TOP NAV BAR */}
      <nav className="sticky top-0 z-50 bg-[#fcfcf9]/80 backdrop-blur-md border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/products" className="group flex items-center gap-2 text-[#0b3d33] font-bold text-sm">
            <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#0b3d33] group-hover:text-white transition-all">
              <ArrowLeft size={16} />
            </div>
            Back to Collection
          </Link>
          <div className="flex gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition" onClick={() => setIsLiked(!isLiked)}>
              <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : "text-gray-400"} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Share2 size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* 🖼️ LEFT: IMAGE GALLERY */}
          <div className="lg:col-span-7 space-y-4">
            <motion.div 
              layoutId={`img-${product.id}`}
              className="relative aspect-square bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden flex items-center justify-center p-12 shadow-sm"
            >
               <div className="absolute top-6 left-6 z-10 bg-[#0b3d33] text-white text-[10px] font-black px-4 py-2 rounded-full tracking-widest uppercase">
                {discount}% Off
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImg}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={product.images[activeImg] || product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.12)]"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {product.images.map((img: string, idx: number) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl border-2 transition-all overflow-hidden bg-white p-2 ${
                    activeImg === idx ? "border-[#c8a24c]" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="thumb" fill className="object-contain p-2" />
                </button>
              ))}
            </div>
          </div>

          {/* 📝 RIGHT: PRODUCT INFO */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[#c8a24c] font-bold text-[10px] uppercase tracking-[0.2em]">
                <ShieldCheck size={14} /> Certified Organic
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0b3d33] leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <div className="flex text-[#c8a24c]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#c8a24c" />)}
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">
                  {product.reviews} Verified Reviews
                </span>
              </div>
            </div>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed border-l-2 border-[#c8a24c]/20 pl-4">
              {product.description || "Our premium cold-pressed oil is extracted using traditional methods to ensure maximum nutrient retention."}
            </p>

            {/* PRICE AREA */}
            <div className="flex items-end gap-4">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Limited Time Price</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-[#0b3d33]">₹{product.price}</span>
                  <span className="text-xl text-gray-300 line-through decoration-[#c8a24c]/40 font-medium">₹{originalPrice}</span>
                </div>
              </div>
            </div>

            {/* SIZE SELECTOR */}
            <div className="space-y-4">
              <p className="text-xs font-black text-[#0b3d33] uppercase tracking-widest flex justify-between">
                Choose Volume <span>{selectedSize}</span>
              </p>
              <div className="flex gap-3">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-4 rounded-2xl text-xs font-bold border-2 transition-all ${
                      selectedSize === size 
                        ? "border-[#0b3d33] bg-[#0b3d33] text-white shadow-lg" 
                        : "border-gray-100 bg-white text-gray-500 hover:border-[#c8a24c]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* 🔥 ACTION BUTTONS - FIXED & RESPONSIVE */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleAddToCart}
                disabled={isAdding}
                className={`flex-[2] py-5 rounded-2xl font-bold uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 transition-all shadow-xl ${
                    isAdding 
                    ? "bg-green-600 text-white" 
                    : "bg-[#0b3d33] text-white hover:bg-[#0f7b65] shadow-[#0b3d33]/10"
                }`}
              >
                {isAdding ? <Check size={18} /> : <ShoppingBag size={18} />}
                {isAdding ? "Added to Cart" : "Add To Cart"}
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.96 }}
                onClick={handleBuyNow}
                className="flex-1 bg-[#c8a24c] text-[#0b3d33] py-5 rounded-2xl font-bold uppercase text-[11px] tracking-widest flex items-center justify-center gap-3 hover:shadow-lg transition-all"
              >
                <Zap size={18} /> Buy Now
              </motion.button>
            </div>

            {/* TRUST BADGES */}
            <div className="grid grid-cols-3 gap-2 py-6 border-t border-b border-gray-100">
              {[
                { icon: <ShieldCheck size={18}/>, label: "Non-GMO" },
                { icon: <Truck size={18}/>, label: "Eco Delivery" },
                { icon: <Check size={18}/>, label: "Cold Pressed" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="text-[#c8a24c]">{item.icon}</div>
                  <span className="text-[9px] font-black uppercase text-[#0b3d33] tracking-tighter">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 🌿 BENEFITS */}
        <div className="mt-32">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#0b3d33]">The Purity Promise</h2>
            <p className="text-gray-400 text-sm tracking-widest uppercase font-bold">What makes us different</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.benefits.map((benefit: string, i: number) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center space-y-4"
              >
                <div className="w-12 h-12 bg-[#c8a24c]/10 rounded-full flex items-center justify-center mx-auto text-[#c8a24c]">
                  <Check size={24} />
                </div>
                <h4 className="text-[#0b3d33] font-bold text-lg">Benefit {i + 1}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🔥 RELATED SECTION */}
        <div className="mt-32">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-2">
              <h3 className="text-3xl font-serif font-bold text-[#0b3d33]">Complete Your Kitchen</h3>
              <p className="text-[#c8a24c] text-xs font-bold uppercase tracking-widest">Based on your selection</p>
            </div>
            <Link href="/products" className="text-[#0b3d33] font-bold text-sm border-b-2 border-[#c8a24c]">View All</Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((item: any) => (
              <Link key={item.id} href={`/products/${item.id}`} className="group">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-50 hover:border-[#c8a24c]/30 hover:shadow-2xl hover:shadow-[#c8a24c]/10 transition-all text-center space-y-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-4">
                    <Image
                      src={item.images[0]}
                      alt={item.name}
                      width={180}
                      height={180}
                      className="object-contain group-hover:scale-110 transition duration-500"
                    />
                  </div>
                  <div>
                    <p className="text-[#0b3d33] font-bold text-sm group-hover:text-[#c8a24c] transition-colors">{item.name}</p>
                    <p className="text-[#c8a24c] font-black text-sm mt-1">₹{item.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}