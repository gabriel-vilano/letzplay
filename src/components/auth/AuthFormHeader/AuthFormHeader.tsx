import { type ReactNode } from "react";
import styles from "./AuthFormHeader.module.css";

type AuthFormHeaderProps = {
  title: string;
  subtitle?: ReactNode;
  subtitleClassName?: string;
};

export function AuthFormHeader({
  title,
  subtitle,
  subtitleClassName,
}: AuthFormHeaderProps) {
  const subtitleClass = [styles["auth-form-header__subtitle"], subtitleClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["auth-form-header"]}>
      <h1 className={styles["auth-form-header__title"]}>{title}</h1>
      {subtitle && <p className={subtitleClass}>{subtitle}</p>}
    </div>
  );
}
