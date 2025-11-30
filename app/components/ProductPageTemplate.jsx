"use client";

export default function ProductPage({
  title,
  size,
  price,
  description,
  images = [],
}) {
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
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>{title}</h1>

      {/* SIZE */}
      {size && (
        <p
          style={{
            fontSize: "18px",
            marginBottom: price ? "8px" : "25px",
            color: "#d291ff",
            textShadow: "0 0 8px #b34dff, 0 0 12px #b34dff",
          }}
        >
          size — {size}
        </p>
      )}

      {/* PRICE */}
      {price && (
        <p
          style={{
            fontSize: "18px",
            marginBottom: "25px",
            color: "white",
            opacity: 0.9,
          }}
        >
          price — {price}
        </p>
      )}

      {/* DESCRIPTION */}
      {description && (
        <div
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            marginBottom: "30px",
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </div>
      )}

      {/* IMAGES */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            style={{
              width: "100%",
              maxWidth: "500px",
              margin: "0 auto",
              borderRadius: "4px",
            }}
          />
        ))}
      </div>
    </main>
  );
}