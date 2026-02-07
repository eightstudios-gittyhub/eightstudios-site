import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function BlueMoonstone02() {
  return (
    <ProductPageTemplate
      title="Blue MoonStone 02"
      size="34W / 30L"
      price="$333"
      description={`• made by Eight Studios (888inc.)
• made in 2024
• 13hrs of work`}
      images={[
        "https://i.imgur.com/NkY6FRi.jpeg",
        "https://i.imgur.com/rxLVFwQ.jpeg",
        "https://i.imgur.com/oQssGxj.jpeg",
      ]}
    />
  );
}
