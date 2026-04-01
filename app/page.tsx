
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import Why from "@/components/home/Why";
import WhyTrust from "@/components/home/whytrust"; // ✅ NEW
import Featured from "@/components/home/Featured";
import Offers from "@/components/home/Offers";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main className="bg-white">

     

      {/* 🏠 Hero */}
      <Hero />

      {/* 🔥 Offers */}
      <Offers />

      {/* ⭐ Why Section */}
      <Why />

      {/* 💚 Why Trust Us (NEW SECTION) */}
      <WhyTrust />

      {/* 🛍️ Categories */}
      <Categories />

      {/* 💎 Featured */}
      <Featured />

      {/* 💬 Testimonials */}
      <Testimonials />

      

    </main>
  );
}