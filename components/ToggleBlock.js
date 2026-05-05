"use client";

import { useState } from "react";
import Button from "./Button";

export default function ToggleBlock({ buttonLabel = "Показать решение", hideLabel = "Скрыть решение", children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="secondary" size="small" onClick={() => setOpen((value) => !value)}>
        {open ? hideLabel : buttonLabel}
      </Button>
      {open && <div className="toggle-content" style={{ marginTop: 14 }}>{children}</div>}
    </div>
  );
}
