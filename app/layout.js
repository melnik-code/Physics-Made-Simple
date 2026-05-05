import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { defaultKeywordsRu } from "@/lib/seoDefaults";
import { getSiteWideJsonLdGraph } from "@/lib/structuredData";
import { getSiteUrl } from "@/lib/site";

const OG_IMAGE = process.env.NEXT_PUBLIC_OG_IMAGE || "";
const SITE_DESC =
  "Школьная физика 7–11 классов: темы по разделам, формулы, разбор задач и мини-тесты для ОГЭ, ЕГЭ и контрольных.";

const ogImage =
  OG_IMAGE !== ""
    ? { url: OG_IMAGE, width: 1200, height: 630, alt: "Физика просто — школьный курс" }
    : null;

/** Без общего canonical на layout — у каждой страницы свой URL. */
export const metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Физика просто — школьная физика, формулы и задачи онлайн",
    template: "%s | Физика просто"
  },
  description: SITE_DESC,
  applicationName: "Физика просто",
  category: "education",
  keywords: defaultKeywordsRu,
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: "melnik-code", url: "https://github.com/melnik-code" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Физика просто",
    description: SITE_DESC,
    ...(ogImage ? { images: [ogImage] } : {})
  },
  twitter: {
    card: "summary_large_image",
    description: SITE_DESC,
    ...(ogImage ? { images: [ogImage.url] } : {})
  },
  verification: {
    yandex: "0387e6b2ebf72888",
    google: "fkqrC05Ft57uk0CRfnJfq8tHhsUD2r26Vjx7ExSY6nQ"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" data-scroll-behavior="smooth">
      <body className="site-body">
        <StructuredData schema={getSiteWideJsonLdGraph()} />
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
