'use client'

/**
 * Cross-subdomain authentication redirect logic for CTA buttons
 * - If user is NOT authenticated → Redirect to https://app.getspendly.net/${locale}
 * - If user IS authenticated but NOT Pro → Redirect to https://app.getspendly.net/${locale}/paywall
 * - If user IS Pro → Redirect to https://app.getspendly.net/${locale}/ai-assistant
 */

// App base URL configuration
const APP_BASE_URL = 'https://app.getspendly.net'

// Get the current locale from the URL path
const getCurrentLocale = (): string => {
  if (typeof window === 'undefined') return 'en'
  
  const pathParts = window.location.pathname.split('/').filter(Boolean)
  const locale = pathParts[0]
  
  // Check if the first path segment is a valid locale
  const validLocales = ['en', 'uk', 'ru', 'ja', 'ko', 'hi', 'id']
  return validLocales.includes(locale) ? locale : 'en'
}

// Main auth redirect with cross-subdomain strategy
export const handleAuthRedirect = () => {
  // TODO: Add Supabase auth check here when authentication is implemented
  // const { data: { user } } = await supabase.auth.getUser()
  // const isPro = await checkProStatus(user)
  
  const locale = getCurrentLocale()
  
  // For now, always redirect to app base URL since no auth system is in place
  // Later implementation:
  // if (!user) -> `${APP_BASE_URL}/${locale}`
  // else if (!isPro) -> `${APP_BASE_URL}/${locale}/paywall`
  // else -> `${APP_BASE_URL}/${locale}/ai-assistant`
  
  if (typeof window !== 'undefined') {
    window.location.href = `${APP_BASE_URL}/${locale}`
  }
}

// Pricing CTA redirect - always leads to paywall with locale awareness
export const handlePricingRedirect = () => {
  const locale = getCurrentLocale()
  
  // Always redirect to paywall page with current locale
  // The app will handle authentication flow and redirect back to paywall:
  // - If user not registered -> registration -> paywall
  // - If user registered but not logged in -> login -> paywall  
  // - If user already logged in -> directly to paywall
  
  if (typeof window !== 'undefined') {
    const redirectTo = `/${locale}/paywall`
    const params = new URLSearchParams({ tab: 'signin', redirectTo })
    window.location.href = `${APP_BASE_URL}/${locale}?${params.toString()}`
  }
}

// Login redirect handler (points to app base URL)
export const handleLoginRedirect = () => {
  const locale = getCurrentLocale()
  if (typeof window !== 'undefined') {
    window.location.href = `${APP_BASE_URL}/${locale}`
  }
}

// Create custom auth redirect for future use
export const createAuthRedirect = (
  baseUrl: string = APP_BASE_URL,
  paywallPath: string = 'paywall',
  dashboardPath: string = 'ai-assistant'
) => {
  return (type: 'base' | 'paywall' | 'dashboard' = 'base') => {
    const locale = getCurrentLocale()
    
    if (typeof window !== 'undefined') {
      if (type === 'paywall') {
        window.location.href = `${baseUrl}/${locale}/${paywallPath}`
      } else if (type === 'dashboard') {
        window.location.href = `${baseUrl}/${locale}/${dashboardPath}`
      } else {
        // Default to base app URL
        window.location.href = `${baseUrl}/${locale}`
      }
    }
  }
}
