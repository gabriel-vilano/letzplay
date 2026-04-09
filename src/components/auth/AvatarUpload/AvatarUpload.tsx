"use client";

import { useState, useRef } from "react";
import { Camera } from "@phosphor-icons/react";
import { Icon } from "@/src/components/ui/Icon";
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
          <span className={styles.avatar__placeholder}>
            <Icon icon={Camera} size="lg" />
          </span>
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
