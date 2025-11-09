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
        padding: "40px 20px",
      }}
    >
      {/* Glowing Logo */}
      <div style={{ position: "relative", marginBottom: "40px" }}>
        <img
          src="https://i.imgur.com/cvZxBNy.jpeg"
          alt="888 logo"
          style={{
            width: "200px",
            filter: "drop-shadow(0 0 25px rgba(255,0,0,0.85)) drop-shadow(0 0 45px rgba(255,0,0,0.75))",
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Category Navigation */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
          width: "100%",
          maxWidth: "450px",
          marginBottom: "50px",
          textAlign: "center",
        }}
      >
        <a href="/products/beanies" style={linkStyle}>Beanies</a>
        <a href="/products/hoodies" style={linkStyle}>Hoodies</a>
        <a href="/products/jeans" style={linkStyle}>Jeans</a>
        <a href="/products/shorts" style={linkStyle}>Shorts</a>
        <a href="/products/hats" style={linkStyle}>Hats</a>
      </div>

      {/* Signature Script */}
      <img
        src="https://i.imgur.com/auNVWtZ.jpeg"
        alt="Eight Studios Script"
        style={{
          width: "180px",
          opacity: "0.8",
          filter: "drop-shadow(0 0 12px rgba(255,0,0,0.5))",
          marginTop: "20px",
        }}
      />

      {/* Glow Animation */}
      <style jsx>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.07); }
          100% { transform: scale(1); }
        }
      `}</style>
    </main>
  );
}

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