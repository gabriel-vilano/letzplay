"use client";

import { Suspense, useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { login } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { validateEmail } from "@/src/lib/validations";
import styles from "./page.module.css";

export default function LoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}

function LoginContent() {
  const searchParams = useSearchParams();
  const recovered = searchParams.get("recovered") === "true";

  const [state, formAction, isPending] = useActionState(login, null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailValidation = email ? validateEmail(email) : null;
  const isFormValid = emailValidation?.valid && password.length > 0;

  return (
    <main className={styles.login}>
      <h1 className={styles.login__title}>Entrar</h1>

      <form action={formAction} className={styles.login__form}>
        {recovered && (
          <p className={styles.login__success}>
            Senha redefinida com sucesso. Faca login com sua nova senha.
          </p>
        )}

        {state?.error && (
          <p className={styles.login__error}>{state.error}</p>
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

        <FormInput
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={state?.fieldErrors?.password}
          placeholder="Sua senha"
          autoComplete="current-password"
        />

        <div className={styles.login__forgot}>
          <Link href="/recovery" className={styles["login__forgot-link"]}>
            Esqueceu sua senha?
          </Link>
        </div>

        <div className={styles.login__submit}>
          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={!isFormValid}
          >
            Entrar
          </Button>
        </div>
      </form>

      <div className={styles.login__footer}>
        <Link href="/signup" className={styles.login__link}>
          Criar conta
        </Link>
      </div>
    </main>
  );
}
