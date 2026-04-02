"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ oil }: any) {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white/80 backdrop-blur-md border border-gray-100 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 p-5 flex flex-col"
    >
      {/* 🔥 IMAGE */}
      <div className="relative flex justify-center items-center h-48 mb-4">
        <Image
          src={oil.image}
          alt={oil.name}
          width={160}
          height={160}
          className="object-contain group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* 🏷️ PRODUCT INFO */}
      <div className="text-center flex-1">
        <h3 className="text-lg font-semibold text-[#0b3d33]">
          {oil.name}
        </h3>

        <p className="text-xs text-gray-400 tracking-widest uppercase mt-1">
          Wood Pressed • Premium Quality
        </p>

        <p className="text-xl font-bold text-[#0b3d33] mt-2">
          ₹{oil.price}
        </p>
      </div>

      {/* 🛒 BUTTON (DEBUG + CART) */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          console.log("OIL:", oil); // ✅ DEBUG
          alert("CLICK WORKING"); // ✅ DEBUG

          addToCart({
            id: oil.id,
            name: oil.name,
            price: oil.price,
            image: oil.image,
            quantity: 1,
          });

          alert("Added to cart ✅"); // ✅ FINAL ACTION
        }}
        className="mt-5 w-full flex items-center justify-center gap-2 bg-[#0b3d33] text-white py-3 rounded-full font-semibold tracking-wide hover:bg-[#c8a24c] hover:text-[#0b3d33] transition-all duration-300"
      >
        <ShoppingCart size={18} />
        Add to Cart
      </motion.button>
    </motion.div>
  );
}