import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { examContent } from "@/lib/physicsContent";

export const metadata = {
  title: "Подготовка к контрольной и экзамену по физике — план повторения",
  description:
    "Этапы разбора перед ОГЭ, ЕГЭ и школьными работами: с чего начать, какие темы закрепить первыми и чем поддержать результат.",
  alternates: { canonical: "/exam" },
  openGraph: {
    title: "Как повторить физику перед экзаменом по шагам",
    description:
      "Порядок тем: кинематика, графики, тепло, закон Ома, оптика — с ссылками на материалы сайта.",
    url: "/exam"
  }
};

export default function ExamPage() {
  return (
    <div className="page-shell">
      <Breadcrumbs items={[{ label: "Подготовка к экзамену" }]} />
      <div className="page-intro">
        <h1>Подготовка к экзамену</h1>
        <p className="lead">{examContent.intro}</p>
      </div>

      <Section title="С чего начать повторение" compact>
        <Card accent="#2563eb">
          <ul className="list">
            {examContent.start.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section title="Что повторять сначала, а что потом" compact>
        <div className="grid three">
          {examContent.stages.map((stage) => (
            <Card accent="#12805c" key={stage.title}>
              <h3>{stage.title}</h3>
              <p className="muted">{stage.description}</p>
              <ul className="list">
                {stage.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Темы, к которым полезно вернуться за один вечер" compact>
        <div className="grid three">
          {examContent.eveningTopics.map((topic) => (
            <Card accent="#d97706" key={topic.href}>
              <h3>{topic.label}</h3>
              <div className="card-actions">
                <Link className="button secondary" href={topic.href}>
                  Открыть
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Как закрепить повторение" compact>
        <Card accent="#7c3aed">
          <ul className="list">
            {examContent.practice.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </Section>
    </div>
  );
}
