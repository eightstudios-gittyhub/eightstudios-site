export const metadata = {
  title: "Eight Studios of 888",
  description: "Official shop and brand website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#fff",
          color: "#000",
        }}
      >
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "15px 0", fontWeight: "600" }}>
  <a href="/products/beanies">Beanies</a>
  <a href="/products/hoodies">Hoodies</a>
  <a href="/products/jeans">Jeans</a>
  <a href="/products/shorts">Shorts</a>
  <a href="/products/hats">Hats</a>
</nav>
        {children}
      </body>
    </html>
  );
}