"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Build Log", href: "/field-notes" },
  { name: "Research", href: "/research" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container-wide flex h-20 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            arus
          </span>
          <span className="text-xs font-medium tracking-wide text-muted-foreground">
            impact
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors",
                pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="https://calendar.app.google/zmKtCzL13ifEghob6"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </a>
          <a
            href="https://arus.io"
            className="px-3 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            arus.io →
          </a>
        </nav>

        {/* Mobile menu button - simplified for now */}
        <button className="md:hidden p-2 text-muted-foreground hover:text-foreground">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
}
