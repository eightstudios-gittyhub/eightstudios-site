"use client";
import { useState } from "react";

export default function BeaniesPage() {
  const [patchColor, setPatchColor] = useState("Red");
  const [glitter, setGlitter] = useState("White");

  const images = [
    "https://i.imgur.com/C6WN82M.jpeg",
    "https://i.imgur.com/PmFzNSO.jpeg",
    "https://i.imgur.com/g7X2vrf.jpeg",
    "https://i.imgur.com/kCZE64z.jpeg",
    "https://i.imgur.com/A3vdEKR.jpeg",
    "https://i.imgur.com/xJVm6tH.jpeg",
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
      {/* TITLE */}
      <h1
        style={{
          fontSize: "32px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        888 Long Beanie
      </h1>

      {/* DESCRIPTION */}
      <p style={{ opacity: 0.85, marginBottom: "6px", fontSize: "16px" }}>
        Handmade 1/1 luxury beanie — choose your patch color + glitter.
      </p>
      <p style={{ opacity: 0.8, marginBottom: "6px", fontSize: "15px" }}>
        • made by Eight Studios (888inc.)
      </p>
      <p style={{ opacity: 0.8, marginBottom: "35px", fontSize: "15px" }}>
        • price: $60
      </p>

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
        {images.map((img, i) => (
          <div key={i} style={{ minWidth: "100%", scrollSnapAlign: "center" }}>
            <img
              src={img}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
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

        {/* Glitter */}
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

        {/* BUY BUTTON */}
        <a
          href={`/products/beanies/order?patch=${patchColor}&glitter=${glitter}`}
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
      </div>
    </main>
  );
}