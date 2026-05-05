import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { sections } from "@/lib/physicsContent";

export const metadata = {
  title: "Разделы школьной физики — механика, термодинамика, электричество, оптика, атом",
  description:
    "Курс по пяти блокам программы 7–11 класса: каждый раздел содержит темы с теорией, формулами и задачами для повторения к ОГЭ и ЕГЭ.",
  alternates: { canonical: "/topics" },
  openGraph: {
    title: "Разделы школьной физики онлайн",
    description:
      "Механика, термодинамика и тепло, постоянный ток, оптика, атомная физика — перейти к темам и формулам.",
    url: "/topics"
  }
};

export default function TopicsPage() {
  return (
    <div className="page-shell">
      <div className="page-intro">
        <h1>Разделы школьной физики</h1>
        <p className="lead">Выберите часть курса, которую хотите повторить.</p>
      </div>

      <Section compact>
        <div className="grid auto">
          {sections.map((section) => (
            <Card accent={section.accent} key={section.slug}>
              <h3>{section.title}</h3>
              <p className="muted">{section.description}</p>
              <ul className="list">
                {section.groups.map((group) => (
                  <li key={group.slug}>{group.title}</li>
                ))}
              </ul>
              <div className="card-actions">
                <Button href={`/topics/${section.slug}`} variant="secondary">
                  Смотреть раздел
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
