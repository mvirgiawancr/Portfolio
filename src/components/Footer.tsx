import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/mvirgiawancr", label: "GitHub" },
  { href: "https://t.me/mvirgiawancr", label: "Telegram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-2">mvirgiawancr</h3>
            <p className="text-background/70">Building digital experiences</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-background text-foreground font-semibold neo-border-thin neo-hover"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center">
          <p className="text-background/60">
            © {new Date().getFullYear()} Moch Virgiawan Caesar Ridollohi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
