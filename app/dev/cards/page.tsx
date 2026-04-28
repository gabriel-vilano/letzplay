import { mockFeedCards } from "@/src/mocks/feed";
import { CardShell } from "@/src/components/feed/CardShell";
import { CardHeader } from "@/src/components/feed/CardHeader";
import { CardFooter } from "@/src/components/feed/CardFooter";
import type { FeedCard, CardHeader as CardHeaderData } from "@/src/types/feed";
import styles from "./page.module.css";

function getHeaderProps(card: FeedCard): {
  data: CardHeaderData;
  showHandshake: boolean;
} {
  if (card.card_type === "result" || card.card_type === "match") {
    return { data: card.header, showHandshake: false };
  }
  if (card.card_type === "enrollment") {
    const text =
      card.enrollment_format === "singles"
        ? `${card.player.name} inscreveu-se`
        : `${card.players[0].name} e ${card.players[1].name} inscreveram-se`;
    const player =
      card.enrollment_format === "singles" ? card.player : card.players[0];
    return {
      data: { header_type: "player", player, action_text: text },
      showHandshake: false,
    };
  }
  if (card.card_type === "friendship") {
    return {
      data: {
        header_type: "player",
        player: card.player_a,
        action_text: `${card.player_a.name} tornou-se amigo de ${card.player_b.name}`,
      },
      showHandshake: true,
    };
  }
  // ranking
  const action =
    card.movement === "down" ? "caiu no ranking" : "subiu no ranking";
  return {
    data: {
      header_type: "player",
      player: card.player,
      action_text: `${card.player.name} ${action}`,
    },
    showHandshake: false,
  };
}

export default function DevCardsPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>
        Dev — Feed Cards ({mockFeedCards.length} variações)
      </h1>
      <div className={styles.feed}>
        {mockFeedCards.map((card) => {
          const { data, showHandshake } = getHeaderProps(card);
          return (
            <div key={card.id} className={styles.card_wrapper}>
              <p className={styles.card_label}>
                [{card.card_type}] {card.id}
              </p>
              <CardShell
                header={
                  <CardHeader
                    data={data}
                    createdAt={card.created_at}
                    showHandshake={showHandshake}
                  />
                }
                body={
                  <p className={styles.card_placeholder}>
                    corpo do card — {card.card_type} {card.id}
                  </p>
                }
                footer={<CardFooter />}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
