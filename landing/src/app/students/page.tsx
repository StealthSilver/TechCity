import type { Metadata } from "next";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "For students",
};

export default function Students() {
  return <ComingSoon />;
}
