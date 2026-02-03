import Link from "next/link";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Field Notes", href: "/field-notes" },
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
              Trellis
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Supporting communities through research-driven insights and
              collaborative solutions.
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
              Get in touch to learn more about our work and how we can
              collaborate.
            </p>
            <a
              href="mailto:hello@trellis.org"
              className="inline-block mt-4 text-sm text-primary hover:underline"
            >
              hello@trellis.org
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trellis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
