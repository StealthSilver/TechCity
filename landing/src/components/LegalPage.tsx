import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";

export default function LegalPage({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-full flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
          <SectionHeading index={index} label={label} title={title} />
          <div className="mt-10 max-w-2xl space-y-6 text-base leading-7 text-foreground/80">
            {children}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
