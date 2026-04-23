import Link from "next/link";
import styles from "./Hero.module.css";
import ContactSection from "./ContactSection";

const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1496959959529816274/DcR8uqlxQkHGPmVJL48q8yd665vUCACgwkP_xLFVw7uAURmnKPlkHAEAku452sBb3I7l";

/* ✅ Server Action (runs only on server) */
async function sendToDiscord(formData: FormData) {
  "use server";

  const event = formData.get("event");

  await fetch(DISCORD_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: `👀 Event: ${event}`,
    }),
  });
}

export default function Hero() {
  return (
    <main className={styles.homepage}>
      <div className={styles.heroBackground} aria-hidden="true" />
      <div className={styles.heroOverlay} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.grid}>
          {/* Beanies */}
          <form action={sendToDiscord}>
            <input type="hidden" name="event" value="Clicked Beanies" />
            <button className={styles.categoryLink} type="submit">
              Beanies
            </button>
          </form>

          {/* Hoodies */}
          <form action={sendToDiscord}>
            <input type="hidden" name="event" value="Clicked Hoodies" />
            <button className={styles.categoryLink} type="submit">
              Hoodies
            </button>
          </form>

          <form action={sendToDiscord}>
            <input type="hidden" name="event" value="Clicked Phone Cases" />
            <button className={styles.categoryLink} type="submit">
              Phone Cases
            </button>
          </form>

          <Link href="/products/jeans" className={styles.categoryLink}>
            Jeans
          </Link>

          <Link href="/products/shorts" className={styles.categoryLink}>
            Shorts
          </Link>

          <Link href="/products/pants" className={styles.categoryLink}>
            Pants
          </Link>

          <Link href="/products/hats" className={styles.categoryLink}>
            Hats
          </Link>
        </div>

        <div className={styles.archiveSection}>
          <div className={styles.opalDivider} />

          <Link href="/archives" className={styles.archiveButton}>
            Explore the Eight Studios Archive →
          </Link>

          <ContactSection />
        </div>
      </div>
    </main>
  );
}
