import ToggleBlock from "./ToggleBlock";

export default function TaskCard({ task, accent }) {
  return (
    <article className="card plain task-card" style={{ "--accent": accent }}>
      <p className="task-question">{task.question}</p>
      <ToggleBlock>
        <ol className="solution-steps">
          {task.solution.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <p className="answer">Ответ: {task.answer}</p>
      </ToggleBlock>
    </article>
  );
}
