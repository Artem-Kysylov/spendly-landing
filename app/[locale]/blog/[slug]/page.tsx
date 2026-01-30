import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import MDXContent from "@/components/blog/MDXContent";

interface BlogPostPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ["en", "hi", "id", "ja", "ko", "pt", "ru", "zh"];
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

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug, locale);

  return (
    <article className="container mx-auto px-4 py-12 max-w-4xl">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.frontmatter.title}</h1>
        <time className="text-muted-foreground" dateTime={post.frontmatter.date}>
          {new Date(post.frontmatter.date).toLocaleDateString(locale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>

      <MDXContent source={post.content} />
    </article>
  );
}
