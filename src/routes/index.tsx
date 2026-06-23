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
      { title: "Trần Gia Bảo — Landscape Photographer & Visual Artist" },
      {
        name: "description",
        content:
          "Portfolio nhiếp ảnh nghệ thuật của Trần Gia Bảo. Khám phá vẻ đẹp nguyên sơ của thung lũng sương mù Đà Lạt, ruộng bậc thang Y Tý và sóng biển Phú Yên.",
      },
      { property: "og:title", content: "Trần Gia Bảo — Landscape Photographer" },
      {
        property: "og:description",
        content: "Chasing dawn, capturing the solemn silence between the winds. Fine art landscape prints.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#5d4e43" },
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
