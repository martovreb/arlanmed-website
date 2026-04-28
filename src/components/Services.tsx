import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const Services = () => {
  const { t } = useLang();
  // bento sizing pattern
  const sizes = [
    "md:col-span-5 md:row-span-2",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-3",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
    "md:col-span-4",
  ];
  const tones = [
    "bg-foreground text-background",
    "bg-card",
    "bg-primary text-primary-foreground",
    "bg-card",
    "bg-card",
    "bg-accent text-accent-foreground",
    "bg-card",
    "bg-card",
  ];
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— 01 / {t.nav.services}</div>
            <h2 className="text-5xl md:text-7xl tracking-[-0.03em] font-medium leading-[0.95] text-balance max-w-3xl">
              {t.services.title.split(" ")[0]} <span className="font-serif italic text-primary">{t.services.title.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-foreground/70 text-pretty">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[180px] gap-3 md:gap-4">
          {t.services.items.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className={`${sizes[i] || "md:col-span-4"}`}
            >
              <Link
                to="/contact"
                aria-label={`${t.nav.book}: ${s.t}`}
                className={`group relative h-full w-full rounded-[1.75rem] border border-border/60 p-6 flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow ${tones[i] || "bg-card"}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{s.icon}</span>
                  <span className="h-9 w-9 rounded-full border border-current/20 grid place-items-center opacity-60 group-hover:opacity-100 group-hover:rotate-45 transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl tracking-tight font-medium mb-1">{s.t}</h3>
                  <p className="text-sm opacity-75 text-pretty leading-relaxed line-clamp-3">{s.d}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
