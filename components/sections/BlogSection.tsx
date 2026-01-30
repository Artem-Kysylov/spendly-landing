import React from 'react'
import { getAllPosts } from '@/lib/mdx'
import BlogCardClient from '@/components/blog/BlogCardClient'

interface BlogSectionProps {
  locale: string
}

export default function BlogSection({ locale }: BlogSectionProps) {
  // Get latest 3 posts
  const posts = getAllPosts(locale).slice(0, 3)

  // Don't render if no posts
  if (posts.length === 0) {
    return null
  }

  return (
    <section className="mt-[120px]" id="blog">
      <div className="landing__container">
        <h2 className="text-[40px] font-semibold text-foreground text-center mb-[60px]">
          {locale === 'ru' ? 'Финансовые инсайты' : 
           locale === 'hi' ? 'वित्तीय अंतर्दृष्टि' :
           locale === 'id' ? 'Wawasan Keuangan' :
           locale === 'ja' ? '金融インサイト' :
           'Financial Insights'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCardClient key={post.slug} post={post} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}
