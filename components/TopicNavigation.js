import Button from "./Button";

export default function TopicNavigation({ groupHref, previous, next }) {
  return (
    <div className="topic-nav">
      <div className="topic-nav-zone">
        <span className="topic-nav-label">Назад к разделу</span>
        <Button href={groupHref} variant="secondary">
          Вверх к темам
        </Button>
      </div>
      <div className="topic-nav-zone">
        <span className="topic-nav-label">Предыдущая тема</span>
        {previous ? (
          <>
            <span className="topic-nav-title">{previous.title}</span>
            <Button href={previous.href} variant="secondary">
              Читать
            </Button>
          </>
        ) : (
          <span className="muted">Это первая тема в подразделе.</span>
        )}
      </div>
      <div className="topic-nav-zone">
        <span className="topic-nav-label">Следующая тема</span>
        {next ? (
          <>
            <span className="topic-nav-title">{next.title}</span>
            <Button href={next.href}>Перейти дальше</Button>
          </>
        ) : (
          <span className="muted">Подраздел завершен.</span>
        )}
      </div>
    </div>
  );
}
