import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";

const baseTitles: Record<string, { ru: string; kz: string; en: string }> = {
  home: {
    ru: "ArlanMed — Семейная стоматология №1 в Алматы | 4 филиала",
    kz: "ArlanMed — Алматыдағы №1 отбасылық стоматология | 4 филиал",
    en: "ArlanMed — #1 Family Dental Clinic in Almaty | 4 Locations",
  },
  about: {
    ru: "О клинике ArlanMed — наша миссия и команда | Алматы",
    kz: "ArlanMed туралы — миссиямыз және командамыз | Алматы",
    en: "About ArlanMed — Our Mission & Team | Almaty",
  },
  services: {
    ru: "Услуги ArlanMed — имплантация, виниры, чистка | Алматы",
    kz: "ArlanMed қызметтері — имплантация, виниралар, тазалау | Алматы",
    en: "ArlanMed Services — Implants, Veneers, Cleaning | Almaty",
  },
  branches: {
    ru: "Филиалы ArlanMed в Алматы — 4 удобные локации",
    kz: "Алматыдағы ArlanMed филиалдары — 4 ыңғайлы локация",
    en: "ArlanMed Locations in Almaty — 4 Convenient Branches",
  },
  reviews: {
    ru: "Отзывы пациентов ArlanMed — 4.9★ на 2GIS | Алматы",
    kz: "ArlanMed пациенттерінің пікірлері — 2GIS-те 4.9★",
    en: "ArlanMed Patient Reviews — 4.9★ on 2GIS | Almaty",
  },
  contact: {
    ru: "Контакты и запись — ArlanMed Алматы | WhatsApp",
    kz: "Байланыс және жазылу — ArlanMed Алматы | WhatsApp",
    en: "Contact & Booking — ArlanMed Almaty | WhatsApp",
  },
};

export const usePageMeta = (key: keyof typeof baseTitles, description?: string) => {
  const { lang } = useLang();
  useEffect(() => {
    document.title = baseTitles[key][lang];
    if (description) {
      let el = document.querySelector('meta[name="description"]');
      if (!el) { el = document.createElement("meta"); el.setAttribute("name", "description"); document.head.appendChild(el); }
      el.setAttribute("content", description);
    }
  }, [key, lang, description]);
};
