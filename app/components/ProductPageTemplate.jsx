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
    display: "block",
    width: "100%",
    maxWidth: "100%",
    height: "clamp(360px, 78vw, 620px)",
    objectFit: "contain",
    borderRadius: "12px",
    background: "black",
    margin: "0 auto",
  };

  return (
    <>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
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
                  flex: "0 0 100%",
                  width: "100%",
                  maxWidth: "100%",
                  scrollSnapAlign: "center",
                  boxSizing: "border-box",
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
                flex: "0 0 100%",
                width: "100%",
                maxWidth: "100%",
                scrollSnapAlign: "center",
                boxSizing: "border-box",
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
            marginTop: "14px",
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
        div::-webkit-scrollbar {
          display: none;
        }

        @media (min-width: 1024px) {
          .product-slide {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .product-slide-media {
            width: auto !important;
            max-width: min(100%, 680px) !important;
            height: min(760px, 78vh) !important;
            object-fit: contain !important;
            object-position: center !important;
            background: transparent !important;
          }
        }
      `}</style>
    </>
  );
}

const optionPanelStyle = {
  width: "100%",
  maxWidth: "520px",
  marginInline: "auto",
  textAlign: "left",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  marginBottom: "8px",
  opacity: 0.92,
};

const selectStyle = {
  width: "100%",
  boxSizing: "border-box",
  padding: "12px",
  borderRadius: "6px",
  background: "#111",
  color: "white",
  border: "1px solid #444",
  marginBottom: "20px",
  outline: "none",
};

const buyButtonStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box",
  marginTop: "28px",
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

  const hasPurchasePanel =
    Boolean(children) ||
    (Array.isArray(sizes) && sizes.length > 0) ||
    priceId ||
    paymentLink ||
    ctaNote;

  return (
    <main
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px 64px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <section
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(24px, 4vw, 32px)",
              fontWeight: 700,
              margin: "0 0 10px",
              lineHeight: 1.2,
            }}
          >
            {title}
          </h1>

          {description && (
            <div
              style={{
                opacity: 0.85,
                marginBottom: "8px",
                fontSize: "16px",
                lineHeight: 1.6,
                whiteSpace: "pre-line",
              }}
            >
              {description}
            </div>
          )}

          {(size || price) && (
            <div style={{ marginTop: "10px", lineHeight: "22px" }}>
              {size && <p style={{ opacity: 0.8, fontSize: "15px", margin: 0 }}>• size: {size}</p>}
              {price && <p style={{ opacity: 0.8, fontSize: "15px", margin: 0 }}>• price: {price}</p>}
            </div>
          )}
        </section>

        <div
          style={{
            width: "100%",
            maxWidth: "760px",
            height: "1px",
            background: "rgba(255,255,255,0.15)",
            margin: "28px auto 32px",
          }}
        />

        <section
          style={{
            width: "100%",
            maxWidth: "760px",
            margin: "0 auto 32px",
          }}
        >
          {Array.isArray(galleries) && galleries.length > 0 ? (
            galleries.map((gallery, index) => {
              const galleryMedia = (gallery?.images || []).map((src) => ({ type: "image", src }));

              return (
                <section
                  key={gallery?.id || `gallery-${index}`}
                  style={{ marginTop: index === 0 ? "0" : "28px" }}
                >
                  <h3
                    style={{
                      textAlign: "left",
                      fontSize: "20px",
                      fontWeight: 600,
                      margin: "0 0 12px",
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
        </section>

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
              <p style={{ opacity: 0.6, fontSize: "12px", margin: "10px 0 0" }}>{ctaNote}</p>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

export { buyButtonStyle, labelStyle, optionPanelStyle, selectStyle };
