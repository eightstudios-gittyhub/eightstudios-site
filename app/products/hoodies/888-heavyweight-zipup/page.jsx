import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function HeavyweightZipup() {
  return (
    <ProductPageTemplate
      title="888 Heavyweight Zipup — 1/1"
      size="Choose your size"
      price="$—" // change if needed
      description={`Handmade 1/1 heavyweight luxury zip-up hoodie — Choose your size.

Made to Order
Certain products are made to order. Please allow 1–2 weeks for production and processing before shipment.

• made by Eight Studios (888inc.)
• high quality heavyweight hoodie
• 2 zippers
• rhinestones and patchwork
      `}
      images={[
        "https://i.imgur.com/pIeNzKp.jpeg",
        "https://i.imgur.com/9ebeoTs.jpeg",
        "https://i.imgur.com/fKZ4sQE.jpeg",
        "https://i.imgur.com/XW95aM4.jpeg",
        "https://i.imgur.com/lElGmrN.jpeg",
        "https://i.imgur.com/fJTOTE8.jpeg",
      ]}
      stripe="https://buy.stripe.com/REPLACE_WITH_YOUR_LINK"
    />
  );
}