import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import Section from "@/components/Section";
import StructuredData from "@/components/StructuredData";
import { getContactPageJsonLd } from "@/lib/structuredData";

export const metadata = {
  title: "Контакты — Физика Просто",
  description:
    "Контакты проекта «Физика Просто»: связь по вопросам сотрудничества, ошибок в материалах и предложений по развитию платформы.",
  alternates: { canonical: "/contacts" },
  openGraph: {
    title: "Контакты — Физика Просто",
    description:
      "Связаться с проектом по вопросам материалов, сотрудничества и обратной связи.",
    url: "/contacts"
  }
};

export default function ContactsPage() {
  return (
    <div className="page-shell">
      <StructuredData schema={getContactPageJsonLd()} />
      <Breadcrumbs items={[{ label: "Контакты" }]} />
      <div className="page-intro">
        <h1>Контакты</h1>
        <p className="lead">
          Если вы нашли неточность, хотите предложить тему или обсудить сотрудничество — напишите.
        </p>
      </div>

      <Section title="Как связаться" compact>
        <div className="grid two">
          <Card accent="#2563eb">
            <h3>Почта</h3>
            <p className="muted">
              Укажите здесь рабочий email проекта (например,{" "}
              <span style={{ whiteSpace: "nowrap" }}>hello@physics-prosto.ru</span>).
            </p>
          </Card>
          <Card accent="#12805c">
            <h3>Предложения и ошибки</h3>
            <p className="muted">
              В сообщении можно приложить ссылку на страницу и коротко описать, что именно нужно
              исправить или улучшить.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

