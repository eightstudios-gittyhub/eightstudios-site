"use client";

const linkStyle = {
  background: "rgba(20,20,20,0.6)",
  backdropFilter: "blur(8px)",
  padding: "14px 0",
  borderRadius: "10px",
  textDecoration: "none",
  color: "white",
  fontSize: "17px",
  fontWeight: "600",
  border: "1px solid rgba(255,255,255,0.12)",
  transition: "0.3s",
};

export default function Home() {
  return (
    <main className="homepage">
      {/* LOGO */}
      <img
        src="https://i.imgur.com/cvZxBNy.jpeg"
        alt="888 logo"
        className="logo888"
      />

      {/* CATEGORY BUTTONS */}
      <div className="grid">
        <a href="/products/beanies" style={linkStyle}>
          Beanies
        </a>
        <a href="/products/hoodies" style={linkStyle}>
          Hoodies
        </a>
        <a href="/products/jeans" style={linkStyle}>
          Jeans
        </a>
        <a href="/products/shorts" style={linkStyle}>
          Shorts
        </a>
        {/* full-width bottom button */}
        <a
          href="/products/hats"
          style={{ ...linkStyle, gridColumn: "1 / -1" }}
        >
          Hats
        </a>
      </div>

      {/* GLOBAL STYLES */}
      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }

        .homepage {
          min-height: 100vh;
          width: 100%;
          max-width: 100vw;
          background: radial-gradient(
            circle at center,
            rgba(160, 210, 255, 0.45),
            rgba(0, 0, 0, 1) 75%
          );
          background-size: 160% 160%;
          animation: drift 18s ease-in-out infinite;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 60px 20px;
          overflow: hidden;
        }

        @keyframes drift {
          0% { background-position: 50% 50%; }
          50% { background-position: 47% 53%; }
          100% { background-position: 50% 50%; }
        }

        .logo888 {
          width: min(230px, 80vw);
          margin-bottom: 55px;
          display: block;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 380px;
          margin: 0 auto;
          text-align: center;
        }

        /* Make the bottom button span full width cleanly */
        .grid a:last-child {
          justify-self: stretch;
        }

        @media (max-width: 360px) {
          .grid {
            max-width: 340px;
          }
        }
      `}</style>
    </main>
  );
}