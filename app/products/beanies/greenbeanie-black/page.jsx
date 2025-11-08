export default function GreenBeanieBlack() {
  return (
    <main style={{ textAlign: "center", padding: "20px" }}>
      <h1>888 Green Beanie — Black Glitter</h1>

      <img src="YOUR_GREEN_MAIN_IMAGE" style={{ width: "80%", maxWidth: "400px", borderRadius: "10px" }} />
      <img src="YOUR_GREEN_CLOSEUP_1" style={{ width: "80%", maxWidth: "400px", borderRadius: "10px", marginTop: "10px" }} />
      <img src="YOUR_GREEN_CLOSEUP_2" style={{ width: "80%", maxWidth: "400px", borderRadius: "10px", marginTop: "10px" }} />

      <a 
        href="YOUR_STRIPE_LINK" 
        style={{ 
          display: "inline-block", 
          marginTop: "20px", 
          background: "black", 
          color: "white", 
          padding: "12px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "18px" 
        }}
      >
        Buy Now — $60
      </a>
    </main>
  );
}