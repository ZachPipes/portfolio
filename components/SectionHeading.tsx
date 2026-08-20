export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground/60 uppercase">
      <span className="h-3 w-1 rounded-full bg-accent" />
      {children}
    </h2>
  );
}
