import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { Services } from "@/components/Services";
import { Promo } from "@/components/Promo";
import tools from "@/assets/stock/tools.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

const ServicesPage = () => {
  const { t } = useLang();
  usePageMeta("services", "Все стоматологические услуги ArlanMed: терапия, имплантация, виниры, коронки, ортодонтия, детская стоматология, хирургия. Честные цены в Алматы.");
  return (
    <>
      <PageHero
        eyebrow={t.nav.services}
        title={t.services.title.split(" ")[0]}
        italic={t.services.title.split(" ").slice(1).join(" ")}
        subtitle={t.services.subtitle}
        image={tools}
      />
      <Services />
      <Promo />
    </>
  );
};

export default ServicesPage;
