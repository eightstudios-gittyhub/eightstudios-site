// /app/archives/[slug]/page.jsx
"use client";

import { useState } from "react";
import { archiveItems } from "../archiveData";

export default function ArchiveDetail({ params }) {
  const item = archiveItems.find((x) => x.slug === params.slug);

  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  if (!item) {
    return (
      <main
        style={{
          backgroundColor: "black",
          color: "white",
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
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "40px 20px 60px",
        color: "white",
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
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(180,160,255,0.9) 50%, rgba(255,255,255,0) 100%)",
          boxShadow: "0 0 14px rgba(180,160,255,0.8)",
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
          opacity: 0.90,
          whiteSpace: "pre-line",
          lineHeight: "1.6",
          fontSize: "16px",
          marginTop: "30px",
          marginBottom: "40px",
          textShadow: `
            0 0 6px rgba(255, 180, 255, 0.45),
            0 0 12px rgba(170, 110, 255, 0.35),
            0 0 24px rgba(120, 90, 255, 0.25),
            0 0 38px rgba(110, 60, 255, 0.25)
          `,
        }}
      >
        {item.description}
      </p>

      <a
        href={`/inquire?ref=${item.slug}`}
        style={{
          display: "inline-block",
          padding: "14px 26px",
          background:
            "linear-gradient(90deg, rgba(140,120,255,1), rgba(200,160,255,1))",
          boxShadow: "0 0 16px rgba(180,160,255,0.7)",
          borderRadius: "10px",
          color: "white",
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
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 0 20px rgba(0,0,0,0.8);
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
          border: 1px solid rgba(255,255,255,0.18);
          opacity: 0.75;
          transition: 0.2s;
        }

        .thumbButton img {
          display: block;
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