import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Plaid8CargoPjs() {
  return (
    <ProductPageTemplate
      title='888 “Plaid8 Cargo PJ’s” — 1/1'
      size="Fits Waist — 30–36"
      description={`• one-of-one plaid cargo pants with 888 print pattern placement
• elastic waistband · fits 30–36 comfortably
• no restocks — one-time release`}
      images={[
        "https://i.imgur.com/NYQt6sa.jpeg",
        "https://i.imgur.com/glAkxmI.jpeg",
        "https://i.imgur.com/j2Si6iT.jpeg",
        "https://i.imgur.com/XLun1pi.jpeg",
      ]}
      stripe="https://buy.stripe.com/6oUfZj0kvdh0dsfet45Rm07"
    />
  );
}