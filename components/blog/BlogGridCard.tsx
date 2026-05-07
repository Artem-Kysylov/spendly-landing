import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/mdx'
import { calculateReadingTime } from '@/lib/utils-reading-time'
import { CalendarIcon, ClockIcon } from 'lucide-react'

interface BlogGridCardProps {
  post: Post
}

export default function BlogGridCard({ post }: BlogGridCardProps) {
  const readingTime = calculateReadingTime(post.content)

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 hover:border-primary/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.frontmatter.coverImage ? (
          <Image
            src={post.frontmatter.coverImage}
            alt={post.frontmatter.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
            <div className="text-5xl font-bold text-primary/20">
              {post.frontmatter.title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-200">
          {post.frontmatter.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
          {post.frontmatter.description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="h-3 w-3" />
            <span>{readingTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
