"use client";

import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function NoirRoseCaseIPhone11() {
  return (
    <ProductPageTemplate
      title="8 Noir Rosé Case — 1/1"
      size="iPhone 11"
      price="$35"
      stripeLink="https://buy.stripe.com/3cI6oJaZ94Ku0Ft0Ce5Rm0m"
      description={`Hand made iPhone 11 case.

• made by Eight Studios (888inc.)
• Time spent: 3hrs
(shipping available within 3-5 days of payment)`}
      images={[
        "https://i.imgur.com/9oQI8Fv.jpeg",
        "https://i.imgur.com/pfNZafO.jpeg",
        "https://i.imgur.com/qs37vWt.jpeg",
        "https://i.imgur.com/kRcn6RV.jpeg",
        "https://i.imgur.com/4VOHxDZ.jpeg",
      ]}
    />
  );
}
