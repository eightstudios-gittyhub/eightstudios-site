export default function Products() {
  const items = [
    {
      name: "888 Blue Beanie (black glitter)",
      price: "$60",
      img: "https://i.imgur.com/PmFzNSO.jpeg",
      link: "https://buy.stripe.com/7sY14p0kv2Cm87V84G5Rm00", // your Stripe link here
    },
    {
      name: "888 Blue Beanie (white glitter)",
      price: "$60",
      img: "https://i.imgur.com/lnNufA4.jpeg",
      link: "https://buy.stripe.com/7sY14p0kv2Cm87V84G5Rm00",
    },
  ];

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Shop Eight Studios of 888</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "1rem",
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <a
              href={item.link}
              style={{
                background: "black",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
