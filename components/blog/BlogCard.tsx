'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Post } from '@/lib/mdx'
import { calculateReadingTime } from '@/lib/utils-reading-time'
import { useTranslations } from 'next-intl'

interface BlogCardProps {
  post: Post
  locale: string
}

export default function BlogCard({ post, locale }: BlogCardProps) {
  const t = useTranslations('blog')
  const readingTime = calculateReadingTime(post.content)

  return (
    <Link 
      href={`/${locale}/blog/${post.slug}`}
      className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg dark:hover:bg-card/80 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Cover Image */}
      <div className="relative aspect-video overflow-hidden rounded-t-2xl">
        {post.frontmatter.coverImage ? (
          <Image
            src={post.frontmatter.coverImage}
            alt={post.frontmatter.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-primary/40">
              {post.frontmatter.title.charAt(0)}
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.frontmatter.title}
        </h3>
        
        <div className="text-sm text-muted-foreground">
          {readingTime} {t('minRead')}
        </div>
      </div>
    </Link>
  )
}
