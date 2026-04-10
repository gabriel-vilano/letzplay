"use client";

import { Suspense, useActionState, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";
import { verifyOtp, resendOtp } from "@/app/(auth)/actions";
import { Icon } from "@/src/components/ui/Icon";
import { OtpInput } from "@/src/components/auth/OtpInput";
import { ResendTimer } from "@/src/components/auth/ResendTimer";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
import { useToast } from "@/src/components/ui/Toast";
import { OTP_LENGTH } from "@/src/lib/validations";
import styles from "./page.module.css";

export default function VerifyPage() {
  return (
    <Suspense>
      <VerifyContent />
    </Suspense>
  );
}

function VerifyContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();
  const email = searchParams.get("email") ?? "";

  useEffect(() => {
    if (!email) {
      router.replace("/signup");
    }
  }, [email, router]);

  const [state, formAction, isPending] = useActionState(verifyOtp, null);
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
      const result = await resendOtp(null, formData);
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

  const showServerError = Boolean(state?.error);
  const showFieldError = Boolean(state?.fieldErrors?.otp);

  return (
    <main className={styles.verify}>
      <Link href="/signup" className={styles.verify__back}>
        <Icon icon={CaretLeft} size="sm" />
        Voltar
      </Link>

      <div className={styles.verify__header}>
        <h1 className={styles.verify__title}>Verifique seu email</h1>
        <p className={styles.verify__subtitle}>
          Enviamos um codigo de {OTP_LENGTH} digitos para{" "}
          <span className={styles.verify__email}>{email}</span>
        </p>
      </div>

      <form action={formAction} className={styles.verify__form}>
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="otp" value={otp} />

        <OtpInput
          value={otp}
          onChange={setOtp}
          error={showFieldError ? state!.fieldErrors!.otp : undefined}
          disabled={isPending}
        />

        {showServerError && (
          <Alert
            status="attention"
            title={state!.error!}
            description="Verifique o codigo recebido no email."
          />
        )}

        <Button type="submit" fullWidth loading={isPending}>
          Verificar
        </Button>
      </form>

      <div className={styles.verify__resend}>
        <ResendTimer onResend={handleResend} loading={resendLoading} />
      </div>

      <p className={styles.verify__hint}>
        Nao recebeu? Verifique sua pasta de spam.
      </p>
    </main>
  );
}
