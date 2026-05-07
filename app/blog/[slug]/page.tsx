import { getPostBySlug, getAllPosts, extractHeadings } from '@/lib/mdx'
import { calculateReadingTime } from '@/lib/utils-reading-time'
import MDXContent from '@/components/blog/MDXContent'
import TableOfContents from '@/components/blog/TableOfContents'
import Breadcrumbs from '@/components/blog/Breadcrumbs'
import ShareButtons from '@/components/blog/ShareButtons'
import BlogImage from '@/components/blog/BlogImage'
import ChatDemo from '@/components/blog/ChatDemo'
import type { Metadata } from 'next'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

function resolveSiteBaseUrl(): string {
  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'https://getspendly.net'
  )
}

export async function generateStaticParams() {
  const posts = getAllPosts('en')
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug, 'en')
  const baseUrl = resolveSiteBaseUrl()
  const url = `${baseUrl}/blog/${slug}`
  const coverImageUrl = post.frontmatter.coverImage
    ? new URL(post.frontmatter.coverImage, baseUrl).toString()
    : null

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      type: 'article',
      publishedTime: post.frontmatter.date,
      images: coverImageUrl
        ? [{ url: coverImageUrl, width: 1200, height: 630, alt: post.frontmatter.title }]
        : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: coverImageUrl ? [coverImageUrl] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug, 'en')
  const headings = extractHeadings(post.content)
  const readingTime = calculateReadingTime(post.content)
  const baseUrl = resolveSiteBaseUrl()
  const url = `${baseUrl}/blog/${slug}`
  const coverImageUrl = post.frontmatter.coverImage
    ? new URL(post.frontmatter.coverImage, baseUrl).toString()
    : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: coverImageUrl,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: { '@type': 'Person', name: 'Spendly Team' },
    publisher: {
      '@type': 'Organization',
      name: 'Spendly',
      logo: { '@type': 'ImageObject', url: 'https://getspendly.net/Spendly-logo.svg' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    url,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          <div className="hidden lg:block">
            <TableOfContents headings={headings} />
          </div>

          <div className="max-w-3xl">
            <Breadcrumbs title={post.frontmatter.title} />

            <article>
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  {post.frontmatter.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <time dateTime={post.frontmatter.date}>
                    {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                  <span>{readingTime} min read</span>
                </div>
              </header>

              <div className="lg:hidden mb-8">
                <TableOfContents headings={headings} />
              </div>

              <MDXContent source={post.content} components={{ BlogImage, ChatDemo }} />

              <ShareButtons title={post.frontmatter.title} url={url} />
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
