"use client";

export default function JeansPage() {
  const products = [
    {
      name: "Plaid8 Cargo PJ’s — 1/1",
      link: "/products/jeans/plaid8-cargo-pjs",
      img: "https://i.imgur.com/NYQt6sa.jpeg"
    },
  ];

  return (
    <main
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "black",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Jeans / Pants</h1>

      <p style={{ marginTop: "10px", opacity: "0.8" }}>
        Custom denim and patchwork pieces will appear here as new drops release.
      </p>

      <div style={{ marginTop: "50px" }}>
        {products.map((product, index) => (
          <a
            key={index}
            href={product.link}
            style={{
              display: "block",
              marginBottom: "40px",
              textDecoration: "none",
              color: "white"
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "85%",
                maxWidth: "350px",
                borderRadius: "12px",
                boxShadow: "0 0 30px rgba(255,255,255,0.08)"
              }}
            />
            <h2 style={{ marginTop: "12px", fontSize: "20px" }}>
              {product.name}
            </h2>
            <p style={{ color: "#aaa", fontSize: "14px" }}>See Details →</p>
          </a>
        ))}
      </div>

      {/* FOOTER SECTION */}
      <div style={{ marginTop: "70px", opacity: 0.7 }}>
        <p style={{ marginBottom: "8px" }}>More pieces coming soon.</p>
        <p>
          Customize your own clothing — Inquire here:
          <br />
          <a
            href="mailto:eight888studios@gmail.com"
            style={{ color: "#aaa", textDecoration: "underline" }}
          >
            eight888studios@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}