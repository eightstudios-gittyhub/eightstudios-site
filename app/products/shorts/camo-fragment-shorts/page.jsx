"use client";

import ProductPage from "@/components/ProductPageTemplate";

export default function Page() {
  return (
    <ProductPage
      title="Camo Fragment Shorts — 1/1"
      size="29W"
      price="$120"
      stripe="https://buy.stripe.com/6oU7sN0kv5Oy1Jx98K5Rm0e"
      description={`• made by Eight Studios (888inc.)
• made in 2024
• was made for commission but the guy didn't want it anymore`}
      images={[
        "https://i.imgur.com/Y1zxInG.jpeg",
        "https://i.imgur.com/f5XfvoN.jpeg",
        "https://i.imgur.com/XBbNYrD.jpeg",
        "https://i.imgur.com/849iLws.jpeg",
        "https://i.imgur.com/sUlgA8c.jpeg",
        "https://i.imgur.com/HNgNhAH.jpeg",
        "https://i.imgur.com/kmUnVX3.jpeg",
        "https://i.imgur.com/d8F3fLo.jpeg",
      ]}
    />
  );
}
