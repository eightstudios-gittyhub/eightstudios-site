"use client";

import { useState, useEffect, useRef } from "react";

export default function BeaniesPage() {
  const [patchColor, setPatchColor] = useState("Red");
  const [glitter, setGlitter] = useState("White");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const carouselRef = useRef(null);

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

  // Track scroll for dot indicators
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const index = Math.round(carousel.scrollLeft / carousel.offsetWidth);
      setCurrentIndex(index);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle zoom on tap
  const toggleZoom = () => {
    setZoomed((prev) => !prev);
  };

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
      {/* PREMIUM TITLE */}
      <h1
        style={{
          fontSize: "34px",
          fontWeight: "700",
          marginBottom: "12px",
        }}
      >
        888 Long Beanie
      </h1>

      {/* SUBTEXT */}
      <p
        style={{
          opacity: 0.88,
          marginBottom: "8px",
          fontSize: "16px",
          lineHeight: "1.45",
        }}
      >
        Handmade 1/1 luxury beanie — choose your patch color + glitter.
      </p>

      {/* CENTERED BULLET POINTS */}
      <div
        style={{
          textAlign: "center",
          fontSize: "15px",
          opacity: 0.82,
          lineHeight: "1.3",
          marginBottom: "28px",
        }}
      >
        <p style={{ margin: "4px 0" }}>• made by Eight Studios (888inc.)</p>
        <p style={{ margin: "4px 0" }}>• price: $60</p>
      </div>

      {/* DIVIDER */}
      <div
        style={{
          width: "100%",
          height: "2px",
          margin: "15px auto 35px auto",
          background:
            "linear-gradient(90deg, rgba(185,205,255,0.35), rgba(255,255,255,0.1), rgba(185,205,255,0.35))",
        }}
      />

      {/* CAROUSEL */}
      <div style={{ position: "relative", marginBottom: "20px" }}>
        {/* Left Fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "60px",
            height: "100%",
            background: "linear-gradient(to right, rgba(0,0,0,0.8), transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Right Fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "60px",
            height: "100%",
            background: "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* SCROLLABLE IMAGES */}
        <div
          ref={carouselRef}
          style={{
            display: "flex",
            overflowX: zoomed ? "hidden" : "auto",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            borderRadius: "12px",
            cursor: zoomed ? "zoom-out" : "zoom-in",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                scrollSnapAlign: "center",
                overflow: "hidden",
              }}
            >
              <img
                src={img}
                onClick={toggleZoom}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "12px",
                  transition: "transform 0.35s ease",
                  transform: zoomed ? "scale(1.9)" : "scale(1)",
                  transformOrigin: "center center",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* DOT INDICATORS */}
      {!zoomed && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "6px",
            marginBottom: "35px",
          }}
        >
          {images.map((_, i) => (
            <div
              key={i}
              style={{
                width: currentIndex === i ? "9px" : "7px",
                height: currentIndex === i ? "9px" : "7px",
                borderRadius: "50%",
                backgroundColor:
                  currentIndex === i
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.35)",
                transition: "0.25s",
              }}
            />
          ))}
        </div>
      )}

      {/* OPTIONS */}
      <div
        style={{
          textAlign: "left",
          maxWidth: "600px",
          marginInline: "auto",
        }}
      >
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