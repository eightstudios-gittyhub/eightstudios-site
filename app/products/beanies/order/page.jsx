"use client";
export const dynamic = "force-dynamic";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BeanieOrderPage() {
  const search = useSearchParams();
  const patch = search.get("patch");
  const glitter = search.get("glitter");

  const [contact, setContact] = useState("");
  const stripeLink = "YOUR_STRIPE_LINK_HERE";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/eight888studios@gmail.com";

    const fields = {
      _subject: "New Beanie Order",
      Patch: patch,
      Glitter: glitter,
      Contact: contact,
    };

    Object.entries(fields).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = value;
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      window.location.href = stripeLink;
    }, 600);
  };

  return (
    <main
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px", textAlign: "center" }}>
        Confirm Your Order
      </h1>

      <div style={{ maxWidth: "500px", margin: "0 auto", fontSize: "16px" }}>
        <p style={{ opacity: 0.8 }}>
          Patch Color: <strong>{patch}</strong>
        </p>
        <p style={{ opacity: 0.8, marginBottom: "30px" }}>
          Glitter Color: <strong>{glitter}</strong>
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <label>Your Instagram or Email</label>
          <input
            type="text"
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="@username or email"
            style={{
              padding: "12px",
              borderRadius: "6px",
              border: "1px solid #444",
              background: "#111",
              color: "white",
            }}
          />

          <button
            type="submit"
            style={{
              background: "white",
              color: "black",
              padding: "14px",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "600",
            }}
          >
            Confirm & Continue to Payment
          </button>
        </form>
      </div>
    </main>
  );
}