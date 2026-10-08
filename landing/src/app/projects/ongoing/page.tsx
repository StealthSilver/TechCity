import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Ongoing projects",
};

export default function OngoingProjectsPage() {
  return <ComingSoon />;
}
