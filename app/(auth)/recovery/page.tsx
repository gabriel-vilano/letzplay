"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { requestRecovery } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { validateEmail } from "@/src/lib/validations";
import styles from "./page.module.css";

export default function RecoveryPage() {
  const [state, formAction, isPending] = useActionState(requestRecovery, null);
  const [email, setEmail] = useState("");

  const emailValidation = email ? validateEmail(email) : null;

  return (
    <main className={styles.recovery}>
      <Link href="/login" className={styles.recovery__back}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Voltar
      </Link>

      <h1 className={styles.recovery__title}>Recuperar senha</h1>
      <p className={styles.recovery__subtitle}>
        Informe seu email e enviaremos um codigo para redefinir sua senha.
      </p>

      <form action={formAction} className={styles.recovery__form}>
        {state?.error && (
          <p className={styles.recovery__error}>{state.error}</p>
        )}

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={state?.fieldErrors?.email}
          valid={emailValidation?.valid}
          placeholder="seu@email.com"
          autoComplete="email"
          inputMode="email"
        />

        <div className={styles.recovery__submit}>
          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={!emailValidation?.valid}
          >
            Enviar codigo
          </Button>
        </div>
      </form>
    </main>
  );
}
