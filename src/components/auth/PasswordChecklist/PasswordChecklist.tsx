"use client";

import { Check, Circle } from "@phosphor-icons/react";
import { Icon } from "@/src/components/ui/Icon";
import type { PasswordChecks } from "@/src/lib/validations";
import styles from "./PasswordChecklist.module.css";

type PasswordChecklistProps = {
  checks: PasswordChecks;
};

const CRITERIA = [
  { key: "minLength" as const, label: "Pelo menos 8 caracteres" },
  { key: "hasLetter" as const, label: "Pelo menos 1 letra" },
  { key: "hasNumber" as const, label: "Pelo menos 1 numero" },
];

export function PasswordChecklist({ checks }: PasswordChecklistProps) {
  return (
    <ul className={styles.checklist}>
      {CRITERIA.map(({ key, label }) => {
        const met = checks[key];
        return (
          <li
            key={key}
            className={`${styles.checklist__item} ${met ? styles["checklist__item--met"] : ""}`}
          >
            <Icon icon={met ? Check : Circle} size="xs" weight={met ? "bold" : "regular"} />
            {label}
          </li>
        );
      })}
    </ul>
  );
}
