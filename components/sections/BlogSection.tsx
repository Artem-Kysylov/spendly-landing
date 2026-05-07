import { getAllPosts } from '@/lib/mdx'
import BlogCardClient from '@/components/blog/BlogCardClient'
import Button from '@/components/ui-elements/Button'
import { ArrowRightIcon } from 'lucide-react'

export default function BlogSection() {
  const posts = getAllPosts('en').slice(0, 3)

  if (posts.length === 0) return null

  return (
    <section className="mt-[120px]" id="blog">
      <div className="landing__container">
        <h2 className="text-[40px] font-bold text-foreground text-center mb-[50px] tracking-tight">
          Financial Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <BlogCardClient key={post.slug} post={post} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            text="View All Articles"
            href="/blog"
            variant="primary"
            className="text-base font-semibold px-8 py-4 h-auto"
            icon={<ArrowRightIcon className="h-4 w-4" />}
          />
        </div>
      </div>
    </section>
  )
}
