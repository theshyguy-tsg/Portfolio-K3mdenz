import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { projectsData } from "@/components/portfolio/data";

export const Route = createFileRoute("/projects/$id")({
  component: ProjectDetailPage,
  head: ({ params }) => {
    const project = projectsData.find((p) => p.slug === params.id || p.id === params.id);
    const title = project ? `${project.name} — Chi tiết Dự án` : "Chi tiết Dự án";
    return {
      meta: [
        { title: `${title} | K3MDENZ Portfolio` },
        {
          name: "description",
          content: project?.about || "Chi tiết dự án phần mềm và đồ án tốt nghiệp của Nguyễn Công Khiêm.",
        },
      ],
    };
  },
});

function ProjectDetailPage() {
  const { id } = Route.useParams();
  const project = projectsData.find((p) => p.slug === id || p.id === id) as any;

  const [activeTab, setActiveTab] = useState<"overview" | "portals" | "tech" | "gallery" | "roadmap">("overview");

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center text-foreground">
        <h1 className="font-display text-5xl sm:text-7xl">404</h1>
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
          Không tìm thấy dự án "{id}"
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-widest text-background transition-transform hover:scale-105"
        >
          ← Quay lại Trang Chủ
        </Link>
      </div>
    );
  }

  const isWip = project.status?.includes("DEVELOPMENT") || (project.progressPercent && project.progressPercent < 100);

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground selection:bg-neon selection:text-background">
      {/* Top Header / Navigation Bar */}
      <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-border/60 bg-background/80 px-6 backdrop-blur-md sm:px-12">
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-cyan"
        >
          <span>←</span>
          <span>PORTFOLIO TRANG CHỦ</span>
        </Link>

        <div className="flex items-center gap-3">
          {project.deployUrl && (
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-background shadow-md transition-all hover:bg-neon hover:text-background hover:scale-105"
            >
              <span>XEM DEMO TRỰC TIẾP</span>
              <span>↗</span>
            </a>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-6xl px-6 py-12 sm:px-10 sm:py-16">
        {/* Breadcrumb & Project Tag */}
        <div className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            DỰ ÁN
          </Link>
          <span>/</span>
          <span className="text-neon">{project.coord}</span>
          <span>/</span>
          <span>{project.year}</span>
        </div>

        {/* Hero Title */}
        <div className="space-y-4">
          <h1 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] tracking-tight">
            {project.name}
          </h1>
          {project.subtitle && (
            <p className="font-sans text-lg text-muted-foreground sm:text-xl">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* WIP Status Announcement Banner */}
        {isWip && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-8 overflow-hidden rounded-2xl border-2 border-amber-400/40 bg-amber-500/10 p-6 sm:p-8 backdrop-blur"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-amber-400">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
                  <span>DỰ ÁN ĐANG TRONG TIẾN ĐỘ XÂY DỰNG & HOÀN THIỆN (WIP)</span>
                </div>
                <p className="text-sm text-foreground/90 font-sans leading-relaxed max-w-2xl">
                  {project.currentPhase || "Đang trong quá trình tối ưu hóa hiệu năng và đồng bộ các phân hệ."}
                </p>
              </div>

              {/* Progress pill */}
              <div className="flex flex-col items-start sm:items-end gap-1.5 shrink-0">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                  TIẾN ĐỘ PHÁT TRIỂN
                </span>
                <div className="flex items-center gap-3">
                  <div className="h-2.5 w-36 sm:w-48 overflow-hidden rounded-full bg-background/60 border border-amber-400/30">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-amber-400 to-neon transition-all duration-1000"
                      style={{ width: `${project.progressPercent || 85}%` }}
                    />
                  </div>
                  <span className="font-mono text-sm font-bold text-amber-400">
                    {project.progressPercent || 85}%
                  </span>
                </div>
              </div>
            </div>

            {/* Note regarding demo status */}
            <div className="mt-4 pt-4 border-t border-amber-400/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-foreground/80 font-mono">
              <span>
                💡 <span className="font-bold text-amber-300">Lưu ý:</span> Website hiện đang online phiên bản thử nghiệm trực tiếp tại{" "}
                <span className="underline text-cyan">{project.deployUrl}</span>.
              </span>
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-cyan hover:underline font-bold"
              >
                TRUY CẬP BẢN THỬ NGHIỆM ↗
              </a>
            </div>
          </motion.div>
        )}

        {/* Database Migration / Paused Notice (for Dating App & Spin-Quizz) */}
        {project.dbNotice && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="my-6 overflow-hidden rounded-2xl border border-sky-400/30 bg-sky-500/10 p-5 sm:p-6 backdrop-blur"
          >
            <div className="flex items-start gap-3">
              <span className="text-xl shrink-0">☁️</span>
              <div className="space-y-1">
                <div className="font-mono text-xs font-bold uppercase tracking-widest text-sky-400">
                  THÔNG BÁO HẠ TẦNG DATABASE (SUPABASE FREE-TIER MIGRATION)
                </div>
                <p className="text-xs sm:text-sm text-foreground/90 font-sans leading-relaxed">
                  {project.dbNotice}
                </p>
                <div className="pt-2 font-mono text-[11px] text-muted-foreground">
                  ↳ Trạng thái hiện tại: <span className="text-sky-300 font-bold">{project.statusText}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Quick Nav Tabs */}
        <div className="my-8 flex flex-wrap gap-2 border-b border-border/80 pb-4 font-mono text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab("overview")}
            className={`rounded-full px-4 py-2 transition-all ${
              activeTab === "overview"
                ? "bg-foreground text-background font-bold shadow"
                : "bg-muted/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            01 · TỔNG QUAN & BÀI TOÁN
          </button>
          {project.portals && (
            <button
              onClick={() => setActiveTab("portals")}
              className={`rounded-full px-4 py-2 transition-all ${
                activeTab === "portals"
                  ? "bg-foreground text-background font-bold shadow"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              02 · 5 PHÂN HỆ PORTALS ({project.portals.length})
            </button>
          )}
          {project.technicalHighlights && (
            <button
              onClick={() => setActiveTab("tech")}
              className={`rounded-full px-4 py-2 transition-all ${
                activeTab === "tech"
                  ? "bg-foreground text-background font-bold shadow"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              03 · THUẬT TOÁN & KHÓA PHÂN TÁN
            </button>
          )}
          {project.gallery && (
            <button
              onClick={() => setActiveTab("gallery")}
              className={`rounded-full px-4 py-2 transition-all ${
                activeTab === "gallery"
                  ? "bg-foreground text-background font-bold shadow"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              04 · SƠ ĐỒ & GALLERY
            </button>
          )}
          {project.roadmap && (
            <button
              onClick={() => setActiveTab("roadmap")}
              className={`rounded-full px-4 py-2 transition-all ${
                activeTab === "roadmap"
                  ? "bg-foreground text-background font-bold shadow"
                  : "bg-muted/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              05 · LỘ TRÌNH SPRINT
            </button>
          )}
        </div>

        {/* Tab 1: Overview */}
        {activeTab === "overview" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
            {/* Overview & Problem & Solution Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="soft-card space-y-4 p-6 sm:p-8">
                <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-neon">
                  [ 01 · BÀI TOÁN THỰC TIỄN ]
                </div>
                <h3 className="font-display text-2xl">Thách thức Vận hành & Xung đột dữ liệu</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.problemStatement || project.about}
                </p>
              </div>

              <div className="soft-card space-y-4 p-6 sm:p-8">
                <div className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-cyan">
                  [ 02 · GIẢI PHÁP KIẾN TRÚC ]
                </div>
                <h3 className="font-display text-2xl">Kiến trúc Monorepo & Khóa Phân Tán</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.solutionArchitecture || project.about}
                </p>
              </div>
            </div>

            {/* Tech Stack List */}
            <div className="soft-card p-6 sm:p-8">
              <div className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
                [ CÔNG NGHỆ & THƯ VIỆN SỬ DỤNG ]
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item: string) => (
                  <span
                    key={item}
                    className="liquid-glass rounded-xl px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 2: 5 Portals */}
        {activeTab === "portals" && project.portals && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="mb-2">
              <h2 className="font-display text-3xl sm:text-4xl">Hệ sinh thái 5 Phân Hệ Portals</h2>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Tất cả hoạt động đồng bộ thời gian thực trên cùng một Monorepo
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.portals.map((portal: any, idx: number) => (
                <div key={portal.name} className="soft-card hover-float flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-neon mb-3">
                      <span>PORTAL · 0{idx + 1}</span>
                      <span className="text-muted-foreground">{portal.target}</span>
                    </div>
                    <h3 className="font-display text-xl leading-snug mb-1">{portal.name}</h3>
                    <div className="font-mono text-[11px] text-cyan uppercase tracking-wide mb-3">
                      ↳ {portal.role}
                    </div>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {portal.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 3: Technical Highlights & Concurrency */}
        {activeTab === "tech" && project.technicalHighlights && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="mb-2">
              <h2 className="font-display text-3xl sm:text-4xl">Thuật Toán & Kỹ Thuật Cốt Lõi</h2>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Được kiểm chứng bởi 10 giải thuật xử lý tải cao và bảo vệ dữ liệu
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {project.technicalHighlights.map((tech: any) => (
                <div key={tech.title} className="soft-card p-6 sm:p-8 space-y-4">
                  <div className="inline-block rounded-full bg-accent/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-neon">
                    {tech.tag}
                  </div>
                  <h3 className="font-display text-2xl">{tech.title}</h3>
                  <ul className="space-y-2 text-xs leading-relaxed text-muted-foreground font-mono">
                    {tech.details.map((detail: string, i: number) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-neon mt-0.5">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 4: Gallery */}
        {activeTab === "gallery" && project.gallery && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
            <div className="mb-2">
              <h2 className="font-display text-3xl sm:text-4xl">Sơ Đồ Giao Diện & Hình Ảnh Thực Tế</h2>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Trực quan hóa không gian nhà hàng và trải nghiệm khách hàng
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((item: any) => (
                <div key={item.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-mono text-sm font-bold uppercase">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 5: Roadmap */}
        {activeTab === "roadmap" && project.roadmap && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div className="mb-2">
              <h2 className="font-display text-3xl sm:text-4xl">Lộ Trình Phát Triển Sprint</h2>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mt-1">
                Các giai đoạn hoàn thiện chuẩn bị bảo vệ đồ án tốt nghiệp
              </p>
            </div>

            <div className="space-y-4">
              {project.roadmap.map((item: any) => (
                <div
                  key={item.phase}
                  className={`soft-card flex items-start gap-4 p-5 sm:p-6 transition-colors ${
                    item.done ? "border-neon/30" : "border-amber-400/40 bg-amber-500/5"
                  }`}
                >
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-current font-mono text-xs">
                    {item.done ? <span className="text-neon">✓</span> : <span className="text-amber-400 animate-pulse">●</span>}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                      <span className={item.done ? "text-neon" : "text-amber-400"}>{item.phase}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className={item.done ? "text-muted-foreground" : "text-amber-400 font-bold"}>
                        {item.done ? "ĐÃ HOÀN THÀNH" : "ĐANG TRIỂN KHAI"}
                      </span>
                    </div>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA Box */}
        <div className="mt-16 overflow-hidden rounded-3xl border-2 border-border bg-gradient-to-b from-card to-background p-8 sm:p-12 text-center">
          <div className="mx-auto max-w-2xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-neon/15 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-neon">
              <span>●</span>
              <span>LIVE TEST ENVIRONMENT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl leading-tight">
              Trải Nghiệm Bản Thử Nghiệm Ngay
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed font-sans">
              Hệ thống hiện đang chạy trực tiếp trên máy chủ phân tán và liên tục được hoàn thiện các tính năng.
              Bấm nút bên dưới để chuyển sang giao diện dự án thực tế.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-background shadow-xl transition-all hover:bg-neon hover:text-background hover:scale-105"
              >
                <span>MỞ DEMO DỰ ÁN ({project.deploy})</span>
                <span>↗</span>
              </a>
              <Link
                to="/"
                className="liquid-glass rounded-full px-6 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-foreground"
              >
                ← Quay lại Portfolio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
