"use client";

export default function Plaid8CargoPjs() {
  const images = [
    "https://i.imgur.com/NYQt6sa.jpeg",
    "https://i.imgur.com/glAkxmI.jpeg",
    "https://i.imgur.com/j2Si6iT.jpeg",
    "https://i.imgur.com/XLun1pi.jpeg",
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
        888 “Plaid8 Cargo PJ’s” — 1/1
      </h1>

      {/* SIZE / DETAILS LINE */}
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
        Fits Waist — 30 to 36
      </p>

      {/* DESCRIPTION BLOCK */}
      <div
        style={{
          margin: "0 auto 30px",
          fontSize: "16px",
          lineHeight: "1.6",
          maxWidth: "700px",
          opacity: 0.9,
        }}
      >
        • hand-custom one-of-one plaid cargo pants with 888 print placement <br />
        <br />
        • elastic waist, comfortable 30–36 fit <br />
        <br />
        • no restocks — one-time release
      </div>

      {/* IMAGE GRID (Matches every jeans page perfectly) */}
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
            alt="Plaid8 Cargo PJ’s"
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON */}
      <div style={{ margin: "30px 0" }}>
        <a
          href="https://buy.stripe.com/6oUfZj0kvdh0dsfet45Rm07"
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
          Buy Now — $55
        </a>
      </div>
    </main>
  );
}