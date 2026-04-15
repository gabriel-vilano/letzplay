"use client";

import { useEffect } from "react";
import { clearPersistedForm } from "@/src/hooks/useFormPersist";

export function ClearSignupPersistence() {
  useEffect(() => {
    clearPersistedForm("signup-form");
  }, []);

  return null;
}
