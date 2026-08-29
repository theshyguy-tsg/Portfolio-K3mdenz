import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/portfolio/HeroSection";
import { AboutSection } from "@/components/portfolio/AboutSection";
import { EducationSection } from "@/components/portfolio/EducationSection";
import { SkillsSection } from "@/components/portfolio/SkillsSection";
import { ToolbeltSection } from "@/components/portfolio/ToolbeltSection";
import { ProjectsSection } from "@/components/portfolio/ProjectsSection";
import { ContactSection } from "@/components/portfolio/ContactSection";
import { FooterSection } from "@/components/portfolio/FooterSection";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "K3MDENZ — AI Automation Engineer & Vibe Coder" },
      {
        name: "description",
        content:
          "Portfolio of Nguyễn Công Khiêm (K3MDENZ) — FPT Polytechnic software development student. AI automation, vibe coding, two live deployed projects.",
      },
      { property: "og:title", content: "K3MDENZ — AI Automation Engineer" },
      {
        property: "og:description",
        content: "I build automation that thinks. Aurora-tech portfolio with neuron particle hero.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#8b5cf6" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative w-full bg-background text-foreground">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ToolbeltSection />
      <ProjectsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
