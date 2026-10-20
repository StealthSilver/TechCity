import type { Metadata } from "next";
import CollegeLogoTicker from "@/components/CollegeLogoTicker";
import StudentAbout from "@/components/StudentAbout";
import StudentCareers from "@/components/StudentCareers";
import StudentCta from "@/components/StudentCta";
import StudentHero from "@/components/StudentHero";
import StudentProducts from "@/components/StudentProducts";
import StudentShowcase from "@/components/StudentShowcase";

export const metadata: Metadata = {
  title: "For students",
  description:
    "Marg, Spardha, Riyaaz, Kaksha, and Setu: TechCity products for students: roadmaps, assessments, coding practice, courses, and LMS.",
};

export default function Students() {
  return (
    <main className="flex-1">
      <StudentHero />

      <div className="-mt-6 pb-4 pt-2 sm:-mt-8 sm:pb-6 sm:pt-3">
        <CollegeLogoTicker />
      </div>

      <StudentAbout />

      <StudentProducts />

      <StudentShowcase />

      <StudentCareers />

      <StudentCta />
    </main>
  );
}
