import Button from "./Button";

export default function TermCard({ term }) {
  return (
    <CardShell accent={term.accent}>
      <article className="term-card">
        <h3>{term.term}</h3>
        <p>{term.definition}</p>
        <div className="card-actions">
          <Button href={term.topicHref} variant="secondary" size="small">
            Открыть тему
          </Button>
        </div>
      </article>
    </CardShell>
  );
}

function CardShell({ children, accent }) {
  return (
    <div className="card plain" style={{ "--accent": accent }}>
      {children}
    </div>
  );
}

