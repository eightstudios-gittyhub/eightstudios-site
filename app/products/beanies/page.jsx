import CollectionPage from "../../components/CollectionPage";

export default function BeaniesIndexPage() {
  const products = [
    {
      title: "888Long Beanie",
      price: "$60",
      link: "/products/beanies/888-long-beanie",
      img: "https://i.imgur.com/eSfJnxK.jpeg",
      subtitle: "Luxury 1/1 — choose patch + glitter",
    },
    {
      title: "888Short Beanie",
      price: "$30",
      link: "/products/beanies/888-short-beanie",
      img: "https://i.imgur.com/0F8sDMG.jpeg",
      subtitle: "Short / cropped fit",
    },
    {
      title: "888Long Beanie — Hand-Sewn",
      price: "$75",
      link: "/products/beanies/888-long-beanie-hand-sewn",
      img: "https://i.imgur.com/vdjnkAZ.jpeg",
      subtitle: "Hand-sewn patch • long fit",
    },
  ];

  return (
    "use client";

import Link from "next/link";
import CollectionPage from "../../components/CollectionPage";

export default function BeaniesIndexPage() {
  const products = [
    {
      title: "888Long Beanie",
      price: "$60",
      href: "/products/beanies/888-long-beanie",
      link: "/products/beanies/888-long-beanie",
      img: "https://i.imgur.com/eSfJnxK.jpeg",
      subtitle: "Luxury 1/1 — choose patch + glitter",
    },
    {
      title: "888Short Beanie",
      price: "$30",
      href: "/products/beanies/888-short-beanie",
      link: "/products/beanies/888-short-beanie",
      img: "https://i.imgur.com/0F8sDMG.jpeg",
      subtitle: "Short / cropped fit",
    },
    {
      title: "888Long Beanie — Hand-Sewn",
      price: "$75",
      href: "/products/beanies/888-long-beanie-hand-sewn",
      link: "/products/beanies/888-long-beanie-hand-sewn",
      img: "https://i.imgur.com/vdjnkAZ.jpeg",
      subtitle: "Hand-sewn patch • long fit",
    },
  ];

  return (
    <main
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "34px", fontWeight: "800", marginBottom: "10px" }}>
        Beanies
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "35px" }}>
        Every piece is made to order & crafted in-studio by Eight Studios (888inc.)
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "18px",
          maxWidth: "980px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {products.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            style={{
              textDecoration: "none",
              color: "white",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              overflow: "hidden",
              background: "#0b0b0b",
            }}
          >
            <div style={{ width: "100%", height: "260px" }}>
              <img
                src={p.img}
                alt={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            <div style={{ padding: "16px" }}>
              <div style={{ fontSize: "18px", fontWeight: "700" }}>{p.title}</div>
              <div style={{ opacity: 0.75, marginTop: "6px", fontSize: "14px" }}>
                {p.subtitle}
              </div>
              <div style={{ marginTop: "10px", fontWeight: "700" }}>{p.price}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
    <CollectionPage
      title="Beanies"
      description="Every piece is made to order & crafted in-studio by Eight Studios (888inc.)."
      products={products}
      ctaLabel="Shop Details →"
      descriptionTone="glow"
    />
  );
}
