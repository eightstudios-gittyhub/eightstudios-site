// /app/archives/[slug]/page.jsx
"use client";

import { archiveItems } from "../archiveData";

export default function ArchiveDetail({ params }) {
  const item = archiveItems.find((x) => x.slug === params.slug);

  if (!item) {
    return (
      <main
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h1>Item Not Found</h1>
      </main>
    );
  }

  return (
    <main
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>{item.name}</h1>

      {/* Opal divider */}
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

      <img
        src={item.img}
        alt={item.name}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "30px",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      />

      <p
        style={{
          opacity: 0.85,
          lineHeight: "1.6",
          fontSize: "16px",
          marginBottom: "40px",
        }}
      >
        {item.description}
      </p>

      <a
        href={`/custom-request?ref=${item.slug}`}
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
    </main>
  );
}