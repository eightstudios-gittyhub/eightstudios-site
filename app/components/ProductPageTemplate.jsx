"use client";

import CheckoutButton from "./CheckoutButton";

export default function ProductPageTemplate({
  title,
  size,
  sizes,
  price,
  description,
  images = [],
  stripe,     // optional fallback (old payment link)
  priceId,    // ✅ NEW: Stripe Price ID for Checkout Sessions
  children,
}) {
  const purpleGlow = {
    color: "#caa9ff",
    textShadow: "0 0 12px #b388ff, 0 0 22px #caa9ff",
  };

  const buyButtonStyle = {
    display: "inline-block",
    backgroundColor: "white",
    color: "black",
    padding: "12px 28px",
    borderRadius: "12px",
    fontWeight: "600",
    textDecoration: "none",
    fontSize: "16px",
    marginTop: "20px",
    border: "none",
    cursor: "pointer",
    minWidth: "220px",
  };

  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        minHeight: "100vh",
        boxSizing: "border-box",
        overflowX: "hidden",
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

      {/* SIZE (single) */}
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

      {/* SIZES (dropdown) */}
      {Array.isArray(sizes) && sizes.length > 0 && (
        <div
          style={{
            maxWidth: "520px",
            margin: "18px auto 6px",
            textAlign: "left",
          }}
        >
          <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
            Size
          </label>
          <select
            style={{
              width: "100%",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: "10px",
              padding: "12px 14px",
              outline: "none",
            }}
            defaultValue={sizes[0]}
          >
            {sizes.map((s) => (
              <option key={s} value={s} style={{ color: "black" }}>
                {s}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* PRICE */}
      {price && (
        <p
          style={{
            fontSize: "18px",
            marginTop: "10px",
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

      {/* ✅ CUSTOM OPTIONS GO HERE */}
      {children}

      {/* ✅ ONE clean Buy Now button:
          - Uses Checkout Sessions if priceId exists (ambassador tracking)
          - Falls back to old Payment Link if stripe exists
      */}
      {priceId ? (
        <CheckoutButton
          priceId={priceId}
          quantity={1}
          label={price ? `Buy Now — ${price}` : "Buy Now"}
          style={buyButtonStyle}
        />
      ) : stripe ? (
        <a
          href={stripe}
          target="_blank"
          rel="noopener noreferrer"
          style={buyButtonStyle}
        >
          {price ? `Buy Now — ${price}` : "Buy Now"}
        </a>
      ) : null}

      {/* IMAGES */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
          gap: "16px",
          maxWidth: "980px",
          margin: "0 auto 40px",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            style={{
              width: "100%",
              borderRadius: "10px",
            }}
          />
        ))}
      </div>
    </main>
  );
}
