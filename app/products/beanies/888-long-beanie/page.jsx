"use client";
import { useState } from "react";

export default function LongBeaniePage() {
  const [patchColor, setPatchColor] = useState("Red");
  const [glitter, setGlitter] = useState("White");

  // HD Images
  const images = [
    "https://i.imgur.com/eSfJnxK.jpeg",
    "https://i.imgur.com/6jcNs6U.jpeg",
    "https://i.imgur.com/Gq5dXqI.jpeg",
    "https://i.imgur.com/PKwqiat.jpeg",
    "https://i.imgur.com/ON1WAN8.jpeg",
    "https://i.imgur.com/zN5pbSi.jpeg",
    "https://i.imgur.com/BBu9QnU.jpeg",
    "https://i.imgur.com/YuNbg3b.jpeg",
    "https://i.imgur.com/GKqoFhd.jpeg",
    "https://i.imgur.com/nay20w6.jpeg",
  ];

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
      {/* Title */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        888 Long Beanie
      </h1>

      {/* Description */}
      <p style={{ opacity: 0.85, marginBottom: "6px", fontSize: "16px" }}>
        Handmade 1/1 luxury beanie — choose your patch color + glitter.
      </p>

      {/* Centered bulleted info */}
      <div style={{ marginTop: "10px", marginBottom: "30px", lineHeight: "22px" }}>
        <p style={{ opacity: 0.8, fontSize: "15px" }}>• made by Eight Studios (888inc.)</p>
        <p style={{ opacity: 0.8, fontSize: "15px" }}>• price: $60</p>
      </div>

      {/* Divider */}
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
          margin: "0 auto 35px auto",
        }}
      />

      {/* IMAGE CAROUSEL */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          borderRadius: "12px",
          marginBottom: "40px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              minWidth: "100%",
              scrollSnapAlign: "center",
              perspective: "800px",
            }}
          >
            <img
              src={img}
              alt={`888 Long Beanie ${index + 1}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                borderRadius: "12px",
                transition: "transform 0.3s ease-out",
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateY = (x / rect.width - 0.5) * 10;
                const rotateX = (y / rect.height - 0.5) * -10;

                e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
              }}
            />
          </div>
        ))}
      </div>

      {/* OPTIONS */}
      <div
        style={{
          textAlign: "left",
          maxWidth: "600px",
          marginInline: "auto",
        }}
      >
        {/* Patch Color */}
        <label>Patch Color</label>
        <select
          value={patchColor}
          onChange={(e) => setPatchColor(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "6px",
            background: "#111",
            color: "white",
            border: "1px solid #444",
            marginBottom: "25px",
          }}
        >
          <option>Red</option>
          <option>Orange</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Purple</option>
        </select>

        {/* Glitter Option */}
        <label>Glitter Color</label>
        <select
          value={glitter}
          onChange={(e) => setGlitter(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "6px",
            background: "#111",
            color: "white",
            border: "1px solid #444",
          }}
        >
          <option>White</option>
          <option>Black</option>
        </select>

        {/* BUY BUTTON → STRIPE DIRECT CHECKOUT */}
        <a
          href="https://buy.stripe.com/28E9AV7MX5Oy87V5Wy5Rm09"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            marginTop: "35px",
            padding: "15px",
            background: "white",
            color: "black",
            borderRadius: "6px",
            textAlign: "center",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Buy Now — $60
        </a>

        <p style={{ opacity: 0.6, fontSize: "12px", marginTop: "10px" }}>
          Patch + glitter selections are for request notes (checkout link is the same).
        </p>
      </div>
    </main>
  );
}
