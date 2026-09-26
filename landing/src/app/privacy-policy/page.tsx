import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How TechCity collects, uses, and protects information.",
};

export default function PrivacyPolicy() {
  return (
    <LegalPage
      index="05"
      label="Legal"
      title="Privacy Policy."
    >
      <p>Last updated 26 September 2026.</p>
      <p>
        TechCity (“we”, “us”) runs industry-aligned skilling programs with
        universities and hiring partners. This policy explains how we handle
        information when you use techcityskills.com and related program
        services.
      </p>
      <h3 className="text-lg text-foreground">Information we collect</h3>
      <p>
        We collect details you share with us — name, email, phone, campus or
        organization, and messages sent through the site or hello@techcityskills.com.
        We also collect standard usage data such as pages viewed and device
        type, to keep the site reliable.
      </p>
      <h3 className="text-lg text-foreground">How we use it</h3>
      <p>
        We use this information to respond to partner and student enquiries,
        deliver programs, improve the site, and meet legal obligations. We do
        not sell personal information.
      </p>
      <h3 className="text-lg text-foreground">Sharing</h3>
      <p>
        We may share information with university and industry partners only as
        needed to run a program you have joined, and with vendors who host or
        operate this site under confidentiality terms.
      </p>
      <h3 className="text-lg text-foreground">Contact</h3>
      <p>
        Questions about privacy can be sent to hello@techcityskills.com or to
        TechCity Hub, Level 4, Cyber City 400001. Phone: +1 (800) 123-4567.
      </p>
    </LegalPage>
  );
}
