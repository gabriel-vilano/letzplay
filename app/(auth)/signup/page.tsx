"use client";

import { useActionState, useState } from "react";
import { signup } from "@/app/(auth)/actions";
import { AuthFormContainer } from "@/src/components/auth/AuthFormContainer";
import { AuthFormHeader } from "@/src/components/auth/AuthFormHeader";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
import { TextLink } from "@/src/components/ui/TextLink";
import { validateName, validateEmail, NAME_MAX_LENGTH } from "@/src/lib/validations";
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

  const nameError = (() => {
    if (!name) return "Nome e obrigatorio";
    if (name.trim().length < 2) return "Nome deve ter pelo menos 2 caracteres";
    if (name.trim().length > NAME_MAX_LENGTH)
      return `Nome deve ter no maximo ${NAME_MAX_LENGTH} caracteres`;
    return null;
  })();

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
    <AuthFormContainer>
      <AuthFormHeader
        title="Criar conta"
        subtitle="Preencha seus dados para comecar"
      />

      <form action={handleSubmit} className={styles.signup__form}>
        <FormInput
          label="Nome"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
          error={showNameError ?? undefined}
          placeholder="Seu nome e sobrenome"
          autoComplete="name"
          maxLength={NAME_MAX_LENGTH}
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
        <TextLink href="/login">Entrar</TextLink>
      </p>
    </AuthFormContainer>
  );
}
