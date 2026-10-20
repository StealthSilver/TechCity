"use client";

import LogoLoop from "@/components/LogoLoop";
import { collegePartnerMarks } from "@/data/partners";

const collegeLogos = collegePartnerMarks
  .filter((partner) => partner.logo)
  .filter(
    (partner, index, list) =>
      list.findIndex((item) => item.logo === partner.logo) === index,
  )
  .map((partner) => ({
    src: partner.logo!,
    alt: partner.name,
    title: partner.name,
  }));

export default function CollegeLogoTicker() {
  return (
    <div
      className="student-logo-ticker relative h-20 w-full overflow-hidden sm:h-24"
      aria-label="College partner logos"
    >
      <LogoLoop
        logos={collegeLogos}
        speed={65}
        direction="left"
        logoHeight={48}
        gap={112}
        hoverSpeed={0}
        pauseOnHover
        fadeOut
        fadeOutWidth={0.12}
        muted={0}
        labels="none"
        ariaLabel="College partner logos"
      />
    </div>
  );
}
