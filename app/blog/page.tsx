import Link from "next/link";
import { formatDate, getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        </header>

        <div className="mt-12 divide-y divide-black/[.08] dark:divide-white/[.145]">
          {posts.map((post) => (
            <article key={post.slug} className="py-8 first:pt-0">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h2 className="font-medium">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent"
                  >
                    {post.title}
                  </Link>
                </h2>
                <span className="text-sm text-foreground/60">{formatDate(post.date)}</span>
              </div>
              <p className="mt-2 text-sm text-foreground/80">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
