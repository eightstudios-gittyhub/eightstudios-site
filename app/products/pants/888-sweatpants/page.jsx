import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function EightStudiosSweatpants() {
  return (
    <ProductPageTemplate
      title="888 Sweatpants — 1/1"
      price="$45 + 8$ shipping"
      description={`• made by Eight Studios (888inc.)
• no restocks — one-time release
• made in 2026`}
      images={[
        "https://i.imgur.com/KqBrlZA.jpeg",
        "https://i.imgur.com/pPUY3xg.jpeg",
        "https://i.imgur.com/TIsivwC.jpeg",
        "https://i.imgur.com/FEaMSLj.jpeg",
      ]}
    />
  );
}
