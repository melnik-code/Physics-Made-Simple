"use client";

import { useMemo, useState } from "react";
import TermCard from "./TermCard";

export default function TermBrowser({ terms, sections }) {
  const [active, setActive] = useState("all");

  const visible = useMemo(() => {
    if (active === "all") return terms;
    return terms.filter((term) => term.sectionSlug === active);
  }, [active, terms]);

  return (
    <>
      <div className="filter-row" aria-label="Фильтр терминов по разделам">
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
        {visible.map((term) => (
          <TermCard term={term} key={term.id} />
        ))}
      </div>
    </>
  );
}

