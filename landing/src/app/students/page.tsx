import type { Metadata, Viewport } from "next";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "For students",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function Students() {
  return (
    <div className="student-page flex min-h-svh flex-col bg-white font-sans text-[#141414]">
      <Navbar theme="light" />
      <main className="flex flex-1 items-center justify-center px-5">
        <p className="font-mono text-[13px] uppercase tracking-[0.28em] text-[#141414]/55">
          Coming soon
        </p>
      </main>
    </div>
  );
}
