"use client";

import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Long888BeanieHandSewn() {
  return (
    <ProductPageTemplate
      title="888Long Beanie — Hand-Sewn"
      size="One Size"
      price="$75"
      stripe="https://buy.stripe.com/bJe8wRaZ9el40Ft70C5Rm0g"
      description={`Handmade long-fit beanie with extended length.

• made by Eight Studios (888inc.)
• long beanie / slouch fit
• hand-sewn 888 patch
• raw frayed edges
• comfortable deep fit
• made in-house`}
      images={[
        "https://i.imgur.com/vdjnkAZ.jpeg",
        "https://i.imgur.com/uOeuXdr.jpeg",
        "https://i.imgur.com/vzN5Th6.jpeg",
      ]}
    />
  );
}
