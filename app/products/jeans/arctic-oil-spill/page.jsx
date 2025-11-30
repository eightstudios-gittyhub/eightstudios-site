import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function ArcticOilSpill() {
  return (
    <ProductPageTemplate
      title="Arctic Oil Spill • 1/1"
      size="size — 30W/30L"
      description={`• made by Eight Studios (888inc.)
• price: $100
• made in 2024`}
      images={[
        "https://i.imgur.com/5p9IhQ0.jpeg",
        "https://i.imgur.com/DHZLd0R.jpeg",
        "https://i.imgur.com/PzqiBij.jpeg",
        "https://i.imgur.com/S6UIYl6.jpeg",
        "https://i.imgur.com/y46P6Ck.jpeg",
        "https://i.imgur.com/SVe7dIe.jpeg",
        "https://i.imgur.com/NX0T4pZ.jpeg",
      ]}
      stripe="https://buy.stripe.com/3cI3cx1ozel42NBgBc5Rm0a"
    />
  );
}