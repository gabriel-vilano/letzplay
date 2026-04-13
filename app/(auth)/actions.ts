"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/src/lib/supabase/server";
import { validateEmail, validatePassword, validateName, validateOtp, validateUsername } from "@/src/lib/validations";
import type { AuthActionState } from "@/src/types/auth";

export async function login(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string)?.trim() ?? "";
  const password = (formData.get("password") as string) ?? "";

  const emailResult = validateEmail(email);
  if (!emailResult.valid) {
    return { fieldErrors: { email: emailResult.error } };
  }
  if (!password) {
    return { fieldErrors: { password: "Senha é obrigatória" } };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "E-mail ou senha incorretos" };
  }

  redirect("/feed");
}

export async function signup(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const name = (formData.get("name") as string)?.trim() ?? "";
  const email = (formData.get("email") as string)?.trim() ?? "";
  const password = (formData.get("password") as string) ?? "";

  const nameResult = validateName(name);
  if (!nameResult.valid) {
    return { fieldErrors: { name: nameResult.error } };
  }

  const emailResult = validateEmail(email);
  if (!emailResult.valid) {
    return { fieldErrors: { email: emailResult.error } };
  }

  const passwordResult = validatePassword(password);
  if (!passwordResult.valid) {
    return { fieldErrors: { password: "Senha não atende os requisitos" } };
  }

  const supabase = await createClient();
  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name },
    },
  });

  if (signUpError) {
    const message = signUpError.message.toLowerCase();
    const alreadyExists =
      message.includes("already registered") ||
      message.includes("user already");

    if (alreadyExists) {
      // E-mail já cadastrado: disparamos um OTP fresco via signInWithOtp
      // para que o jogador (que provavelmente voltou do /signup/verify e
      // reenviou o form) continue o fluxo sem perceber diferença.
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: { shouldCreateUser: false },
      });
      if (otpError) {
        return { error: "Erro ao enviar código. Tente novamente." };
      }
    } else {
      return { error: "Erro ao criar conta. Tente novamente." };
    }
  }

  redirect(`/signup/verify?email=${encodeURIComponent(email)}`);
}

export async function verifyOtp(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string)?.trim() ?? "";
  const otp = (formData.get("otp") as string)?.trim() ?? "";

  const otpResult = validateOtp(otp);
  if (!otpResult.valid) {
    return { fieldErrors: { otp: otpResult.error } };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "email",
  });

  if (error) {
    if (error.message.toLowerCase().includes("expired")) {
      return { error: "Código expirado. Solicite um novo código." };
    }
    return { error: "Código inválido. Tente novamente." };
  }

  redirect("/signup/profile");
}

export async function resendOtp(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string)?.trim() ?? "";

  if (!email) {
    return { error: "E-mail não informado." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.resend({
    type: "signup",
    email,
  });

  if (error) {
    return { error: "Erro ao reenviar código. Tente novamente." };
  }

  return { success: true };
}

export async function requestRecovery(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string)?.trim() ?? "";

  const emailResult = validateEmail(email);
  if (!emailResult.valid) {
    return { fieldErrors: { email: emailResult.error } };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    return { error: "E-mail não encontrado." };
  }

  redirect(`/recovery/verify?email=${encodeURIComponent(email)}`);
}

export async function verifyRecoveryOtp(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string)?.trim() ?? "";
  const otp = (formData.get("otp") as string)?.trim() ?? "";

  const otpResult = validateOtp(otp);
  if (!otpResult.valid) {
    return { fieldErrors: { otp: otpResult.error } };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    email,
    token: otp,
    type: "recovery",
  });

  if (error) {
    if (error.message.toLowerCase().includes("expired")) {
      return { error: "Código expirado. Solicite um novo código." };
    }
    return { error: "Código inválido. Tente novamente." };
  }

  redirect("/recovery/password");
}

export async function resendRecoveryOtp(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const email = (formData.get("email") as string)?.trim() ?? "";

  if (!email) {
    return { error: "E-mail não informado." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    return { error: "Erro ao reenviar código. Tente novamente." };
  }

  return { success: true };
}

export async function updatePassword(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const password = (formData.get("password") as string) ?? "";
  const confirmPassword = (formData.get("confirmPassword") as string) ?? "";

  const passwordResult = validatePassword(password);
  if (!passwordResult.valid) {
    return { fieldErrors: { password: "Senha não atende os requisitos" } };
  }

  if (password !== confirmPassword) {
    return { error: "As senhas não coincidem." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    if (error.message.toLowerCase().includes("session")) {
      return { error: "Sessão expirada. Reinicie o processo de recuperação." };
    }
    return { error: "Erro ao atualizar senha. Tente novamente." };
  }

  await supabase.auth.signOut();
  redirect("/login?recovered=true");
}

export async function checkUsername(username: string): Promise<{
  available: boolean;
  error?: string;
}> {
  const validation = validateUsername(username);
  if (!validation.valid) {
    return { available: false, error: validation.error };
  }

  const supabase = await createClient();
  const { data } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", username)
    .limit(1)
    .single();

  return { available: !data };
}

export async function createProfile(
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> {
  const username = (formData.get("username") as string)?.trim() ?? "";
  const avatarFile = formData.get("avatar") as File | null;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Sessão expirada. Faça login novamente." };
  }

  const fullName =
    (user.user_metadata?.full_name as string) ?? "";

  if (username) {
    const usernameValidation = validateUsername(username);
    if (!usernameValidation.valid) {
      return { fieldErrors: { name: usernameValidation.error } };
    }

    const { available } = await checkUsername(username);
    if (!available) {
      return { error: "Username já está em uso." };
    }
  }

  let avatarUrl: string | null = null;

  if (avatarFile && avatarFile.size > 0) {
    const ext = avatarFile.name.split(".").pop() ?? "jpg";
    const path = `${user.id}/avatar.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(path, avatarFile, {
        upsert: true,
        contentType: avatarFile.type,
      });

    if (uploadError) {
      return { error: "Erro ao enviar foto. Tente novamente." };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("avatars").getPublicUrl(path);

    avatarUrl = publicUrl;
  }

  const { error: insertError } = await supabase.from("profiles").upsert({
    id: user.id,
    full_name: fullName,
    username: username || null,
    avatar_url: avatarUrl,
  });

  if (insertError) {
    if (insertError.message.includes("unique")) {
      return { error: "Username já está em uso." };
    }
    return { error: "Erro ao salvar perfil. Tente novamente." };
  }

  redirect("/feed");
}
