import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <LegalPage title={t("aboutTitle")}>
      <p>{t("aboutP1")}</p>
      <p>{t("aboutP2")}</p>
    </LegalPage>
  );
}
