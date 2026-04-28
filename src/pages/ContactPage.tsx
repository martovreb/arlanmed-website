import { useLang } from "@/i18n/LanguageContext";
import { PageHero } from "@/components/PageHero";
import { Booking } from "@/components/Booking";
import { usePageMeta } from "@/hooks/usePageMeta";

const ContactPage = () => {
  const { t } = useLang();
  usePageMeta("contact", "Запишитесь в ArlanMed через WhatsApp или по телефону +7 747 525 93 49. Ответим в течение 15 минут.");
  return (
    <>
      <PageHero
        eyebrow={t.nav.contact}
        title={t.booking.title.split(" ").slice(0, -1).join(" ")}
        italic={t.booking.title.split(" ").slice(-1)[0]}
        subtitle={t.booking.subtitle}
      />
      <Booking />
    </>
  );
};

export default ContactPage;
