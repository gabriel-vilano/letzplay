import type { Score, SetScore } from "@/src/types/feed";
import styles from "./ScoreBlock.module.css";

interface ScoreBlockProps {
  score: Score;
}

export function ScoreBlock({ score }: ScoreBlockProps) {
  const { sets, isPlaceholder } = resolveSets(score);
  const cols = sets.length;
  const showLabels = cols >= 2;
  const labels = showLabels ? buildLabels(cols) : [];

  return (
    <div className={`${styles.score} ${styles[`score--cols-${cols}`]}`}>
      {showLabels &&
        labels.map((label, i) => (
          <span key={`label-${i}`} className={styles.score__label}>
            {label}
          </span>
        ))}

      {sets.map((set, i) => {
        const isWinnerOfSet = !isPlaceholder && set.a > set.b;
        return (
          <span
            key={`top-${i}`}
            className={`${styles.score__number} ${
              isWinnerOfSet
                ? styles["score__number--winner"]
                : styles["score__number--loser"]
            }`}
          >
            {set.a}
          </span>
        );
      })}

      {sets.map((set, i) => {
        const isWinnerOfSet = !isPlaceholder && set.b > set.a;
        return (
          <span
            key={`bot-${i}`}
            className={`${styles.score__number} ${
              isWinnerOfSet
                ? styles["score__number--winner"]
                : styles["score__number--loser"]
            }`}
          >
            {set.b}
          </span>
        );
      })}
    </div>
  );
}

function resolveSets(score: Score): { sets: SetScore[]; isPlaceholder: boolean } {
  if (score.type === "wo") {
    return { sets: [{ a: 0, b: 0 }], isPlaceholder: true };
  }
  if (score.type === "retired") {
    if (score.completed_sets.length === 0) {
      return { sets: [{ a: 0, b: 0 }], isPlaceholder: true };
    }
    return { sets: score.completed_sets, isPlaceholder: false };
  }
  return { sets: score.sets, isPlaceholder: false };
}

function buildLabels(cols: number): string[] {
  if (cols === 3) return ["Set 1", "Set 2", "STB"];
  return Array.from({ length: cols }, (_, i) => `Set ${i + 1}`);
}
