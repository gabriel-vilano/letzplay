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
          <Logo />
          <p className={styles["auth-layout__brand-tagline"]}>
            Rankings, torneios e comunidade de Beach Tennis
          </p>
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
