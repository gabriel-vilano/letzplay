"use client";

import { Suspense, useActionState, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";
import { verifyRecoveryOtp, resendRecoveryOtp } from "@/app/(auth)/actions";
import { Icon } from "@/src/components/ui/Icon";
import { OtpInput } from "@/src/components/auth/OtpInput";
import { ResendTimer } from "@/src/components/auth/ResendTimer";
import { Button } from "@/src/components/ui/Button";
import { useToast } from "@/src/components/ui/Toast";
import styles from "./page.module.css";

export default function RecoveryVerifyPage() {
  return (
    <Suspense>
      <RecoveryVerifyContent />
    </Suspense>
  );
}

function RecoveryVerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();
  const email = searchParams.get("email") ?? "";

  useEffect(() => {
    if (!email) {
      router.replace("/recovery");
    }
  }, [email, router]);

  const [state, formAction, isPending] = useActionState(verifyRecoveryOtp, null);
  const [resendLoading, setResendLoading] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (state?.error) {
      setOtp("");
    }
  }, [state?.error]);

  const handleResend = useCallback(async () => {
    setResendLoading(true);
    try {
      const formData = new FormData();
      formData.set("email", email);
      const result = await resendRecoveryOtp(null, formData);
      if (result?.success) {
        showToast("Codigo reenviado com sucesso", "success");
      } else if (result?.error) {
        showToast(result.error, "error");
      }
    } catch {
      showToast("Erro de conexao. Verifique sua internet.", "error");
    } finally {
      setResendLoading(false);
    }
  }, [email, showToast]);

  if (!email) return null;

  return (
    <main className={styles.verify}>
      <Link href="/recovery" className={styles.verify__back}>
        <Icon icon={CaretLeft} size="sm" />
        Voltar
      </Link>

      <h1 className={styles.verify__title}>Verificar codigo</h1>
      <p className={styles.verify__subtitle}>
        Enviamos um codigo de 6 digitos para{" "}
        <span className={styles.verify__email}>{email}</span>
      </p>

      {state?.error && (
        <p className={styles.verify__error}>{state.error}</p>
      )}

      <form action={formAction} className={styles.verify__form}>
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="otp" value={otp} />

        <OtpInput
          value={otp}
          onChange={setOtp}
          error={state?.fieldErrors?.otp}
          disabled={isPending}
        />

        <Button
          type="submit"
          fullWidth
          loading={isPending}
          disabled={otp.length !== 6}
        >
          Verificar
        </Button>
      </form>

      <ResendTimer onResend={handleResend} loading={resendLoading} />

      <p className={styles.verify__hint}>
        Nao recebeu? Verifique sua pasta de spam.
      </p>
    </main>
  );
}
