import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Section from "@/components/Section";
import StructuredData from "@/components/StructuredData";
import MathText from "@/components/MathText";
import { getGroup, getSection, sections } from "@/lib/physicsContent";
import { getBreadcrumbListJsonLd } from "@/lib/breadcrumbsSchema";

export function generateStaticParams() {
  return sections.flatMap((section) =>
    section.groups.map((group) => ({
      section: section.slug,
      group: group.slug
    }))
  );
}

export async function generateMetadata({ params }) {
  const { section: sectionSlug, group: groupSlug } = await params;
  const section = getSection(sectionSlug);
  const group = getGroup(sectionSlug, groupSlug);

  if (!section || !group) return {};

  const path = `/topics/${sectionSlug}/${groupSlug}`;

  return {
    title: `${group.title} (${section.title}) — темы программы`,
    description: `${group.description} Раздел: ${section.title}.`,
    alternates: { canonical: path },
    openGraph: {
      title: `${group.title} — ${section.title}`,
      description: group.description,
      url: path
    },
    keywords: [
      group.title.toLowerCase(),
      section.title.toLowerCase(),
      "учебная тема физика",
      "школьный курс"
    ]
  };
}

export default async function GroupPage({ params }) {
  const { section: sectionSlug, group: groupSlug } = await params;
  const section = getSection(sectionSlug);
  const group = getGroup(sectionSlug, groupSlug);

  if (!section || !group) notFound();

  return (
    <div className="page-shell" style={{ "--accent": section.accent }}>
      <StructuredData
        schema={getBreadcrumbListJsonLd([
          { label: "Разделы", href: "/topics" },
          { label: section.title, href: `/topics/${section.slug}` },
          { label: group.title, href: `/topics/${section.slug}/${group.slug}` }
        ])}
      />
      <Breadcrumbs
        items={[
          { label: "Разделы", href: "/topics" },
          { label: section.title, href: `/topics/${section.slug}` },
          { label: group.title }
        ]}
      />
      <div className="page-intro">
        <p className="eyebrow">{section.title}</p>
        <h1>{group.title}</h1>
        <p className="lead">
          <MathText text={group.description} />
        </p>
      </div>

      <Section compact>
        <div className="grid three">
          {group.topics.map((topic, index) => (
            <Card accent={section.accent} key={topic.slug}>
              <span className="topic-label">Тема {index + 1}</span>
              <h3>{topic.title}</h3>
              <p className="muted">{topic.description}</p>
              <div className="card-actions">
                <Button href={`/topics/${section.slug}/${group.slug}/${topic.slug}`} variant="secondary">
                  Читать тему
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
