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
    }
    <div className="product-card">
  <img
    src="https://i.imgur.com/PUT_YOUR_GREEN_THUMBNAIL.jpeg"
    alt="Green Beanie — Black Glitter"
    style={{ width: "100%", borderRadius: "10px" }}
  />
  <h2>Green Beanie — Black Glitter</h2>
  <a href="/products/beanies/greenbeanie-black">See Details →</a>
</div>
  ];

  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <h1>Beanies</h1>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        marginTop: "30px"
      }}>
        {products.map((product) => (
          <a 
            key={product.link} 
            href={product.link}
            style={{
              width: "160px",
              textDecoration: "none",
              color: "#000",
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <img 
              src={product.img}
              style={{ width: "100%", borderRadius: "8px" }}
            />
            <p style={{ marginTop: "10px", fontWeight: "600", fontSize: "14px" }}>
              {product.name}
            </p>
            <p style={{ fontSize: "14px", marginTop: "5px", opacity: 0.7 }}>
              See Details →
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}