import resume from "@/data/resume.json";
import { DownloadIcon, GitHubMark, LinkedInMark } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import {
  bulletList,
  entryRow,
  iconLink,
  metaText,
  pageContainer,
  sectionDivider,
  textLink,
} from "@/lib/styles";

const linkIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Download: DownloadIcon,
  GitHub: GitHubMark,
  LinkedIn: LinkedInMark,
};

export default function ResumePage() {
  return (
    <main className="flex-1">
      <div className={pageContainer}>
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">{resume.name}</h1>
          <p className="mt-1 text-lg text-foreground/70">{resume.title}</p>

          <div className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 ${metaText}`}>
            <span>{resume.location}</span>
            <a href={`mailto:${resume.email}`} className={textLink}>
              {resume.email}
            </a>
          </div>

          <div className={`mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 ${metaText}`}>
            <a href="/Zachery_Pipes_Resume.pdf" download className={iconLink}>
              <DownloadIcon className="size-4" />
              Resume
            </a>
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
        </header>

        <p className="mt-8 max-w-2xl text-foreground/80">{resume.summary}</p>

        <section className={sectionDivider}>
          <SectionHeading>Projects</SectionHeading>

          <div className="mt-6 space-y-8">
            {resume.projects.map((project, i) => (
              <div key={`${project.name}-${i}`}>
                <div className={entryRow}>
                  <h3 className="font-medium">
                    <a href={project.link} className={textLink}>
                      {project.name}
                    </a>
                  </h3>
                  <span className={metaText}>
                    {project.start} — {project.end}
                  </span>
                </div>
                <p className={metaText}>
                  {project.languages_and_frameworks.join(", ")}
                </p>
                <ul className={bulletList}>
                  {project.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionDivider}>
          <SectionHeading>Experience</SectionHeading>

          <div className="mt-6 space-y-8">
            {resume.experience.map((job, i) => (
              <div key={`${job.role}-${job.organization}-${i}`}>
                <div className={entryRow}>
                  <h3 className="font-medium">
                    {job.role} · {job.organization}
                  </h3>
                  <span className={metaText}>
                    {job.start} — {job.end}
                  </span>
                </div>
                <p className={metaText}>{job.location}</p>
                <ul className={bulletList}>
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionDivider}>
          <SectionHeading>Education</SectionHeading>

          <div className="mt-6 space-y-6">
            {resume.education.map((edu, i) => (
              <div key={`${edu.school}-${edu.degree}-${i}`}>
                <div className={entryRow}>
                  <h3 className="font-medium">
                    {edu.degree} · {edu.school}
                  </h3>
                  <span className={metaText}>
                    {edu.start} — {edu.end}
                  </span>
                </div>
                <p className={metaText}>GPA: {edu.gpa}</p>
                <p className="mt-1 text-sm text-foreground/80">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionDivider}>
          <SectionHeading>Skills</SectionHeading>

          <div className="mt-6 grid gap-6.5 sm:grid-cols-4">
            {resume.skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-foreground/60">
                  {group.category}
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {group.items.map((item, i) => (
                    <li key={`${item}-${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
