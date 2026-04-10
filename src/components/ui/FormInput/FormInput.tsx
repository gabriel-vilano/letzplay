"use client";

import { useState, type ReactNode } from "react";
import { Check, X, Eye, EyeSlash } from "@phosphor-icons/react";
import { Icon } from "@/src/components/ui/Icon";
import styles from "./FormInput.module.css";

type FormInputProps = {
  label: string;
  labelTrailing?: ReactNode;
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
  labelTrailing,
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
      <div className={styles["form-input__label-row"]}>
        <label className={styles["form-input__label"]} htmlFor={name}>
          {label}
        </label>
        {labelTrailing}
      </div>

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
              <Icon icon={showPassword ? EyeSlash : Eye} size="sm" />
            </button>
          )}

          {showStatus && (
            valid && !error ? (
              <span className={styles["form-input__icon--valid"]}>
                <Icon icon={Check} size="sm" />
              </span>
            ) : error ? (
              <span className={styles["form-input__icon--error"]}>
                <Icon icon={X} size="sm" />
              </span>
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
