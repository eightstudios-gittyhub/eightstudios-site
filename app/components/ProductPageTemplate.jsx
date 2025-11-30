"use client";

export default function ProductPageTemplate({
  title,
  size,
  description,
  images,
  stripe
}) {
  const purpleGlow = {
    color: "#caa9ff",
    textShadow: "0 0 12px #b388ff, 0 0 22px #caa9ff"
  };

  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        minHeight: "100vh"
      }}
    >
      {/* TITLE */}
      <h1 style={{ fontSize: "32px", marginBottom: "6px" }}>{title}</h1>

      {/* SIZE LINE — ALWAYS PURPLE GLOW */}
      <p
        style={{
          marginTop: "0px",
          marginBottom: "20px",
          fontSize: "18px",
          ...purpleGlow
        }}
      >
        {size}
      </p>

      {/* DESCRIPTION */}
      <div
        style={{
          margin: "0 auto",
          marginBottom: "30px",
          fontSize: "16px",
          lineHeight: "1.6"
        }}
      >
        {description.split("\n").map((line, i) => (
          <p key={i} style={{ margin: "6px 0" }}>
            {line}
          </p>
        ))}
      </div>

      {/* IMAGES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "980px",
          margin: "0 auto 40px"
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        ))}
      </div>

      {/* BUY BUTTON */}
      <a
        href={stripe}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "20px",
          backgroundColor: "white",
          color: "black",
          padding: "12px 28px",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
          fontSize: "16px"
        }}
      >
        Buy Now
      </a>
    </main>
  );
}