import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SelectedWorkSection from "@/components/SelectedWorkSection";
import SelectedWritingSection from "@/components/SelectedWritingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <SelectedWorkSection />
        <SelectedWritingSection />
        <AboutSection />
      </main>
      <ContactSection />
    </div>
  );
}
