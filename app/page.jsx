"use client";

const linkStyle = {
  background: "#111",
  padding: "14px 0",
  borderRadius: "8px",
  textDecoration: "none",
  color: "white",
  fontSize: "17px",
  fontWeight: "600",
  transition: "0.2s",
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
        paddingBottom: "120px", // makes space above fixed footer
      }}
    >
      {/* Glowing Logo */}
      <img
        src="https://i.imgur.com/cvZxBNy.jpeg"
        alt="888 logo"
        style={{
          width: "230px",
          filter:
            "drop-shadow(0 0 40px rgba(255,255,255,0.9)) drop-shadow(0 0 80px rgba(120,180,255,0.8)) drop-shadow(0 0 120px rgba(140,255,200,0.6))",
          animation: "pulse 3s ease-in-out infinite",
          marginBottom: "45px",
        }}
      />

      {/* Category Navigation */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
          width: "100%",
          maxWidth: "450px",
          textAlign: "center",
        }}
      >
        <a href="/products/beanies" style={linkStyle}>Beanies</a>
        <a href="/products/hoodies" style={linkStyle}>Hoodies</a>
        <a href="/products/jeans" style={linkStyle}>Jeans</a>
        <a href="/products/shorts" style={linkStyle}>Shorts</a>
        <a href="/products/hats" style={linkStyle}>Hats</a>
      </div>

      {/* Footer Label Banner */}
      <div
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          background: "black",
          padding: "12px 0",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          display: "flex",
          justifyContent: "center",
          zIndex: "999",
        }}
      >
        <img
          src="https://i.imgur.com/auNVWtZ.jpeg"
          alt="Eight Studios Script"
          style={{
            width: "70%",
            maxWidth: "580px",
            opacity: "0.85",
            filter: "drop-shadow(0 0 14px rgba(255,255,255,0.4))",
          }}
        />
      </div>

      {/* Animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.07); }
          100% { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}