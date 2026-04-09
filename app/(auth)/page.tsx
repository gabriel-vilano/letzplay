import Link from "next/link";
import styles from "./page.module.css";

type WelcomePageProps = {
  searchParams: Promise<{ expired?: string }>;
};

export default async function WelcomePage({ searchParams }: WelcomePageProps) {
  const { expired } = await searchParams;

  return (
    <main className={styles.welcome}>
      <div className={styles.welcome__header}>
        <h1 className={styles.welcome__brand}>LetzPlay</h1>
        <p className={styles.welcome__tagline}>
          Rankings, torneios e comunidade de Beach Tennis
        </p>
      </div>

      {expired === "true" && (
        <p className={styles.welcome__expired}>
          Sua sessao expirou. Faca login novamente.
        </p>
      )}

      <div className={styles.welcome__actions}>
        <Link
          href="/login"
          className={`${styles.welcome__link} ${styles["welcome__link--primary"]}`}
        >
          Entrar
        </Link>
        <Link
          href="/signup"
          className={`${styles.welcome__link} ${styles["welcome__link--secondary"]}`}
        >
          Criar conta
        </Link>
      </div>
    </main>
  );
}
