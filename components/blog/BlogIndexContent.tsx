import { getAllPosts } from '@/lib/mdx'
import BlogGrid from '@/components/blog/BlogGrid'

export default function BlogIndexContent() {
  const posts = getAllPosts('en')

  return (
    <section className="mt-[60px] mb-[120px]" id="blog-index">
      <div className="landing__container">
        <div className="flex flex-col items-center gap-2 mb-[20px]">
          <h1 className="text-[40px] font-semibold text-foreground text-center">
            Financial Insights
          </h1>
          <p className="text-[14px] text-muted-foreground text-center max-w-3xl leading-relaxed">
            Discover expert financial insights, budgeting tips, and personal finance strategies
            to take control of your money and build lasting wealth.
          </p>
        </div>

        {posts.length > 0 ? (
          <BlogGrid posts={posts} />
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-[22px] font-semibold text-foreground mb-4">No articles yet</h2>
            <p className="text-[14px] text-muted-foreground">
              Check back soon for fresh financial insights and expert tips.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
