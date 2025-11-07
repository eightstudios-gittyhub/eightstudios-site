import Link from "next/link";

export default function Products() {
  const items = [
    {
      name: "888 Blue Beanie (black glitter)",
      price: "$60",
      img: "https://i.imgur.com/PmFzNSO.jpeg",
      link: "https://buy.stripe.com/5kQbJ31ozccW1JxbgS5Rm03",
      details: "/products/bluebeanie-black",
    },
    {
      name: "888 Blue Beanie (white glitter)",
      price: "$60",
      img: "https://i.imgur.com/lnNufA4.jpeg",
      link: "https://buy.stripe.com/7sY14p0kv2Cm87V84G5Rm00",
      details: "/products/blue-beanie-white",
    },
{
  name: "888 Red Beanie (white glitter)",
  price: "$60",
  img: "https://i.imgur.com/8qbYNCk.jpeg",
  link: "https://buy.stripe.com/5kQ28t9V56SC9bZfx85Rm02",
  details: "/products/redbeanie-white",
},
  ];

  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Shop Eight Studios</h1>
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

            {/* Buy Now button */}
            <a
              href={item.link}
              style={{
                background: "black",
                color: "white",
                padding: "8px 16px",
                borderRadius: "6px",
                textDecoration: "none",
                display: "inline-block",
                marginBottom: "8px",
              }}
            >
              Buy Now
            </a>

            {/* See Details button */}
            <br />
            <Link href={item.details}>
              <button
                style={{
                  background: "white",
                  color: "black",
                  border: "1px solid black",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  marginTop: "8px",
                }}
              >
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}