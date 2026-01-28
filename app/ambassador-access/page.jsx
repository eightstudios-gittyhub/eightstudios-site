"use client";
import { useState } from "react";

export default function AmbassadorAccess() {
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    email: "",
    item: "",
    otherItem: "",
    message: "",
    hiddenField: "",
  });

  const [status, setStatus] = useState(null);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/ambassador", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) setStatus("success");
    else setStatus("error");
  };

  return (
    <main
      style={{
        background: "black",
        color: "white",
        padding: "40px",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Ambassador Intake
      </h1>

      <form
        onSubmit={submit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          maxWidth: "500px",
        }}
      >
        {/* HONEYPOT */}
        <input
          type="text"
          name="hiddenField"
          value={form.hiddenField}
          onChange={update}
          style={{ display: "none" }}
          autoComplete="off"
        />

        {/* NAME */}
        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
          required
          style={inputStyle}
        />

        {/* INSTAGRAM */}
        <input
          name="instagram"
          placeholder="@instagram"
          value={form.instagram}
          onChange={update}
          required
          style={inputStyle}
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={update}
          required
          style={inputStyle}
        />

        {/* ITEM DROPDOWN */}
        <select
          name="item"
          value={form.item}
          onChange={update}
          required
          style={{ ...inputStyle, color: "white" }}
        >
          <option value="">Select item type…</option>
          <option value="Beanie">Beanie</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Jeans">Jeans</option>
          <option value="Phone Case">Phone Case</option>
          <option value="Other">Other</option>
        </select>

        {/* IF OTHER */}
        {form.item === "Other" && (
          <input
            name="otherItem"
            placeholder="Describe your item"
            value={form.otherItem}
            onChange={update}
            style={inputStyle}
          />
        )}

        {/* ⭐ BEANIE PRICE INFO */}
        {form.item === "Beanie" && (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "18px",
              borderRadius: "10px",
              marginTop: "4px",
              lineHeight: 1.5,
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#caa9ff" }}>
              Beanie — Custom 1/1
            </h3>

            <p>
              <strong>Standard Retail Value (you don’t pay this):</strong>
              <br />$30 – $88
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Ambassador Contribution:</strong>
              <br />Materials Fee Only
            </p>

            <p style={{ marginTop: "10px", opacity: 0.75 }}>
              (Covers garment [unless provided], rhinestones,
              vinyl/screenprint, thread. Final materials cost is calculated after
              we finalize your exact design + style.)
            </p>
          </div>
        )}
 {form.item === "Hoodie" && (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "18px",
              borderRadius: "10px",
              marginTop: "4px",
              lineHeight: 1.5,
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#caa9ff" }}>
              Hoodie — Custom 1/1
            </h3>

            <p>Handmade 1/1 hooded garments by Eight Studios.</p>

            <p>
              <strong>Standard Retail Value (you don’t pay this):</strong>
              <br />$150 – $250
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Ambassador Contribution:</strong>
              <br />Materials Fee Only
            </p>

            <p style={{ marginTop: "10px", opacity: 0.75 }}>
              (Covers garment [unless provided], rhinestones,
              vinyl/screenprint, thread. Final materials cost is calculated after
              we finalize your exact design + style.)
            </p>
          </div>
        )}

        {form.item === "Phone Case" && (
          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: "18px",
              borderRadius: "10px",
              marginTop: "4px",
              lineHeight: 1.5,
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#caa9ff" }}>
              Phone Case — Custom 1/1
            </h3>

            <p>
              <strong>Standard Retail Value (you don’t pay this):</strong>
              <br />$30 – $88
            </p>

            <p style={{ marginTop: "10px" }}>
              <strong>Ambassador Contribution:</strong>
              <br />Materials Fee Only
            </p>

            <p style={{ marginTop: "10px", opacity: 0.75 }}>
              (Covers garment [unless provided], rhinestones,
              vinyl/screenprint, thread. Final materials cost is calculated after
              we finalize your exact design + style.)
            </p>
          </div>
        )}

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Describe what you want made"
          value={form.message}
          onChange={update}
          rows={4}
          required
          style={inputStyle}
        />

        {/* SUBMIT */}
        <button
          type="submit"
          style={{
            padding: "14px",
            background: "#caa9ff",
            color: "black",
            border: "none",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit Intake
        </button>
      </form>

      {/* STATUS */}
      {status === "loading" && <p style={{ marginTop: 20 }}>Sending…</p>}
      {status === "success" && (
        <p style={{ marginTop: 20, color: "#b388ff" }}>
          Intake submitted! I’ll reach out soon.
        </p>
      )}
      {status === "error" && (
        <p style={{ marginTop: 20, color: "red" }}>
          Error — please try again.
        </p>
      )}
    </main>
  );
}

const inputStyle = {
  padding: "12px",
  background: "#111",
  border: "1px solid #444",
  color: "white",
  borderRadius: "6px",
};
