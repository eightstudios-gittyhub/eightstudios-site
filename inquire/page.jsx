"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function InquirePage() {
  const params = useSearchParams();
  const ref = params.get("ref") || "Archive Garment";
  const normalizedRef = ref.replace(/-/g, " ");

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [instagram, setInstagram] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/send-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref: normalizedRef,
          instagram,
          email,
          phone,
          message,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to submit inquiry.");
      }

      setSubmitted(true);
      setInstagram("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (err) {
      setError(err.message || "Unable to submit inquiry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        padding: "40px 20px",
        color: "white",
        maxWidth: "700px",
        margin: "0 auto",
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
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(180,160,255,0.9) 50%, rgba(255,255,255,0) 100%)",
          boxShadow: "0 0 14px rgba(180,160,255,0.8)",
        }}
      />

      {/* Auto-filled archive item */}
      <p
        style={{
          textAlign: "center",
          opacity: 0.8,
          marginBottom: "20px",
          fontSize: "16px",
        }}
      >
        Referencing: <strong>{ref.replace(/-/g, " ")}</strong>
        Referencing: <strong>{normalizedRef}</strong>
      </p>

      {submitted ? (
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            padding: "20px",
            borderRadius: "12px",
            background: "rgba(20,20,20,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 18px rgba(180,160,255,0.45)",
          }}
        >
          <h2 style={{ marginBottom: "10px" }}>Inquiry Submitted ✔️</h2>
          <p style={{ opacity: 0.8 }}>
            I’ll reach out to you shortly through the contact info you provided.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "20px",
          }}
        >
          {/* Instagram */}
          <input
            type="text"
            required
            placeholder="Your Instagram @"
            style={inputStyle}
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            required
            placeholder="Your Email"
            style={inputStyle}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Phone */}
          <input
            type="text"
            placeholder="Your Phone Number (optional)"
            style={inputStyle}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Message */}
          <textarea
            placeholder="Describe what you want inspired by this piece..."
            rows={5}
            style={{ ...inputStyle, resize: "none" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {error ? (
            <p style={{ color: "#f28b82", marginTop: "-8px" }}>{error}</p>
          ) : null}

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            style={{
              padding: "14px",
              fontSize: "17px",
              fontWeight: "600",
              borderRadius: "12px",
              background:
                "linear-gradient(90deg, rgba(120,110,150,0.35), rgba(150,130,200,0.35))",
              boxShadow: "0 0 18px rgba(180,160,255,0.45)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.15)",
              cursor: "pointer",
              cursor: isSubmitting ? "not-allowed" : "pointer",
              opacity: isSubmitting ? 0.7 : 1,
            }}
          >
            Submit Inquiry
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      )}
    </main>
  );
}

const inputStyle = {
  background: "rgba(20,20,20,0.6)",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "14px 16px",
  color: "white",
  borderRadius: "10px",
  fontSize: "16px",
  outline: "none",
  backdropFilter: "blur(6px)",
};
};
