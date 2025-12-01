export default function AmbassadorThanks() {
  const glow = {
    color: "#caa9ff",
    textShadow: "0 0 12px #b388ff, 0 0 22px #caa9ff",
  };

  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px", ...glow }}>
        Thank You!
      </h1>

      <p style={{ marginBottom: "35px", opacity: 0.8 }}>
        To finalize your Ambassador package, send your materials fee using one of
        the methods below:
      </p>

      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto",
          background:
            "radial-gradient(circle at center, rgba(150,110,255,0.18) 0%, rgba(0,0,0,0.85) 90%)",
          padding: "30px 25px",
          borderRadius: "14px",
          border: "1px solid rgba(140,100,255,0.25)",
          boxShadow: "0 0 25px rgba(140,100,255,0.25)",
        }}
      >

        {/* CASH APP */}
        <h3 style={{ marginBottom: "6px", ...glow }}>💸 Cash App</h3>

        <a
          href="cashapp://send?recipient=%24KylieRivers420"
          style={{
            display: "inline-block",
            marginTop: "10px",
            padding: "12px 22px",
            backgroundColor: "#caa9ff",
            color: "black",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            textDecoration: "none",
            boxShadow: "0 0 18px #b388ff",
          }}
        >
          Open Cash App
        </a>

        {/* WEB FALLBACK */}
        <p style={{ marginTop: "18px" }}>
          <a
            href="https://cash.app/$KylieRivers420"
            target="_blank"
            style={{ color: "#caa9ff", textDecoration: "none" }}
          >
            Or pay via cash.app/$KylieRivers420
          </a>
        </p>

        {/* APPLE PAY */}
        <div style={{ marginTop: "35px" }}>
          <h3 style={{ marginBottom: "6px", ...glow }}> Apple Pay</h3>

          <a
            href="sms:5184770592"
            style={{
              display: "inline-block",
              marginTop: "10px",
              padding: "12px 22px",
              backgroundColor: "#caa9ff",
              color: "black",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 0 18px #b388ff",
            }}
          >
            Open Messages
          </a>

          <p style={{ marginTop: "10px", opacity: 0.7 }}>
            (Apple Pay will appear in iMessage)
          </p>
        </div>
      </div>

      <p style={{ marginTop: "45px", opacity: 0.6 }}>
        Dio will reach out once payment is confirmed.
      </p>
    </main>
  );
}