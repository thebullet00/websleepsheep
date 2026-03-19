import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import CookieBanner from "../components/CookieBanner";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sleepsheep.app"),
  title: "Sleep Sheep — Wake up at the perfect moment",
  description:
    "Sleep Sheep tracks your sleep cycles and wakes you up when your body is ready. Smart alarm, sleep insights, and a friendly sheep companion.",
  alternates: {
    canonical: "https://sleepsheep.app",
  },
  openGraph: {
    title: "Sleep Sheep — Wake up at the perfect moment",
    description:
      "Sleep Sheep tracks your sleep cycles and wakes you up when your body is ready. Smart alarm, sleep insights, and a friendly sheep companion.",
    url: "https://sleepsheep.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Sheep — Wake up at the perfect moment",
    description:
      "Sleep Sheep tracks your sleep cycles and wakes you up when your body is ready. Smart alarm, sleep insights, and a friendly sheep companion.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />

        {/* Google Analytics placeholder (enable with NEXT_PUBLIC_GA_ID) */}
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-script" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`}
            </Script>
          </>
        ) : null}

        {/* Plausible placeholder:
            <Script defer data-domain="sleepsheep.app" src="https://plausible.io/js/script.js" /> */}
      </body>
    </html>
  );
}
