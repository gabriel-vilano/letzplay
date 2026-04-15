"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./ResendTimer.module.css";

type ResendTimerProps = {
  onResend: () => void;
  loading?: boolean;
};

const TIMER_SECONDS = 60;

export function ResendTimer({ onResend, loading }: ResendTimerProps) {
  const [countdown, setCountdown] = useState(TIMER_SECONDS);

  useEffect(() => {
    if (countdown <= 0) return;

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleResend = useCallback(() => {
    onResend();
    setCountdown(TIMER_SECONDS);
  }, [onResend]);

  const canResend = countdown <= 0 && !loading;

  return (
    <div className={styles.resend}>
      {canResend ? (
        <button
          type="button"
          className={styles.resend__button}
          onClick={handleResend}
        >
          Reenviar código
        </button>
      ) : (
        <span className={styles.resend__text}>
          Reenviar código em {countdown}s
        </span>
      )}
    </div>
  );
}
