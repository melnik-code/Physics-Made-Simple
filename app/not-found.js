import Link from "next/link";

export const metadata = {
  title: "Страница не найдена",
  description: "Такой страницы нет в курсе «Физика просто».",
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <div className="page-shell not-found">
      <p className="eyebrow">404</p>
      <h1>Страница не найдена</h1>
      <p className="lead">
        Возможно, тема была открыта по неверной ссылке. Вернитесь к разделам курса и выберите
        нужный материал.
      </p>
      <div className="card-actions">
        <Link className="button primary" href="/topics">
          Перейти к разделам
        </Link>
      </div>
    </div>
  );
}
