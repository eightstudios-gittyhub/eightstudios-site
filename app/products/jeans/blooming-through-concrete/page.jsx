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

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
        color: "white",
      }}
    >
      {/* Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "20px",
          fontWeight: "700",
        }}
      >
        Blooming Through Concrete
      </h1>

      {/* Image gallery */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          marginBottom: "20px",
        }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Blooming Through Concrete Image ${i + 1}`}
            style={{
              width: "100%",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>

      {/* Description */}
      <div
        style={{
          background: "rgba(255,255,255,0.05)",
          padding: "18px",
          borderRadius: "12px",
          lineHeight: "1.6",
          fontSize: "16px",
        }}
      >
        <p><strong>Handmade 1/1 luxury woman’s jeans</strong></p>
        <p>• size - 8 (about 29–31.5 inch waist)</p>
        <p>• made by Eight Studios (888inc.)</p>
        <p>• price: <strong>$150</strong></p>
      </div>

      {/* Buy button */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <a
          href="#"
          style={{
            padding: "14px 26px",
            background: "white",
            color: "black",
            borderRadius: "8px",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "18px",
          }}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}