import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function HeavyweightZipup() {
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
      <div
        style={{
          maxWidth: "520px",
          margin: "0 auto 22px",
          textAlign: "left",
        }}
      >
        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
            Patch Color
          </label>
          <select style={selectStyle} defaultValue="Red">
            {["Red", "Black", "White", "Yellow", "Green", "Blue", "Purple"].map((v) => (
              <option key={v} value={v} style={{ color: "black" }}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
            Vinyl Color
            <span style={{ display: "block", fontSize: "12px", opacity: 0.7, marginTop: "4px" }}>
              DM me to see what’s available.
            </span>
          </label>
          <select style={selectStyle} defaultValue="DM for availability">
            <option value="DM for availability" style={{ color: "black" }}>
              DM for availability
            </option>
          </select>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
            888 Style
          </label>
          <select style={selectStyle} defaultValue="Single Stack 888">
            {["Single Stack 888", "Double Stack 888"].map((v) => (
              <option key={v} value={v} style={{ color: "black" }}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "14px" }}>
          <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
            Rhinestones
          </label>
          <select style={selectStyle} defaultValue="No">
            {["No", "Yes"].map((v) => (
              <option key={v} value={v} style={{ color: "black" }}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
              Rhinestone Color
            </label>
            <select style={selectStyle} defaultValue="White">
              {["Red", "Yellow", "Green", "Blue", "Purple", "Black", "White"].map((v) => (
                <option key={v} value={v} style={{ color: "black" }}>
                  {v}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={{ display: "block", fontSize: "14px", marginBottom: "6px" }}>
              Rhinestone Size
            </label>
            <select style={selectStyle} defaultValue="Medium">
              {["Small", "Medium", "Large"].map((v) => (
                <option key={v} value={v} style={{ color: "black" }}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </ProductPageTemplate>
  );
}

const selectStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.15)",
  borderRadius: "10px",
  padding: "12px 14px",
  outline: "none",
};