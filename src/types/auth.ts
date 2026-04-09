export type AuthActionState = {
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    password?: string;
    otp?: string;
  };
  success?: boolean;
} | null;
