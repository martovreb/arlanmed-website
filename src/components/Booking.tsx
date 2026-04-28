import { useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Instagram, MapPin, Clock } from "lucide-react";

const WHATSAPP_PHONE = "77475259349";

export const Booking = () => {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", service: "", branch: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = lang === "kz"
      ? [`Сәлеметсіз бе! Қабылдауға жазылғым келеді.`, `Аты: ${form.name}`, `Телефон: ${form.phone}`, `Қызмет: ${form.service}`, `Филиал: ${form.branch}`, form.message && `Хабарлама: ${form.message}`]
      : lang === "en"
      ? [`Hello! I'd like to book an appointment.`, `Name: ${form.name}`, `Phone: ${form.phone}`, `Service: ${form.service}`, `Branch: ${form.branch}`, form.message && `Message: ${form.message}`]
      : [`Здравствуйте! Хочу записаться на приём.`, `Имя: ${form.name}`, `Телефон: ${form.phone}`, `Услуга: ${form.service}`, `Филиал: ${form.branch}`, form.message && `Сообщение: ${form.message}`];
    const text = encodeURIComponent(lines.filter(Boolean).join("\n"));
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${text}`, "_blank");
  };

  const inputCls = "w-full bg-background border border-border rounded-2xl px-4 py-3 text-base text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors";

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left info card */}
          <div className="lg:col-span-5 rounded-[2rem] bg-card border border-border p-8 md:p-10 flex flex-col">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">— {t.nav.contact}</div>
            <h2 className="text-4xl md:text-5xl tracking-[-0.03em] font-medium leading-[1] text-balance">
              {t.booking.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="font-serif italic text-primary">{t.booking.title.split(" ").slice(-1)}</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground text-pretty max-w-md">{t.booking.subtitle}</p>

            <div className="mt-10 space-y-3 text-sm">
              <a href="tel:+77475259349" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <span className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="font-medium">+7 747 525 93 49</span>
              </a>
              <a href="https://www.instagram.com/arlan.med" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary transition-colors group">
                <span className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Instagram className="h-4 w-4" />
                </span>
                <span className="font-medium">@arlan.med</span>
              </a>
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center">
                  <MapPin className="h-4 w-4" />
                </span>
                Almaty · 4 {t.nav.branches.toLowerCase()}
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <span className="h-11 w-11 rounded-full bg-primary/10 text-primary grid place-items-center">
                  <Clock className="h-4 w-4" />
                </span>
                Пн–Сб · 09:00–24:00
              </div>
            </div>

            <div className="mt-auto pt-10 border-t border-border">
              <p className="font-serif italic text-2xl leading-snug text-pretty">
                "{t.footer.tagline}."
              </p>
            </div>
          </div>

          {/* Right form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-[2rem] bg-card border border-border p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input required placeholder={t.booking.name + " *"} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputCls} />
              <input required type="tel" placeholder={t.booking.phone + " *"} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputCls} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <input placeholder={t.booking.service} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputCls} />
              <input placeholder={t.booking.branch} value={form.branch} onChange={(e) => setForm({ ...form, branch: e.target.value })} className={inputCls} />
            </div>
            <textarea rows={3} placeholder={t.booking.message} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputCls + " resize-none"} />

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-muted-foreground max-w-sm">{t.booking.consent}</p>
              <button type="submit" className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm font-medium self-start whitespace-nowrap">
                <span>{t.booking.submit}</span>
                <span className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
