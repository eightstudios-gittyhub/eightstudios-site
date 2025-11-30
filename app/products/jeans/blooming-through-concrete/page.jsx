"use client";

export default function BloomingThroughConcrete() {
  const images = [
    "https://i.imgur.com/zCDwOmK.jpeg",
    "https://i.imgur.com/F4kIp9Z.jpeg",
    "https://i.imgur.com/1CRdzpT.jpeg",
    "https://i.imgur.com/C7ZOqbG.jpeg",
    "https://i.imgur.com/6ynU3Mk.jpeg",
    "https://i.imgur.com/C7krbWn.jpeg",
    "https://i.imgur.com/gj1iGm0.jpeg",
    "https://i.imgur.com/Cp6VDwN.jpeg",
    "https://i.imgur.com/qdewo2k.jpeg",
    "https://i.imgur.com/Qm0wt5b.jpeg",
    "https://i.imgur.com/SteLeNb.jpeg",
  ];

  const purpleGlow = {
    color: "#caa9ff",
    textShadow: "0 0 12px #b388ff, 0 0 22px #caa9ff",
  };

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
      {/* TITLE (white) */}
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>
        Blooming Through Concrete
      </h1>

      {/* PURPLE LINE #1 */}
      <p
        style={{
          marginTop: "6px",
          marginBottom: "10px",
          fontSize: "18px",
          ...purpleGlow,
        }}
      >
        1/1 luxury woman’s jeans
      </p>

      {/* PURPLE LINE #2 */}
      <p
        style={{
          marginTop: "0px",
          marginBottom: "28px",
          fontSize: "18px",
          ...purpleGlow,
        }}
      >
        size — 8 (29–31.5 in waist)
      </p>

      {/* DESCRIPTION (white) */}
      <div
        style={{
          margin: "0 auto 30px",
          fontSize: "16px",
          lineHeight: "1.6",
          maxWidth: "700px",
          color: "white",
          textShadow: "none",
        }}
      >
        • made by Eight Studios (888inc.) <br />
        <br />
        • price: $150 <br />
        <br />
        • handmade 1/1 luxury woman’s jeans
      </div>

      {/* IMAGE GRID (MATCHES STARFADE EXACTLY) */}
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
            alt="Blooming Through Concrete"
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON (WHITE — MATCHES STARFADE) */}
      <div style={{ margin: "30px 0" }}>
        <a
          href="#"
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

      {/* CONTACT (white + underline) */}
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