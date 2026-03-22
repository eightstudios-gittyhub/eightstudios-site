import CollectionPage from "@/components/CollectionPage";

export default function PantsPage() {
  const products = [
    {
      title: "Plaid8 Cargo PJ’s — 1/1",
      link: "/products/jeans/plaid8-cargo-pjs",
      img: "https://i.imgur.com/NYQt6sa.jpeg",
      subtitle: "Cargo-inspired patchwork",
    },
  ];

  return (
    <CollectionPage
      title="Pants"
      description="Custom denim and patchwork pants will appear here as new drops release."
      products={products}
      emptyMessage="More pieces coming soon. Customize your own clothing — inquire at eight888studios@gmail.com."
      hideSubtitle
    />
  );
}
