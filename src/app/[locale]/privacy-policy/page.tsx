import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <LegalPage title={t("privacyTitle")}>
      <p>{t("privacyP1")}</p>
      <p>{t("privacyP2")}</p>
      <p>{t("privacyP3")}</p>
    </LegalPage>
  );
}
