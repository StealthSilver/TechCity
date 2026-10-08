import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return <ComingSoon />;
}
