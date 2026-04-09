"use client";

import { useActionState, useState } from "react";
import { updatePassword } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { PasswordChecklist } from "@/src/components/auth/PasswordChecklist";
import { validatePassword } from "@/src/lib/validations";
import styles from "./page.module.css";

export default function NewPasswordPage() {
  const [state, formAction, isPending] = useActionState(updatePassword, null);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordValidation = validatePassword(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;
  const confirmError =
    confirmPassword.length > 0 && !passwordsMatch
      ? "As senhas nao coincidem"
      : undefined;

  const isFormValid = passwordValidation.valid && passwordsMatch;

  return (
    <main className={styles.password}>
      <h1 className={styles.password__title}>Nova senha</h1>
      <p className={styles.password__subtitle}>
        Crie uma nova senha para sua conta.
      </p>

      <form action={formAction} className={styles.password__form}>
        {state?.error && (
          <p className={styles.password__error}>{state.error}</p>
        )}

        <FormInput
          label="Nova senha"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={state?.fieldErrors?.password}
          placeholder="Crie uma nova senha"
          autoComplete="new-password"
        />

        {password.length > 0 && (
          <PasswordChecklist checks={passwordValidation.checks} />
        )}

        <FormInput
          label="Confirmar senha"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={confirmError}
          valid={passwordsMatch}
          placeholder="Repita a nova senha"
          autoComplete="new-password"
        />

        <div className={styles.password__submit}>
          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={!isFormValid}
          >
            Redefinir senha
          </Button>
        </div>
      </form>
    </main>
  );
}
