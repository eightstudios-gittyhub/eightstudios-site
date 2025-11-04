export default function Home() {
  return (
    <main style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Eight Studios of 888</h1>
      <p>Welcome to the official site and shop.</p>

      <a
        href="/products"
        style={{
          background: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          display: "inline-block",
          marginTop: "20px",
          textDecoration: "none",
        }}
      >
        Enter Shop
      </a>
    </main>
  );
}