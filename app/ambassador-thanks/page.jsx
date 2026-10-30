export default function AmbassadorThanks() {
  return (
    <main
      style={{
        backgroundColor: "var(--page)",
        color: "var(--ink)",
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
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
          background: "var(--surface)",
          padding: "30px 25px",
          borderRadius: "14px",
          border: "1px solid var(--border)",
          boxShadow: "0 8px 24px rgba(62,49,31,0.08)",
        }}
      >
        {/* CASH APP */}
        <h3 style={{ marginBottom: "8px" }}>💸 Cash App</h3>

        <p style={{ marginBottom: "20px" }}>
          <a
            href="https://cash.app/$KylieRivers420"
            target="_blank"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            cash.app/$KylieRivers420
          </a>
        </p>

        {/* APPLE PAY */}
        <div style={{ marginTop: "20px" }}>
          <h3 style={{ marginBottom: "8px" }}> Apple Pay</h3>

          <a
            href="sms:5184770592"
            style={{
              display: "inline-block",
              marginTop: "5px",
              padding: "12px 22px",
              backgroundColor: "var(--accent-soft)",
              color: "var(--ink)",
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
              boxShadow: "0 6px 18px rgba(62,49,31,0.1)",
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