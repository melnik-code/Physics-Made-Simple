import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import { getSection, sections } from "@/lib/physicsContent";

export function generateStaticParams() {
  return sections.map((section) => ({ section: section.slug }));
}

export async function generateMetadata({ params }) {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) return {};

  const path = `/topics/${sectionSlug}`;

  return {
    title: `${section.title} — темы и повторение по разделу`,
    description: section.description,
    alternates: { canonical: path },
    openGraph: {
      title: section.title,
      description: section.description,
      url: path
    },
    keywords: [
      section.title.toLowerCase(),
      "физика школа",
      "повторение физики",
      "ЕГЭ физика",
      "ОГЭ физика"
    ]
  };
}

export default async function SectionPage({ params }) {
  const { section: sectionSlug } = await params;
  const section = getSection(sectionSlug);

  if (!section) notFound();

  return (
    <div className="page-shell" style={{ "--accent": section.accent }}>
      <Breadcrumbs items={[{ label: "Разделы", href: "/topics" }, { label: section.title }]} />
      <div className="page-intro">
        <p className="eyebrow">Раздел</p>
        <h1>{section.title}</h1>
        <p className="lead">{section.description}</p>
      </div>

      <Section compact>
        <div className="grid auto">
          {section.groups.map((group) => (
            <Card accent={section.accent} key={group.slug}>
              <h3>{group.title}</h3>
              <p className="muted">{group.description}</p>
              <ul className="list">
                {group.topics.slice(0, 5).map((topic) => (
                  <li key={topic.slug}>{topic.title}</li>
                ))}
              </ul>
              <div className="card-actions">
                <Button href={`/topics/${section.slug}/${group.slug}`} variant="secondary">
                  Перейти к темам
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        compact
        title="Темы удобно проходить подряд: язык описания, формулы, задачи; справочник формул рядом."
      >
        <div className="quiet-band">
          <div className="card-actions">
            <Button href="/formulas" variant="secondary">
              Открыть справочник формул
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
