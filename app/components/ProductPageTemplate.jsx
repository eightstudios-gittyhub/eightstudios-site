"use client";

export default function ProductPageTemplate({
  title,
  size,
  price,
  description,
  images,
  stripe,
}) {
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
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>{title}</h1>

      {/* SIZE LINE */}
      {size && (
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
          {size}
        </p>
      )}

      {/* DESCRIPTION BLOCK */}
      {description && (
        <div
          style={{
            margin: "0 auto 30px",
            fontSize: "16px",
            lineHeight: "1.6",
            maxWidth: "700px",
            opacity: 0.9,
          }}
        >
          {description.split("\n").map((line, i) => (
            <div key={i} style={{ marginBottom: "12px" }}>
              {line}
            </div>
          ))}
        </div>
      )}

      {/* IMAGE GRID */}
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
            alt={title}
            style={{
              width: "100%",
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON */}
      {stripe && (
        <div style={{ margin: "30px 0" }}>
          <a
            href={stripe}
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
      )}
    </main>
  );
}