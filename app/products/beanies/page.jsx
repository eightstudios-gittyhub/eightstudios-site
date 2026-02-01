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
