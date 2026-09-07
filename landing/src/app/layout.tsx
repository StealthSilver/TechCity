import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

const title = "TechCity — Industry-aligned skilling for modern tech careers";
const description =
  "Partnering with universities to deliver an integrated suite of skilling solutions, from classrooms to careers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s — TechCity",
  },
  description,
  applicationName: "TechCity",
  keywords: [
    "TechCity",
    "EdTech",
    "university skilling",
    "industry-aligned programs",
    "tech careers",
    "faculty for colleges",
    "classroom to career",
  ],
  authors: [{ name: "TechCity" }],
  creator: "TechCity",
  publisher: "TechCity",
  category: "education",
  icons: {
    icon: [{ url: "/logo.png", type: "image/png" }],
    apple: [{ url: "/logo.png", type: "image/png" }],
    shortcut: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "TechCity",
    title,
    description,
    images: [
      {
        url: "/logo.png",
        width: 945,
        height: 921,
        alt: "TechCity logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: [
      {
        url: "/logo.png",
        alt: "TechCity logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0d",
  colorScheme: "dark light",
};

const themeInitScript = `(function(){try{if(localStorage.getItem("techcity-theme")==="light"){var r=document.documentElement;r.classList.add("light");r.style.colorScheme="light";var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content","#f6f9fd");}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        {children}
      </body>
    </html>
  );
}
