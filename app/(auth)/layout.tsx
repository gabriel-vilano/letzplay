import { ToastProvider } from "@/src/components/ui/Toast";
import styles from "./layout.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles["auth-layout"]}>
      <div className={styles["auth-layout__container"]}>
        <ToastProvider>{children}</ToastProvider>
      </div>
    </div>
  );
}
