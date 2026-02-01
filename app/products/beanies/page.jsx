import CollectionPage from "../../components/CollectionPage";

export default function BeaniesPage() {
  const products = [
    {
      title: "888 Long Beanie — Hand Sewn",
      price: "$75",
      link: "/products/beanies/888-long-beanie-hand-sewn",
      img: "https://i.imgur.com/vdjnkAZ.jpeg",
      subtitle: "Hand-sewn patch • long fit",
    },
    {
      title: "888 Long Beanie — 1/1",
      price: "$60",
      link: "/products/beanies/888-long-beanie",
      img: "https://i.imgur.com/eSfJnxK.jpeg",
      subtitle: "Custom patch + glitter",
    },
    {
      title: "888 Short Beanie — 1/1",
      price: "$30",
      link: "/products/beanies/888-short-beanie",
      img: "https://i.imgur.com/0F8sDMG.jpeg",
      subtitle: "Cropped fit • hand-sewn patch",
    },
  ];

  return (
    <CollectionPage
      title="Beanies"
      description="Custom beanie drops will appear here."
      products={products}
      emptyMessage="More items coming soon."
    />
  );
}
