import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbsProps {
  title: string
}

export default function Breadcrumbs({ title }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link href="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link href="/blog" className="hover:text-primary transition-colors">
        Blog
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground font-medium truncate">{title}</span>
    </nav>
  )
}
