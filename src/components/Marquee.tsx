import { useLang } from "@/i18n/LanguageContext";

export const Marquee = () => {
  const { t } = useLang();
  const items = [
    "✦ " + t.hero.badge,
    "✦ Чистка 10 000 ₸",
    "✦ Имплантация под ключ",
    "✦ Виниры голливудские",
    "✦ Детская стоматология",
    "✦ Принимаем ОСМС",
    "✦ Бесплатная консультация",
    "✦ Открыто до 24:00",
  ];
  const row = [...items, ...items];
  return (
    <section className="border-y border-border bg-foreground text-background py-4 overflow-hidden">
      <div className="flex marquee gap-10 whitespace-nowrap text-sm font-medium tracking-wide">
        {row.map((it, i) => (
          <span key={i} className="opacity-90">{it}</span>
        ))}
      </div>
    </section>
  );
};
