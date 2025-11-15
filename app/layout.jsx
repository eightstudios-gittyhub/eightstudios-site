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
          overflowX: "hidden", // fixes sideways scrolling breaking your site
        }}
      >
        {/* Navigation Wrapper */}
        <div style={{ position: "sticky", top: 0, zIndex: 999 }}>
          
          {/* Left Fade */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "35px",
              height: "100%",
              pointerEvents: "none",
              background:
                "linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))",
              zIndex: 1000,
            }}
          />

          {/* Right Fade */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "35px",
              height: "100%",
              pointerEvents: "none",
              background:
                "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
              zIndex: 1000,
            }}
          />

          {/* Navigation */}
          <nav
            style={{
              display: "flex",
              gap: "24px",
              padding: "18px 0",
              paddingLeft: "20px",
              paddingRight: "20px",
              fontWeight: "600",
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(6px)",
              whiteSpace: "nowrap",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {["Home","Beanies","Hoodies","Jeans","Shorts","Hats"].map((item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/products/${item.toLowerCase()}`}
                style={{
                  color: "white",
                  textDecoration: "none",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Page Content */}
        {children}

        {/* Divider Line */}
        <div
          style={{
            width: "100%",
            height: "2px",
            marginTop: "45px",
            marginBottom: "20px",
            background:
              "linear-gradient(90deg, rgba(185,205,255,0.35), rgba(255,255,255,0.1), rgba(185,205,255,0.35))",
          }}
        />

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "30px 0",
            fontSize: "12.5px",
            opacity: 0.88,
          }}
        >
          © 2025 Eight Studios™ · All Rights Reserved
        </footer>
      </body>
    </html>
  );
}