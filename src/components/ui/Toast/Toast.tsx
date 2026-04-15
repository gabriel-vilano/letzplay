"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
} from "react";
import { XIcon } from "@phosphor-icons/react";
import { Icon } from "@/src/components/ui/Icon";
import styles from "./Toast.module.css";

type ToastType = "error" | "success" | "info";

type Toast = {
  id: number;
  message: string;
  type: ToastType;
  exiting: boolean;
};

type ToastOptions = {
  persistent?: boolean;
};

type ToastContextValue = {
  showToast: (
    message: string,
    type?: ToastType,
    options?: ToastOptions
  ) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast deve ser usado dentro de ToastProvider");
  }
  return ctx;
}

const TOAST_DURATION = 4000;
const EXIT_DURATION = 170;

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const dismissToast = useCallback((id: number) => {
    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, EXIT_DURATION);
  }, []);

  const showToast = useCallback(
    (message: string, type: ToastType = "info", options?: ToastOptions) => {
      const id = ++idRef.current;
      setToasts((prev) => [...prev, { id, message, type, exiting: false }]);

      if (!options?.persistent) {
        setTimeout(() => {
          dismissToast(id);
        }, TOAST_DURATION);
      }
    },
    [dismissToast]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.length > 0 && (
        <div className={styles["toast-container"]}>
          {toasts.map((toast) => (
            <div
              key={toast.id}
              className={`${styles.toast} ${styles[`toast--${toast.type}`]} ${
                toast.exiting ? styles["toast--exiting"] : ""
              }`}
              role="alert"
            >
              {toast.message}
              <button
                className={styles.toast__dismiss}
                onClick={() => dismissToast(toast.id)}
                aria-label="Fechar"
              >
                <Icon icon={XIcon} size="sm" />
              </button>
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}
