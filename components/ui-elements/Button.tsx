import type { VariantProps } from "class-variance-authority"
import { Button as UIButton, buttonVariants } from "@/components/ui/button"
import Link from "next/link"

type ButtonVariant = VariantProps<typeof buttonVariants>["variant"]

import type { ButtonProps } from "@/types/types"

const Button = ({ text, className = '', onClick, type = 'button', disabled, isLoading, icon, variant, href }: ButtonProps) => {
  const normalizedVariant = ((variant === 'primary' ? 'default' : (variant ?? 'default')) as ButtonVariant)

  if (href) {
    const classes = buttonVariants({ variant: normalizedVariant, className })
    return (
      <Link href={href} className={classes}>
        {icon && <span className="mr-2 inline-flex">{icon}</span>}
        {text}
      </Link>
    )
  }

  return (
    <UIButton
      className={className}
      onClick={onClick}
      type={type}
      disabled={disabled}
      isLoading={isLoading}
      icon={icon}
      variant={normalizedVariant}
    >
      {text}
    </UIButton>
  )
}

export default Button