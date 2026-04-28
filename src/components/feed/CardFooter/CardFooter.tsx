"use client";

import { useState } from "react";
import { Heart, ChatCircle, ShareNetwork } from "@phosphor-icons/react";
import { Icon } from "@/src/components/ui/Icon";
import styles from "./CardFooter.module.css";

interface CardFooterProps {
  initialLiked?: boolean;
  onComment?: () => void;
  onShare?: () => void;
}

export function CardFooter({
  initialLiked = false,
  onComment,
  onShare,
}: CardFooterProps) {
  const [liked, setLiked] = useState(initialLiked);

  return (
    <footer className={styles.footer}>
      <button
        className={`${styles.action} ${liked ? styles["action--liked"] : ""}`}
        onClick={() => setLiked((prev) => !prev)}
        aria-pressed={liked}
        aria-label={liked ? "Descurtir" : "Curtir"}
      >
        <Icon
          icon={Heart}
          size="md"
          weight={liked ? "fill" : "regular"}
          aria-hidden={true}
        />
        <span className={styles.action__label}>Curtir</span>
      </button>

      <button className={styles.action} onClick={onComment} aria-label="Comentar">
        <Icon icon={ChatCircle} size="md" weight="regular" aria-hidden={true} />
        <span className={styles.action__label}>Comentar</span>
      </button>

      <button className={styles.action} onClick={onShare} aria-label="Compartilhar">
        <Icon icon={ShareNetwork} size="md" weight="regular" aria-hidden={true} />
        <span className={styles.action__label}>Compartilhar</span>
      </button>
    </footer>
  );
}
