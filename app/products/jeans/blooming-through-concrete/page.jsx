"use client";

export default function BloomingThroughConcrete() {
  const images = [
    "https://i.imgur.com/zCDwOmK.jpeg",
    "https://i.imgur.com/F4kIp9Z.jpeg",
    "https://i.imgur.com/1CRdzpT.jpeg",
    "https://i.imgur.com/C7ZOqbG.jpeg",
    "https://i.imgur.com/6ynU3Mk.jpeg",
    "https://i.imgur.com/C7krbWn.jpeg",
    "https://i.imgur.com/gj1iGm0.jpeg",
    "https://i.imgur.com/Cp6VDwN.jpeg",
    "https://i.imgur.com/qdewo2k.jpeg",
    "https://i.imgur.com/Qm0wt5b.jpeg",
    "https://i.imgur.com/SteLeNb.jpeg",
  ];

  // purple glow for GREY TEXT ONLY
  const purpleGlow = {
    color: "#caa9ff",
    textShadow: "0 0 12px #b388ff, 0 0 22px #caa9ff",
    letterSpacing: "0.5px",
  };

  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      {/* TITLE (white, untouched) */}
      <h1 style={{ fontSize: "32px", marginBottom: "0px" }}>
        Blooming Through Concrete
      </h1>

      {/* SUBTITLE (was grey → now purple) */}
      <p
        style={{
          marginTop: "6px",
          marginBottom: "20px",
          fontSize: "18px",
          ...purpleGlow,
        }}
      >
        1/1 luxury woman’s jeans
      </p>

      {/* SIZE LINE (was grey → now purple) */}
      <p
        style={{
          marginTop: "0px",
          marginBottom: "20px",
          fontSize: "18px",
          ...purpleGlow,
        }}
      >
        size — 8 (29–31.5 in waist)
      </p>

      {/* DESCRIPTION BLOCK (these were also grey → now purple) */}
      <div
        style={{
          margin: "0 auto",
          marginBottom: "30px",
          fontSize: "16px",
          lineHeight: "1.6",
          ...purpleGlow,
        }}
      >
        • made by Eight Studios (888inc.) <br />
        <br />
        • price: $150 <br />
        <br />
        • handmade 1/1 luxury woman’s jeans
      </div>

      {/* IMAGES (unchanged) */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Blooming Through Concrete"
            style={{
              width: "100%",
              borderRadius: "12px",
            }}
          />
        ))}
      </div>

      {/* BUY BUTTON (white, unchanged) */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "40px",
          backgroundColor: "white",
          color: "black",
          padding: "12px 28px",
          borderRadius: "8px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Buy Now
      </a>
    </main>
  );
}