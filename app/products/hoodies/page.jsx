export default function HoodiesPage() {
  const hoodies = [
    {
      name: "888 Heavyweight Zipup — 1/1",
      link: "/products/hoodies/888-heavyweight-zipup",
      img: "https://i.imgur.com/pIeNzKp.jpeg",
    },
  ];

  return (
    <main
      style={{
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "black",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
        Hoodies
      </h1>

      <p style={{ marginBottom: "40px", opacity: 0.7 }}>
        Handmade 1/1 hooded garments by Eight Studios.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "30px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {hoodies.map((hoodie, i) => (
          <a
            key={i}
            href={hoodie.link}
            style={{ textDecoration: "none", color: "white" }}
          >
            <img
              src={hoodie.img}
              alt={hoodie.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />
            <div style={{ fontSize: "15px", opacity: 0.9 }}>
              {hoodie.name}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}