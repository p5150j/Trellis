import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = [
  { name: "About", href: "/about" },
  { name: "Field Notes", href: "/field-notes" },
  { name: "Research", href: "/research" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold">
              Trellis
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Supporting communities through research-driven insights and
              collaborative solutions.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Connect</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Get in touch to learn more about our work and how we can
              collaborate.
            </p>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Trellis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
