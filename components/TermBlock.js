export default function TermBlock({ term, accent }) {
  return (
    <article className="card plain" style={{ "--accent": accent }}>
      <div className="term-card">
        <h3>{term.term}</h3>
        <p>{term.definition}</p>
      </div>
    </article>
  );
}

