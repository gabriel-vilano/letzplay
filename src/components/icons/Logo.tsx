import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const classNames = [styles.logo, className].filter(Boolean).join(" ");

  return (
    <span className={classNames} aria-label="LetzPlay">
      LetzPlay
    </span>
  );
}
