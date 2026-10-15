import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export default async function CopyrightPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <LegalPage title={t("copyrightTitle")}>
      <p>{t("copyrightP1")}</p>
      <p>{t("copyrightP2")}</p>
      <p>{t("copyrightP3")}</p>
    </LegalPage>
  );
}
