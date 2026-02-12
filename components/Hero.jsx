import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.homepage}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroOverlay} aria-hidden="true" />
      <img
        src="/hero/the-world-is-yours.png"
        alt="Airship silhouette with 'THE WORLD' text"
        className={styles.srOnly}
      />

      <div className={styles.content}>
        <div className={styles.grid}>
          <a href="/products/beanies" className={styles.categoryLink}>Beanies</a>
          <a href="/products/phone-cases" className={styles.categoryLink}>Phone Cases</a>
          <a href="/products/hoodies" className={styles.categoryLink}>Hoodies</a>
          <a href="/products/jeans" className={styles.categoryLink}>Jeans</a>
          <a href="/products/shorts" className={styles.categoryLink}>Shorts</a>
          <a href="/products/hats" className={`${styles.categoryLink} ${styles.categoryWide}`}>
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
