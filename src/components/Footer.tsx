import { Link } from "react-router-dom";
import { useLang } from "@/i18n/LanguageContext";
import logo from "@/assets/arlanmed-logo.png";

export const Footer = () => {
  const { t } = useLang();
  const navLinks = [
    { to: "/about", label: t.nav.about },
    { to: "/services", label: t.nav.services },
    { to: "/branches", label: t.nav.branches },
    { to: "/reviews", label: t.nav.reviews },
    { to: "/contact", label: t.nav.contact },
  ];
  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-7xl py-12 md:py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ArlanMed" className="h-10 w-10 rounded-full ring-1 ring-border" />
              <div>
                <div className="font-medium tracking-tight">ArlanMed Clinic</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Almaty · 4 branches</div>
              </div>
            </Link>
            <p className="font-serif italic text-2xl md:text-3xl leading-snug text-pretty max-w-md">
              {t.footer.tagline}.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">{t.nav.home}</div>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-foreground/80 hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-4">{t.footer.follow}</div>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.instagram.com/arlan.med" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-2">Instagram → @arlan.med</a></li>
              <li><a href="https://wa.me/77475259349" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-2">WhatsApp → +7 747 525 93 49</a></li>
              <li><a href="tel:+77475259349" className="hover:text-primary inline-flex items-center gap-2">Tel → +7 747 525 93 49</a></li>
              <li><a href="https://2gis.kz/almaty/search/ArlanMed" target="_blank" rel="noopener noreferrer" className="hover:text-primary inline-flex items-center gap-2">2GIS → ArlanMed</a></li>
            </ul>
          </div>
        </div>

        {/* giant wordmark */}
        <div aria-hidden className="select-none text-center font-serif italic leading-none text-[22vw] md:text-[16vw] tracking-[-0.04em] text-foreground/[0.08]">
          ArlanMed
        </div>

        <div className="pt-6 mt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} ТОО Arlan Med · {t.footer.rights}</div>
          <div>Almaty, Kazakhstan</div>
        </div>
      </div>
    </footer>
  );
};
