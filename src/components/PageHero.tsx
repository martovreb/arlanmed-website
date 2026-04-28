import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

export const PageHero = ({
  eyebrow,
  title,
  italic,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  subtitle?: string;
  image?: string;
}) => {
  const { t } = useLang();
  return (
    <section className="relative pt-32 md:pt-36 pb-12 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh -z-10" />
      <div className="container max-w-7xl">
        <nav className="flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">{t.nav.home}</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-foreground">{eyebrow}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— {eyebrow}</div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.035em] leading-[0.95] font-medium text-balance"
            >
              {title} {italic && <span className="font-serif italic text-primary">{italic}</span>}
            </motion.h1>
            {subtitle && (
              <p className="mt-6 md:mt-8 text-lg md:text-xl text-foreground/70 max-w-2xl text-pretty">{subtitle}</p>
            )}
          </div>
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}
              className="lg:col-span-4 aspect-[4/5] lg:aspect-[3/4] rounded-[2rem] overflow-hidden bg-secondary"
            >
              <img src={image} alt="" className="w-full h-full object-cover" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export const SectionCTA = ({ title, sub, href, label }: { title: string; sub?: string; href: string; label: string }) => (
  <section className="py-20 md:py-28">
    <div className="container max-w-7xl">
      <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full gradient-cta opacity-40 blur-3xl animate-blob" />
        <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-end">
          <div>
            <h3 className="text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-balance max-w-2xl">{title}</h3>
            {sub && <p className="mt-4 opacity-70 max-w-xl text-pretty">{sub}</p>}
          </div>
          <Link to={href} className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium self-start md:self-end whitespace-nowrap">
            <span>{label}</span>
            <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  </section>
);
