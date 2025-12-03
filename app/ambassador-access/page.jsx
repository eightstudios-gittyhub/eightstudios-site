"use client";
import { useState } from "react";

export default function AmbassadorAccess() {
  const [form, setForm] = useState({
    name: "",
    instagram: "",
    email: "",
    message: "",
    hiddenField: "", // honeypot
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
        Ambassador Application
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
        {/* HONEYPOT (hidden from humans) */}
        <input
          type="text"
          name="hiddenField"
          value={form.hiddenField}
          onChange={update}
          style={{ display: "none" }}
          autoComplete="off"
        />

        <input
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={update}
          required
          style={{
            padding: "12px",
            background: "#111",
            border: "1px solid #444",
            color: "white",
          }}
        />

        <input
          name="instagram"
          placeholder="@instagram"
          value={form.instagram}
          onChange={update}
          required
          style={{
            padding: "12px",
            background: "#111",
            border: "1px solid #444",
            color: "white",
          }}
        />

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={form.email}
          onChange={update}
          required
          style={{
            padding: "12px",
            background: "#111",
            border: "1px solid #444",
            color: "white",
          }}
        />

        <textarea
          name="message"
          placeholder="Why do you want to join?"
          value={form.message}
          onChange={update}
          rows={4}
          required
          style={{
            padding: "12px",
            background: "#111",
            border: "1px solid #444",
            color: "white",
          }}
        />

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
          Submit
        </button>
      </form>

      {status === "loading" && <p style={{ marginTop: 20 }}>Sending…</p>}
      {status === "success" && (
        <p style={{ marginTop: 20, color: "#b388ff" }}>
          Application submitted!
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