"use client";

import { useState } from "react";
import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function HeavyweightZipup() {
  const [rhinestones, setRhinestones] = useState("No");
  const [rhinestoneSizes, setRhinestoneSizes] = useState([]);

  const toggleSize = (size) => {
    setRhinestoneSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <ProductPageTemplate
      title="888 Heavyweight Zipup — 1/1"
      sizes={["S", "M", "L", "XL"]}
      price="$150"
      description={`Handmade 1/1 heavyweight luxury zip-up hoodie — Choose your size.

Made to Order
Please allow 1–2 weeks for production and processing before shipment.

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
      stripe="https://buy.stripe.com/28EfZj4AL90K87V70C5Rm0d"
    >
      {/* CUSTOM OPTIONS */}
      <div style={containerStyle}>
        {/* Patch Color — UPDATED */}
        <Field label="Patch Color">
          <Select
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
          <Select options={["Single Stack 888", "Double Stack 888"]} />
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
