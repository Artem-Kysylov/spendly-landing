import { getAllPosts } from '@/lib/mdx'
import BlogCardClient from '@/components/blog/BlogCardClient'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'

interface BlogIndexPageProps {
  params: Promise<{
    locale: string
  }>
}

export async function generateMetadata({ params }: BlogIndexPageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  return {
    title: t('title'),
  }
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'blog' })

  const posts = getAllPosts(locale)

  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-foreground">{t('title')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCardClient key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </div>
  )
}
