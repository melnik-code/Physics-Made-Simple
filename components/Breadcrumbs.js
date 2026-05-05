import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      <Link href="/">Главная</Link>
      {items.map((item) => (
        <span key={`${item.href || item.label}-${item.label}`}>
          <span aria-hidden="true">/</span>{" "}
          {item.href ? <Link href={item.href}>{item.label}</Link> : item.label}
        </span>
      ))}
    </nav>
  );
}
