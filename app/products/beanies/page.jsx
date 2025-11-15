"use client";
import { useState } from "react";

export default function BeaniesPage() {
  const [open, setOpen] = useState(false);

  // Images for the carousel
  const images = [
    "https://i.imgur.com/C6WN82M.jpeg", // Blue — White Glitter
    "https://i.imgur.com/PmFzNSO.jpeg", // Blue — Black Glitter
    "https://i.imgur.com/g7X2vrf.jpeg", // Red — White Glitter
    "https://i.imgur.com/kCZE64z.jpeg", // Yellow — White Glitter
    "https://i.imgur.com/A3vdEKR.jpeg", // Green — Black Glitter
    "https://i.imgur.com/xJVm6tH.jpeg", // Green — White Glitter
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
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>888 Long Beanie</h1>
      <p style={{ opacity: 0.8, marginBottom: "40px" }}>
        Handmade 1/1 luxury beanie — choose your patch color + glitter.
      </p>

  {/* Image Carousel — Auto Snap */}
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          borderRadius: "12px",
          gap: "0px",
        }}
      >
        {images.map((img, i) => (
          <div
            key={i}
            style={{
              minWidth: "100%",
              scrollSnapAlign: "center",
            }}
          >
            <img
              src={img}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </div>

      {/* DOT NAVIGATION */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "12px",
          gap: "6px",
        }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "gray",
              opacity: 0.5,
            }}
          ></div>
        ))}
      </div>

      {/* PRODUCT CUSTOMIZATION */}
      <div
        style={{
          marginTop: "45px",
          textAlign: "left",
          maxWidth: "600px",
          marginInline: "auto",
        }}
      >
        <label style={{ fontSize: "16px" }}>Patch Color</label>
        <select
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "6px",
            background: "#111",
            color: "white",
            border: "1px solid #444",
            marginBottom: "25px",
          }}
        >
          <option>Red</option>
          <option>Orange</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Purple</option>
        </select>

        <label style={{ fontSize: "16px" }}>Glitter Color</label>
        <select
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "6px",
            background: "#111",
            color: "white",
            border: "1px solid #444",
          }}
        >
          <option>White</option>
          <option>Black</option>
        </select>

        {/* BUY BUTTON */}
        <a
          href="YOUR_STRIPE_LINK_HERE"
          style={{
            display: "block",
            marginTop: "35px",
            padding: "15px",
            background: "white",
            color: "black",
            borderRadius: "6px",
            textAlign: "center",
            fontWeight: "600",
            textDecoration: "none",
          }}
        >
          Buy Now — $60
        </a>
      </div>

      {/* CUSTOM BEANIE BUILDER — COLLAPSIBLE */}
      <div
        style={{
          backgroundColor: "#111",
          padding: "25px",
          borderRadius: "10px",
          margin: "60px auto",
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
            textShadow:
              "0 0 18px rgba(255,255,255,0.45), 0 0 32px rgba(255,255,255,0.25)",
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
              action="https://formsubmit.co/eight888studios@gmail.com"
              method="POST"
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <input
                type="hidden"
                name="_subject"
                value="New Custom Beanie Request"
              />

              <label>Base Beanie Color</label>
              <select name="baseColor" required>
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Orange">Orange</option>
                <option value="Yellow">Yellow</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                <option value="Purple">Purple</option>
                <option value="Pink">Pink</option>
                <option value="Custom Request">
                  Custom Request (Describe Below)
                </option>
              </select>

              <label>Patch Fabric Color</label>
              <select name="patchMaterial" required>
                <option value="Black Denim">Black Denim</option>
                <option value="Blue Denim">Blue Denim</option>
                <option value="Red Cotton">Red Cotton</option>
                <option value="Orange Cotton">Orange Cotton</option>
                <option value="Yellow Cotton">Yellow Cotton</option>
                <option value="Green Cotton">Green Cotton</option>
                <option value="Blue Cotton">Blue Cotton</option>
                <option value="Purple Cotton">Purple Cotton</option>
                <option value="Pink Cotton">Pink Cotton</option>
                <option value="Custom">Custom (Describe Below)</option>
              </select>

              <label>Vinyl Style</label>
              <select name="vinylStyle" required>
                <option disabled>— Glitter —</option>
                <option value="Glitter Black">Glitter Black</option>
                <option value="Glitter White">Glitter White</option>
                <option value="Glitter Red">Glitter Red</option>

                <option disabled>— Matte —</option>
                <option value="Matte Red-Pink">Matte Red-Pink</option>
                <option value="Matte Black">Matte Black</option>
                <option value="Matte White">Matte White</option>
                <option value="Matte Silver">Matte Silver</option>
                <option value="Matte Gold">Matte Gold</option>

                <option disabled>— Specialty —</option>
                <option value="Matte Camo">Matte Camo</option>
                <option value="Shiny Holographic">Shiny Holographic</option>
                <option value="Animal Print">Animal Print</option>
              </select>

              <label>Add-Ons</label>
              <select name="Add-Ons">
                <option>None</option>
                <option>Rhinestones</option>
                <option>Extra Words in Vinyl</option>
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

      {/* FOOTER */}
      <div style={{ marginTop: "30px", opacity: 0.7 }}>
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