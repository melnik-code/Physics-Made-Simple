import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import FormulaCard from "@/components/FormulaCard";
import Section from "@/components/Section";
import TaskCard from "@/components/TaskCard";
import TestBlock from "@/components/TestBlock";
import TopicNavigation from "@/components/TopicNavigation";
import StructuredData from "@/components/StructuredData";
import { getSiteUrl } from "@/lib/site";
import { getLearningResourceJsonLd } from "@/lib/structuredData";
import {
  getTopic,
  getTopicFormulas,
  getTopicNeighbors,
  sections
} from "@/lib/physicsContent";

export function generateStaticParams() {
  return sections.flatMap((section) =>
    section.groups.flatMap((group) =>
      group.topics.map((topic) => ({
        section: section.slug,
        group: group.slug,
        topic: topic.slug
      }))
    )
  );
}

export async function generateMetadata({ params }) {
  const { section, group, topic } = await params;
  const topicData = getTopic(section, group, topic);

  if (!topicData) return {};

  const path = `/topics/${section}/${group}/${topic}`;
  const desc =
    topicData.description.length >= 70
      ? topicData.description
      : `${topicData.description} Теория, формулы, пример, задачи и мини-тест — ${topicData.sectionTitle}, ${topicData.groupTitle}.`;

  return {
    title: topicData.title,
    description: desc,
    alternates: { canonical: path },
    openGraph: {
      title: topicData.title,
      description: desc,
      url: path,
      type: "article",
      locale: "ru_RU"
    },
    keywords: [
      topicData.title.toLowerCase(),
      topicData.groupTitle.toLowerCase(),
      topicData.sectionTitle.toLowerCase(),
      "физика задачи",
      "формулы физика"
    ]
  };
}

export default async function TopicPage({ params }) {
  const { section, group, topic } = await params;
  const topicData = getTopic(section, group, topic);

  if (!topicData) notFound();

  const formulas = getTopicFormulas(section, group, topic);
  const neighbors = getTopicNeighbors(section, group, topic);
  const topicUrl = `${getSiteUrl()}${topicData.href}`;

  return (
    <div className="page-shell" style={{ "--accent": topicData.accent }}>
      <StructuredData
        schema={getLearningResourceJsonLd({
          title: topicData.title,
          description: topicData.description,
          topicUrl
        })}
      />
      <Breadcrumbs
        items={[
          { label: "Разделы", href: "/topics" },
          { label: topicData.sectionTitle, href: `/topics/${topicData.sectionSlug}` },
          {
            label: topicData.groupTitle,
            href: `/topics/${topicData.sectionSlug}/${topicData.groupSlug}`
          },
          { label: topicData.title }
        ]}
      />

      <div className="page-intro">
        <p className="eyebrow">
          {topicData.sectionTitle} / {topicData.groupTitle}
        </p>
        <h1>{topicData.title}</h1>
        <p className="lead">{topicData.description}</p>
      </div>

      <Section
        title="Теория"
        accent={topicData.accent}
        compact
      >
        <div className="grid two">
          {topicData.theory.map((item) => (
            <Card accent={topicData.accent} key={item.title}>
              <h3>{item.title}</h3>
              <p className="muted">{item.text}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Формулы"
        accent={topicData.accent}
        compact
      >
        <div className="grid two">
          {formulas.map((formula) => (
            <FormulaCard formula={formula} key={formula.id} />
          ))}
        </div>
      </Section>

      <Section
        title="Пример"
        accent={topicData.accent}
        compact
      >
        <TaskCard task={topicData.example} accent={topicData.accent} />
      </Section>

      <Section
        title="Практика"
        accent={topicData.accent}
        compact
      >
        <div className="grid two task-grid">
          {topicData.practice.map((practiceTask) => (
            <TaskCard task={practiceTask} accent={topicData.accent} key={practiceTask.question} />
          ))}
        </div>
      </Section>

      <Section
        title="Мини-тест"
        accent={topicData.accent}
        compact
      >
        <TestBlock questions={topicData.test} />
      </Section>

      <Section
        title="Частые ошибки"
        accent={topicData.accent}
        compact
      >
        <Card accent={topicData.accent}>
          <ul className="list">
            {topicData.mistakes.map((mistake) => (
              <li key={mistake}>{mistake}</li>
            ))}
          </ul>
        </Card>
      </Section>

      <Section
        title="Дальше по разделу"
        accent={topicData.accent}
        compact
      >
        <TopicNavigation
          groupHref={`/topics/${topicData.sectionSlug}/${topicData.groupSlug}`}
          groupTitle={topicData.groupTitle}
          previous={neighbors.previous}
          next={neighbors.next}
        />
      </Section>
    </div>
  );
}
