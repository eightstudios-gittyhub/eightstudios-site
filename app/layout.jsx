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
          padding: 0,
          fontFamily: "Arial, sans-serif",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            padding: "18px 0",
            fontWeight: "600",
            position: "sticky",
            top: 0,
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
            zIndex: 999,
          }}
        >
          <a href="/products/beanies" style={{ color: "white", textDecoration: "none" }}>Beanies</a>
          <a href="/products/hoodies" style={{ color: "white", textDecoration: "none" }}>Hoodies</a>
          <a href="/products/jeans" style={{ color: "white", textDecoration: "none" }}>Jeans</a>
          <a href="/products/shorts" style={{ color: "white", textDecoration: "none" }}>Shorts</a>
          <a href="/products/hats" style={{ color: "white", textDecoration: "none" }}>Hats</a>
        </nav>

        {children}
      </body>
    </html>
  );
}