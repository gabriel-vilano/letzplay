import { type ReactNode } from "react";
import styles from "./AuthFormHeader.module.css";

type AuthFormHeaderProps = {
  title: string;
  subtitle?: ReactNode;
};

export function AuthFormHeader({ title, subtitle }: AuthFormHeaderProps) {
  return (
    <div className={styles["auth-form-header"]}>
      <h1 className={styles["auth-form-header__title"]}>{title}</h1>
      {subtitle && (
        <p className={styles["auth-form-header__subtitle"]}>{subtitle}</p>
      )}
    </div>
  );
}
