export const metadata = {
  title: "Eight Studios of 888",
  description: "Official shop and brand website.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        overflowX: "hidden",
        width: "100%",
      }}
    >
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "Arial, sans-serif",
          color: "white",
          overflowX: "hidden",
          width: "100%",
          position: "relative",

          backgroundColor: "black",
          backgroundImage:
            "radial-gradient(circle at center, rgba(160, 200, 220, 0.35) 0%, rgba(0, 0, 0, 1) 70%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        {/* Navigation Wrapper */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 9999,
            maxWidth: "100vw",
            overflow: "hidden",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(6px)",
          }}
        >
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
              zIndex: 10000,
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
              zIndex: 10000,
            }}
          />

          {/* Navigation */}
          <nav
            id="top-nav"
            style={{
              display: "flex",
              gap: "30px",
              padding: "18px 20px",
              fontWeight: "600",

              whiteSpace: "nowrap",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",

              width: "100%",
              maxWidth: "100vw",

              scrollBehavior: "smooth",
            }}
          >
            {["Home", "Beanies", "Hoodies", "Jeans", "Shorts", "Hats"].map(
              (item) => {
                const link =
                  item === "Home"
                    ? "/"
                    : `/products/${item.toLowerCase()}`;

                return (
                  <a
                    key={item}
                    href={link}
                    data-nav={item.toLowerCase()}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      padding: "4px",
                      display: "inline-block",
                    }}
                  >
                    {item}
                  </a>
                );
              }
            )}
          </nav>
        </div>

        {/* AUTO CENTER SCRIPT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("DOMContentLoaded", () => {
                const nav = document.getElementById("top-nav");
                const links = nav.querySelectorAll("a");
                const currentPath = window.location.pathname;

                let activeLink = null;
                links.forEach(link => {
                  if (link.getAttribute("href") === currentPath) {
                    activeLink = link;
                  }
                });

                if (activeLink) {
                  const offset =
                    activeLink.offsetLeft -
                    nav.clientWidth / 2 +
                    activeLink.clientWidth / 2;

                  nav.scrollTo({
                    left: offset,
                    behavior: "smooth",
                  });
                }

                // When tapping any nav item, center it
                links.forEach(link => {
                  link.addEventListener("click", () => {
                    const rect = link.getBoundingClientRect();
                    const offset =
                      link.offsetLeft -
                      nav.clientWidth / 2 +
                      link.clientWidth / 2;

                    nav.scrollTo({
                      left: offset,
                      behavior: "smooth",
                    });
                  });
                });
              });
            `,
          }}
        />

        {/* Page Content */}
        <main style={{ position: "relative", zIndex: 1 }}>
          {children}
        </main>

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