import { notFound } from "next/navigation";
import ProductPageTemplate from "../../../components/ProductPageTemplate";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return products
    .filter((product) => product.collection === "hoodies" && !product.detailRoute)
    .map((product) => ({ slug: product.slug }));
}

export default async function HoodieProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct("hoodies", slug);
  if (!product || product.detailRoute) notFound();

  return <ProductPageTemplate {...product} />;
}
