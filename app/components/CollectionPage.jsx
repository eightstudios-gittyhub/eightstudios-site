"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const layoutOptions = [
  { columns: 1, label: "Single column grid" },
  { columns: 2, label: "Two column grid" },
  { columns: 3, label: "Three column grid" },
];

const TILT_LIMIT = 7;

export default function CollectionPage({
  title,
  description,
  products = [],
  emptyMessage = "More pieces coming soon.",
  ctaLabel = "See Details →",
  descriptionTone = "default",
  showThumbnail = true,
}) {
  const [columns, setColumns] = useState(2);
  const [tiltEnabled, setTiltEnabled] = useState(false);

  const { tabletColumns, mobileColumns } = useMemo(() => {
    return {
      tabletColumns: Math.min(columns, 2),
      mobileColumns: columns,
    };
  }, [columns]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const hoverQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncTiltState = () => {
      setTiltEnabled(hoverQuery.matches && !motionQuery.matches);
    };

    syncTiltState();
    hoverQuery.addEventListener("change", syncTiltState);
    motionQuery.addEventListener("change", syncTiltState);

    return () => {
      hoverQuery.removeEventListener("change", syncTiltState);
      motionQuery.removeEventListener("change", syncTiltState);
    };
  }, []);

  const handleTiltMove = (event) => {
    if (!tiltEnabled) {
      return;
    }

    const frame = event.currentTarget;
    const rect = frame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * TILT_LIMIT * 2;
    const rotateX = (0.5 - y / rect.height) * TILT_LIMIT * 2;

    frame.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
    frame.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
    frame.style.setProperty("--glow-x", `${((x / rect.width) * 100).toFixed(2)}%`);
    frame.style.setProperty("--glow-y", `${((y / rect.height) * 100).toFixed(2)}%`);
  };

  const resetTilt = (event) => {
    const frame = event.currentTarget;
    frame.style.setProperty("--tilt-x", "0deg");
    frame.style.setProperty("--tilt-y", "0deg");
    frame.style.setProperty("--glow-x", "50%");
    frame.style.setProperty("--glow-y", "50%");
  };

  return (
    <main className="collection">
      <div className="collection-shell">
        <header className="collection-header">
          <p className="collection-kicker">Eight Studios</p>
          <h1 className="collection-title">{title}</h1>
          {description && (
            <p
              className={`collection-description${
                descriptionTone === "glow" ? " description-glow" : ""
              }`}
            >
              {description}
            </p>
          )}

          <div className="collection-controls">
            <span className="controls-label">Grid view</span>
            <div className="controls-buttons" role="group" aria-label="Grid layout">
              {layoutOptions.map((option) => (
                <button
                  key={option.columns}
                  type="button"
                  className={`control-button ${
                    columns === option.columns ? "active" : ""
                  }`}
                  onClick={() => setColumns(option.columns)}
                  aria-pressed={columns === option.columns}
                  aria-label={option.label}
                  title={option.label}
                >
                  <span className={`grid-icon grid-${option.columns}`} aria-hidden>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </header>

        {products.length > 0 ? (
          <div
            className="product-grid"
            style={{
              "--columns": columns,
              "--tablet-columns": tabletColumns,
              "--mobile-columns": mobileColumns,
            }}
          >
            {products.map((product) => (
              <Link key={product.link} href={product.link} className="product-card">
                <div
                  className={`product-visual${tiltEnabled ? " tilt-enabled" : ""}`}
                  onMouseMove={handleTiltMove}
                  onMouseLeave={resetTilt}
                >
                  <div
                    className="product-image"
                    style={{ backgroundImage: `url(${product.img})` }}
                  >
                    <img
                      src={product.img}
                      alt={product.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="product-body">
                  {showThumbnail && (
                    <div className="product-thumb">
                      <img
                        src={product.thumbnail ?? product.img}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="product-title">{product.title}</div>
                  {product.subtitle && (
                    <div className="product-subtitle">{product.subtitle}</div>
                  )}
                  {product.price && <div className="product-price">{product.price}</div>}
                  <div className="product-cta">{product.cta ?? ctaLabel}</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="empty-state">{emptyMessage}</div>
        )}
      </div>

      <style jsx>{`
        .collection {
          color: white;
          min-height: 100vh;
          width: 100%;
          padding: 48px 20px 88px;
          text-align: center;
          background: transparent;
        }

        .collection-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
        }

        .collection-header {
          max-width: 860px;
          margin: 0 auto 42px;
        }

        .collection-kicker {
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-size: 12px;
          opacity: 0.55;
          margin-bottom: 8px;
        }

        .collection-title {
          font-size: clamp(34px, 5vw, 52px);
          font-weight: 700;
          margin-bottom: 12px;
        }

        .collection-description {
          font-size: 16px;
          opacity: 0.78;
          line-height: 1.6;
          margin: 0 auto 24px;
          max-width: 620px;
        }

        .description-glow {
          color: #d4b9ff;
          text-shadow: 0 0 10px rgba(179, 136, 255, 0.65),
            0 0 22px rgba(202, 169, 255, 0.55);
          opacity: 0.95;
        }

        .collection-controls {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(18, 22, 30, 0.48);
          backdrop-filter: blur(10px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.16);
        }

        .controls-label {
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.7;
        }

        .controls-buttons {
          display: inline-flex;
          gap: 8px;
        }

        .control-button {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.05);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border 0.2s ease, background 0.2s ease;
        }

        .control-button:hover {
          border-color: rgba(255, 255, 255, 0.28);
        }

        .control-button.active {
          border-color: rgba(255, 255, 255, 0.55);
          background: rgba(255, 255, 255, 0.1);
        }

        .grid-icon {
          width: 18px;
          height: 18px;
          display: grid;
          gap: 2px;
        }

        .grid-1 {
          grid-template-columns: 1fr;
        }

        .grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        .grid-icon span {
          display: block;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 3px;
          opacity: 0.7;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
          gap: 28px;
          width: 100%;
          margin: 0 auto;
        }

        .product-card {
          text-decoration: none;
          color: #fff;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.055),
            rgba(255, 255, 255, 0.02)
          );
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
          transition: transform 0.28s ease, border-color 0.28s ease,
            background 0.28s ease, box-shadow 0.28s ease;
        }

        .product-card:link,
        .product-card:visited,
        .product-card:hover,
        .product-card:focus,
        .product-card:active {
          color: #fff;
          text-decoration: none;
        }

        .product-card * {
          text-decoration: none;
        }

        .product-card:hover {
          transform: translateY(-5px);
          border-color: rgba(203, 213, 245, 0.28);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.075),
            rgba(255, 255, 255, 0.025)
          );
          box-shadow: 0 24px 54px rgba(0, 0, 0, 0.24);
        }

        .product-visual {
          --tilt-x: 0deg;
          --tilt-y: 0deg;
          --glow-x: 50%;
          --glow-y: 50%;
          position: relative;
          padding: 18px 18px 0;
          perspective: 1200px;
        }

        .product-visual::after {
          content: "";
          position: absolute;
          inset: 18px 18px 0;
          border-radius: 20px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.28s ease;
          background: radial-gradient(
            circle at var(--glow-x) var(--glow-y),
            rgba(255, 255, 255, 0.14),
            transparent 42%
          );
          mix-blend-mode: screen;
        }

        .tilt-enabled:hover::after {
          opacity: 1;
        }

        .product-image {
          width: 100%;
          aspect-ratio: 1 / 1.2;
          background-size: cover;
          background-position: center;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          transform: rotateX(var(--tilt-x)) rotateY(var(--tilt-y)) scale(1.01);
          transform-style: preserve-3d;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
        }

        .tilt-enabled:hover .product-image {
          box-shadow: 0 24px 42px rgba(0, 0, 0, 0.28);
        }

        .product-image::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06),
            rgba(0, 0, 0, 0.12)
          );
          pointer-events: none;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
        }

        .product-body {
          padding: 18px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .product-thumb {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.03);
        }

        .product-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .product-title {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
        }

        .product-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.68);
        }

        .product-price {
          font-size: 14px;
          color: #fff;
          opacity: 0.88;
        }

        .product-cta {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.76;
          margin-top: 8px;
          color: #cbd5f5;
          text-decoration: none;
        }

        .empty-state {
          opacity: 0.6;
          margin-top: 40px;
        }

        @media (prefers-reduced-motion: reduce) {
          .product-card,
          .product-visual::after,
          .product-image,
          .control-button {
            transition: none;
          }

          .product-card:hover {
            transform: none;
          }

          .product-image {
            transform: none;
          }
        }

        @media (max-width: 900px) {
          .product-grid {
            grid-template-columns: repeat(var(--tablet-columns), minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .collection {
            padding: 36px 16px 60px;
          }

          .collection-controls {
            width: 100%;
            justify-content: center;
          }

          .product-grid {
            grid-template-columns: repeat(var(--mobile-columns), minmax(0, 1fr));
            gap: 20px;
          }

          .product-visual {
            padding: 14px 14px 0;
          }

          .product-visual::after {
            inset: 14px 14px 0;
          }

          .product-body {
            padding: 16px 16px 20px;
          }
        }
      `}</style>
    </main>
  );
}
