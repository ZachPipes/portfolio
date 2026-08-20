// Shared Tailwind class strings, kept in one place so every page stays in sync.
// Change a value here and it updates everywhere it's used.

export const pageContainer = "mx-auto max-w-5xl px-6 py-16 sm:px-10";

export const textLink =
  "underline decoration-transparent underline-offset-4 transition-colors hover:decoration-accent";

export const iconLink = `inline-flex items-center gap-1.5 ${textLink}`;

export const sectionDivider =
  "mt-12 border-t border-black/8 pt-8 dark:border-white/[.145]";

export const metaText = "text-sm text-foreground/60";

export const entryRow = "flex flex-wrap items-baseline justify-between gap-x-4";

export const bulletList = "mt-2 list-disc space-y-1 pl-5 text-sm text-foreground/80";
