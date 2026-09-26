import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
