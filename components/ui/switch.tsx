"use client"

import * as React from "react"
import { cn } from "@/lib/utils"


type SwitchProps = {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  className?: string
  thumbClassName?: string
  ariaLabel?: string
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ checked = false, onCheckedChange, disabled, className, thumbClassName, ariaLabel }, ref) => {
    const handleClick = () => {
      if (disabled) return
      onCheckedChange?.(!checked)
    }

    return (
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={ariaLabel}
        disabled={disabled}
        ref={ref}
        onClick={handleClick}
        className={cn(
          "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border transition-colors px-0.5",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "bg-muted border-border",
          className
        )}
      >
        <span
          className={cn(
            "pointer-events-none block size-5 rounded-full bg-card shadow transition-transform",
            checked ? "translate-x-5" : "translate-x-0",
            thumbClassName
          )}
        />
      </button>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }