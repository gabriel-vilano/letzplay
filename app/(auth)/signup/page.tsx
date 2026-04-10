"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { signup } from "@/app/(auth)/actions";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
import { validateName, validateEmail } from "@/src/lib/validations";
import { useFormPersist } from "@/src/hooks/useFormPersist";
import styles from "./page.module.css";

export default function SignupPage() {
  const [state, formAction, isPending] = useActionState(signup, null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [submitAttempted, setSubmitAttempted] = useState(false);

  useFormPersist(
    "signup-form",
    { name, email },
    { name: setName, email: setEmail }
  );

  const nameError = !name
    ? "Nome e obrigatorio"
    : !validateName(name).valid
      ? "Nome deve ter pelo menos 2 caracteres"
      : null;

  const emailError = !email
    ? "Email e obrigatorio"
    : !validateEmail(email).valid
      ? "Insira um email valido"
      : null;

  const passwordError = (() => {
    if (!password) return "Senha e obrigatoria";
    if (password.length < 8) return "Senha deve ter pelo menos 8 caracteres";
    if (!/[a-zA-Z]/.test(password))
      return "Senha deve conter pelo menos uma letra";
    if (!/[0-9]/.test(password))
      return "Senha deve conter pelo menos um numero";
    return null;
  })();

  const hasErrors = Boolean(nameError || emailError || passwordError);

  const showNameError =
    touched.name || submitAttempted ? nameError : null;
  const showEmailError =
    touched.email || submitAttempted ? emailError : null;
  const showPasswordError =
    touched.password || submitAttempted ? passwordError : null;

  function handleSubmit(formData: FormData) {
    setSubmitAttempted(true);
    if (hasErrors) return;
    formAction(formData);
  }

  const showServerError = Boolean(state?.error);

  return (
    <main className={styles.signup}>
      <div className={styles.signup__header}>
        <h1 className={styles.signup__title}>Criar conta</h1>
        <p className={styles.signup__subtitle}>
          Preencha seus dados para comecar
        </p>
      </div>

      <form action={handleSubmit} className={styles.signup__form}>
        <FormInput
          label="Nome"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          error={showNameError ?? undefined}
          placeholder="Seu nome completo"
          autoComplete="name"
        />

        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
          error={showEmailError ?? undefined}
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
          onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
          error={showPasswordError ?? undefined}
          placeholder="Crie uma senha"
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
          Criar conta
        </Button>
      </form>

      <p className={styles.signup__footer}>
        Ja tem uma conta?{" "}
        <Link href="/login" className={styles.signup__footer_link}>
          Entrar
        </Link>
      </p>
    </main>
  );
}
