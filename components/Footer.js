import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <p className="footer-title">Физика Просто</p>
          <p className="footer-meta">
            © 2026 Melnik-code. Все права защищены.
          </p>
          <p>Материал школьного курса: определения, формулы, задачи и проверка понимания.</p>
        </div>
        <div className="footer-links">
          <Link href="/topics">Разделы</Link>
          <Link href="/formulas">Формулы</Link>
          <Link href="/exam">Подготовка</Link>
          <Link href="/about">О проекте</Link>
          <Link href="/contacts">Контакты</Link>
        </div>
      </div>
    </footer>
  );
}
