import type { Metadata } from "next";
import { Roboto, Bebas_Neue } from "next/font/google";
import "../src/styles/globals.css";
import { businessData, aiContent } from "@/data/site-data";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const bodyFont = Roboto({ subsets: ["latin"], variable: "--font-body" });
const headingFontLoaded = Bebas_Neue({ subsets: ["latin"], variable: "--font-heading", weight: ['400'] });

export const metadata: Metadata = {
  title: `${businessData.name} — ${aiContent.tagline}`,
  description: aiContent.metaDescription,
  openGraph: {
    title: `${businessData.name} — ${aiContent.tagline}`,
    description: aiContent.metaDescription,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFontLoaded.variable} font-body antialiased bg-background text-foreground`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
