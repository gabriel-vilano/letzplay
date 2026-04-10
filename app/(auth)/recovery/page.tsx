"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";
import { requestRecovery } from "@/app/(auth)/actions";
import { Icon } from "@/src/components/ui/Icon";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
import { validateEmail } from "@/src/lib/validations";
import styles from "./page.module.css";

export default function RecoveryPage() {
  const [state, formAction, isPending] = useActionState(requestRecovery, null);

  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const emailError = !email
    ? "Email e obrigatorio"
    : !validateEmail(email).valid
      ? "Insira um email valido"
      : null;

  const hasErrors = Boolean(emailError);
  const showEmailError = touched || submitAttempted ? emailError : null;

  function handleSubmit(formData: FormData) {
    setSubmitAttempted(true);
    if (hasErrors) return;
    formAction(formData);
  }

  const showServerError = Boolean(state?.error);

  return (
    <main className={styles.recovery}>
      <Link href="/login" className={styles.recovery__back}>
        <Icon icon={CaretLeft} size="sm" />
        Voltar
      </Link>

      <div className={styles.recovery__header}>
        <h1 className={styles.recovery__title}>Recuperar senha</h1>
        <p className={styles.recovery__subtitle}>
          Informe o email da sua conta
        </p>
      </div>

      <form action={handleSubmit} className={styles.recovery__form}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
          error={showEmailError ?? undefined}
          placeholder="seu@email.com"
          autoComplete="email"
          inputMode="email"
        />

        {showServerError && (
          <Alert
            status="attention"
            title={state!.error!}
            description="Verifique o email informado e tente novamente."
          />
        )}

        <Button type="submit" fullWidth loading={isPending}>
          Enviar codigo
        </Button>
      </form>

      <p className={styles.recovery__footer}>
        Lembrou sua senha?{" "}
        <Link href="/login" className={styles.recovery__footer_link}>
          Entrar
        </Link>
      </p>
    </main>
  );
}
