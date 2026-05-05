"use client";

import { useState } from "react";
import Button from "./Button";

export default function TestBlock({ questions }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const correct = questions.reduce((sum, question, index) => {
    return sum + (Number(answers[index]) === question.correct ? 1 : 0);
  }, 0);

  function reset() {
    setAnswers({});
    setChecked(false);
  }

  return (
    <div className="test-block">
      {questions.map((question, questionIndex) => (
        <div className="test-question" key={question.question}>
          <h3>{question.question}</h3>
          <div className="options">
            {question.options.map((option, optionIndex) => {
              const selected = Number(answers[questionIndex]) === optionIndex;
              const isCorrect = question.correct === optionIndex;
              const stateClass = checked && selected ? (isCorrect ? " correct" : " incorrect") : "";
              const correctClass = checked && isCorrect ? " correct" : "";

              return (
                <label className={`option${stateClass || correctClass}`} key={option}>
                  <input
                    type="radio"
                    name={`question-${questionIndex}`}
                    checked={selected}
                    onChange={() => {
                      setAnswers((current) => ({ ...current, [questionIndex]: optionIndex }));
                      setChecked(false);
                    }}
                  />
                  <span>{option}</span>
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
