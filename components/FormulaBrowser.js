"use client";

import { useMemo, useState } from "react";
import FormulaCard from "./FormulaCard";

export default function FormulaBrowser({ formulas, sections }) {
  const [active, setActive] = useState("all");

  const visible = useMemo(() => {
    if (active === "all") return formulas;
    return formulas.filter((formula) => formula.sectionSlug === active);
  }, [active, formulas]);

  return (
    <>
      <div className="filter-row" aria-label="Фильтр формул по разделам">
        <button
          className={`filter-button${active === "all" ? " active" : ""}`}
          type="button"
          onClick={() => setActive("all")}
        >
          Все разделы
        </button>
        {sections.map((section) => (
          <button
            className={`filter-button${active === section.slug ? " active" : ""}`}
            type="button"
            onClick={() => setActive(section.slug)}
            key={section.slug}
          >
            {section.title}
          </button>
        ))}
      </div>
      <div className="grid three">
        {visible.map((formula) => (
          <FormulaCard formula={formula} showTopicLink key={formula.id} />
        ))}
      </div>
    </>
  );
}
