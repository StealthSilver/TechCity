import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms for using the TechCity website and programs.",
};

export default function TermsAndConditions() {
  return (
    <LegalPage
      index="06"
      label="Legal"
      title="Terms and Conditions."
    >
      <p>Last updated 26 September 2026.</p>
      <p>
        These terms govern your use of the TechCity website and, where they
        apply, enrolment in TechCity programs delivered with university and
        industry partners.
      </p>
      <h3 className="text-lg text-foreground">The site</h3>
      <p>
        Content on this site is for general information. Program details,
        faculty, and timelines may change. We may update pages without notice.
      </p>
      <h3 className="text-lg text-foreground">Programs</h3>
      <p>
        Joining a TechCity program is subject to the agreement between you (or
        your campus or employer) and TechCity. That agreement controls if it
        conflicts with these website terms.
      </p>
      <h3 className="text-lg text-foreground">Acceptable use</h3>
      <p>
        Do not misuse the site, attempt unauthorized access, or use our marks
        without permission. Links to partner or third-party sites are not
        under our control.
      </p>
      <h3 className="text-lg text-foreground">Contact</h3>
      <p>
        For terms questions, write to hello@techcityskills.com or TechCity Hub,
        Level 4, Cyber City 400001. Phone: +1 (800) 123-4567.
      </p>
    </LegalPage>
  );
}
