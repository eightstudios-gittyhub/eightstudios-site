"use client";

export default function BeaniesPage() {
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
          justifyItems: "center",
          maxWidth: "900px",
          margin: "0 auto"
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