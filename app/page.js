import Button from "@/components/Button";
import Card from "@/components/Card";
import StructuredData from "@/components/StructuredData";
import Section from "@/components/Section";
import TestBlock from "@/components/TestBlock";
import { getFaqPageJsonLd, getHomeWebPageJsonLd } from "@/lib/structuredData";
import { homeStats, homeTest, sections } from "@/lib/physicsContent";

export const metadata = {
  title: "Физика Просто — образовательная платформа по физике",
  description:
    "Физика Просто — образовательная платформа по физике: темы 7–11 классов, формулы, разбор задач и мини-тесты. Подготовка к ОГЭ и ЕГЭ онлайн.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Физика Просто — образовательная платформа по физике",
    description:
      "Темы, формулы, задачи и самопроверка по физике 7–11 классов. Подготовка к ОГЭ и ЕГЭ.",
    url: "/"
  }
};

const homeFaq = [
  {
    question: "Что такое «Физика Просто»?",
    answer:
      "«Физика Просто» — образовательная платформа по физике: темы школьной программы 7–11 классов, формулы, разборы и практика по задачам."
  },
  {
    question: "Для кого подходит платформа «Физика Просто»?",
    answer:
      "Для учеников 7–11 классов, а также для тех, кто повторяет физику перед контрольной, ОГЭ или ЕГЭ."
  },
  {
    question: "Как лучше учиться на платформе?",
    answer:
      "Выберите раздел, пройдите тему от понятий к формуле, затем решите пример и несколько задач, после чего проверьте себя мини‑тестом."
  },
  {
    question: "Есть ли на «Физика Просто» формулы по разделам?",
    answer:
      "Да, есть справочник формул с фильтром по разделам и ссылками на темы, где формулы объясняются и применяются."
  },
  {
    question: "Можно ли использовать материалы для подготовки к ОГЭ и ЕГЭ?",
    answer:
      "Да. Структура темы «теория → формулы → задачи → тест» помогает закреплять материал и повторять ключевые блоки перед экзаменом."
  }
];

export default function HomePage() {
  return (
    <>
      <StructuredData schema={getHomeWebPageJsonLd()} />
      <StructuredData schema={getFaqPageJsonLd({ urlPath: "/", questions: homeFaq })} />
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Школьная физика 7-11 классов</p>
            <h1>Физика Просто</h1>
            <p className="lead">
              Материал школьного курса собран по темам: от первых определений до задач, где
              формулы начинают работать по-настоящему.
            </p>
            <p className="muted">
              <strong>Физика Просто</strong> — это удобный маршрут по школьной программе. Если вы
              ищете «<strong>физика просто</strong>» или «<strong>платформа физика просто</strong>»,
              начните с разделов: в каждой теме есть теория, формулы, пример и практика.
            </p>
            <div className="hero-actions">
              <Button href="/topics">Перейти к разделам</Button>
              <Button href="/formulas" variant="ghost">
                Открыть формулы
              </Button>
            </div>
          </div>
          <div className="hero-stats" aria-label="Состав курса">
            {homeStats.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section title="Когда тема собрана целиком — понятие, формула и задача вместе — физику легче понять.">
        <div className="grid two">
          <Card accent="#6b7d90">
            <h3>Что обычно мешает</h3>
            <ul className="list">
              <li>Определение помнится отдельно, а в задаче уже не помогает.</li>
              <li>Формула есть, но непонятно, когда к ней обращаться.</li>
              <li>После чтения остается ощущение, что тема знакома, но не прожита.</li>
            </ul>
          </Card>
          <Card accent="#12805c">
            <h3>Что помогает понять тему</h3>
            <ul className="list">
              <li>Сначала становится ясна сама идея и язык темы.</li>
              <li>Потом формулы читаются как продолжение смысла.</li>
              <li>Задачи показывают, где знание уже рабочее.</li>
            </ul>
          </Card>
        </div>
      </Section>

      <Section title="Спокойный маршрут: раздел → тема → смысл формулы и задача как проверка.">
        <ol className="steps">
          <li>
            <div>
              <h3>Начать с раздела</h3>
              <p className="muted">Выберите часть курса, которую нужно вернуть в память.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Войти в тему</h3>
              <p className="muted">Разберите понятия, без которых формулы остаются механическими.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Связать идею с задачей</h3>
              <p className="muted">Посмотрите, как условие переводится в величины и вычисления.</p>
            </div>
          </li>
          <li>
            <div>
              <h3>Проверить, что смысл держится</h3>
              <p className="muted">Короткий тест помогает увидеть, где еще нужна пауза.</p>
            </div>
          </li>
        </ol>
      </Section>

      <Section title="Разделы физики: в каждой теме теория, формулы, пример и задачи.">
        <div className="grid auto">
          {sections.map((section) => (
            <Card accent={section.accent} key={section.slug}>
              <h3>{section.title}</h3>
              <p className="muted">{section.description}</p>
              <div className="card-actions">
                <Button href={`/topics/${section.slug}`} variant="secondary">
                  Смотреть раздел
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Быстрая подготовка: держаться опорных тем и короткой практики перед контрольной.">
        <div className="quiet-band">
          <p>
            Начните с тем, которые чаще всего связывают несколько задач: основы кинематики,
            скорость, равноускоренное движение, графики, теплопередача и закон Ома. После каждой
            темы решайте хотя бы одну короткую задачу без подсказки.
          </p>
          <div className="card-actions">
            <Button href="/exam" variant="secondary">
              Открыть повторение
            </Button>
          </div>
        </div>
      </Section>

      <Section title="Пара вопросов в начале проверят базовые идеи.">
        <TestBlock questions={homeTest} />
      </Section>

      <Section title="FAQ: ответы о платформе «Физика Просто»" compact>
        <div className="grid two align-start">
          {homeFaq.map((item) => (
            <Card accent="#6b7d90" key={item.question}>
              <h3>{item.question}</h3>
              <p className="muted">{item.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
