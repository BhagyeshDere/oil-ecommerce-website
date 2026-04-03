import { oils } from "@/data/oils";
import ProductDetail from "@/components/ProductDetail";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = oils.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-xl">
        Product not found ❌
      </div>
    );
  }

  return <ProductDetail product={product} />;
}