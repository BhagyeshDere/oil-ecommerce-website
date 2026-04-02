"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl p-5 z-50">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.map((item) => (
        <div key={item.id} className="flex gap-3 mb-4">
          <img src={item.image} className="w-16 h-16 object-cover" />
          <div>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}