import Image from "next/image";

export default function ProductCard({ oil }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4">

      <Image
        src={oil.image}
        alt={oil.name}
        width={200}
        height={200}
        className="mx-auto"
      />

      <h3 className="mt-4 font-semibold">{oil.name}</h3>
      <p className="text-green-700 font-bold">₹{oil.price}</p>

      <button className="mt-3 w-full bg-green-700 text-white py-2 rounded-full">
        Add to Cart
      </button>
    </div>
  );
}