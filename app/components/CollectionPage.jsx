"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const layoutOptions = [
  { columns: 1, label: "Single column grid" },
  { columns: 2, label: "Two column grid" },
  { columns: 3, label: "Three column grid" },
];

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
  const { tabletColumns, mobileColumns } = useMemo(() => {
    return {
      tabletColumns: Math.min(columns, 2),
      mobileColumns: 1,
    };
  }, [columns]);

  return (
    <main className="collection">
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
                {product.price && <div className="product-price">{product.price}</div>}
                <div className="product-cta">{product.cta ?? ctaLabel}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-state">{emptyMessage}</div>
      )}

      <style jsx>{`
        .collection {
          background: black;
          color: white;
          min-height: 100vh;
          padding: 48px 20px 80px;
          text-align: center;
        }

        .collection-header {
          max-width: 860px;
          margin: 0 auto 36px;
        }

        .collection-kicker {
          text-transform: uppercase;
          letter-spacing: 0.24em;
          font-size: 12px;
          opacity: 0.55;
          margin-bottom: 8px;
        }

        .collection-title {
          font-size: 34px;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .collection-description {
          font-size: 16px;
          opacity: 0.75;
          line-height: 1.6;
          margin-bottom: 24px;
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
          background: rgba(255, 255, 255, 0.04);
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
          background: rgba(0, 0, 0, 0.6);
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
          background: rgba(255, 255, 255, 0.08);
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
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .product-card {
          text-decoration: none;
          color: inherit;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.02);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100%;
          transition: transform 0.2s ease, border 0.2s ease;
        }

        .product-card:visited,
        .product-card:hover,
        .product-card:focus,
        .product-card:active {
          color: inherit;
          text-decoration: none;
        }

        .product-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .product-image {
          width: 100%;
          aspect-ratio: 1 / 1.2;
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
        }

        .product-body {
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .product-thumb {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
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

        .product-price {
          font-size: 14px;
          opacity: 0.85;
        }

        .product-cta {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          opacity: 0.7;
          margin-top: 8px;
          color: #cbd5f5;
          text-decoration: none;
        }

        .empty-state {
          opacity: 0.6;
          margin-top: 40px;
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

          .product-grid {
            grid-template-columns: repeat(var(--mobile-columns), minmax(0, 1fr));
          }
        }
      `}</style>
    </main>
  );
}
