import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Nosotros", id: "about" },
    { label: "Experiencias", id: "experiences" },
    { label: "Contacto", id: "order" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{
        borderBottom: isScrolled ? "1px solid transparent" : "none",
        borderImage: isScrolled
          ? "linear-gradient(90deg, transparent, rgba(61,138,95,0.18), transparent) 1"
          : "none",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
            <BrandLogo size="sm" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-sm font-sans font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded hover:bg-primary/10 transition-colors"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 animate-fade-in-up bg-background/95 backdrop-blur-lg"
            style={{
              borderTop: "1px solid transparent",
              borderImage: "linear-gradient(90deg, transparent, rgba(61,138,95,0.18), transparent) 1",
            }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left py-2.5 text-base font-sans font-medium uppercase tracking-[0.08em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
