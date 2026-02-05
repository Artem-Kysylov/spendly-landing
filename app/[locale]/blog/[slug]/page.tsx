import { getPostBySlug, getAllPosts, extractHeadings } from "@/lib/mdx";
import { calculateReadingTime } from "@/lib/utils-reading-time";
import MDXContent from "@/components/blog/MDXContent";
import TableOfContents from "@/components/blog/TableOfContents";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import ShareButtons from "@/components/blog/ShareButtons";
import BlogImage from "@/components/blog/BlogImage";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ["en", "hi", "id", "ja", "ko", "ru", "uk"];
  const paths = [];

  for (const locale of locales) {
    try {
      const posts = getAllPosts(locale);
      for (const post of posts) {
        paths.push({
          locale,
          slug: post.slug,
        });
      }
    } catch (error) {
      continue;
    }
  }

  return paths;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'https://getspendly.net';
  const url = `${baseUrl}/${locale}/blog/${slug}`;
  
  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      url,
      type: 'article',
      publishedTime: post.frontmatter.date,
      images: post.frontmatter.coverImage ? [{
        url: post.frontmatter.coverImage,
        width: 1200,
        height: 630,
        alt: post.frontmatter.title,
      }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.coverImage ? [post.frontmatter.coverImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);
  const headings = extractHeadings(post.content);
  const readingTime = calculateReadingTime(post.content);
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    'https://getspendly.net';
  const url = `${baseUrl}/${locale}/blog/${slug}`;
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.frontmatter.title,
    description: post.frontmatter.description,
    image: post.frontmatter.coverImage,
    datePublished: post.frontmatter.date,
    dateModified: post.frontmatter.date,
    author: {
      '@type': 'Person',
      name: 'Spendly Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Spendly',
      logo: {
        '@type': 'ImageObject',
        url: 'https://getspendly.net/Spendly-logo.svg',
      },
    },
    url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-8">
          {/* Desktop ToC - sticky sidebar */}
          <div className="hidden lg:block">
            <TableOfContents headings={headings} />
          </div>
          
          {/* Main Content */}
          <div className="max-w-3xl">
            <Breadcrumbs locale={locale} title={post.frontmatter.title} />
            
            <article>
              <header className="mb-8">
                <h1 className="text-4xl font-bold mb-4 text-foreground">
                  {post.frontmatter.title}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <time 
                    dateTime={post.frontmatter.date}
                  >
                    {new Date(post.frontmatter.date).toLocaleDateString(locale, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>
                    {readingTime} min read
                  </span>
                </div>
              </header>

              {/* Mobile ToC - shown after header on mobile */}
              <div className="lg:hidden mb-8">
                <TableOfContents headings={headings} />
              </div>

              <MDXContent source={post.content} components={{ BlogImage }} />
              
              <ShareButtons 
                title={post.frontmatter.title} 
                url={url} 
              />
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
