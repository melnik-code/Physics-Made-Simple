export default function Card({ children, accent, className = "", plain = false }) {
  const classes = ["card", plain ? "plain" : "", className].filter(Boolean).join(" ");

  return (
    <article className={classes} style={{ "--accent": accent }}>
      {children}
    </article>
  );
}
