import { useLang } from "@/i18n/LanguageContext";
import { Lang } from "@/i18n/translations";
import { cn } from "@/lib/utils";

const langs: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "kz", label: "KZ" },
  { code: "en", label: "EN" },
];

export const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();
  return (
    <div className="inline-flex items-center rounded-full border border-border bg-background/60 p-0.5 text-[11px] font-medium tracking-wider">
      {langs.map((l) => (
        <button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={cn(
            "px-2.5 py-1 rounded-full transition-colors",
            lang === l.code ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
          )}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
};
