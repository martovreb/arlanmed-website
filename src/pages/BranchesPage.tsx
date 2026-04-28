import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { Branches } from "@/components/Branches";
import reception from "@/assets/stock/reception.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

const BranchesPage = () => {
  const { t } = useLang();
  usePageMeta("branches", "4 филиала ArlanMed в Алматы: Дарабоз, Хан Тенгри, Халиуллина, ЖК Комфорт. Адреса, телефоны, часы работы.");
  return (
    <>
      <PageHero
        eyebrow={t.nav.branches}
        title={t.branches.title.split(" ")[0]}
        italic={t.branches.title.split(" ").slice(1).join(" ")}
        subtitle={t.branches.subtitle}
        image={reception}
      />
      <Branches />
    </>
  );
};

export default BranchesPage;
