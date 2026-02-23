"use client";

import { useState } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";
import CheckoutButton from "@/components/CheckoutButton";

export default function HeavyweightZipup() {
  const [size, setSize] = useState("S");
  const [blankColorway, setBlankColorway] = useState("Black");
  const [patchColor, setPatchColor] = useState("Black");
  const [vinylColor, setVinylColor] = useState("Glitter Black");
  const [eightStyle, setEightStyle] = useState("Single Stack 888");
  const [rhinestones, setRhinestones] = useState("No");
  const [rhinestoneColor, setRhinestoneColor] = useState("White");
  const [rhinestoneSizes, setRhinestoneSizes] = useState([]);

  const checkoutCustomizations = {
    size,
    blankColorway,
    patchColor,
    vinylColor,
    eightStyle,
    rhinestones,
    rhinestoneColor: rhinestones === "Yes" ? rhinestoneColor : "N/A",
    rhinestoneSizes: rhinestones === "Yes" ? rhinestoneSizes.join(", ") || "None" : "N/A",
  };

  const blackColorwayImages = [
    "https://i.imgur.com/zs9DCQw.jpeg",
    "https://i.imgur.com/za1S4xn.jpeg",
    "https://i.imgur.com/pIeNzKp.jpeg",
    "https://i.imgur.com/9ebeoTs.jpeg",
    "https://i.imgur.com/LFh7uSL.jpeg",
  ];

  const grayColorwayImages = [
    "https://i.imgur.com/XcEhQOO.jpeg",
    "https://i.imgur.com/U9Vc3cV.jpeg",
    "https://i.imgur.com/8ApQqnC.jpeg",
    "https://i.imgur.com/JF4wbwD.jpeg",
    "https://i.imgur.com/vid4xZV.jpeg",
  ];

  const galleries = [
    {
      id: "black",
      title: "Black Colorway",
      images: blackColorwayImages,
    },
    {
      id: "gray",
      title: "Gray Colorway",
      images: grayColorwayImages,
    },
  ];

  const toggleSize = (size) => {
    setRhinestoneSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <ProductPageTemplate
      title="888Heavyweight Zipup — 1/1"
      price="$150"
      description={`Handmade 1/1 heavyweight luxury zip-up hoodie — Choose your size.

Made to Order
Please allow 1–2 weeks for production and processing before shipment.

• Made by Eight Studios (888inc.)
• High quality heavyweight unisex hoodie
• 2 zippers 
• 50/50 Cotton & Poly
• Rhinestones and patchwork
`}
      galleries={galleries}
    >
      {/* CUSTOM OPTIONS */}
      <div style={containerStyle}>
        <Field label="Size">
          <Select
            required
            value={size}
            onChange={(e) => setSize(e.target.value)}
            options={["S", "M", "L", "XL"]}
          />
        </Field>

        <Field label="Blank Hoodie Colorway">
          <Select
            required
            value={blankColorway}
            onChange={(e) => setBlankColorway(e.target.value)}
            options={["Black", "Brown", "Navy", "Dark Grey", "Pink"]}
          />
        </Field>

        {/* Patch Color — UPDATED */}
        <Field label="Patch Color">
          <Select
            value={patchColor}
            onChange={(e) => setPatchColor(e.target.value)}
            options={[
              "Black",
              "White",
              "Red",
              "Orange", // ✅ added here
              "Yellow",
              "Green",
              "Blue",
              "Purple",
              "Jean / Other Material (DM to specify)", // ✅ added at bottom
            ]}
          />
        </Field>

        {/* Vinyl Color */}
<Field label="Vinyl Color" hint="DM me to see what’s available.">
  <Select
    value={vinylColor}
    onChange={(e) => setVinylColor(e.target.value)}
    options={[
      "Glitter Black",
      "Glitter White",
      "Glitter Red",
      "Glitter Green",
      "Glitter Purple",
      "Glitter Gold",
    ]}
  />
</Field>


        {/* 888 Style */}
        <Field label="888 Style">
          <Select
            value={eightStyle}
            onChange={(e) => setEightStyle(e.target.value)}
            options={["Single Stack 888", "Double Stack 888"]}
          />
        </Field>

        {/* Rhinestones */}
        <Field label="Rhinestones">
          <select
            style={selectStyle}
            value={rhinestones}
            onChange={(e) => {
              setRhinestones(e.target.value);
              if (e.target.value === "No") {
                setRhinestoneSizes([]);
              }
            }}
          >
            <option value="No" style={{ color: "black" }}>No</option>
            <option value="Yes" style={{ color: "black" }}>Yes</option>
          </select>
        </Field>

        {/* CONDITIONAL OPTIONS */}
        {rhinestones === "Yes" && (
          <>
            <Field label="Rhinestone Color">
              <Select
                value={rhinestoneColor}
                onChange={(e) => setRhinestoneColor(e.target.value)}
                options={[
                  "White",
                  "Black",
                  "Red",
                  "Orange",
                  "Yellow",
                  "Green",
                  "Blue",
                  "Purple",
                ]}
              />
            </Field>

            {/* MULTI-SELECT SIZE */}
            <div style={{ marginBottom: "20px" }}>
              <label style={labelStyle}>Rhinestone Size</label>

              <div style={pillRowStyle}>
                {["Small", "Medium", "Large"].map((size) => {
                  const active = rhinestoneSizes.includes(size);

                  return (
                    <button
                      key={size}
                      type="button"
                      onClick={() => toggleSize(size)}
                      style={{
                        ...pillStyle,
                        backgroundColor: active ? "white" : "transparent",
                        color: active ? "black" : "white",
                      }}
                    >
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        <CheckoutButton
          unitAmount={15000}
          productName="888Heavyweight Zipup — 1/1"
          quantity={1}
          customizations={checkoutCustomizations}
          label="Buy Now — $150"
          style={buyButtonStyle}
        />
      </div>
    </ProductPageTemplate>
  );
}

/* ---------- UI HELPERS ---------- */

function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <label style={labelStyle}>
        {label}
        {hint && <span style={hintStyle}>{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ options, ...props }) {
  return (
    <select style={selectStyle} {...props}>
      {options.map((o) => (
        <option key={o} value={o} style={{ color: "black" }}>
          {o}
        </option>
      ))}
    </select>
  );
}

/* ---------- STYLES ---------- */

const containerStyle = {
  maxWidth: "520px",
  margin: "0 auto 28px",
  textAlign: "left",
};

const selectStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px",
  padding: "12px 14px",
  outline: "none",
};

const labelStyle = {
  display: "block",
  fontSize: "14px",
  marginBottom: "6px",
};

const hintStyle = {
  display: "block",
  fontSize: "12px",
  opacity: 0.7,
  marginTop: "4px",
};

const pillRowStyle = {
  display: "flex",
  gap: "10px",
  marginTop: "8px",
  flexWrap: "wrap",
};

const pillStyle = {
  padding: "10px 16px",
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "transparent",
  fontSize: "14px",
  cursor: "pointer",
};

const buyButtonStyle = {
  display: "inline-block",
  backgroundColor: "white",
  color: "black",
  padding: "12px 28px",
  borderRadius: "12px",
  fontWeight: "600",
  textDecoration: "none",
  fontSize: "16px",
  marginTop: "20px",
  border: "none",
  cursor: "pointer",
  minWidth: "220px",
};
