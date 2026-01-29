import CollectionPage from "../../components/CollectionPage";

export default function BeaniesIndexPage() {
  const products = [
    {
      title: "888Long Beanie",
      price: "$60",
      link: "/products/beanies/888-long-beanie",
      img: "https://i.imgur.com/eSfJnxK.jpeg",
      subtitle: "Luxury 1/1 — choose patch + glitter",
    },
    {
      title: "888Short Beanie",
      price: "$30",
      link: "/products/beanies/888-short-beanie",
      img: "https://i.imgur.com/0F8sDMG.jpeg",
      subtitle: "Short / cropped fit",
    },
    {
      title: "888Long Beanie — Hand-Sewn",
      price: "$75",
      link: "/products/beanies/888-long-beanie-hand-sewn",
      img: "https://i.imgur.com/vdjnkAZ.jpeg",
      subtitle: "Hand-sewn patch • long fit",
    },
  ];

  return (
    <CollectionPage
      title="Beanies"
      description="Every piece is made to order & crafted in-studio by Eight Studios (888inc.)."
      products={products}
      ctaLabel="Shop Details →"
      descriptionTone="glow"
    />
  );
}
