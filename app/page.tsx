import Link from "next/link";
import resume from "@/data/resume.json";
import { GitHubMark, LinkedInMark } from "@/components/icons";
import { iconLink, pageContainer, textLink } from "@/lib/styles";

const linkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  GitHub: GitHubMark,
  LinkedIn: LinkedInMark,
};

export default function Home() {
  return (
    <main className="flex-1">
      <div className={`flex min-h-[70vh] flex-col justify-center ${pageContainer}`}>
        <div className="flex items-center gap-2">
          <span className="h-3 w-1 rounded-full bg-accent" />
          <p className="text-sm font-medium tracking-wide text-foreground/60 uppercase">
            {resume.title}
          </p>
        </div>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          {resume.name}
        </h1>

        <p className="mt-6 max-w-xl text-lg text-foreground/70">
          {resume.summary ||
            '[A short one or two sentence introduction — add it to "summary" in data/resume.json.]'}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/resume" className={textLink}>
            View Resume
          </Link>
          <Link href="/blog" className={textLink}>
            Read the Blog
          </Link>
          {resume.links.map((link) => {
            const Icon = linkIcons[link.label];
            return (
              <a key={link.label} href={link.url} className={iconLink}>
                {Icon && <Icon className="size-4" />}
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </main>
  );
}
