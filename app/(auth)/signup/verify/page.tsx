"use client";

import { Suspense, useActionState, useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyOtp, resendOtp } from "@/app/(auth)/actions";
import { AuthFormContainer } from "@/src/components/auth/AuthFormContainer";
import { AuthFormHeader } from "@/src/components/auth/AuthFormHeader";
import { OtpInput } from "@/src/components/auth/OtpInput";
import { ResendTimer } from "@/src/components/auth/ResendTimer";
import { Button } from "@/src/components/ui/Button";
import { Alert } from "@/src/components/ui/Alert";
import { TextLink } from "@/src/components/ui/TextLink";
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

  // TEMPORARIO — forca o Toast de reenvio persistente para estilizacao.
  // Remover este useEffect (e o ref) apos validar a UI.
  const devToastShownRef = useRef(false);
  useEffect(() => {
    if (devToastShownRef.current) return;
    devToastShownRef.current = true;
    showToast("Codigo reenviado com sucesso", "success", { persistent: true });
  }, [showToast]);

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
    <AuthFormContainer>
      <AuthFormHeader
        title="Verifique seu email"
        subtitle={
          <>
            Enviamos um codigo de {OTP_LENGTH} digitos para{" "}
            <span className={styles.verify__email}>{email}</span>.{" "}
            <TextLink href="/signup">Alterar</TextLink>
          </>
        }
      />

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
    </AuthFormContainer>
  );
}
