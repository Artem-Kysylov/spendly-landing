import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

interface MDXContentProps {
  source: string;
  components?: MDXRemoteProps["components"];
}

export default function MDXContent({ source, components }: MDXContentProps) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <MDXRemote 
        source={source} 
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeSlug],
          },
        }}
      />
    </div>
  );
}
