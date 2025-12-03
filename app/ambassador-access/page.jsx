"use client";

export default function AmbassadorAccess() {
  return (
    <main
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Eight Studios — Ambassador Intake
      </h1>

      <p style={{ marginBottom: "30px", opacity: 0.8 }}>
        Fill this out to join the Ambassador Program.  
        After submitting, you’ll receive the Apple Pay / Cash App details.
      </p>

      {/* IMPORTANT — Updated to use your Resend API route */}
      <form
        action="/api/ambassador"
        method="POST"
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          textAlign: "left",
        }}
      >
        {/* NAME */}
        <label style={{ display: "block", marginBottom: "8px" }}>Name</label>
        <input type="text" name="name" required style={inputStyle} />

        {/* INSTAGRAM */}
        <label style={{ display: "block", margin: "20px 0 8px" }}>
          Instagram Handle
        </label>
        <input type="text" name="instagram" required style={inputStyle} />

        {/* EMAIL */}
        <label style={{ display: "block", margin: "20px 0 8px" }}>
          Email
        </label>
        <input type="email" name="email" required style={inputStyle} />

        {/* ITEM */}
        <label style={{ display: "block", margin: "20px 0 8px" }}>
          What item do you want?
        </label>
        <select name="item" required style={inputStyle}>
          <option value="">Select item…</option>
          <option value="Beanie">Beanie</option>
          <option value="Hoodie">Hoodie</option>
          <option value="T-Shirt">T-Shirt</option>
          <option value="Jeans">Jeans</option>
          <option value="Phone Case">Phone Case</option>
          <option value="Other">Other</option>
        </select>

        {/* OTHER FIELD */}
        <label style={{ display: "block", margin: "20px 0 8px" }}>
          If Other, describe it:
        </label>
        <textarea name="other_description" rows="4" style={inputStyle} />

        {/* SUBMIT */}
        <button
          type="submit"
          style={{
            marginTop: "30px",
            padding: "14px 30px",
            width: "100%",
            backgroundColor: "#caa9ff",
            color: "black",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </main>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #444",
  backgroundColor: "#111",
  color: "white",
};