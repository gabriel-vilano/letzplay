"use client";

import { useState } from "react";
import styles from "./FormInput.module.css";

type FormInputProps = {
  label: string;
  name: string;
  type?: "text" | "email" | "password";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  error?: string;
  valid?: boolean;
  placeholder?: string;
  autoComplete?: string;
  inputMode?: "text" | "email" | "numeric";
  disabled?: boolean;
};

export function FormInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  onBlur,
  error,
  valid,
  placeholder,
  autoComplete,
  inputMode,
  disabled,
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  const fieldClasses = [
    styles["form-input__field"],
    error && styles["form-input__field--error"],
    valid && !error && styles["form-input__field--valid"],
  ]
    .filter(Boolean)
    .join(" ");

  const showStatus = value.length > 0 && (valid || error);

  return (
    <div className={styles["form-input"]}>
      <label className={styles["form-input__label"]} htmlFor={name}>
        {label}
      </label>

      <div className={styles["form-input__wrapper"]}>
        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          disabled={disabled}
          className={fieldClasses}
        />

        <span className={styles["form-input__trailing"]}>
          {isPassword && (
            <button
              type="button"
              className={styles["form-input__toggle"]}
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                <EyeOffIcon />
              ) : (
                <EyeIcon />
              )}
            </button>
          )}

          {showStatus && (
            valid && !error ? (
              <CheckIcon className={`${styles["form-input__icon"]} ${styles["form-input__icon--valid"]}`} />
            ) : error ? (
              <XIcon className={`${styles["form-input__icon"]} ${styles["form-input__icon--error"]}`} />
            ) : null
          )}
        </span>
      </div>

      {error && (
        <span className={styles["form-input__error"]}>{error}</span>
      )}
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 4C4.5 4 1.5 10 1.5 10C1.5 10 4.5 16 10 16C15.5 16 18.5 10 18.5 10C18.5 10 15.5 4 10 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3L17 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 4C4.5 4 1.5 10 1.5 10C1.5 10 3.5 13.5 7 15" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10 16C15.5 16 18.5 10 18.5 10C18.5 10 16.5 6.5 13 5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}
