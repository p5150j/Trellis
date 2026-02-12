import Link from "next/link";

const footerLinks = [
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Build Log", href: "/field-notes" },
  { name: "Research", href: "/research" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container-wide py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              arus <span className="text-muted-foreground font-normal">impact</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI/ML infrastructure for nonprofits doing real impact work
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-4">
              Connect
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building something that matters? Let&apos;s talk about what AI/ML
              infrastructure could do for your org.
            </p>
            <a
              href="mailto:patrick.ortell@arus.io"
              className="inline-block mt-4 text-sm text-primary hover:underline"
            >
              patrick.ortell@arus.io
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} arus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
