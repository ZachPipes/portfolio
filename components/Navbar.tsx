import Link from "next/link";
import { textLink } from "@/lib/styles";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Résumé" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-background/80 backdrop-blur-sm dark:border-white/[.145]">
      <nav className="flex w-full items-center justify-between px-6 py-4 sm:px-10">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Zachery Pipes
        </Link>

        <ul className="flex items-center gap-10 text-xl">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={textLink}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
