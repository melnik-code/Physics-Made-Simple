import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { scientists } from "@/lib/physicsContent";
import StructuredData from "@/components/StructuredData";
import { getBreadcrumbListJsonLd } from "@/lib/breadcrumbsSchema";

export const metadata = {
  title: "Знаменитые физики и их вклад в школьный курс",
  description:
    "Кратко о Ньютоне, Эйнштейне, Максвелле, Фарадее, Кюри, Резерфорде и других: зачем эти имена появляются в учебнике и на экзамене.",
  alternates: { canonical: "/scientists" },
  openGraph: {
    title: "Учёные, с которых начинается школьная физика",
    description:
      "Исторический контекст вокруг ключевых открытий: от механики и поля до атомной модели.",
    url: "/scientists"
  }
};

export default function ScientistsPage() {
  return (
    <div className="page-shell">
      <StructuredData schema={getBreadcrumbListJsonLd([{ label: "Учёные", href: "/scientists" }])} />
      <Breadcrumbs items={[{ label: "Учёные" }]} />
      <div className="page-intro">
        <h1>Учёные</h1>
        <p className="lead">
          Короткие справки о людях, чьи идеи постоянно встречаются в школьном курсе.
        </p>
      </div>

      <Section compact>
        <div className="grid three">
          {scientists.map((scientist) => (
            <Card className="scientist-card" plain key={scientist.name}>
              <img className="scientist-image" src={scientist.image} alt={scientist.name} />
              <div className="scientist-body">
                <h3>{scientist.name}</h3>
                <span className="scientist-years">{scientist.years}</span>
                <p>{scientist.fact}</p>
                <p className="muted">{scientist.contribution}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
