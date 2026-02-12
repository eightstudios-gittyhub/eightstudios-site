import styles from "./Hero.module.css";

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

export default function Hero() {
  return (
    <main className={styles.homepage}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <img
        src="https://media0.giphy.com/media/3o6ZsVLEnhslyoSkg0/giphy_s.jpg"
        alt="Airship in a dark sky background"
        className={styles.srOnly}
      />

      <div className={styles.content}>
        <div className={styles.grid}>
          <a href="/products/beanies" style={linkStyle}>Beanies</a>
          <a href="/products/phone-cases" style={linkStyle}>Phone Cases</a>
          <a href="/products/hoodies" style={linkStyle}>Hoodies</a>
          <a href="/products/jeans" style={linkStyle}>Jeans</a>
          <a href="/products/shorts" style={linkStyle}>Shorts</a>
          <a href="/products/hats" style={{ ...linkStyle, gridColumn: "1 / -1" }}>
            Hats
          </a>
        </div>

        <div className={styles.archiveSection}>
          <div className={styles.opalDivider} />

          <a href="/archives" className={styles.archiveButton}>
            Explore the Eight Studios Archive →
          </a>
        </div>
      </div>
    </main>
  );
}
