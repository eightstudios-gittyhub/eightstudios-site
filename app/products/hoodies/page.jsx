import CollectionPage from "../../components/CollectionPage";

export default function HoodiesPage() {
  const hoodies = [
    {
      title: "888 Heavyweight Zipup — 1/1",
      link: "/products/hoodies/888-heavyweight-zipup",
      img: "https://i.imgur.com/pIeNzKp.jpeg",
      subtitle: "Handmade zip-up hoodie",
    },
  ];

  return (
    <CollectionPage
      title="Hoodies"
      description="Handmade 1/1 hooded garments by Eight Studios."
      products={hoodies}
    />
  );
}
