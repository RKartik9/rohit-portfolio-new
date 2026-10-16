import type { Metadata, Viewport } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import SmoothScroll from "@/components/layout/SmoothScroll";
import { site } from "@/content/site";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    "Rohit Kartik",
    "Rohit Kumar",
    "Software Engineer",
    "Full-Stack Developer",
    "Frontend Developer",
    "Next.js Developer",
    "Product Engineer",
    "Noida",
  ],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcfbf9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={serif.variable}>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} storageKey="rk-theme">
          <SmoothScroll>
            <Header />
            <main id="main" className="relative">
              {children}
            </main>
            <Footer />
            <BackToTop />
          </SmoothScroll>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
