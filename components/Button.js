import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  size,
  type = "button",
  onClick,
  disabled
}) {
  const className = ["button", variant, size].filter(Boolean).join(" ");

  if (href) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
