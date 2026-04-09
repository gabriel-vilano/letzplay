const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OTP_REGEX = /^\d{6}$/;

export function validateName(name: string) {
  const trimmed = name.trim();
  if (trimmed.length < 2) {
    return { valid: false, error: "Nome precisa ter pelo menos 2 caracteres" };
  }
  return { valid: true };
}

export function validateEmail(email: string) {
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, error: "Email e obrigatorio" };
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return { valid: false, error: "Formato de email invalido" };
  }
  return { valid: true };
}

export type PasswordChecks = {
  minLength: boolean;
  hasLetter: boolean;
  hasNumber: boolean;
};

export function validatePassword(password: string): {
  valid: boolean;
  checks: PasswordChecks;
} {
  const checks: PasswordChecks = {
    minLength: password.length >= 8,
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };
  const valid = checks.minLength && checks.hasLetter && checks.hasNumber;
  return { valid, checks };
}

export function validateOtp(code: string) {
  if (!OTP_REGEX.test(code)) {
    return { valid: false, error: "Codigo precisa ter 6 digitos" };
  }
  return { valid: true };
}

const USERNAME_REGEX = /^[a-z0-9._]+$/;

export function validateUsername(username: string) {
  if (!username) {
    return { valid: true };
  }
  if (username.length < 3) {
    return { valid: false, error: "Username precisa ter pelo menos 3 caracteres" };
  }
  if (username.length > 20) {
    return { valid: false, error: "Username pode ter no maximo 20 caracteres" };
  }
  if (!USERNAME_REGEX.test(username)) {
    return { valid: false, error: "Apenas letras minusculas, numeros, pontos e underlines" };
  }
  return { valid: true };
}

export function slugifyName(name: string): string {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, ".")
    .replace(/[^a-z0-9._]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.+|\.+$/g, "")
    .slice(0, 20);
}

const ALLOWED_AVATAR_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_AVATAR_SIZE = 5 * 1024 * 1024;

export function validateAvatar(file: File) {
  if (!ALLOWED_AVATAR_TYPES.includes(file.type)) {
    return { valid: false, error: "Formato aceito: JPG, PNG ou WebP" };
  }
  if (file.size > MAX_AVATAR_SIZE) {
    return { valid: false, error: "Foto deve ter no maximo 5MB" };
  }
  return { valid: true };
}
