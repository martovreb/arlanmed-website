import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import portrait from "@/assets/stock/hero-patient.jpg";
import blob from "@/assets/blob-teal.jpg";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-12 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh -z-10" />

      <div className="container max-w-7xl">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-10 md:mb-14 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="hidden sm:block">— Almaty · ArlanMed Clinic</span>
          <span className="flex items-center gap-1.5">
            <Star className="h-3 w-3 fill-foreground text-foreground" />
            <span className="font-medium text-foreground">4.9</span>
            <span>· 880+ {t.nav.reviews.toLowerCase()}</span>
          </span>
        </div>

        {/* Editorial headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="text-[44px] sm:text-7xl md:text-8xl lg:text-[9.5rem] leading-[0.95] tracking-[-0.04em] font-medium text-balance"
        >
          {t.hero.title1}{" "}
          <span className="font-serif italic text-primary">{t.hero.title2}</span>
        </motion.h1>

        {/* Bento grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-3 md:gap-4">
          {/* Big portrait */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 md:col-span-7 lg:col-span-6 row-span-2 relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[520px] bg-secondary"
          >
            <img src={portrait} alt="ArlanMed patient" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 glass-dark text-background rounded-full px-3 py-1.5 text-[11px] uppercase tracking-widest">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" /> Live · открыто сейчас
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-background">
              <div className="font-serif italic text-2xl md:text-3xl leading-tight text-pretty">
                "С детства боялась стоматологов — здесь страх ушёл."
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest opacity-70">— Balausa T. · 2GIS verified</div>
            </div>
          </motion.div>

          {/* Subtitle / CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-5 lg:col-span-6 rounded-[2rem] bg-card border border-border p-6 md:p-8 flex flex-col justify-between min-h-[260px]"
          >
            <p className="text-base md:text-lg text-foreground/75 text-pretty max-w-md">{t.hero.subtitle}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="group inline-flex items-center justify-between gap-2 rounded-full bg-foreground text-background pl-5 pr-2 py-2 text-sm font-medium">
                <span>{t.hero.cta}</span>
                <span className="h-8 w-8 rounded-full bg-primary grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-border px-5 py-3 text-sm font-medium hover:bg-muted transition-colors">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </motion.div>

          {/* Stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="col-span-6 md:col-span-3 lg:col-span-3 rounded-[2rem] bg-foreground text-background p-6 flex flex-col justify-between min-h-[180px]"
          >
            <div className="text-[11px] uppercase tracking-widest opacity-60">{t.hero.stat3l}</div>
            <div>
              <div className="font-serif italic text-6xl">{t.hero.stat3}</div>
              <div className="text-xs opacity-70 mt-1">{t.hero.stat3sub}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-6 md:col-span-2 lg:col-span-3 rounded-[2rem] gradient-cta text-primary-foreground p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden"
          >
            <img src={blob} alt="" className="absolute -right-8 -bottom-8 w-40 h-40 object-cover mix-blend-screen opacity-50 animate-blob" />
            <div className="text-[11px] uppercase tracking-widest opacity-80 relative">2GIS Awards</div>
            <div className="relative">
              <div className="font-serif italic text-5xl leading-none">2025</div>
              <div className="text-xs opacity-90 mt-1">Лучшая стоматология</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
