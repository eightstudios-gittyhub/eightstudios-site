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
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      {/* TITLE */}
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Arctic Oil Spill • size - 30W/30L
      </h1>

      {/* DESCRIPTION BLOCK */}
      <div
        style={{
          margin: "0 auto",
          marginBottom: "30px",
          fontSize: "16px",
          lineHeight: "1.6",
          opacity: 0.9,
        }}
      >
        • made by Eight Studios (888inc.) <br />
        <br />
        • price: $100 <br />
        <br />
        • made in 2024
      </div>

      {/* IMAGES */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Arctic Oil Spill Jeans"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON */}
      <a
        href="#"
        style={{
          display: "inline-block",
          marginTop: "40px",
          backgroundColor: "white",
          color: "black",
          padding: "12px 28px",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Buy Now
      </a>
    </main>
  );
}