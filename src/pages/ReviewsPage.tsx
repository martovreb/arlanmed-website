import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { Reviews } from "@/components/Reviews";
import smileWoman from "@/assets/stock/smile-woman.jpg";
import { usePageMeta } from "@/hooks/usePageMeta";

const ReviewsPage = () => {
  const { t } = useLang();
  usePageMeta("reviews", "Отзывы пациентов ArlanMed — рейтинг 4.9★ на 2GIS, 880+ реальных отзывов. Лучшая стоматология Алматы 2025.");
  return (
    <>
      <PageHero
        eyebrow={t.nav.reviews}
        title={t.reviews.title.split(" ").slice(0, -1).join(" ")}
        italic={t.reviews.title.split(" ").slice(-1)[0]}
        subtitle={t.reviews.subtitle}
        image={smileWoman}
      />
      <Reviews />
    </>
  );
};

export default ReviewsPage;
