"use client";

import { useRef, useState } from "react";
import CheckoutButton from "./CheckoutButton";

function MediaCarousel({ items = [] }) {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.clientWidth;
    if (!width) return;

    const index = Math.round(scrollRef.current.scrollLeft / width);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: scrollRef.current.clientWidth * index,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  const mediaItemStyle = {
    width: "min(100%, 560px)",
    height: "auto",
    maxHeight: "min(760px, 70vh)",
    objectFit: "contain",
    background: "black",
    borderRadius: "10px",
  };

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          borderRadius: "12px",
          margin: "0 auto",
          maxWidth: "980px",
        }}
      >
        {items.map((item, i) => {
          const src = item?.src || "";
          const key = src || `media-${i}`;
          const type = item?.type || "image";

          if (type === "video") {
            return (
              <div
                key={key}
                style={{
                  minWidth: "100%",
                  scrollSnapAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={item?.poster || undefined}
                  style={mediaItemStyle}
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            );
          }

          return (
            <div
              key={key}
              style={{
                minWidth: "100%",
                scrollSnapAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={src} alt={item?.alt || ""} style={mediaItemStyle} />
            </div>
          );
        })}
      </div>

      {items.length > 1 && (
        <div
          style={{
            marginTop: "12px",
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {items.map((_, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={`dot-${index}`}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                style={{
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.8)",
                  background: isActive ? "white" : "transparent",
                  cursor: "pointer",
                  padding: 0,
                }}
              />
            );
          })}
        </div>
      )}
    </>
  );
}

export default function ProductPageTemplate({
  title,
  size,
  sizes,
  price,
  description,
  images = [],

  // ✅ NEW: media supports images + videos in one grid
  // If not provided, we automatically build it from `images`
  media = null,

  // ✅ optional grouped galleries (e.g. colorways)
  galleries = null,

  // ✅ Payment link support (both names)
  stripe,       // old prop name (some pages may still use this)
  stripeLink,   // new prop name (your pages use this)

  // ✅ Stripe Checkout Sessions
  priceId,

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

  // ✅ use stripeLink if provided, otherwise fallback to stripe
  const paymentLink = stripeLink || stripe;

  // ✅ Backward compatibility:
  // If `media` is provided use it, otherwise build it from `images`
  const normalizedMedia =
    Array.isArray(media) && media.length > 0
      ? media
      : images.map((src) => ({ type: "image", src }));

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
          - Uses Checkout Sessions if priceId exists
          - Falls back to Payment Link (stripeLink OR stripe)
      */}
      {priceId ? (
        <CheckoutButton
          priceId={priceId}
          quantity={1}
          label={price ? `Buy Now — ${price}` : "Buy Now"}
          style={buyButtonStyle}
        />
      ) : paymentLink ? (
        <a
          href={paymentLink}
          target="_blank"
          rel="noopener noreferrer"
          style={buyButtonStyle}
        >
          {price ? `Buy Now — ${price}` : "Buy Now"}
        </a>
      ) : null}

      {/* ✅ MEDIA AREA */}
      <div style={{ margin: "0 auto 40px", maxWidth: "980px" }}>
        {Array.isArray(galleries) && galleries.length > 0 ? (
          galleries.map((gallery, index) => {
            const galleryMedia = (gallery?.images || []).map((src) => ({ type: "image", src }));

            return (
              <section key={gallery?.id || `gallery-${index}`} style={{ marginTop: index === 0 ? "0" : "22px" }}>
                <h3
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  {gallery?.title}
                </h3>
                <MediaCarousel items={galleryMedia} />
              </section>
            );
          })
        ) : (
          <MediaCarousel items={normalizedMedia} />
        )}
      </div>

    </main>
  );
}
