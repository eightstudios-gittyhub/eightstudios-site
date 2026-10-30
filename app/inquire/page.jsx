"use client";

import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function InquireForm() {
  const params = useSearchParams();
  const ref = params.get("ref") || "Archive Garment";

  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("/api/send-inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instagram,
        email,
        phone,
        message,
        ref,
      }),
    });

    setSubmitted(true);
  };

  return (
    <main
      style={{
        backgroundColor: "var(--page)",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "var(--ink)",
        maxWidth: "700px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <h1 style={{ fontSize: "32px", textAlign: "center" }}>
        Inquire About This Piece
      </h1>

      {/* Opal Glow Divider */}
      <div
        style={{
          width: "200px",
          height: "2px",
          margin: "12px auto 30px",
          background:
            "linear-gradient(90deg, rgba(117,99,76,0) 0%, rgba(117,99,76,0.7) 50%, rgba(117,99,76,0) 100%)",
          boxShadow: "0 0 14px rgba(117,99,76,0.25)",
        }}
      />

      <p
        style={{
          textAlign: "center",
          opacity: 0.8,
          marginBottom: "20px",
          fontSize: "16px",
        }}
      >
        Referencing: <strong>{ref.replace(/-/g, " ")}</strong>
      </p>

      {/* SUCCESS MODAL */}
      {submitted && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: "100vh",
            width: "100vw",
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeIn 0.4s ease forwards",
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "420px",
              background: "var(--surface)",
              padding: "30px 24px",
              borderRadius: "14px",
              border: "1px solid var(--border)",
              boxShadow: "0 10px 32px rgba(62,49,31,0.16)",
              textAlign: "center",
              animation: "fadeIn 0.4s ease forwards",
            }}
          >
            <h2
              style={{
                marginBottom: "10px",
                fontSize: "24px",
                fontWeight: "600",
              }}
            >
              Inquiry Sent ✔️
            </h2>

            <p style={{ opacity: 0.8, lineHeight: 1.5, marginBottom: "22px" }}>
              Thank you — your request has been delivered.  
              I’ll reach out shortly through the contact info you provided.
            </p>

            <a
              href="/archives"
              style={{
                display: "inline-block",
                padding: "12px 22px",
                borderRadius: "10px",
                background: "var(--accent-soft)",
                boxShadow: "0 6px 18px rgba(62,49,31,0.08)",
                border: "1px solid var(--border)",
                color: "var(--ink)",
                fontSize: "16px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "0.3s",
              }}
            >
              ← Return to Archive
            </a>
          </div>
        </div>
      )}

      {/* FORM (hidden when submitted) */}
      {!submitted && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Instagram @"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            style={inputStyle}
          />

          <input
            type="email"
            required
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Your Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
          />

          <textarea
            placeholder="Describe what you want inspired by this piece..."
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ ...inputStyle, resize: "none" }}
          />

          <button
            type="submit"
            style={{
              padding: "14px",
              fontSize: "17px",
              fontWeight: "600",
              borderRadius: "12px",
              background: "var(--accent-soft)",
              boxShadow: "0 6px 18px rgba(62,49,31,0.08)",
              color: "var(--ink)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Submit Inquiry
          </button>
        </form>
      )}

      {/* KEYFRAME ANIMATION */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </main>
  );
}

const inputStyle = {
  background: "var(--surface)",
  border: "1px solid var(--border)",
  padding: "14px 16px",
  color: "var(--ink)",
  borderRadius: "10px",
  fontSize: "16px",
  outline: "none",
};

export default function Page() {
  return (
    <Suspense>
      <InquireForm />
    </Suspense>
  );
}