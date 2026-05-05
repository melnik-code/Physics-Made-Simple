import Button from "./Button";

export default function FormulaCard({ formula, showTopicLink = false }) {
  return (
    <CardShell accent={formula.accent}>
      <div className="formula-card">
        <div className="formula-expression">{formula.expression}</div>
        <p>{formula.description}</p>
        <div className="formula-symbols">
          {formula.symbols.map((symbol) => (
            <span key={symbol}>{symbol}</span>
          ))}
        </div>
        <div className="formula-meta">
          <span>{formula.topicTitle}</span>
          {showTopicLink && (
            <Button href={formula.topicHref} variant="secondary" size="small">
              Открыть тему
            </Button>
          )}
        </div>
      </div>
    </CardShell>
  );
}

function CardShell({ children, accent }) {
  return (
    <article className="card plain" style={{ "--accent": accent }}>
      {children}
    </article>
  );
}
