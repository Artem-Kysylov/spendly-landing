'use client'

import { useLocale } from 'next-intl'

/**
 * Authentication-based redirect logic for CTA buttons
 * - If user is NOT logged in → Redirect to /{locale}/auth/signup
 * - If user is logged in → Redirect to /{locale}/paywall (or /{locale}/ai-assistant if PRO)
 */

// Get the current locale from the URL path
const getCurrentLocale = (): string => {
  if (typeof window === 'undefined') return 'en'
  
  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const locale = pathParts[0]
  
  // Check if the first path segment is a valid locale
  const validLocales = ['en', 'uk', 'ru', 'ja', 'ko', 'hi', 'id']
  return validLocales.includes(locale) ? locale : 'en'
}

// Main auth redirect with locale awareness
export const handleAuthRedirect = () => {
  // TODO: Add Supabase auth check here when authentication is implemented
  // const { data: { user } } = await supabase.auth.getUser()
  // const isPro = await checkProStatus(user)
  
  const locale = getCurrentLocale()
  
  // For now, always redirect to signup since no auth system is in place
  // Later: if (!user) -> signup, else if (!isPro) -> paywall, else -> ai-assistant
  if (typeof window !== 'undefined') {
    window.location.href = `https://app.getspendly.net/${locale}/auth/signup`
  }
}

// Create custom auth redirect with specific paths
export const createAuthRedirect = (
  signupPath: string = 'auth/signup', 
  loginPath: string = 'auth/login',
  paywallPath: string = 'paywall',
  dashboardPath: string = 'ai-assistant'
) => {
  return (type: 'signup' | 'login' | 'auth-flow' = 'auth-flow') => {
    const locale = getCurrentLocale()
    
    // TODO: Add Supabase auth check here for auth-flow type
    // if (type === 'auth-flow') {
    //   const { data: { user } } = await supabase.auth.getUser()
    //   const isPro = await checkProStatus(user)
    //   if (!user) {
    //     window.location.href = `/${locale}/${signupPath}`
    //   } else if (!isPro) {
    //     window.location.href = `/${locale}/${paywallPath}`
    //   } else {
    //     window.location.href = `/${locale}/${dashboardPath}`
    //   }
    // } else
    
    if (typeof window !== 'undefined') {
      if (type === 'login') {
        window.location.href = `https://app.getspendly.net/${locale}/${loginPath}`
      } else if (type === 'signup') {
        window.location.href = `https://app.getspendly.net/${locale}/${signupPath}`
      } else {
        // Default to signup for auth-flow until auth system is implemented
        window.location.href = `https://app.getspendly.net/${locale}/${signupPath}`
      }
    }
  }
}

// Specific handlers for different button types
export const handleLoginRedirect = () => {
  const locale = getCurrentLocale()
  if (typeof window !== 'undefined') {
    window.location.href = `https://app.getspendly.net/${locale}/auth/login`
  }
}
