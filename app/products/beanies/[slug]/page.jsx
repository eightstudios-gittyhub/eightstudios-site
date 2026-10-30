import { notFound } from "next/navigation";
import ProductPageTemplate from "../../../components/ProductPageTemplate";
import { getProduct, products } from "../../../../lib/products";

export function generateStaticParams() {
  return products
    .filter((product) => product.collection === "beanies" && !product.detailRoute)
    .map((product) => ({ slug: product.slug }));
}

export default async function BeanieProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct("beanies", slug);
  if (!product || product.detailRoute) notFound();

  return <ProductPageTemplate {...product} />;
}
