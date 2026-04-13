import Image from "next/image";
import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  const classNames = [styles.logo, className].filter(Boolean).join(" ");

  return (
    <Image
      src="/brand/letzplay.png"
      alt="LetzPlay"
      width={208}
      height={56}
      priority
      className={classNames}
    />
  );
}
