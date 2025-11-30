import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function BloomingThroughConcrete() {
  return (
    <ProductPageTemplate
      title="Blooming Through Concrete — 1/1 woman’s jeans"
      size="8 (29–31.5 in waist)"
      price="$155"
      description={`• price: $155
• made by Eight Studios (888inc.)
• made in 2024
• handmade 1/1 luxury woman’s jeans`}
      images={[
        "https://i.imgur.com/zCDwOmK.jpeg",
        "https://i.imgur.com/F4kIp9Z.jpeg",
        "https://i.imgur.com/1CRdzpT.jpeg",
        "https://i.imgur.com/C7ZOqbG.jpeg",
        "https://i.imgur.com/6ynU3Mk.jpeg",
        "https://i.imgur.com/C7krbWn.jpeg",
        "https://i.imgur.com/gj1iGm0.jpeg",
        "https://i.imgur.com/Cp6VDwN.jpeg",
        "https://i.imgur.com/qdewo2k.jpeg",
        "https://i.imgur.com/Qm0wt5b.jpeg"
      ]}
      stripe="#"
    />
  );
}