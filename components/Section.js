export default function Section({ title, children, compact = false, accent }) {
  return (
    <section className={`section${compact ? " compact" : ""}`} style={{ "--accent": accent }}>
      <div className="section-inner">
        {title ? (
          <div className="section-header">
            <h2>{title}</h2>
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
