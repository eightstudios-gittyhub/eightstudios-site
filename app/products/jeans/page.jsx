"use client";

export default function JeansPage() {
  const products = [
    {
  name: "Hand-Sewn Woodland Camo — 1/1",
  link: "/products/jeans/hand-sewn-woodland-camo",
  img: "https://i.imgur.com/B3323uR.jpeg"
},
    {
      name: "Arctic Oil Spill — 1/1",
      link: "/products/jeans/arctic-oil-spill",
      img: "https://i.imgur.com/5p9IhQ0.jpeg"
    },
    {
      name: "Plaid8 Cargo PJ’s — 1/1",
      link: "/products/jeans/plaid8-cargo-pjs",
      img: "https://i.imgur.com/NYQt6sa.jpeg"
    },
    {
      name: "Starfade Denim — 1/1",
      link: "/products/jeans/starfade-denim",
      img: "https://i.imgur.com/N9WTq1o.jpeg"
    },
    {
      name: "Blooming Through Concrete — 1/1 Women’s Jeans",
      link: "/products/jeans/blooming-through-concrete",
      img: "https://i.imgur.com/zCDwOmK.jpeg"
    },
  ];

  return (
    <main
      style={{
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Jeans / Pants</h1>

      <p style={{ marginTop: "10px", opacity: 0.8 }}>
        Custom denim and patchwork pieces will appear here as new drops release.
      </p>

      {/* FIXED GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "40px",
          justifyItems: "center",
          marginTop: "50px"
        }}
      >
        {products.map((product, index) => (
          <div key={index} style={{ width: "90%", maxWidth: "250px" }}>
            <a
              href={product.link}
              style={{
                textDecoration: "none",
                color: "white",
                display: "block"
              }}
            >
              <img
                src={product.img}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 0 25px rgba(255, 255, 255, 0.08)"
                }}
              />

              {/* TITLE WITH LIGHT LUXURY PINK GLOW */}
              <h2
                style={{
                  marginTop: "12px",
                  fontSize: "18px",
                  fontWeight: 500
                }}
              >
                {product.name.includes("Blooming Through Concrete") ? (
                  <>
                    Blooming Through Concrete — 1/1{" "}
                    <span
                      style={{
                        color: "white",
                        textShadow:
                          "0 0 6px rgba(255,170,200,0.75), 0 0 12px rgba(255,150,180,0.55)"
                      }}
                    >
                      Women’s Jeans
                    </span>
                  </>
                ) : (
                  product.name
                )}
              </h2>

              <p style={{ color: "#aaa", fontSize: "14px" }}>See Details →</p>
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "70px", opacity: 0.7 }}>
        <p style={{ marginBottom: "8px" }}>More pieces coming soon.</p>
        <p>
          Customize your own clothing — Inquire here:<br />
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