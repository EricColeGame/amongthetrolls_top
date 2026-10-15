import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export default async function TermsOfServicePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <LegalPage title={t("termsTitle")}>
      <p>{t("termsP1")}</p>
      <p>{t("termsP2")}</p>
      <p>{t("termsP3")}</p>
    </LegalPage>
  );
}
