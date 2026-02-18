import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
  locale: string
  title: string
}

export default function Breadcrumbs({ locale, title }: BreadcrumbsProps) {
  const t = useTranslations('blogPost')

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link 
        href={`/${locale}`}
        className="hover:text-primary transition-colors"
      >
        {t('home')}
      </Link>
      
      <ChevronRight className="w-4 h-4" />
      
      <Link 
        href={`/${locale}/blog`}
        className="hover:text-primary transition-colors"
      >
        {t('blog')}
      </Link>
      
      <ChevronRight className="w-4 h-4" />
      
      <span className="text-foreground font-medium truncate">
        {title}
      </span>
    </nav>
  )
}
