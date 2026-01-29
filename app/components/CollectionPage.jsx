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
          border-color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.12);
        }

        .grid-icon {
          display: grid;
          gap: 2px;
          width: 18px;
          height: 18px;
        }

        .grid-icon span {
          display: block;
          background: rgba(255, 255, 255, 0.65);
          border-radius: 2px;
        }

        .grid-1 {
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;
        }

        .grid-1 span:nth-child(n + 2) {
          display: none;
        }

        .grid-2 {
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }

        .grid-2 span:nth-child(n + 5) {
          display: none;
        }

        .grid-3 {
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(var(--columns), minmax(0, 1fr));
          gap: 20px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: left;
        }

        :global(.product-card) {
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          overflow: hidden;
          text-decoration: none;
          color: #f5f5f5;
          background: rgba(10, 10, 10, 0.9);
          display: flex;
          flex-direction: column;
          min-height: 100%;
          transition: transform 0.2s ease, border 0.2s ease;
        }

        :global(.product-card:visited) {
          color: #f5f5f5;
        }

        :global(.product-card *) {
          color: inherit;
          text-decoration: none;
        }

        :global(.product-card:hover) {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.25);
        }

        .product-image {
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background-color: rgba(255, 255, 255, 0.06);
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          box-sizing: border-box;
          color: #f5f5f5;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
          color: inherit;
        }

        .product-body {
          padding: 16px;
          display: grid;
          gap: 8px;
        }

        .product-thumb {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .product-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
        }

        .product-subtitle {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.7);
        }

        .product-price {
          font-size: 15px;
          font-weight: 600;
          color: #ffffff;
        }

        .product-cta {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.6);
        }

        .empty-state {
          margin-top: 40px;
          opacity: 0.6;
        }

        @media (max-width: 900px) {
          .collection-title {
            font-size: 30px;
          }

          .product-grid {
            grid-template-columns: repeat(var(--tablet-columns), minmax(0, 1fr));
          }
        }

        @media (max-width: 600px) {
          .collection {
            padding: 40px 16px 64px;
          }

          .collection-title {
            font-size: 26px;
          }

          .product-grid {
            grid-template-columns: repeat(var(--mobile-columns), minmax(0, 1fr));
          }
        }
      `}</style>
    </main>
  );
}
