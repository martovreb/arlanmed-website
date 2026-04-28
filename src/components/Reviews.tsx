import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export const Reviews = () => {
  const { t } = useLang();
  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— 03 / {t.nav.reviews}</div>
            <h2 className="text-5xl md:text-7xl tracking-[-0.03em] font-medium leading-[0.95] text-balance max-w-3xl">
              {t.reviews.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-serif italic text-primary">{t.reviews.title.split(" ").slice(-1)}</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 md:max-w-sm">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-foreground text-foreground" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{t.reviews.subtitle}</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {t.reviews.items.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="break-inside-avoid mb-4 rounded-[1.75rem] border border-border bg-card p-6"
            >
              <blockquote className="font-serif italic text-xl leading-snug text-pretty">
                "{r.t}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-foreground text-background grid place-items-center text-sm font-medium">
                  {r.n.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.n}</div>
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">2GIS · verified</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
