"use client";

import { useMemo, useState } from "react";
import Button from "./Button";

function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function TestBlock({ questions }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const shuffled = useMemo(() => {
    return questions.map((question) => {
      const options = shuffle(
        question.options.map((label, originalIndex) => ({
          id: `${question.question}__${originalIndex}`,
          label,
          originalIndex
        }))
      );

      return {
        ...question,
        options
      };
    });
  }, [questions]);

  const correct = shuffled.reduce((sum, question, index) => {
    const chosenOriginalIndex = Number(answers[index]);
    return sum + (chosenOriginalIndex === question.correct ? 1 : 0);
  }, 0);

  function reset() {
    setAnswers({});
    setChecked(false);
  }

  return (
    <div className="test-block">
      {shuffled.map((question, questionIndex) => (
        <div className="test-question" key={question.question}>
          <h3>{question.question}</h3>
          <div className="options">
            {question.options.map((option) => {
              const selected = Number(answers[questionIndex]) === option.originalIndex;
              const isCorrect = question.correct === option.originalIndex;
              const stateClass = checked && selected ? (isCorrect ? " correct" : " incorrect") : "";
              const correctClass = checked && isCorrect ? " correct" : "";

              return (
                <label className={`option${stateClass || correctClass}`} key={option.id}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    checked={selected}
                    onChange={() => {
                      setAnswers((current) => ({
                        ...current,
                        [questionIndex]: option.originalIndex
                      }));
                      setChecked(false);
                    }}
                  />
                  <span>{option.label}</span>
                </label>
              );
            })}
          </div>
          {checked && <p className="explanation">{question.explanation}</p>}
        </div>
      ))}
      <div className="test-actions">
        <Button onClick={() => setChecked(true)}>Проверить</Button>
        <Button variant="secondary" onClick={reset}>
          Сбросить
        </Button>
        {checked && (
          <span className="test-result">
            {correct} из {questions.length}
          </span>
        )}
      </div>
    </div>
  );
}
