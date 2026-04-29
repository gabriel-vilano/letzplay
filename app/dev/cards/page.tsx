import { mockFeedCards } from "@/src/mocks/feed";
import { ActivityCard } from "@/src/components/feed/ActivityCard";
import styles from "./page.module.css";

export default function DevCardsPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        Dev — Feed Cards ({mockFeedCards.length} variações)
      </h1>
      <div className={styles.feed}>
        {mockFeedCards.map((card) => (
          <div key={card.id} className={styles.card_wrapper}>
            <p className={styles.card_label}>
              [{card.card_type}] {card.id}
            </p>
            <ActivityCard data={card} />
          </div>
        ))}
      </div>
    </main>
  );
}
