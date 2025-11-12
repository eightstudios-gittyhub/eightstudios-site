export default function StarfadeDenim() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "40px 20px",
        background: "black",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "8px" }}>Starfade Denim — 1/1</h1>
      <p style={{ opacity: 0.9, marginBottom: "28px" }}>
        Remodeled Skinny Stacks, 32W 35L
      </p>

      {/* IMAGE GALLERY */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          maxWidth: "980px",
          margin: "0 auto 40px"
        }}
      >
        <img src="https://i.imgur.com/U4Bth9g.jpeg" alt="Starfade Denim front" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="https://i.imgur.com/NVQKSDh.jpeg" alt="Starfade Denim back" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="https://i.imgur.com/eCp6E02.jpeg" alt="Starfade Denim close-up 1" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="https://i.imgur.com/j5hiOR4.jpeg" alt="Starfade Denim close-up 2" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="https://i.imgur.com/v5uYwtC.jpeg" alt="Starfade Denim leg detail" style={{ width: "100%", borderRadius: "10px" }} />
        <img src="https://i.imgur.com/4IaE5Uo.jpeg" alt="Starfade Denim patch detail" style={{ width: "100%", borderRadius: "10px" }} />
      </div>

      {/* CONTACT SECTION */}
      <p style={{ opacity: 0.8 }}>
        For purchase or custom sizing inquiries, email{" "}
        <a
          href="mailto:eight888studios@gmail.com"
          style={{ color: "#aaa", textDecoration: "underline" }}
        >
          eight888studios@gmail.com
        </a>
      </p>
    </main>
  );
}