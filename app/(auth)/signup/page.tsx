"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { signup } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { PasswordChecklist } from "@/src/components/auth/PasswordChecklist";
import {
  validateName,
  validateEmail,
  validatePassword,
} from "@/src/lib/validations";
import styles from "./page.module.css";

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signup, null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameValidation = name ? validateName(name) : null;
  const emailValidation = email ? validateEmail(email) : null;
  const passwordValidation = validatePassword(password);

  const isFormValid =
    nameValidation?.valid &&
    emailValidation?.valid &&
    passwordValidation.valid;

  return (
    <main className={styles.signup}>
      <h1 className={styles.signup__title}>Criar conta</h1>

      <form action={formAction} className={styles.signup__form}>
        {state?.error && (
          <p className={styles.signup__error}>{state.error}</p>
        )}

        <FormInput
          label="Nome"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={state?.fieldErrors?.name}
          valid={nameValidation?.valid}
          placeholder="Seu nome completo"
          autoComplete="name"
        />

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
          placeholder="Crie uma senha"
          autoComplete="new-password"
        />

        {password.length > 0 && (
          <PasswordChecklist checks={passwordValidation.checks} />
        )}

        <div className={styles.signup__submit}>
          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={!isFormValid}
          >
            Criar conta
          </Button>
        </div>
      </form>

      <div className={styles.signup__footer}>
        <p className={styles.signup__link}>
          Ja tem conta?{" "}
          <Link href="/login" className={styles["signup__link-accent"]}>
            Entrar
          </Link>
        </p>
      </div>
    </main>
  );
}
