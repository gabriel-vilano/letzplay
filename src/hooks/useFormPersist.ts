"use client";

import { useEffect, useRef } from "react";

type PersistedValues = Record<string, string>;
type Setters = Record<string, (value: string) => void>;

/**
 * Persiste valores de form no sessionStorage.
 * Hidrata ao montar, salva em cada mudança.
 * Nao persistir campos sensiveis (ex: senha) — basta omitir das chaves.
 */
export function useFormPersist(
  key: string,
  values: PersistedValues,
  setters: Setters
) {
  const hydrated = useRef(false);

  // Hidratar uma vez ao montar
  useEffect(() => {
    if (hydrated.current) return;
    hydrated.current = true;

    try {
      const raw = sessionStorage.getItem(key);
      if (!raw) return;
      const parsed = JSON.parse(raw) as PersistedValues;
      for (const field in parsed) {
        if (setters[field]) {
          setters[field](parsed[field]);
        }
      }
    } catch {
      // Ignora erros de parse ou acesso
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // Salvar em cada mudanca
  useEffect(() => {
    if (!hydrated.current) return;
    try {
      sessionStorage.setItem(key, JSON.stringify(values));
    } catch {
      // Ignora (ex: storage cheio ou indisponivel)
    }
  }, [key, values]);
}

export function clearPersistedForm(key: string) {
  try {
    sessionStorage.removeItem(key);
  } catch {
    // Ignora
  }
}
