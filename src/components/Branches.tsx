import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, MessageCircle, Map } from "lucide-react";

export const Branches = () => {
  const { t } = useLang();
  return (
    <section id="branches" className="py-20 md:py-28 bg-background">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— 02 / {t.nav.branches}</div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.03em] font-medium leading-[0.95] text-balance max-w-3xl">
              {t.branches.title.split(" ")[0]}{" "}
              <span className="font-serif italic text-primary">{t.branches.title.split(" ").slice(1).join(" ")}</span>
            </h2>
          </div>
          <p className="md:max-w-sm text-muted-foreground text-pretty">{t.branches.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {t.branches.list.map((b, i) => {
            const phoneClean = b.phone.replace(/[^+\d]/g, "");
            const mapsHref = `https://2gis.kz/almaty/search/${encodeURIComponent(b.addr)}`;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative rounded-[1.75rem] bg-card border border-border p-6 md:p-8 hover:border-primary/40 hover:shadow-lg transition-all flex flex-col"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-serif italic text-4xl text-primary leading-none">0{i + 1}</div>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground bg-muted rounded-full px-3 py-1">
                    {b.hours.split("·")[0].trim()}
                  </span>
                </div>

                <div className="mb-1 text-2xl md:text-3xl tracking-tight font-medium">{b.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-6">{b.area}</div>

                <div className="space-y-3 text-sm border-t border-border pt-5 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span className="text-foreground/80">{b.addr}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    <span className="text-foreground/80">{b.hours}</span>
                  </div>
                  <a
                    href={`tel:${phoneClean}`}
                    className="flex items-start gap-3 hover:text-primary transition-colors font-medium"
                  >
                    <Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    {b.phone}
                  </a>
                </div>

                <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-colors px-4 py-3 text-sm font-medium"
                  >
                    <Map className="h-4 w-4" />
                    <span>{t.branches.openMap}</span>
                  </a>
                  <a
                    href={`https://wa.me/${phoneClean.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white hover:bg-[#1ebe5a] transition-colors px-4 py-3 text-sm font-medium"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{t.branches.whatsapp}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
