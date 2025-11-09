export default function Home() {
  return (
    <main
      style={{
        textAlign: "center",
        padding: "60px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "10px" }}>
        Eight Studios of 888
      </h1>

      <p style={{ fontSize: "16px", opacity: "0.8", marginBottom: "30px" }}>
        Welcome to the official site and shop.
      </p>

      <a
        href="/products/beanies"
        style={{
          background: "black",
          color: "white",
          padding: "14px 28px",
          borderRadius: "10px",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Enter Shop
      </a>
    </main>
  );
}