import Button from "./Button";

export default function TopicNavigation({ groupHref, groupTitle, previous, next }) {
  return (
    <div className="topic-nav">
      <div className="topic-nav-zone">
        <span className="topic-nav-label">Назад к разделу</span>
        <span className="topic-nav-title">{groupTitle}</span>
        <Button href={groupHref} variant="secondary">
          Вверх к темам
        </Button>
      </div>
      {previous && (
        <div className="topic-nav-zone">
          <span className="topic-nav-label">Предыдущая тема</span>
          <span className="topic-nav-title">{previous.title}</span>
          <Button href={previous.href} variant="secondary">
            Читать
          </Button>
        </div>
      )}
      {next && (
        <div className="topic-nav-zone">
          <span className="topic-nav-label">Следующая тема</span>
          <span className="topic-nav-title">{next.title}</span>
          <Button href={next.href}>Перейти дальше</Button>
        </div>
      )}
    </div>
  );
}
