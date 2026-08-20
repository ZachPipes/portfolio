import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";
import { entryRow, metaText, pageContainer, textLink } from "@/lib/styles";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex-1">
      <div className={pageContainer}>
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        </header>

        <div className="mt-12 divide-y divide-black/[.08] dark:divide-white/[.145]">
          {posts.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0">
              <div className={entryRow}>
                <h2 className="font-medium">
                  <Link href={`/blog/${post.slug}`} className={textLink}>
                    {post.title}
                  </Link>
                </h2>
                <span className={metaText}>{formatDate(post.date)}</span>
              </div>
              <p className="mt-2 text-sm text-foreground/80">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-dashed border-black/15 p-8 text-center dark:border-white/20">
          <p className="text-sm font-medium text-foreground/70">More posts coming soon</p>
          <p className={`mt-1 ${metaText}`}>
            Check back later for new writing.
          </p>
        </div>
      </div>
    </main>
  );
}
