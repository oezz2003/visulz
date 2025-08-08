
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { FileText, Home, Briefcase, LayoutGrid, Users, Newspaper, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

export const navLinks = [
  { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
  { href: "/services", label: "Services", icon: <Briefcase className="h-5 w-5" /> },
  { href: "/portfolio", label: "Portfolio", icon: <LayoutGrid className="h-5 w-5" /> },
  { href: "/about", label: "About", icon: <Users className="h-5 w-5" /> },
  { href: "/blog", label: "Blog", icon: <Newspaper className="h-5 w-5" /> },
  { href: "/contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
];

export function Header() {
  const pathname = usePathname();

  const NavLink = ({ href, label, icon }: { href: string; label: string, icon: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent group",
          isActive ? "text-primary font-semibold" : "text-muted-foreground"
        )}
      >
        <span className={cn("transition-colors group-hover:text-accent", isActive ? "text-primary": "text-muted-foreground")}>{icon}</span>
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile: Top left theme toggle */}
        <div className="md:hidden">
            <ThemeToggle />
        </div>

        {/* Mobile: Centered Logo */}
        <div className="md:hidden">
            <Link href="/">
              <Logo />
            </Link>
        </div>
        
        {/* Spacer for mobile to push menu icon to the right */}
        <div className="md:hidden w-8"></div>


        {/* Desktop Layout */}
        <div className="hidden md:flex flex-1 items-center justify-between">
          {/* Left Nav */}
          <nav className="flex items-center gap-6">
            {navLinks.slice(0, 3).map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>

          {/* Centered Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/">
              <Logo />
            </Link>
          </div>

          {/* Right Nav & Actions */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navLinks.slice(3).map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button asChild className="font-semibold group">
                <Link href="/contact">
                  <FileText className="mr-2 h-5 w-5 transition-colors group-hover:text-accent"/>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
