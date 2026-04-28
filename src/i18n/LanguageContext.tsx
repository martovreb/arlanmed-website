import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Lang } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof translations.ru };
const LanguageContext = createContext<Ctx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("arlanmed-lang") as Lang) : null;
    return saved && ["ru", "kz", "en"].includes(saved) ? saved : "ru";
  });

  useEffect(() => {
    localStorage.setItem("arlanmed-lang", lang);
    document.documentElement.lang = lang === "kz" ? "kk" : lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
