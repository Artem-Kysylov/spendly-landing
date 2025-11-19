'use client'

import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Switch } from '@/components/ui/switch'
import { useTheme } from '@/context/ThemeContext'
import { useTranslations } from 'next-intl'

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const handleToggle = (checked: boolean) => {
    const next = checked ? 'dark' : 'light'
    setTheme(next)
  }

  const t = useTranslations('common')
  return (
    <div className="flex items-center gap-2">
      {/* Sun icon for light theme */}
      <Sun 
        className={`size-4 transition-colors ${
          !isDark ? 'text-primary' : 'text-muted-foreground'
        }`} 
      />
      
      {/* Switch */}
      <Switch 
        checked={isDark} 
        onCheckedChange={handleToggle} 
        aria-label={t('themeToggle')}
        className="border border-primary bg-background"
        thumbClassName="bg-primary"
      />
      
      {/* Moon icon for dark theme */}
      <Moon 
        className={`size-4 transition-colors ${
          isDark ? 'text-primary' : 'text-muted-foreground'
        }`} 
      />
    </div>
  )
}

export default ThemeSwitcher