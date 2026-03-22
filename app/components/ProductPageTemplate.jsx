"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
          }

          .product-slide-media {
            width: 100% !important;
            height: clamp(640px, 72vh, 860px) !important;
            max-width: 100% !important;
            object-fit: contain !important;
            background: #000;
          }
        }
      `}</style>
    </>
  );
}

const optionPanelStyle = {
  width: "100%",
  maxWidth: "none",
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

const collectionLabels = {
  beanies: "Beanies",
  "phone-cases": "Phone Cases",
  hoodies: "Hoodies",
  jeans: "Jeans",
  pants: "Pants",
  shorts: "Shorts",
  hats: "Hats",
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
  const pathname = usePathname();
  const paymentLink = stripeLink || stripe;

  const pathSegments = pathname?.split("/").filter(Boolean) || [];
  const isProductDetailRoute =
    pathSegments.length === 3 &&
    pathSegments[0] === "products" &&
    Boolean(pathSegments[1]) &&
    Boolean(pathSegments[2]);
  const collectionSlug = isProductDetailRoute ? pathSegments[1] : null;
  const collectionPath = isProductDetailRoute ? `/${pathSegments.slice(0, 2).join("/")}` : null;
  const collectionLabel = collectionSlug ? collectionLabels[collectionSlug] : null;
  const backLinkLabel = collectionLabel ? `← Back to ${collectionLabel}` : null;

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
    <main className="product-page-shell">
      <div className="product-page-container">
        {collectionPath && backLinkLabel && (
          <Link
            href={collectionPath}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "white",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.02em",
              padding: "10px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.06)",
              margin: "0 auto 24px",
              width: "fit-content",
            }}
            aria-label={backLinkLabel}
          >
            {backLinkLabel}
          </Link>
        )}

        <div className="product-layout-grid">
          <section className="product-overview">
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

          <div className="product-divider" />

          <section className="product-gallery-column">
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
            <aside className="product-info-column">
              <div className="product-info-panel" style={optionPanelStyle}>
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
              </div>
            </aside>
          )}
        </div>
      </div>

      <style jsx>{`
        .product-page-shell {
          background: black;
          min-height: 100vh;
          color: white;
          padding: 40px 20px 64px;
        }

        .product-page-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .product-layout-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr);
          align-items: start;
          gap: 0;
        }

        .product-overview {
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .product-divider {
          width: 100%;
          max-width: 760px;
          height: 1px;
          background: rgba(255, 255, 255, 0.15);
          margin: 28px auto 32px;
        }

        .product-gallery-column {
          width: 100%;
          max-width: 760px;
          min-width: 0;
          margin: 0 auto 32px;
        }

        .product-info-column {
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
        }

        .product-info-panel {
          width: 100%;
        }

        @media (min-width: 1024px) {
          .product-page-shell {
            padding: 48px 32px 88px;
          }

          .product-layout-grid {
            grid-template-columns: minmax(0, 1.15fr) minmax(360px, 420px);
            column-gap: clamp(40px, 6vw, 56px);
            row-gap: 24px;
          }

          .product-overview {
            grid-column: 2;
            width: 100%;
            max-width: none;
            margin: 0;
            text-align: left;
          }

          .product-divider {
            display: none;
          }

          .product-gallery-column {
            grid-column: 1;
            grid-row: 1 / span 2;
            width: 100%;
            max-width: none;
            margin: 0;
          }

          .product-info-column {
            grid-column: 2;
            width: 100%;
            max-width: none;
            margin: 0;
            align-self: start;
          }

          .product-info-panel {
            position: sticky;
            top: 32px;
          }
        }
      `}</style>
    </main>
  );
}

export { buyButtonStyle, labelStyle, optionPanelStyle, selectStyle };
