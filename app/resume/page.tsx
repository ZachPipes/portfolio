import resume from "@/data/resume.json";

export default function ResumePage() {
  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">{resume.name}</h1>
          <p className="mt-1 text-lg text-foreground/70">{resume.title}</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-foreground/60">
            <span>{resume.location}</span>
            <a href={`mailto:${resume.email}`} className="hover:text-foreground">
              {resume.email}
            </a>
            {resume.links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>

        <p className="mt-8 max-w-2xl text-foreground/80">{resume.summary}</p>

        <section className="mt-12 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
          <h2 className="text-sm font-semibold tracking-wide text-foreground/60 uppercase">
            Experience
          </h2>

          <div className="mt-6 space-y-8">
            {resume.experience.map((job) => (
              <div key={`${job.role}-${job.organization}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium">
                    {job.role} · {job.organization}
                  </h3>
                  <span className="text-sm text-foreground/60">
                    {job.start} — {job.end}
                  </span>
                </div>
                <p className="text-sm text-foreground/60">{job.location}</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80">
                  {job.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
          <h2 className="text-sm font-semibold tracking-wide text-foreground/60 uppercase">
            Education
          </h2>

          <div className="mt-6 space-y-6">
            {resume.education.map((edu) => (
              <div key={`${edu.school}-${edu.degree}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium">
                    {edu.degree} · {edu.school}
                  </h3>
                  <span className="text-sm text-foreground/60">
                    {edu.start} — {edu.end}
                  </span>
                </div>
                <p className="mt-1 text-sm text-foreground/80">{edu.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-black/[.08] pt-8 dark:border-white/[.145]">
          <h2 className="text-sm font-semibold tracking-wide text-foreground/60 uppercase">
            Skills
          </h2>

          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {resume.skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-foreground/60">
                  {group.category}
                </h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
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
