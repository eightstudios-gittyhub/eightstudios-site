// /app/archives/page.jsx
"use client";

import Link from "next/link";
import { archiveItems } from "./archiveData";

export default function ArchivePage() {
  return (
    <main
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "6px" }}>
        Eight Studios Archive
      </h1>

      <div
        style={{
          width: "180px",
          height: "2px",
          margin: "12px auto 30px",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(180,160,255,0.9) 50%, rgba(255,255,255,0) 100%)",
          boxShadow: "0 0 12px rgba(180,160,255,0.7)",
        }}
      />

      <p style={{ opacity: 0.8, marginBottom: "40px" }}>
        Explore past 1/1 creations, sold items, prototypes, and exclusive Eight
        Studios pieces.
      </p>

      {/* RESPONSIVE GRID */}
      <div
        id="archive-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)", // desktop 5 across
          gap: "24px",
          maxWidth: "1600px",
          margin: "0 auto",
          padding: "0 10px",
        }}
      >
        <style>
          {`
            @media (max-width: 1200px) {
              #archive-grid {
                grid-template-columns: repeat(3, 1fr);
              }
            }

            @media (max-width: 800px) {
              #archive-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            @media (max-width: 550px) {
              #archive-grid {
                grid-template-columns: repeat(1, 1fr);
              }
            }
          `}
        </style>

        {archiveItems.map((item) => {
          const thumb = item.images?.[0];

          return (
            <Link
              key={item.slug}
              href={`/archives/${item.slug}`}
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "#111",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                flexDirection: "column",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "100%",
                  aspectRatio: "1 / 1",
                  backgroundImage: thumb ? `url(${thumb})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#222",
                }}
              />

              <div style={{ padding: "16px" }}>
                <h2 style={{ fontSize: "18px", margin: 0 }}>{item.name}</h2>

                <p
                  style={{
                    opacity: 0.7,
                    fontSize: "14px",
                    marginTop: "6px",
                  }}
                >
                  View details →
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}