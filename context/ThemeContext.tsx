"use client"

import React, { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from "react"

type Theme = "light" | "dark" | "system"

type ThemeContextValue = {
  theme: Theme
  resolvedTheme: "light" | "dark"
  setTheme: (next: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_KEY = "app-theme"

function subscribeSystemTheme(listener: () => void) {
  if (typeof window === "undefined") return () => {}
  const media = window.matchMedia("(prefers-color-scheme: dark)")
  media.addEventListener?.("change", listener)
  return () => media.removeEventListener?.("change", listener)
}

function getSystemIsDarkSnapshot() {
  if (typeof window === "undefined") return false
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
}

function getServerSnapshot() {
  return false
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
      if (stored === "light" || stored === "dark" || stored === "system") {
        return stored
      }
    }
    return "system"
  })

  const systemIsDark = useSyncExternalStore(subscribeSystemTheme, getSystemIsDarkSnapshot, getServerSnapshot)
  const resolvedTheme = theme === "system" ? (systemIsDark ? "dark" : "light") : theme

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", resolvedTheme === "dark")
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {}
  }, [theme, resolvedTheme])

  useEffect(() => {
    if (typeof document === "undefined") return
    if (theme !== "system") return
    document.documentElement.classList.toggle("dark", resolvedTheme === "dark")
  }, [theme, resolvedTheme])

  // Слушаем «внешние» обновления темы (например, из AuthContext) через custom event
  useEffect(() => {
    const handler = () => {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
      if (stored === "light" || stored === "dark" || stored === "system") {
        setThemeState(stored)
      }
    }
    window.addEventListener("theme-preference-updated", handler as EventListener)
    return () => window.removeEventListener("theme-preference-updated", handler as EventListener)
  }, [])


  const value = useMemo<ThemeContextValue>(() => ({
    theme,
    resolvedTheme,
    setTheme: (next: Theme) => {
      setThemeState(next)
    },
  }), [theme, resolvedTheme])

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider")
  return ctx
}
