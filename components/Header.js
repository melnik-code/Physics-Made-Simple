"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/topics", label: "Разделы" },
  { href: "/formulas", label: "Формулы" },
  { href: "/terms", label: "Термины" },
  { href: "/exam", label: "Экзамен" },
  { href: "/scientists", label: "Учёные" },
  { href: "/about", label: "О проекте" }
];

function linkIsActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname() ?? "";
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerId = useId();

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Link className="brand" href="/">
            <svg
              aria-hidden="true"
              className="brand-mark"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" fill="#16283d" />
              <text
                x="50"
                y="62"
                textAnchor="middle"
                fontSize="60"
                fill="#ffffff"
                fontFamily="Arial, Helvetica, sans-serif"
              >
                φ
              </text>
            </svg>
            <span>Физика просто</span>
          </Link>
          <div className="header-nav-slot">
            <nav className="main-nav main-nav-desktop" aria-label="Основная навигация">
              {links.map((link) => (
                <Link
                  aria-current={linkIsActive(pathname, link.href) ? "page" : undefined}
                  className={`nav-link${linkIsActive(pathname, link.href) ? " nav-link-active" : ""}`}
                  href={link.href}
                  key={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button
              aria-controls={drawerId}
              aria-expanded={drawerOpen}
              aria-label={drawerOpen ? "Закрыть меню" : "Открыть меню"}
              className={`nav-burger${drawerOpen ? " nav-burger-open" : ""}`}
              onClick={() => setDrawerOpen((o) => !o)}
              type="button"
            >
              <span className="nav-burger-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </div>
      </header>
      <div
        aria-hidden={!drawerOpen}
        className={`nav-backdrop${drawerOpen ? " nav-backdrop-visible" : ""}`}
        onClick={closeDrawer}
      />
      <div
        aria-hidden={!drawerOpen}
        aria-modal="true"
        className={`nav-drawer${drawerOpen ? " nav-drawer-open" : ""}`}
        id={drawerId}
        role="dialog"
      >
        <nav aria-label="Мобильная навигация" className="nav-drawer-inner">
          {links.map((link) => (
            <Link
              aria-current={linkIsActive(pathname, link.href) ? "page" : undefined}
              className={`nav-drawer-link${linkIsActive(pathname, link.href) ? " nav-link-active" : ""}`}
              href={link.href}
              key={link.href}
              onClick={closeDrawer}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
