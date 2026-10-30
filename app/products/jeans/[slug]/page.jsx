import { notFound } from "next/navigation";
import ProductPageTemplate from "../../../components/ProductPageTemplate";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return products
    .filter((product) => product.collection === "jeans")
    .map((product) => ({ slug: product.slug }));
}

export default async function JeansProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct("jeans", slug);
  if (!product) notFound();

  return <ProductPageTemplate {...product} />;
}
