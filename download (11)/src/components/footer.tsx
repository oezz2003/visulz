import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Logo />
            </Link>
            <p className="text-muted-foreground max-w-xs">
              We build digital futures from the ground up.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold text-foreground">Connect With Us</h3>
            <div className="flex gap-4 mt-4">
                <Button variant="outline" size="icon" asChild className="group">
                    <a href="#" aria-label="Instagram">
                        <Instagram className="h-5 w-5 group-hover:text-accent transition-colors"/>
                    </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="group">
                    <a href="#" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5 group-hover:text-accent transition-colors"/>
                    </a>
                </Button>
            </div>
            <div className="mt-4">
                <a href="mailto:hello@visualz.dev" className="text-muted-foreground hover:text-accent transition-colors">hello@visualz.dev</a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Visualz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
