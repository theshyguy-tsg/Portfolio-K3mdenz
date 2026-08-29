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
      { title: "Nguyễn Công Khiêm (K3mdenz) — Fullstack Developer & Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio của Nguyễn Công Khiêm (K3mdenz). Khám phá Đồ án tốt nghiệp DATN-SD33 KemDenz Buffet, hệ thống Monorepo, Web-app thời gian thực và các dự án tương tác cao cấp.",
      },
      { property: "og:title", content: "Nguyễn Công Khiêm (K3mdenz) — Fullstack Developer" },
      {
        property: "og:description",
        content: "Engineering scalable backend architectures & crafting high-fidelity interactive web apps.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0d0d0d" },
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
