"use client";
import { useState } from "react";

export default function BeaniesPage() {
  const [open, setOpen] = useState(false);

  const products = [
    {
      name: "Blue Beanie — White Glitter",
      link: "/products/beanies/blue-beanie-white",
      img: "https://i.imgur.com/C6WN82M.jpeg"
    },
    {
      name: "Blue Beanie — Black Glitter",
      link: "/products/beanies/bluebeanie-black",
      img: "https://i.imgur.com/PmFzNSO.jpeg"
    },
    {
      name: "Red Beanie — White Glitter",
      link: "/products/beanies/redbeanie-white",
      img: "https://i.imgur.com/g7X2vrf.jpeg"
    },
    {
      name: "Yellow Beanie — White Glitter",
      link: "/products/beanies/yellowbeanie-white",
      img: "https://i.imgur.com/kCZE64z.jpeg"
    },
    {
      name: "Green Beanie — Black Glitter",
      link: "/products/beanies/greenbeanie-black",
      img: "https://i.imgur.com/A3vdEKR.jpeg"
    },
    {
      name: "Green Beanie — White Glitter",
      link: "/products/beanies/greenbeanie-white",
      img: "https://i.imgur.com/xJVm6tH.jpeg"
    },
  ];

  return (
    <main
      style={{
        background: "black",
        minHeight: "100vh",
        color: "white",
        textAlign: "center",
        padding: "40px 20px",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>Beanies</h1>
      <p style={{ opacity: 0.8, marginBottom: "40px" }}>
        Handcrafted 1/1 custom beanies. No restocks.
      </p>

      {/* BUILD YOUR OWN BEANIE (COLLAPSIBLE) */}
      <div
        style={{
          backgroundColor: "#111",
          padding: "25px",
          borderRadius: "10px",
          margin: "0 auto 60px",
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "20px",
            fontWeight: "600",
            cursor: "pointer",
            width: "100%",
            textShadow: "0 0 18px rgba(255,255,255,0.45), 0 0 32px rgba(255,255,255,0.25)"
          }}
        >
          {open ? "Close Custom Beanie Builder ▲" : "Build Your Own Beanie ▼"}
        </button>

        {open && (
          <>
            <p style={{ opacity: 0.8, marginTop: "10px", marginBottom: "20px" }}>
              Select your style. I’ll message you to confirm and send a payment link.
            </p>

            <form
              action="https://formsubmit.co/YOUR_EMAIL_HERE"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <input type="hidden" name="_subject" value="New Custom Beanie Request" />

              <label>Base Beanie Color</label>
              <select name="Base Beanie Color" required>
                <option>Black</option>
                <option>Blue</option>
                <option>Yellow</option>
                <option>Red</option>
                <option>Gray</option>
                <option>White</option>
                <option>Custom Request (Describe Below)</option>
              </select>

              <label>Patch Fabric Color</label>
              <select name="Patch Fabric Color" required>
                <option>Black Denim</option>
                <option>Blue Denim</option>
                <option>Red Bandana</option>
                <option>Yellow Bandana</option>
                <option>Cream Canvas</option>
                <option>Patterned / Multi</option>
                <option>Custom (Describe Below)</option>
              </select>

              <label>Vinyl Style</label>
              <select name="Vinyl Style" required>
                <option>White Glitter</option>
                <option>Black Glitter</option>
                <option>Matte Red</option>
                <option>Matte Black</option>
                <option>Reflective Silver</option>
                <option>Custom Color (Describe Below)</option>
              </select>

              <label>Add-Ons</label>
              <select name="Add-Ons">
                <option>None</option>
                <option>Rhinestones</option>
                <option>Extra Words in Vinyl</option>
                <option>Double Patch Stack</option>
                <option>Distressed Edges</option>
                <option>Custom Add-On (Describe Below)</option>
              </select>

              <label>Extra Notes</label>
              <textarea
                name="Extra Notes"
                placeholder="Describe design details or custom wording..."
                style={{ padding: "10px" }}
              />

              <label>Your Instagram or Email</label>
              <input
                type="text"
                name="Contact"
                required
                placeholder="@username or email"
                style={{ padding: "10px" }}
              />

              <button
                type="submit"
                style={{
                  backgroundColor: "#fff",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Submit Request →
              </button>
            </form>
          </>
        )}
      </div>

      {/* PRODUCT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          justifyItems: "center",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {products.map((product, i) => (
          <a
            key={i}
            href={product.link}
            style={{
              textDecoration: "none",
              color: "white",
              width: "100%",
              maxWidth: "190px",
            }}
          >
            <img
              src={product.img}
              style={{
                width: "100%",
                borderRadius: "12px",
                boxShadow: "0 0 25px rgba(255,255,255,0.08)",
              }}
            />
            <p style={{ marginTop: "12px", fontWeight: "600", fontSize: "14px" }}>
              {product.name}
            </p>
            <p style={{ fontSize: "13px", opacity: 0.7, marginTop: "4px" }}>
              See Details →
            </p>
          </a>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ marginTop: "70px", opacity: 0.7 }}>
        <p style={{ marginBottom: "6px" }}>More pieces dropping soon.</p>
        <p>
          Custom requests:{" "}
          <a
            href="mailto:eight888studios@gmail.com"
            style={{ color: "#aaa", textDecoration: "underline" }}
          >
            eight888studios@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}