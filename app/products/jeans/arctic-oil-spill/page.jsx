"use client";

export default function ArcticOilSpill() {
  const images = [
    "https://i.imgur.com/5p9IhQ0.jpeg",
    "https://i.imgur.com/DHZLd0R.jpeg",
    "https://i.imgur.com/PzqiBij.jpeg",
    "https://i.imgur.com/S6UIYl6.jpeg",
    "https://i.imgur.com/y46P6Ck.jpeg",
    "https://i.imgur.com/SVe7dIe.jpeg",
    "https://i.imgur.com/NX0T4pZ.jpeg",
  ];

  return (
    <main
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "black",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* TITLE */}
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
        Arctic Oil Spill • 1/1
      </h1>

      {/* SIZE LINE (matches footer glow) */}
      <p
        style={{
          marginTop: "0px",
          marginBottom: "26px",
          fontSize: "18px",
          color: "rgba(255, 255, 255, 0.6)",
          textShadow: "0 0 8px rgba(255,255,255,0.35)",
          letterSpacing: "0.5px",
        }}
      >
        size — 30W/30L
      </p>

      {/* DESCRIPTION BLOCK (white, identical formatting to Blooming + Starfade) */}
      <div
        style={{
          margin: "0 auto 30px",
          fontSize: "16px",
          lineHeight: "1.6",
          maxWidth: "700px",
          opacity: 0.9,
        }}
      >
        • made by Eight Studios (888inc.) <br />
        <br />
        • price: $100 <br />
        <br />
        • made in 2024
      </div>

      {/* IMAGE GRID (5 desktop / 3 tablet / 1 mobile — MATCHES ALL OTHER GARMENTS) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "980px",
          margin: "0 auto 40px",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Arctic Oil Spill Jeans"
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON (same as Starfade & Blooming) */}
      <div style={{ margin: "30px 0" }}>
        <a
          href="https://buy.stripe.com/3cI3cx1ozel42NBgBc5Rm0a"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "white",
            color: "black",
            padding: "12px 28px",
            borderRadius: "6px",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "16px",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.opacity = "0.85")}
          onMouseOut={(e) => (e.target.style.opacity = "1")}
        >
          Buy Now
        </a>
      </div>

      {/* CONTACT FOOTER */}
      <p style={{ opacity: 0.8 }}>
        For purchase or custom sizing inquiries, email{" "}
        <a
          href="mailto:eight888studios@gmail.com"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          eight888studios@gmail.com
        </a>
      </p>
    </main>
  );
}