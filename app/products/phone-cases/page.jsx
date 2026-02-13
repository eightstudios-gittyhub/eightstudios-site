import CollectionPage from "../../components/CollectionPage";

export default function PhoneCasesPage() {
  const products = [
    {
      title: "888Phone Case Midnight Circuit — 1/1",
      price: "$60",
      link: "/products/phone-cases/888phone-case-midnight-circuit",
      img: "https://i.imgur.com/3n1cHwZ.jpeg",
      subtitle: "iPhone 16",
    },
    {
      title: "888Phone Case Midnight Circuit — 1/1",
      price: "$60",
      link: "/products/phone-cases/888phone-case-midnight-circuit-16-plus",
      img: "https://i.imgur.com/BNHTJQE.jpeg",
      subtitle: "iPhone 16 Plus",
    },
  ];

  return (
    <CollectionPage
      title="Phone Cases"
      description="888Phone Case Midnight Circuit Micro Drop — Down Below"
      products={products}
      emptyMessage="More pieces coming soon."
    />
  );
}
