"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ oil }: any) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-4 sm:p-5 flex flex-col"
    >
      {/* 🔗 CLICKABLE AREA */}
      <Link href={`/products/${oil.id}`} className="block flex-1">

        {/* 🔥 IMAGE */}
        <div className="relative flex justify-center items-center h-40 sm:h-48 mb-4 overflow-hidden rounded-2xl">
          <Image
            src={oil.image}
            alt={oil.name}
            width={180}
            height={180}
            className="object-contain group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* 🏷️ PRODUCT INFO */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-semibold text-[#0b3d33] group-hover:text-[#c8a24c] transition">
            {oil.name}
          </h3>

          <p className="text-[10px] sm:text-xs text-gray-400 tracking-widest uppercase mt-1">
            Wood Pressed • Premium Quality
          </p>

          <p className="text-lg sm:text-xl font-bold text-[#0b3d33] mt-2">
            ₹{oil.price}
          </p>
        </div>
      </Link>

      {/* 🛒 ADD TO CART BUTTON */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.preventDefault(); // 🚨 prevent Link click
          e.stopPropagation();

          addToCart({
            id: oil.id,
            name: oil.name,
            price: oil.price,
            image: oil.image,
            quantity: 1,
          });
        }}
        className="mt-4 sm:mt-5 w-full flex items-center justify-center gap-2 bg-[#0b3d33] text-white py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base tracking-wide hover:bg-[#c8a24c] hover:text-[#0b3d33] transition-all duration-300"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </motion.button>
    </motion.div>
  );
}