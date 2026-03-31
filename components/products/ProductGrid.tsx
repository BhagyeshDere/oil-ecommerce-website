import { oils } from "@/data/oils";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="px-6 py-10 bg-gray-100">

      <h2 className="text-3xl font-bold mb-6">
        Our Natural Oils
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {oils.map((oil) => (
          <ProductCard key={oil.id} oil={oil} />
        ))}
      </div>
    </section>
  );
}