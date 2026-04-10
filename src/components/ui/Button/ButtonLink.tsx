import Link, { type LinkProps } from "next/link";
import { type ComponentProps, type ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonLinkProps = {
  variant?: "primary" | "secondary" | "ghost";
  fullWidth?: boolean;
  children: ReactNode;
} & LinkProps &
  Omit<ComponentProps<"a">, keyof LinkProps | "children">;

export function ButtonLink({
  variant = "primary",
  fullWidth = false,
  children,
  className,
  ...rest
}: ButtonLinkProps) {
  const classNames = [
    styles.btn,
    styles[`btn--${variant}`],
    fullWidth && styles["btn--full-width"],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link className={classNames} {...rest}>
      {children}
    </Link>
  );
}
