"use client"

import * as React from "react"

interface Toast {
  id: string
  title?: string
  description?: string
}

interface ToastContextType {
  toasts: Toast[]
  toast: (props: Omit<Toast, "id">) => void
  dismiss: (id: string) => void
}

const ToastContext = React.createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const toast = React.useCallback(({ title, description }: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, title, description }

    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id))
    }, 5000)
  }, [])

  const dismiss = React.useCallback((id: string) => {
    setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toasts, toast, dismiss }}>
      {children}
      {toasts.length > 0 && (
        <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4">
          {toasts.map((t) => (
            <div
              key={t.id}
              className="bg-background border rounded-lg shadow-lg p-4 min-w-[300px] animate-in slide-in-from-right"
              onClick={() => dismiss(t.id)}
              role="alert"
            >
              {t.title && <h3 className="font-medium mb-1">{t.title}</h3>}
              {t.description && <p className="text-sm text-muted-foreground">{t.description}</p>}
            </div>
          ))}
        </div>
      )}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}

