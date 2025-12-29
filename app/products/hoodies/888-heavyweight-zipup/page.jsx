"use client";

import { useState } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function HeavyweightZipup() {
  const [rhinestones, setRhinestones] = useState("No");

  return (
    <ProductPageTemplate
      title="888 Heavyweight Zipup — 1/1"
      sizes={["S", "M", "L", "XL"]}
      price="$—"
      description={`Handmade 1/1 heavyweight luxury zip-up hoodie — Choose your size.

Made to Order
Certain products are made to order. Please allow 1–2 weeks for production and processing before shipment.

• made by Eight Studios (888inc.)
• high quality heavyweight hoodie
• 2 zippers
• rhinestones and patchwork
`}
      images={[
        "https://i.imgur.com/pIeNzKp.jpeg",
        "https://i.imgur.com/9ebeoTs.jpeg",
        "https://i.imgur.com/fKZ4sQE.jpeg",
        "https://i.imgur.com/XW95aM4.jpeg",
        "https://i.imgur.com/lElGmrN.jpeg",
        "https://i.imgur.com/fJTOTE8.jpeg",
      ]}
      stripe="https://buy.stripe.com/REPLACE_WITH_YOUR_LINK"
    >
      {/* CUSTOMIZATION OPTIONS */}
      <div style={containerStyle}>
        {/* Patch Color */}
        <Field label="Patch Color">
          <Select
            options={["Red", "Black", "White", "Yellow", "Green", "Blue", "Purple"]}
          />
        </Field>

        {/* Vinyl Color */}
        <Field
          label="Vinyl Color"
          hint="DM me to see what’s available."
        >
          <Select options={["DM for availability"]} />
        </Field>

        {/* 888 Style */}
        <Field label="888 Style">
          <Select options={["Single Stack 888", "Double Stack 888"]} />
        </Field>

        {/* Rhinestones */}
        <Field label="Rhinestones">
          <select
            style={selectStyle}
            value={rhinestones}
            onChange={(e) => setRhinestones(e.target.value)}
          >
            <option value="No" style={{ color: "black" }}>No</option>
            <option value="Yes" style={{ color: "black" }}>Yes</option>
          </select>
        </Field>

        {/* CONDITIONAL OPTIONS */}
        {rhinestones === "Yes" && (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <Field label="Rhinestone Color">
              <Select
                options={["Red", "Yellow", "Green", "Blue", "Purple", "Black", "White"]}
              />
            </Field>

            <Field label="Rhinestone Size">
              <Select options={["Small", "Medium", "Large"]} />
            </Field>
          </div>
        )}
      </div>
    </ProductPageTemplate>
  );
}

/* ---------- Reusable UI ---------- */

function Field({ label, hint, children }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label style={labelStyle}>
        {label}
        {hint && <span style={hintStyle}>{hint}</span>}
      </label>
      {children}
    </div>
  );
}

function Select({ options }) {
  return (
    <select style={selectStyle}>
      {options.map((o) => (
        <option key={o} value={o} style={{ color: "black" }}>
          {o}
        </option>
      ))}
    </select>
  );
}

/* ---------- Styles ---------- */

const containerStyle = {
  maxWidth: "520px",
  margin: "0 auto 24px",
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