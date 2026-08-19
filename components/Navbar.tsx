import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-background/80 backdrop-blur-sm dark:border-white/[.145]">
      <nav className="flex w-full items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Zach Pipes
        </Link>

        <ul className="flex items-center gap-8 text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
