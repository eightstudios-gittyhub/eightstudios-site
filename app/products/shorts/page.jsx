import CollectionPage from "../../components/CollectionPage";

export default function ShortsPage() {
  const products = [
    {
      title: "Camo Fragment Shorts — 1/1",
      link: "/products/shorts/camo-fragment-shorts",
      img: "https://i.imgur.com/Y1zxInG.jpeg",
      subtitle: "Custom patchwork short",
    },
  ];

  return (
    <CollectionPage
      title="Shorts"
      description="Custom summer and patchwork shorts."
      products={products}
    />
  );
}
