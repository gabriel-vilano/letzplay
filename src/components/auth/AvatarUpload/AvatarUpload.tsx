"use client";

import { useState, useRef } from "react";
import { validateAvatar } from "@/src/lib/validations";
import styles from "./AvatarUpload.module.css";

type AvatarUploadProps = {
  onFileSelect: (file: File | null) => void;
};

export function AvatarUpload({ onFileSelect }: AvatarUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const validation = validateAvatar(file);
    if (!validation.valid) {
      setError(validation.error ?? null);
      onFileSelect(null);
      return;
    }

    setError(null);
    setPreview(URL.createObjectURL(file));
    onFileSelect(file);
  }

  const areaClasses = [
    styles.avatar__area,
    preview && styles["avatar__area--has-image"],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles.avatar}>
      <div
        className={areaClasses}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            inputRef.current?.click();
          }
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt="Preview da foto de perfil"
            className={styles.avatar__preview}
          />
        ) : (
          <CameraIcon />
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={handleChange}
          className={styles.avatar__input}
          tabIndex={-1}
        />
      </div>

      {error ? (
        <span className={styles.avatar__error}>{error}</span>
      ) : (
        <span className={styles.avatar__label}>
          {preview ? "Trocar foto" : "Adicionar foto"}
        </span>
      )}
    </div>
  );
}

function CameraIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="avatar__placeholder"
      style={{ color: "var(--color-foreground-disabled)" }}
    >
      <path
        d="M12 8L10.5 11H6C5.45 11 5 11.45 5 12V24C5 24.55 5.45 25 6 25H26C26.55 25 27 24.55 27 24V12C27 11.45 26.55 11 26 11H21.5L20 8H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="17.5" r="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
