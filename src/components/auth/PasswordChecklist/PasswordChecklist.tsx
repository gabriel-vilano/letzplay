import { CheckCircleIcon, CircleIcon, XCircleIcon } from "@phosphor-icons/react";
import { Icon } from "@/src/components/ui/Icon";
import type { PasswordChecks } from "@/src/lib/validations";
import styles from "./PasswordChecklist.module.css";

type PasswordChecklistProps = {
  checks: PasswordChecks;
  submitted: boolean;
};

const RULES: { key: keyof PasswordChecks; label: string }[] = [
  { key: "minLength", label: "Mínimo 8 caracteres" },
  { key: "hasLetter", label: "Pelo menos uma letra" },
  { key: "hasNumber", label: "Pelo menos um número" },
];

export function PasswordChecklist({ checks, submitted }: PasswordChecklistProps) {
  return (
    <ul className={styles.checklist} aria-label="Requisitos de senha">
      {RULES.map(({ key, label }) => {
        const met = checks[key];
        const stateClass = met
          ? styles["checklist__item--met"]
          : submitted
            ? styles["checklist__item--error"]
            : styles["checklist__item--pending"];
        const icon = met ? CheckCircleIcon : submitted ? XCircleIcon : CircleIcon;
        const weight = met || submitted ? "fill" : "regular";
        const stateLabel = met ? "atendido" : submitted ? "erro" : "pendente";
        return (
          <li
            key={key}
            className={`${styles.checklist__item} ${stateClass}`}
            aria-label={`${label}: ${stateLabel}`}
          >
            <Icon icon={icon} size="sm" weight={weight} />
            <span aria-hidden="true">{label}</span>
          </li>
        );
      })}
    </ul>
  );
}
