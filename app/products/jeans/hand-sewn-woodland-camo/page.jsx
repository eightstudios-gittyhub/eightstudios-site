import ProductPage from "@/components/ProductPageTemplate";

export default function Page() {
  return (
    <ProductPage
      title="Hand-Sewn Woodland Camo — 1/1"
      size="30W / 30L"
      price="$200"
      description={`• made by Eight Studios (888inc.)
• made in 2024
• 10hrs of work — all hand sewn (only 10 mins machine sewing). Handmade 1/1 luxury men's jeans.`}
      images={[
        "https://i.imgur.com/B3323uR.jpeg",
        "https://i.imgur.com/fWEzMYF.jpeg",
        "https://i.imgur.com/nZEsd2Y.jpeg",
        "https://i.imgur.com/IWebCWw.jpeg",
        "https://i.imgur.com/NmMwaUu.jpeg",
        "https://i.imgur.com/8wi095S.jpeg",
        "https://i.imgur.com/Yf8RQ7n.jpeg",
        "https://i.imgur.com/hrG4HKq.jpeg",
        "https://i.imgur.com/yU86GOT.jpeg",
        "https://i.imgur.com/O9sgchl.jpeg",
      ]}
      stripe="https://buy.stripe.com/bJeaEZ0kv2CmcobckW5Rm0c"
    />
  );
}
