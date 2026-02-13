import Link from "next/link";
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
          <Link href="/products/beanies" className={styles.categoryLink}>Beanies</Link>
          <Link href="/products/phone-cases" className={styles.categoryLink}>Phone Cases</Link>
          <Link href="/products/hoodies" className={styles.categoryLink}>Hoodies</Link>
          <Link href="/products/jeans" className={styles.categoryLink}>Jeans</Link>
          <Link href="/products/shorts" className={styles.categoryLink}>Shorts</Link>
          <Link href="/products/hats" className={`${styles.categoryLink} ${styles.categoryWide}`}>
            Hats
          </Link>
        </div>

        <div className={styles.archiveSection}>
          <div className={styles.opalDivider} />

          <Link href="/archives" className={styles.archiveButton}>
            Explore the Eight Studios Archive →
          </Link>
        </div>
      </div>
    </main>
  );
}
