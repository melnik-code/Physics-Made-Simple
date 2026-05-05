import Breadcrumbs from "@/components/Breadcrumbs";
import FormulaBrowser from "@/components/FormulaBrowser";
import Section from "@/components/Section";
import { allFormulas, sections } from "@/lib/physicsContent";

export const metadata = {
  title: "Справочник формул по физике для школьников с разбором тем",
  description:
    "Собраны ключевые формулы школьной физики: фильтр по разделу и переход к теме, где правило объясняется и применяется в задачах.",
  alternates: { canonical: "/formulas" },
  openGraph: {
    title: "Школьные формулы по физике по разделам",
    description:
      "Кинематика, закон Ома, тепловые процессы, законы Снеллиуса, ядро атома — формулы с привязкой к урокам.",
    url: "/formulas"
  }
};

export default function FormulasPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Формулы" }]} />
      <div className="page-intro">
        <h1>Формулы по разделам</h1>
        <p className="lead">
          Здесь собраны основные формулы школьного курса. Можно переключать разделы и открывать
          тему, где формула используется.
        </p>
      </div>

      <Section compact>
        <FormulaBrowser formulas={allFormulas} sections={sections} />
      </Section>
    </div>
  );
}
