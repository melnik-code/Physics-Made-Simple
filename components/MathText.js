/**
 * Renders text as plain content.
 * We intentionally avoid LaTeX parsing to prevent broken escapes like \( ... \) from leaking to UI.
 */
export default function MathText({ text }) {
  return <>{text}</>;
}

