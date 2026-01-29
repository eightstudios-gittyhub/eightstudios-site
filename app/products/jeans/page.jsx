import CollectionPage from "@/components/CollectionPage";

export default function JeansPage() {
  const products = [
    {
      title: "Hand-Sewn Woodland Camo — 1/1",
      link: "/products/jeans/hand-sewn-woodland-camo",
      img: "https://i.imgur.com/B3323uR.jpeg",
      subtitle: "Hand-sewn detailing",
    },
    {
      title: "Arctic Oil Spill — 1/1",
      link: "/products/jeans/arctic-oil-spill",
      img: "https://i.imgur.com/5p9IhQ0.jpeg",
      subtitle: "Custom wash denim",
    },
    {
      title: "Plaid8 Cargo PJ’s — 1/1",
      link: "/products/jeans/plaid8-cargo-pjs",
      img: "https://i.imgur.com/NYQt6sa.jpeg",
      subtitle: "Cargo-inspired patchwork",
    },
    {
      title: "Starfade Denim — 1/1",
      link: "/products/jeans/starfade-denim",
      img: "https://i.imgur.com/N9WTq1o.jpeg",
      subtitle: "Signature fade finish",
    },
    {
      title: "Blooming Through Concrete — 1/1 Women’s Jeans",
      link: "/products/jeans/blooming-through-concrete",
      img: "https://i.imgur.com/zCDwOmK.jpeg",
      subtitle: "Custom women’s fit",
    },
  ];

  return (
    <CollectionPage
      title="Jeans / Pants"
      description="Custom denim and patchwork pieces will appear here as new drops release."
      products={products}
      emptyMessage="More pieces coming soon. Customize your own clothing — inquire at eight888studios@gmail.com."
    />
  );
}
