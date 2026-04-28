import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/PageHero";
import clinicInterior from "@/assets/stock/clinic-interior.jpg";
import reception from "@/assets/stock/reception.jpg";
import dentistTeam from "@/assets/stock/dentist-team.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

const About = () => {
  const { t } = useLang();
  usePageMeta("about", "ArlanMed — стоматологическая клиника в Алматы. Создаём идеальные улыбки. Современное оборудование, опытные врачи, забота и комфорт.");
  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title.split(" ").slice(0, -1).join(" ")}
        italic={t.about.title.split(" ").slice(-1)[0]}
        subtitle={t.about.lead}
        image={clinicInterior}
      />

      {/* Mission narrative */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-secondary sticky top-28">
                <img src={reception} alt="ArlanMed reception" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">— {t.about.mission}</div>
              <p className="font-serif italic text-3xl md:text-5xl leading-[1.05] text-balance text-foreground">
                {t.about.lead}
              </p>
              <div className="mt-10 space-y-6 text-base md:text-lg text-foreground/75 max-w-xl">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container max-w-7xl">
          <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— Our values</div>
          <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[1] text-balance mb-12 max-w-3xl">
            Что для нас <span className="font-serif italic text-primary">важно</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {t.about.values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-[1.75rem] bg-card border border-border p-8"
              >
                <div className="font-serif italic text-5xl text-primary mb-4">0{i + 1}</div>
                <h3 className="text-2xl tracking-tight font-medium mb-2">{v.t}</h3>
                <p className="text-foreground/70 text-pretty">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / clinic image strip */}
      <section className="py-20 md:py-28">
        <div className="container max-w-7xl">
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            <div className="md:col-span-2 aspect-[16/10] rounded-[1.75rem] overflow-hidden bg-secondary">
              <img src={dentistTeam} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[1.75rem] bg-foreground text-background p-8 flex flex-col justify-between">
              <div className="text-[11px] uppercase tracking-widest opacity-60">2GIS Awards</div>
              <div>
                <div className="font-serif italic text-7xl leading-none text-primary-glow">2025</div>
                <div className="text-sm mt-3 opacity-80">Лучшая стоматология Алматы</div>
                <div className="text-xs mt-1 opacity-50">Номинант 2026</div>
              </div>
              <Link to="/contact" className="mt-6 group inline-flex items-center justify-between gap-2 rounded-full bg-primary text-primary-foreground pl-5 pr-2 py-2 text-sm font-medium">
                <span>{t.nav.book}</span>
                <span className="h-8 w-8 rounded-full bg-background text-foreground grid place-items-center group-hover:rotate-45 transition-transform">
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

export default About;
