import { useLang } from "@/i18n/LanguageContext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export const Promo = () => {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] bg-foreground text-background p-8 md:p-14"
        >
          <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full gradient-cta opacity-50 blur-3xl animate-blob" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full gradient-warm opacity-30 blur-3xl" />

          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-[11px] uppercase tracking-widest mb-6">
                <Sparkles className="h-3 w-3" /> {t.promo.tag}
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1] font-medium text-balance max-w-2xl">
                {t.promo.title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="font-serif italic text-primary-glow">{t.promo.title.split(" ").slice(-1)}</span>
              </h2>
              <div className="mt-6 flex flex-wrap items-baseline gap-4">
                <div className="font-serif italic text-6xl md:text-7xl text-primary-glow">{t.promo.price}</div>
                <div className="text-base line-through opacity-50">{t.promo.old}</div>
              </div>
              <p className="mt-4 text-base md:text-lg opacity-80 max-w-xl text-pretty">{t.promo.desc}</p>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-background text-foreground pl-6 pr-2 py-2 text-sm font-medium self-end"
            >
              <span>{t.promo.cta}</span>
              <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
