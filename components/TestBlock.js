"use client";

import { useMemo, useState } from "react";
import Button from "./Button";

function hashStringToUint32(value) {
  // Deterministic seed for SSR/CSR parity.
  // xfnv1a-like hash (stable across runtimes)
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let t = seed >>> 0;
  return function random() {
    t += 0x6d2b79f5;
    let x = t;
    x = Math.imul(x ^ (x >>> 15), x | 1);
    x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(array, seed) {
  const copy = array.slice();
  const rand = mulberry32(seed);
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function TestBlock({ questions }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const shuffled = useMemo(() => {
    return questions.map((question) => {
      const seed = hashStringToUint32(question.question);
      const options = shuffle(
        question.options.map((label, originalIndex) => ({
          id: `${question.question}__${originalIndex}`,
          label,
          originalIndex
        })),
        seed
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
