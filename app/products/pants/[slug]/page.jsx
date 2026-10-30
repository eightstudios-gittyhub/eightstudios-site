import { notFound } from "next/navigation";
import ProductPageTemplate from "../../../components/ProductPageTemplate";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return products
    .filter((product) => product.collection === "pants")
    .map((product) => ({ slug: product.slug }));
}

export default async function PantsProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct("pants", slug);
  if (!product) notFound();

  return <ProductPageTemplate {...product} />;
}
