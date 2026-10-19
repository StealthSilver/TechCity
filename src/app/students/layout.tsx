import type { Viewport } from "next";
import StudentNav from "@/components/StudentNav";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="student-page flex min-h-svh flex-col bg-background font-sans text-foreground">
      <StudentNav />
      {children}
      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-6 sm:px-8">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/40">
            TechCity for students
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a
              href="/privacy-policy"
              className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/40 transition-colors hover:text-foreground"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/40 transition-colors hover:text-foreground"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
