import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/arlanmed-logo.png";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on route change
  useEffect(() => { setOpen(false); }, [location.pathname]);

  const links = [
    { to: "/", label: t.nav.home, end: true },
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/branches", label: t.nav.branches },
    { to: "/reviews", label: t.nav.reviews },
    { to: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className={cn(
          "container max-w-6xl mx-auto transition-all duration-300 px-3 md:px-5",
          // Pill on desktop / when closed; rounded card when mobile menu open
          open ? "rounded-3xl glass shadow-soft py-2" : scrolled ? "rounded-full glass shadow-soft py-2" : "rounded-full py-2.5"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logo} alt="ArlanMed" className="h-12 w-12 md:h-14 md:w-14 rounded-2xl object-cover ring-1 ring-border bg-background p-1" />
            <div className="leading-none">
              <div className="font-semibold text-lg md:text-xl tracking-tight">ArlanMed</div>
              <div className="text-[10px] md:text-[11px] text-muted-foreground tracking-[0.2em] mt-1">CLINIC · ALMATY</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => cn(
                  "px-3 py-1.5 rounded-full transition-colors",
                  isActive ? "bg-foreground text-background" : "text-foreground/70 hover:text-foreground hover:bg-muted"
                )}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
              {t.nav.book}
            </Link>
            <button
              className="lg:hidden h-10 w-10 grid place-items-center rounded-full hover:bg-muted transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden mt-3 pt-3 border-t border-border/60 flex flex-col gap-1 pb-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                className={({ isActive }) => cn(
                  "px-4 py-3 rounded-2xl text-sm font-medium transition-colors",
                  isActive ? "bg-foreground text-background" : "text-foreground/80 hover:bg-muted"
                )}
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
              {t.nav.book}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};
