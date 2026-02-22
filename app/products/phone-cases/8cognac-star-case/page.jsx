"use client";

import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function CognacStarCase() {
  return (
    <ProductPageTemplate
      title="8Cognac Star Case — 1/1"
      size="iPhone 17"
      price="$50"
      stripeLink="https://buy.stripe.com/aFa7sNffpel40Ft2Km5Rm0l"
      description={`Hand made iPhone 17 case with hand sewn aspects.

• made by Eight Studios (888inc.)
• Time spent: 4hrs
(shipping available within 3-5 days of payment)`}
      images={[
        "https://i.imgur.com/mlqVgBp.jpeg",
        "https://i.imgur.com/Dk8j1oG.jpeg",
        "https://i.imgur.com/9sO9yN7.jpeg",
        "https://i.imgur.com/ZnXOQ9O.jpeg",
        "https://i.imgur.com/KxK2PQ4.jpeg",
      ]}
    />
  );
}
