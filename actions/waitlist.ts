'use server'

import { supabase } from '@/lib/supabase'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export type WaitlistResult =
  | { success: true }
  | { success: false; error: string; duplicate?: boolean }

export async function joinWaitlist(email: string): Promise<WaitlistResult> {
  const trimmed = email.trim().toLowerCase()

  if (!EMAIL_REGEX.test(trimmed)) {
    return { success: false, error: 'Please enter a valid email address.' }
  }

  const { error } = await supabase
    .from('waitlist')
    .insert({ email: trimmed })

  if (error) {
    if (error.code === '23505') {
      return {
        success: false,
        error: "You're already on the list! ✨",
        duplicate: true,
      }
    }
    return { success: false, error: 'Something went wrong. Please try again.' }
  }

  return { success: true }
}
