"use client";

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
            <svg className={styles.checklist__icon} viewBox="0 0 12 12" fill="none">
              {met ? (
                <path
                  d="M2 6.5L4.5 9L10 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <circle cx="6" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
              )}
            </svg>
            {label}
          </li>
        );
      })}
    </ul>
  );
}
