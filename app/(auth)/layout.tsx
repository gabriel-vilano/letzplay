import Image from "next/image";
import { ToastProvider } from "@/src/components/ui/Toast";
import { Logo } from "@/src/components/icons/Logo";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["auth-layout"]}>
      <div className={styles["auth-layout__grid"]}>
        <aside className={styles["auth-layout__brand-panel"]}>
          <Image
            src="/brand/auth-hero.jpg"
            alt=""
            fill
            priority
            sizes="(min-width: 800px) 450px, 0px"
            className={styles["auth-layout__brand-panel-image"]}
          />
          <div className={styles["auth-layout__brand-panel-scrim"]} />
          <div className={styles["auth-layout__brand-panel-content"]}>
            <Logo />
            <p className={styles["auth-layout__brand-tagline"]}>
              Rankings, torneios e comunidade <br /> de Beach Tennis
            </p>
          </div>
        </aside>

        <div className={styles["auth-layout__content"]}>
          <div className={styles["auth-layout__mobile-logo"]}>
            <Logo />
          </div>
          <ToastProvider>{children}</ToastProvider>
        </div>
      </div>
    </div>
  );
}
