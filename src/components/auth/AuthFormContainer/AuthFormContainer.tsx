import { type ReactNode } from "react";
import styles from "./AuthFormContainer.module.css";

type AuthFormContainerProps = {
  children: ReactNode;
};

export function AuthFormContainer({ children }: AuthFormContainerProps) {
  return <main className={styles["auth-form-container"]}>{children}</main>;
}
