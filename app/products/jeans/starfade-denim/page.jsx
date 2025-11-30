import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function StarfadeDenim() {
  return (
    <ProductPageTemplate
      title="Starfade Denim — 1/1"
      size="Remodeled Skinny Stacks, 32W 35L"
      price="$270"
      description={`• price: $270
• made by Eight Studios (888inc.)
• made in 2024
• one-of-one stacked denim`}
      images={[
        "https://i.imgur.com/U4Bth9g.jpeg",
        "https://i.imgur.com/NVQKSDh.jpeg",
        "https://i.imgur.com/eCp6E02.jpeg",
        "https://i.imgur.com/j5hiOR4.jpeg",
        "https://i.imgur.com/v5uYwtC.jpeg",
        "https://i.imgur.com/4IaE5Uo.jpeg",
      ]}
      stripe="https://buy.stripe.com/cNi8wRd7h7WG73R1Gi5Rm08"
    />
  );
}