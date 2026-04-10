"use client";

import { Suspense, useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { login } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
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
  const [recoveredDismissed, setRecoveredDismissed] = useState(false);

  const [state, formAction, isPending] = useActionState(login, null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const emailError = !email
    ? "Email e obrigatorio"
    : !validateEmail(email).valid
      ? "Insira um email valido"
      : null;
  const passwordError = !password ? "Senha e obrigatoria" : null;
  const hasErrors = Boolean(emailError || passwordError);

  const showEmailError =
    touched.email || submitAttempted ? emailError : null;
  const showPasswordError =
    touched.password || submitAttempted ? passwordError : null;

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    if (recovered && !recoveredDismissed) setRecoveredDismissed(true);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    if (recovered && !recoveredDismissed) setRecoveredDismissed(true);
  }

  function handleSubmit(formData: FormData) {
    setSubmitAttempted(true);
    if (hasErrors) return;
    formAction(formData);
  }

  const showRecovered = recovered && !recoveredDismissed;
  const showServerError = Boolean(state?.error);

  return (
    <main className={styles.login}>
      <div className={styles.login__header}>
        <h1 className={styles.login__title}>Bem-vindo de volta</h1>
        <p className={styles.login__subtitle}>
          Entre com seu email e senha
        </p>
      </div>

      <form action={handleSubmit} className={styles.login__form}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          error={showEmailError ?? undefined}
          placeholder="seu@email.com"
          autoComplete="email"
          inputMode="email"
        />

        <FormInput
          label="Senha"
          labelTrailing={
            <Link href="/recovery" className={styles.login__forgot}>
              Esqueceu sua senha?
            </Link>
          }
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          error={showPasswordError ?? undefined}
          placeholder="Sua senha"
          autoComplete="current-password"
        />

        {showRecovered && (
          <Alert
            status="success"
            title="Senha redefinida com sucesso"
            description="Faca login com sua nova senha."
          />
        )}

        {showServerError && (
          <Alert
            status="attention"
            title="Email ou senha incorretos"
            description="Verifique suas credenciais e tente novamente."
          />
        )}

        <Button type="submit" fullWidth loading={isPending}>
          Entrar
        </Button>
      </form>

      <p className={styles.login__footer}>
        Ainda nao tem conta?{" "}
        <Link href="/signup" className={styles.login__footer_link}>
          Criar conta
        </Link>
      </p>
    </main>
  );
}
