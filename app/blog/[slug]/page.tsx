import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPostBySlug } from "@/lib/posts";
import { metaText, pageContainer } from "@/lib/styles";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="flex-1">
      <div className={pageContainer}>
        <Link href="/blog" className={`${metaText} hover:text-foreground`}>
          ← Back to blog
        </Link>

        <header className="mt-6">
          <h1 className="text-3xl font-semibold tracking-tight">{post.title}</h1>
          <p className={`mt-2 ${metaText}`}>{formatDate(post.date)}</p>
        </header>

        <div
          className="prose prose-neutral dark:prose-invert mt-10 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </main>
  );
}
