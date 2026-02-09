"use client";

import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function PhoneCaseMidnightCircuit() {
  return (
    <ProductPageTemplate
      title="888Phone Case Midnight Circuit — 1/1"
      size="iPhone 16"
      price="$60"
      stripeLink="https://buy.stripe.com/eVq14p2sDdh0ewjgBc5Rm0k"
      description={`Hand made iPhone 16 case with hand sewn aspects.

• made by Eight Studios (888inc.)
• Time spent: 3hrs
(shipping available within 3-5 days of payment)`}
      images={[
        "https://i.imgur.com/3n1cHwZ.jpeg",
        "https://i.imgur.com/2qJrdbr.jpeg",
        "https://i.imgur.com/2qJrdbr.jpeg",
        "https://i.imgur.com/hq4UGvj.jpeg",
        "https://i.imgur.com/I4iQt4v.jpeg",
        "https://i.imgur.com/4lmy8AE.jpeg",
      ]}
    />
  );
}
