import { Post } from '@/lib/mdx'
import BlogGridCard from './BlogGridCard'

interface BlogGridProps {
  posts: Post[]
}

export default function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
      {posts.map((post) => (
        <BlogGridCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
