import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { aboutCards } from "@/lib/physicsContent";

export const metadata = {
  title: "О проекте «Физика просто» — цель учебного пособия",
  description:
    "Зачем собран сайт по школьной физике: связка теории, формул и задач в одном проходе по темам для качественного повторения.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "О проекте Физика просто",
    description:
      "Методика: от определений к формулам и практике без лишнего шума — для учеников и подготовки к контрольным.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "О проекте" }]} />
      <div className="page-intro">
        <h1>О проекте</h1>
        <p className="lead">
          Эта страница нужна для защиты проекта: здесь кратко собраны цель, актуальность,
          гипотеза и вывод.
        </p>
      </div>

      <Section compact>
        <div className="grid two">
          {aboutCards.map((card) => (
            <Card accent="#2563eb" key={card.title}>
              <h3>{card.title}</h3>
              <p className="muted">{card.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
