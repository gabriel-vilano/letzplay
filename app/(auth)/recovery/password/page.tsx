"use client";

import { useActionState, useState } from "react";
import { updatePassword } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
import styles from "./page.module.css";

export default function NewPasswordPage() {
  const [state, formAction, isPending] = useActionState(updatePassword, null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [touched, setTouched] = useState({
    password: false,
    confirmPassword: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const passwordError = (() => {
    if (!password) return "Senha e obrigatoria";
    if (password.length < 8) return "Senha deve ter pelo menos 8 caracteres";
    if (!/[a-zA-Z]/.test(password))
      return "Senha deve conter pelo menos uma letra";
    if (!/[0-9]/.test(password))
      return "Senha deve conter pelo menos um numero";
    return null;
  })();

  const confirmError = !confirmPassword
    ? "Confirmacao e obrigatoria"
    : confirmPassword !== password
      ? "As senhas nao coincidem"
      : null;

  const hasErrors = Boolean(passwordError || confirmError);

  const showPasswordError =
    touched.password || submitAttempted ? passwordError : null;
  const showConfirmError =
    touched.confirmPassword || submitAttempted ? confirmError : null;

  function handleSubmit(formData: FormData) {
    setSubmitAttempted(true);
    if (hasErrors) return;
    formAction(formData);
  }

  const showServerError = Boolean(state?.error);

  return (
    <main className={styles.password}>
      <div className={styles.password__header}>
        <h1 className={styles.password__title}>Nova senha</h1>
        <p className={styles.password__subtitle}>Defina sua nova senha</p>
      </div>

      <form action={handleSubmit} className={styles.password__form}>
        <FormInput
          label="Nova senha"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          error={showPasswordError ?? undefined}
          placeholder="Crie uma nova senha"
          autoComplete="new-password"
        />

        <FormInput
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={() =>
            setTouched((prev) => ({ ...prev, confirmPassword: true }))
          }
          error={showConfirmError ?? undefined}
          placeholder="Repita a nova senha"
          autoComplete="new-password"
        />

        {showServerError && (
          <Alert
            status="attention"
            title={state!.error!}
            description="Tente novamente em alguns instantes."
          />
        )}

        <Button type="submit" fullWidth loading={isPending}>
          Redefinir senha
        </Button>
      </form>
    </main>
  );
}
