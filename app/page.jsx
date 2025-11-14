"use client";

const linkStyle = {
  background: "rgba(20,20,20,0.6)",
  backdropFilter: "blur(8px)",
  padding: "14px 0",
  borderRadius: "10px",
  textDecoration: "none",
  color: "white",
  fontSize: "17px",
  fontWeight: "600",
  border: "1px solid rgba(255,255,255,0.12)",
  transition: "0.3s",
};

export default function Home() {
  return (
    <main
      style={{
        background: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
        position: "relative",
      }}
    >

      {/* FULL-SCREEN BACKGROUND GLOW */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "-20%",
          width: "140vw",
          height: "140vh",
          background:
            "radial-gradient(circle at center, rgba(170,210,255,0.45), rgba(0,0,0,1) 70%)",
          filter: "blur(120px)",
          zIndex: -1,
        }}
      ></div>

      {/* LOGO */}
      <img
        src="https://i.imgur.com/cvZxBNy.jpeg"
        alt="888 logo"
        style={{
          width: "230px",
          filter:
            "drop-shadow(0 0 45px rgba(255,255,255,0.85)) drop-shadow(0 0 90px rgba(150,200,255,0.7)) drop-shadow(0 0 130px rgba(140,255,215,0.5))",
          animation: "pulse 3s ease-in-out infinite",
          marginBottom: "55px",
        }}
      />

      {/* CATEGORY GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "16px",
          width: "100%",
          maxWidth: "450px",
          textAlign: "center",
        }}
      >
        <a href="/products/beanies" style={linkStyle}>Beanies</a>
        <a href="/products/hoodies" style={linkStyle}>Hoodies</a>
        <a href="/products/jeans" style={linkStyle}>Jeans</a>
        <a href="/products/shorts" style={linkStyle}>Shorts</a>
        <a href="/products/hats" style={{ ...linkStyle, gridColumn: "span 2" }}>
          Hats
        </a>
      </div>

      {/* SMOOTH PULSE ANIMATION */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.07); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </main>
  );
}
