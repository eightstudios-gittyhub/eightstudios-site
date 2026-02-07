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
        <a href="/products/beanies" style={linkStyle}>Beanies</a>
         <a href="/products/phone-cases" style={linkStyle}>Phone Cases</a>
        <a href="/products/hoodies" style={linkStyle}>Hoodies</a>
        <a href="/products/jeans" style={linkStyle}>Jeans</a>
        <a href="/products/shorts" style={linkStyle}>Shorts</a>

        {/* full-width bottom button */}
        <a href="/products/hats" style={{ ...linkStyle, gridColumn: "1 / -1" }}>
          Hats
        </a>
      </div>

      {/* ░░░ ARCHIVE SECTION ADDED BELOW ░░░ */}
      <div className="archiveSection">
        {/* Opal Divider Line */}
        <div className="opalDivider"></div>

        <a href="/archives" className="archiveButton">
          Explore the Eight Studios Archive →
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

        .grid a:last-child {
          justify-self: stretch;
        }

        /* ░░░ NEW ARCHIVE SECTION STYLING ░░░ */
        .archiveSection {
          margin-top: 50px;
          text-align: center;
        }

        .opalDivider {
          width: 200px;
          height: 2px;
          margin: 0 auto 26px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(180,160,255,0.9) 50%,
            rgba(255,255,255,0) 100%
          );
          box-shadow: 0 0 14px rgba(180,160,255,0.8);
          border-radius: 2px;
        }

        .archiveButton {
          display: inline-block;
          padding: 14px 30px;
          background: linear-gradient(
            90deg,
            rgba(120,110,150,0.35),
            rgba(150,130,200,0.35)
          );
          box-shadow: 0 0 18px rgba(180,160,255,0.45);
          border-radius: 12px;
          color: white;
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255,255,255,0.15);
          transition: 0.25s;
        }

        .archiveButton:hover {
          box-shadow: 0 0 22px rgba(200,180,255,0.65);
          transform: translateY(-1px);
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