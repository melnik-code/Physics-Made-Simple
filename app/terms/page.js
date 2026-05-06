import Breadcrumbs from "@/components/Breadcrumbs";
import Section from "@/components/Section";
import TermBrowser from "@/components/TermBrowser";
import StructuredData from "@/components/StructuredData";
import { allTerms, sections } from "@/lib/physicsContent";
import { getBreadcrumbListJsonLd } from "@/lib/breadcrumbsSchema";

export const metadata = {
  title: "Термины по физике: краткий словарь по темам",
  description:
    "Короткие и понятные определения терминов школьной физики. Фильтр по разделам и переход к темам, где термины встречаются в теории.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Термины по физике по разделам",
    description:
      "Система отсчёта, перемещение, ускорение, внутренняя энергия, напряжение и другие термины — коротко и по делу.",
    url: "/terms"
  }
};

export default function TermsPage() {
  return (
    <div className="page-shell">
      <StructuredData schema={getBreadcrumbListJsonLd([{ label: "Термины", href: "/terms" }])} />
      <Breadcrumbs items={[{ label: "Термины" }]} />
      <div className="page-intro">
        <h1>Термины по разделам</h1>
        <p className="lead">
          Короткий словарь терминов. Выберите раздел и откройте тему, где термин объясняется и
          встречается в «Теории».
        </p>
      </div>

      <Section compact>
        <TermBrowser terms={allTerms} sections={sections} />
      </Section>
    </div>
  );
}

