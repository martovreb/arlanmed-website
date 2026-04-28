import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Sparkles, MapPin, Star, Stethoscope } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Promo } from "@/components/Promo";
import clinicInterior from "@/assets/stock/clinic-interior.jpg";
import dentistTeam from "@/assets/stock/dentist-team.jpg";
import smileWoman from "@/assets/stock/smile-woman.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

const Home = () => {
  const { t } = useLang();
  usePageMeta("home", "ArlanMed — лучшая стоматология Алматы 2025 по версии 2GIS Awards. 4 филиала, 4.9★, 880+ отзывов. Чистка зубов 10 000 ₸, имплантация, виниры, детская стоматология.");

  const teasers = [
    { to: "/about", icon: Sparkles, label: t.nav.about, title: t.about.title, sub: t.about.lead, img: clinicInterior, tone: "bg-card" },
    { to: "/services", icon: Stethoscope, label: t.nav.services, title: t.services.title, sub: t.services.subtitle, img: dentistTeam, tone: "bg-card" },
    { to: "/branches", icon: MapPin, label: t.nav.branches, title: t.branches.title, sub: t.branches.subtitle, img: clinicInterior, tone: "bg-card" },
    { to: "/reviews", icon: Star, label: t.nav.reviews, title: t.reviews.title, sub: t.reviews.subtitle, img: smileWoman, tone: "bg-card" },
  ];

  return (
    <>
      <Hero />
      <Marquee />

      {/* Explore teasers */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— {t.cta.discover}</div>
              <h2 className="text-5xl md:text-7xl tracking-[-0.03em] font-medium leading-[0.95] text-balance max-w-3xl">
                Узнайте <span className="font-serif italic text-primary">ArlanMed</span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {teasers.map((teaser, i) => (
              <motion.div
                key={teaser.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={teaser.to}
                  className={`group relative block rounded-[1.75rem] overflow-hidden border border-border ${teaser.tone} aspect-[4/3] md:aspect-[5/4]`}
                >
                  <img src={teaser.img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent" />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between text-background">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-1.5 glass-dark rounded-full px-3 py-1 text-[11px] uppercase tracking-widest">
                        <teaser.icon className="h-3 w-3" /> {teaser.label}
                      </span>
                      <span className="h-10 w-10 rounded-full bg-background text-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-medium tracking-[-0.02em] leading-tight mb-2">{teaser.title}</h3>
                      <p className="text-sm md:text-base opacity-85 max-w-md text-pretty line-clamp-2">{teaser.sub}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Promo />

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="rounded-[2rem] bg-foreground text-background p-10 md:p-16 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full gradient-cta opacity-40 blur-3xl animate-blob" />
            <div className="relative grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <div>
                <div className="text-[11px] uppercase tracking-widest opacity-60 mb-3">— {t.nav.book}</div>
                <h3 className="text-4xl md:text-6xl tracking-[-0.03em] leading-[1] font-medium text-balance max-w-2xl">
                  {t.booking.title.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="font-serif italic text-primary-glow">{t.booking.title.split(" ").slice(-1)}</span>
                </h3>
                <p className="mt-4 opacity-70 max-w-xl text-pretty">{t.booking.subtitle}</p>
              </div>
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium self-start md:self-end whitespace-nowrap">
                <span>{t.nav.book}</span>
                <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
