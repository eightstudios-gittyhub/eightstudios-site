"use client";

import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Short888Beanie() {
  return (
    <ProductPageTemplate
      title="888Short Beanie — 1/1"
      size="One Size"
      price="$30"
      description={`Handmade short-fit beanie.

• made by Eight Studios (888inc.)
• short / cropped beanie fit
• hand-sewn 888 patch
• raw frayed edges
• limited 1/1 piece
• made in-house`}
      images={[
        "https://i.imgur.com/0F8sDMG.jpeg",
        "https://i.imgur.com/WBvyvvd.jpeg",
      ]}
      stripe="https://buy.stripe.com/9B6bJ3d7hfp8bk74Su5Rm0f"
    />
  );
}
