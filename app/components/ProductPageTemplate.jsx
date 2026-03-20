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
    width: "100%",
    height: "500px",
    objectFit: "cover",
    borderRadius: "12px",
    background: "black",
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
                className="product-slide"
                style={{
                  minWidth: "100%",
                  scrollSnapAlign: "center",
                  perspective: "800px",
                }}
              >
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster={item?.poster || undefined}
                  className="product-slide-media"
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
              className="product-slide"
              style={{
                minWidth: "100%",
                scrollSnapAlign: "center",
                perspective: "800px",
              }}
            >
              <img
                src={src}
                alt={item?.alt || ""}
                className="product-slide-media"
                style={mediaItemStyle}
              />
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

      <style jsx>{`
        @media (min-width: 1024px) {
          .product-slide {
            display: flex;
            justify-content: center;
          }

          .product-slide-media {
            width: min(100%, 560px) !important;
            height: 760px !important;
            object-fit: contain !important;
            background: #000;
          }
        }
      `}</style>
    </>
  );
}

const optionPanelStyle = {
  textAlign: "left",
  maxWidth: "600px",
  marginInline: "auto",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  marginBottom: "8px",
  opacity: 0.92,
};

const selectStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  background: "#111",
  color: "white",
  border: "1px solid #444",
  marginBottom: "25px",
  outline: "none",
};

const buyButtonStyle = {
  display: "block",
  width: "100%",
  marginTop: "35px",
  padding: "15px",
  background: "white",
  color: "black",
  borderRadius: "6px",
  textAlign: "center",
  fontWeight: "600",
  textDecoration: "none",
  border: "none",
  cursor: "pointer",
};

export default function ProductPageTemplate({
  title,
  size,
  sizes,
  price,
  description,
  images = [],
  media = null,
  galleries = null,
  stripe,
  stripeLink,
  priceId,
  ctaNote,
  children,
}) {
  const paymentLink = stripeLink || stripe;

  const normalizedMedia =
    Array.isArray(media) && media.length > 0
      ? media
      : images.map((src) => ({ type: "image", src }));

  const hasPurchasePanel = Boolean(children) || (Array.isArray(sizes) && sizes.length > 0) || priceId || paymentLink || ctaNote;

  return (
    <main
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <section style={{ maxWidth: "760px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "clamp(24px, 4vw, 32px)",
            fontWeight: 700,
            marginBottom: "10px",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>

        {description && (
          <div
            style={{
              opacity: 0.85,
              marginBottom: "6px",
              fontSize: "16px",
              lineHeight: 1.6,
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </div>
        )}

        {(size || price) && (
          <div style={{ marginTop: "10px", marginBottom: "30px", lineHeight: "22px" }}>
            {size && <p style={{ opacity: 0.8, fontSize: "15px" }}>• size: {size}</p>}
            {price && <p style={{ opacity: 0.8, fontSize: "15px" }}>• price: {price}</p>}
          </div>
        )}
      </section>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
          margin: "0 auto 35px auto",
        }}
      />

      <div style={{ margin: "0 auto 40px", maxWidth: "980px" }}>
        {Array.isArray(galleries) && galleries.length > 0 ? (
          galleries.map((gallery, index) => {
            const galleryMedia = (gallery?.images || []).map((src) => ({ type: "image", src }));

            return (
              <section
                key={gallery?.id || `gallery-${index}`}
                style={{ marginTop: index === 0 ? "0" : "22px" }}
              >
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

      {hasPurchasePanel && (
        <section style={optionPanelStyle}>
          {Array.isArray(sizes) && sizes.length > 0 && (
            <div>
              <label style={labelStyle}>Size</label>
              <select style={selectStyle} defaultValue={sizes[0]}>
                {sizes.map((s) => (
                  <option key={s} value={s} style={{ color: "black" }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          )}

          {children}

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

          {ctaNote && (
            <p style={{ opacity: 0.6, fontSize: "12px", marginTop: "10px" }}>{ctaNote}</p>
          )}
        </section>
      )}
    </main>
  );
}

export { buyButtonStyle, labelStyle, optionPanelStyle, selectStyle };
