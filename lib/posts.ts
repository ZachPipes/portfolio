import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDirectory = path.join(process.cwd(), "data", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export function getAllPosts(): PostMeta[] {
  const filenames = fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(
      path.join(postsDirectory, filename),
      "utf8",
    );
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPostBySlug(slug: string) {
  const fileContents = fs.readFileSync(
    path.join(postsDirectory, `${slug}.md`),
    "utf8",
  );
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    contentHtml: marked.parse(content) as string,
  };
}
