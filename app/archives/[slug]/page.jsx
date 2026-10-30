// /app/archives/[slug]/page.jsx
"use client";

import { use, useState } from "react";
import { archiveItems } from "../archiveData";

export default function ArchiveDetail({ params }) {
  const { slug } = use(params);
  const item = archiveItems.find((x) => x.slug === slug);

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  if (!item) {
    return (
      <main
        style={{
          backgroundColor: "var(--page)",
          color: "var(--ink)",
          padding: "60px 20px",
          textAlign: "center",
          minHeight: "100vh",
        }}
      >
        <h1>Item Not Found</h1>
      </main>
    );
  }

  const images = item.images || [];

  const handleTouchStart = (e) => {
    if (!images.length) return;
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!images.length || touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    const threshold = 40;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX < 0 && activeIndex < images.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else if (deltaX > 0 && activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    }
    setTouchStartX(null);
  };

  return (
    <main
      style={{
        backgroundColor: "var(--page)",
        minHeight: "100vh",
        padding: "40px 20px 60px",
        color: "var(--ink)",
        maxWidth: "900px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>{item.name}</h1>

      {/* Opal divider */}
      <div
        style={{
          width: "200px",
          height: "2px",
          margin: "12px auto 30px",
          background:
            "linear-gradient(90deg, rgba(117,99,76,0) 0%, rgba(117,99,76,0.7) 50%, rgba(117,99,76,0) 100%)",
          boxShadow: "0 0 14px rgba(117,99,76,0.25)",
        }}
      />

      {/* GALLERY */}
      <div className="galleryWrapper">
        {images.length > 0 && (
          <>
            <div
              className="galleryMain"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img
                key={images[activeIndex]}
                src={images[activeIndex]}
                alt={`${item.name} - image ${activeIndex + 1}`}
              />
            </div>

            {images.length > 1 && (
              <div className="thumbRow">
                {images.map((src, idx) => (
                  <button
                    key={src}
                    type="button"
                    className={`thumbButton ${
                      idx === activeIndex ? "thumbActive" : ""
                    }`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <img src={src} alt={`${item.name} thumb ${idx + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* ⭐ OPAL GLOW DESCRIPTION TEXT ⭐ */}
      <p
        style={{
          whiteSpace: "pre-line",
          lineHeight: "1.65",
          fontSize: "16px",
          marginTop: "30px",
          marginBottom: "40px",
          color: "var(--ink-muted)",
        }}
      >
        {item.description}
      </p>

      <a
        href={`/inquire?ref=${item.slug}`}
        style={{
          display: "inline-block",
          padding: "14px 26px",
          background: "var(--accent)",
          boxShadow: "0 6px 18px rgba(62,49,31,0.16)",
          borderRadius: "10px",
          color: "var(--surface)",
          textDecoration: "none",
          fontSize: "17px",
          fontWeight: "600",
          transition: "0.3s",
        }}
      >
        Request a Custom Inspired by This
      </a>

      {/* STYLES */}
      <style>{`
        .galleryWrapper {
          max-width: 780px;
          margin: 0 auto;
        }

        .galleryMain {
          width: 100%;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 8px 20px rgba(62,49,31,0.1);
          margin: 0 auto 18px;
        }

        .galleryMain img {
          width: 100%;
          display: block;
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .thumbRow {
          display: flex;
          gap: 10px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .thumbButton {
          border: none;
          padding: 0;
          background: transparent;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid var(--border);
          opacity: 0.75;
          transition: 0.2s;
        }

        .thumbButton img {
          width: 70px;
          height: 70px;
          object-fit: cover;
        }

        .thumbButton:hover {
          opacity: 1;
          transform: translateY(-1px);
        }

        .thumbActive {
          opacity: 1;
          box-shadow: 0 0 10px rgba(180,160,255,0.8);
          border-color: rgba(200,180,255,0.9);
        }

        @media (max-width: 600px) {
          .thumbButton img {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </main>
  );
} 