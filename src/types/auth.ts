export type AuthActionState = {
  error?: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    password?: string;
    otp?: string;
    username?: string;
  };
  success?: boolean;
} | null;
