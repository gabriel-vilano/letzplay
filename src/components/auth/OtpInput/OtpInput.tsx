"use client";

import { useRef, useEffect } from "react";
import styles from "./OtpInput.module.css";

type OtpInputProps = {
  value: string;
  onChange: (value: string) => void;
  error?: string;
  disabled?: boolean;
};

export function OtpInput({ value, onChange, error, disabled }: OtpInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const filtered = e.target.value.replace(/\D/g, "").slice(0, 6);
    onChange(filtered);
  }

  const fieldClasses = [
    styles.otp__field,
    error && styles["otp__field--error"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.otp}>
      <input
        ref={inputRef}
        type="text"
        inputMode="numeric"
        autoComplete="one-time-code"
        maxLength={6}
        pattern="[0-9]*"
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder="000000"
        className={fieldClasses}
      />
      {error && <span className={styles.otp__error}>{error}</span>}
    </div>
  );
}
