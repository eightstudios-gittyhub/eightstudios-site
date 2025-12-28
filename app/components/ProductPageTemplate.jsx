"use client";

export default function ProductPage({
  title,
  size,
  price,
  description,
  images = [],
  stripe,
}) {
  const purpleGlow = {
    color: "#caa9ff",
    textShadow: "0 0 12px #b388ff, 0 0 22px #caa9ff",
  };

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
      {/* TITLE — DESKTOP LARGE, MOBILE SMALLER */}
      <h1
        style={{
          marginBottom: "8px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          padding: "0 10px",
        }}
      >
        <span className="product-title">{title}</span>

        <style jsx>{`
          .product-title {
            font-size: 32px;
          }

          @media (max-width: 480px) {
            .product-title {
              font-size: 24px;
            }
          }
        `}</style>
      </h1>

      {/* SIZE */}
      {size && (
        <p
          style={{
            fontSize: "18px",
            marginBottom: price ? "10px" : "25px",
            ...purpleGlow,
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
            marginBottom: "20px",
            color: "white",
            opacity: 0.92,
          }}
        >
          price: {price}
        </p>
      )}

      {/* DESCRIPTION */}
      {description && (
        <div
          style={{
            margin: "0 auto",
            marginBottom: "30px",
            fontSize: "16px",
            lineHeight: "1.6",
            maxWidth: "700px",
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </div>
      )}

      {/* IMAGES */}
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
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON */}
      {stripe && (
        <a
          href={stripe}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "white",
            color: "black",
            padding: "12px 28px",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            fontSize: "16px",
            marginTop: "20px",
          }}
        >
          Buy Now
        </a>
      )}
    </main>
  );
} 