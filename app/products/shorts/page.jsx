"use client";

export default function ShortsPage() {
  const products = [
    {
      name: "Camo Fragment Shorts — 1/1",
      link: "/products/shorts/camo-fragment-shorts",
      img: "https://i.imgur.com/Y1zxInG.jpeg",
    },
  ];

  return (
    <main
      style={{
        textAlign: "center",
        padding: "60px",
        color: "white",
        backgroundColor: "black",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Shorts</h1>
      <p style={{ opacity: 0.7, marginBottom: "40px" }}>
        Custom summer and patchwork shorts.
      </p>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "30px",
          marginTop: "20px",
        }}
      >
        {products.map((item) => (
          <a
            key={item.link}
            href={item.link}
            style={{
              textDecoration: "none",
              color: "white",
              border: "1px solid #444",
              padding: "15px",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "14px" }}>{item.name}</p>
          </a>
        ))}
      </div>
    </main>
  );
}