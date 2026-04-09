"use client";

import { useActionState, useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { createProfile, checkUsername } from "@/app/(auth)/actions";
import { createClient } from "@/src/lib/supabase/client";
import { AvatarUpload } from "@/src/components/auth/AvatarUpload";
import { FormInput } from "@/src/components/ui/FormInput";
import { Button } from "@/src/components/ui/Button";
import { slugifyName, validateUsername } from "@/src/lib/validations";
import styles from "./page.module.css";

type UsernameStatus = "idle" | "checking" | "available" | "taken" | "invalid";

export default function ProfilePage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(createProfile, null);

  const [username, setUsername] = useState("");
  const [usernameStatus, setUsernameStatus] = useState<UsernameStatus>("idle");
  const [usernameError, setUsernameError] = useState<string | undefined>();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [initialized, setInitialized] = useState(false);

  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    async function loadUserName() {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      const fullName = (user.user_metadata?.full_name as string) ?? "";
      if (fullName) {
        const slug = slugifyName(fullName);
        setUsername(slug);
      }
      setInitialized(true);
    }
    loadUserName();
  }, [router]);

  const checkAvailability = useCallback(async (value: string) => {
    if (!value) {
      setUsernameStatus("idle");
      setUsernameError(undefined);
      return;
    }

    const validation = validateUsername(value);
    if (!validation.valid) {
      setUsernameStatus("invalid");
      setUsernameError(validation.error);
      return;
    }

    setUsernameStatus("checking");
    setUsernameError(undefined);

    const result = await checkUsername(value);

    if (result.available) {
      setUsernameStatus("available");
      setUsernameError(undefined);
    } else {
      setUsernameStatus("taken");
      setUsernameError(result.error ?? "Username ja esta em uso");
    }
  }, []);

  function handleUsernameChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.toLowerCase().replace(/[^a-z0-9._]/g, "");
    setUsername(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    if (!value) {
      setUsernameStatus("idle");
      setUsernameError(undefined);
      return;
    }

    const validation = validateUsername(value);
    if (!validation.valid) {
      setUsernameStatus("invalid");
      setUsernameError(validation.error);
      return;
    }

    setUsernameStatus("checking");
    setUsernameError(undefined);

    debounceRef.current = setTimeout(() => {
      checkAvailability(value);
    }, 500);
  }

  function handleSkip() {
    const formData = new FormData();
    formData.set("username", "");
    formAction(formData);
  }

  if (!initialized) {
    return (
      <main className={styles.profile__loading}>
        <div className={styles["profile__loading-spinner"]} />
        <p>Carregando...</p>
      </main>
    );
  }

  const canSubmit =
    !isPending &&
    usernameStatus !== "checking" &&
    usernameStatus !== "taken" &&
    usernameStatus !== "invalid";

  return (
    <main className={styles.profile}>
      <h1 className={styles.profile__title}>Seu perfil</h1>
      <p className={styles.profile__subtitle}>
        Adicione uma foto e um username para ser reconhecido por outros jogadores.
        Voce pode pular e fazer isso depois.
      </p>

      {state?.error && (
        <p className={styles.profile__error}>{state.error}</p>
      )}

      <form
        action={(formData) => {
          if (avatarFile) {
            formData.set("avatar", avatarFile);
          }
          formAction(formData);
        }}
        className={styles.profile__form}
      >
        <AvatarUpload onFileSelect={setAvatarFile} />

        <div>
          <FormInput
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            error={usernameError}
            valid={usernameStatus === "available"}
            placeholder="seu.username"
            autoComplete="username"
          />

          {usernameStatus === "checking" && (
            <p className={`${styles["profile__username-status"]} ${styles["profile__username-status--checking"]}`}>
              <span className={styles.profile__spinner} />
              Verificando disponibilidade...
            </p>
          )}
          {usernameStatus === "available" && (
            <p className={`${styles["profile__username-status"]} ${styles["profile__username-status--available"]}`}>
              Username disponivel
            </p>
          )}
          {usernameStatus === "taken" && (
            <p className={`${styles["profile__username-status"]} ${styles["profile__username-status--taken"]}`}>
              Username ja esta em uso
            </p>
          )}
        </div>

        <div className={styles.profile__submit}>
          <Button
            type="submit"
            fullWidth
            loading={isPending}
            disabled={!canSubmit}
          >
            Concluir
          </Button>
        </div>
      </form>

      <div className={styles.profile__skip}>
        <button
          type="button"
          className={styles["profile__skip-link"]}
          onClick={handleSkip}
          disabled={isPending}
        >
          Pular por enquanto
        </button>
      </div>
    </main>
  );
}
