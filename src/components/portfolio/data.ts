// Portfolio data — single source of truth for Fullstack Developer Nguyễn Công Khiêm (K3mdenz).

// ==========================================
// 1. UI TEXT (Developer & System Architecture-focused)
// ==========================================
export const uiText = {
  hero: {
    sysCode: "[ DEV.K3MDENZ.STUDIO ]",
    hoverPrompt: "↳ hover to interact — discover engineering micro-interactions.",
    taglineLabel: "engineering mindset —",
    fastJump: "↳ EXPLORE SECTIONS",
  },
  about: {
    sectionNumber: "[ 01 ]",
    sectionTitle: "CORE PHILOSOPHY & ARCHITECTURE",
    aka: "engineering journey",
  },
  education: {
    sectionNumber: "[ 02 ]",
    sectionTitle: "ACADEMIC JOURNEY & CREDENTIALS",
    heading1: "ACADEMIC",
    heading2: "milestones",
    institution: "INSTITUTION",
    period: "PERIOD",
  },
  skills: {
    sectionNumber: "[ 03 ]",
    sectionTitle: "CORE ENGINEERING DISCIPLINES",
    heading1: "SYSTEM",
    heading2: "craftsmanship",
    heading3: "MASTERY.",
  },
  toolbelt: {
    sectionNumber: "[ 04 ]",
    sectionTitle: "TECH STACK & TOOLBELT",
    heading1: "STACK I",
    heading2: "build",
    heading3: "WITH.",
  },
  projects: {
    sectionNumber: "[ 05 ]",
    sectionTitle: "FEATURED PROJECTS & CAPSTONE",
    heading1: "ENGINEERED",
    heading2: "creations",
    livePreview: "↳ view live demo",
    deployedOn: "DEPLOYMENT / PLATFORM",
    aboutApp: "PROJECT OVERVIEW →",
    techStack: "CORE ARCHITECTURE & TECH STACK →",
    entry: "PROJECT ·",
    techStackDesc: "technical architecture engineered in",
  },
  contact: {
    sectionNumber: "[ 06 ]",
    sectionTitle: "COLLABORATE & CONNECT",
    heading1: "LET'S BUILD",
    heading2: "great systems.",
    availableFor: "OPEN TO OPPORTUNITIES IN",
    responseTime: "RESPONSE TIME",
    timezone: "ACTIVE REGION",
    currently: "CURRENT FOCUS",
  },
  footer: {
    version: "v2.0 — MONOREPO & HIGH PERFORMANCE",
    location: "BASE",
    signal: "SYSTEM STATUS",
    signalValue: "● ALL SYSTEMS OPERATIONAL · 60FPS",
    backToTop: "BACK TO THE SKY ↑",
    forgedIn: "CRAFTED IN REACT 19 × TANSTACK × TAILWIND",
    quotePrefix: "ENGINEERED BY",
    quoteSuffix: "— CRAFTING ROBUST MONOREPOS, REAL-TIME ENGINES & IMMERSIVE EXPERIENCES.",
    madeIn: "MADE IN VIETNAM 🇻🇳",
    endOfTransmission: "END OF TRANSMISSION",
    cvLabel: "ENGINEERING DOSSIER",
    cvCaption: "PDF · Fullstack Engineer Portfolio · 2026 Edition",
    cvView: "VIEW RESUME ↗",
    cvUrl: "/portfolio-book.pdf",
  }
} as const;

// ==========================================
// 2. PROFILE (Nguyễn Công Khiêm - K3mdenz Profile)
// ==========================================
export const profile = {
  handle: "@k3mdenz",
  name: "K3MDENZ",
  realName: "Nguyễn Công Khiêm",
  greeting: "Engineering scalable architectures &",
  role: "FULLSTACK DEVELOPER · SOFTWARE ENGINEER",
  location: "Hanoi · Vietnam",
  status: "K3MDENZ.STUDIO",
  tagline: "I architect scalable backends and craft high-fidelity interactive web apps.",
  bio: "Kỹ sư phần mềm & Fullstack Developer tốt nghiệp FPT Polytechnic (Đồ án tốt nghiệp DATN-SD33). Chuyên sâu xây dựng kiến trúc Monorepo hiệu năng cao (Spring Boot, React, Redis, PostgreSQL), giải quyết bài toán khóa phân tán chống Race Condition và kiến tạo trải nghiệm Web tương tác thời gian thực (Real-time).",
  quote:
    "Một dòng code tốt không chỉ chạy đúng trong điều kiện lý tưởng, mà phải kiên cường trước tải cao và các tình huống cạnh tranh dữ liệu (Race Conditions). Từ hệ sinh thái Monorepo Enterprise cho tới các giao diện 3D tương tác mượt mà, tôi luôn đặt sự tối ưu hiệu năng và trải nghiệm người dùng lên hàng đầu.",
  goal: "KIẾN TẠO HỆ THỐNG ENTERPRISE TẢI CAO & TRẢI NGHIỆM WEB TƯƠNG TÁC ĐỈNH CAO.",
  email: "Khiemncth03021@fpt.edu.vn",
  socials: [
    { label: "EMAIL · CONTACT", handle: "Khiemncth03021@fpt.edu.vn", href: "mailto:Khiemncth03021@fpt.edu.vn", status: "ACTIVE INBOX", dot: "neon", cta: "→ send email" },
    { label: "GITHUB", handle: "theshyguy-tsg", href: "https://github.com/theshyguy-tsg", status: "OPEN SOURCE", dot: "cyan", cta: "→ view repos" },
    { label: "LIVE DOMAIN", handle: "k3mdenz.site", href: "https://k3mdenz.site", status: "DATN ONLINE", dot: "lime", cta: "→ visit site" },
    { label: "FACEBOOK", handle: "/k3mdenz", href: "#", status: "PERSONAL SPACE", dot: "cyan", cta: "→ add friend" },
    { label: "LINKEDIN", handle: "/in/k3mdenz", href: "#", status: "PROFESSIONAL", dot: "lime", cta: "→ connect" },
  ],
  contactMeta: {
    responseTime: "< 2 HOURS",
    timezone: "GMT+7 · Hanoi, Vietnam",
    currently: "DEVELOPING NEXT-GEN ENTERPRISE PLATFORMS",
    availableFor: ["FULLSTACK ROLES", "ENTERPRISE MONOREPO", "REAL-TIME SYSTEMS", "FRONTEND ARCHITECTURE", "TECH CONSULTING"],
  },
} as const;

// ==========================================
// 3. ABOUT DATA (Engineering Pillars)
// ==========================================
export const aboutData = {
  main: {
    label: "BACKEND & MONOREPO",
    title: "SCALABLE ARCHITECTURE",
    body: "Làm chủ kiến trúc Monorepo Enterprise với Spring Boot 3, PostgreSQL 16 và Redis 7. Triển khai các thuật toán Distributed Idempotency Lock và AOP Distributed Lock để ngăn chặn tuyệt đối Race Condition và trùng lặp đơn hàng.",
  },
  vibe: {
    label: "REAL-TIME SYSTEMS",
    title: "WEBSOCKET & CONCURRENCY",
    body: "Khai thác sức mạnh STOMP over WebSocket, Supabase Realtime và Redis Pub/Sub để đồng bộ dữ liệu thời gian thực giữa nhiều phân hệ người dùng (Khách hàng, POS Thu ngân, Màn hình Bếp KDS).",
  },
  dev: {
    label: "HIGH-FIDELITY FRONTEND",
    title: "MICRO-INTERACTIONS & 3D",
    body: "Tối ưu hóa giao diện người dùng đạt chuẩn 60FPS với React 18/19, TypeScript, Tailwind CSS, Framer Motion và Canvas API. Thiết kế theo triết lý Glassmorphism và sơ đồ 2D tương tác thông minh.",
  },
} as const;

// ==========================================
// 4. EDUCATION DATA (Academic Journey)
// ==========================================
export const educationData = {
  school: "FPT POLYTECHNIC",
  major: "SOFTWARE ENGINEERING · DATN-SD33",
  period: "2022 — 2026",
  blocks: [
    { tag: "GRADUATION CAPSTONE", items: ["Đồ án Tốt nghiệp DATN-SD33: Hệ thống Buffet Booking Chuỗi KemDenz", "Bảo vệ Đồ án đạt xuất sắc với 10 Thuật toán Cốt lõi", "Kiến trúc 5 Phân hệ Portals Monorepo"] },
    { tag: "CORE BACKEND & DB", items: ["Java 17 / Spring Boot 3.2 Enterprise", "PostgreSQL 16 & Redis 7 Distributed Cache", "Flyway DB Database Migration (V1 → V41)", "Spring Security RBAC & JWT Authentication"] },
    { tag: "FRONTEND & REALTIME", items: ["React 18/19, TypeScript, Vite, TanStack", "STOMP over WebSocket & Redis Pub/Sub", "Framer Motion & Canvas 2D Spatial Engines"] },
    { tag: "DEV TOOLS & DEVOPS", items: ["Docker & Docker Compose Containerization", "Git / GitHub Monorepo Workflow", "Cloudflare Pages & Vercel Edge Deployment"] },
  ],
} as const;

// ==========================================
// 5. SKILLS DATA (Core Disciplines)
// ==========================================
export const skillsData = [
  {
    code: "01",
    title: "SYSTEM ARCHITECTURE & CONCURRENCY",
    body: "Thiết kế kiến trúc Monorepo Enterprise, xử lý tải cao, khóa phân tán Redis chống Race Condition và đảm bảo tính Idempotency cho các luồng thanh toán / đặt bàn.",
    level: 96,
  },
  {
    code: "02",
    title: "REAL-TIME MULTI-PORTAL SYNC",
    body: "Đồng bộ trạng thái tức thì giữa nhiều phân hệ người dùng (Khách hàng, Thu ngân POS, Nhà bếp KDS) qua giao thức WebSocket STOMP và Redis Pub/Sub.",
    level: 94,
  },
  {
    code: "03",
    title: "HIGH-FIDELITY UI/UX & GRAPHICS",
    body: "Kiến tạo giao diện hiện đại mượt mà với React, Framer Motion, hiệu ứng hạt ánh sáng, sơ đồ tầng 2D tương tác và đồ họa 3D Parallax chân thực.",
    level: 92,
  },
] as const;

// ==========================================
// 6. TOOLBELT DATA (Developer Tech Stack)
// ==========================================
export const toolbeltData = [
  "Java 17", "Spring Boot 3.2", "React 19", "TypeScript", "PostgreSQL 16",
  "Redis 7", "WebSocket STOMP", "Tailwind CSS v4", "TanStack Router",
  "Framer Motion", "Docker", "Flyway DB", "Vite", "Supabase", "Git / GitHub",
  "Spring Security", "Cloudflare Workers", "Vercel Edge",
] as const;

// ==========================================
// 7. PROJECTS DATA -> LANDSCAPE PHOTOGRAPHS GALLERY
// ==========================================
export const projectsData = [
  {
    id: "p01",
    coord: "DATN-SD33 · FPT POLYTECHNIC",
    name: "KEMDENZ BUFFET SYSTEM",
    year: "2026",
    type: "GRADUATION CAPSTONE · ENTERPRISE MONOREPO",
    deploy: "K3MDENZ.SITE (ONLINE BETA)",
    deployUrl: "https://k3mdenz.site",
    layout: "preview",
    preview: "/images/hero_seafood_bbq.png",
    about:
      "Dự án tốt nghiệp Đồ án SD33 (Nguyễn Công Khiêm): Hệ thống Monorepo Đặt bàn & Quản lý Chuỗi Nhà hàng Buffet cao cấp đạt chuẩn Enterprise. Tích hợp 5 phân hệ Portals thời gian thực (Customer Portal đặt bàn 2D, Cashier POS, Kitchen Display KDS, Staff Mobile, Admin Center), vận hành với 10 thuật toán cốt lõi xử lý tải cao, khóa phân tán Redis chống đặt trùng bàn và WebSocket STOMP. Trang web hiện đang online phiên bản thử nghiệm trực tiếp tại k3mdenz.site.",
    stack: ["Spring Boot 3.2", "React 18", "PostgreSQL 16", "Redis 7", "WebSocket STOMP", "Flyway DB"],
  },
  {
    id: "p02",
    coord: "SPATIAL ALGORITHM · 2D ENGINE",
    name: "BUFFET 2D FLOOR MAP",
    year: "2026",
    type: "INTERACTIVE MAP · REALTIME RESERVATION",
    deploy: "K3MDENZ.SITE PORTAL",
    deployUrl: "https://k3mdenz.site",
    layout: "preview",
    preview: "/images/luxury_floor_plan.png",
    about:
      "Phân hệ sơ đồ bàn 2D trực quan của hệ thống KemDenz Buffet: Cho phép khách hàng chọn vị trí bàn theo tầng với giao diện đồ họa sống động, tính toán trạng thái trống/đầy và khóa giữ bàn thời gian thực bằng Distributed Idempotency Lock qua Redis SETNX.",
    stack: ["React 18", "SVG Matrix", "Redis SETNX", "Spring Boot", "A* Pathfinding", "WebSocket"],
  },
  {
    id: "p03",
    coord: "INTERACTIVE CREATOR-PLAYER",
    name: "MYSTIC WINE MUSE",
    year: "2026",
    type: "CINEMATIC VISUAL NOVEL · DATE ENGINE",
    deploy: "DATING ENGINE WEB APP",
    deployUrl: "/images/restaurant_interior.png",
    layout: "preview",
    preview: "/images/restaurant_interior.png",
    about:
      "Động cơ Dựng & Trải Nghiệm Kịch Bản Hẹn Hò Tương Tác cho Cặp đôi theo mô hình Creator-Player qua 4 Phase điện ảnh (Cinematic). Tích hợp Live Preview 2 chiều qua postMessage, đồng bộ thời gian thực Supabase Realtime, bộ trắc nghiệm Tarot và lưu trữ ảnh check-in IndexedDB.",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase Realtime", "IndexedDB", "Framer Motion"],
  },
  {
    id: "p04",
    coord: "REALTIME MULTIPLAYER LOBBY",
    name: "SPINRANDOM MULTIPLAYER",
    year: "2026",
    type: "REAL-TIME GAME · 3D CARDS & QUIZ",
    deploy: "MULTIPLAYER GAME LOBBY",
    deployUrl: "/images/hero_seafood_bbq.png",
    layout: "preview",
    preview: "/images/hero_seafood_bbq.png",
    about:
      "Web-game vòng quay may mắn kết hợp thử thách trắc nghiệm tương tác thời gian thực cho 2 người chơi (Host & Guest) hoặc chơi Offline. Trải nghiệm thẻ bài 3D Parallax phản hồi di chuột và bộ âm thanh SFX & xúc giác Haptic.",
    stack: ["React 18", "TypeScript", "Framer Motion", "Supabase Realtime", "Canvas Confetti", "SFX Engine"],
  },
] as const;

export type ProjectData = (typeof projectsData)[number];

// ==========================================
// 8. HOVER EFFECTS CONFIG (Hover micro-animations)
// ==========================================
export const FX_LIST = [
  "hfx-jelly",
  "hfx-shake",
  "hfx-tilt",
  "hfx-pop",
  "hfx-skew",
  "hfx-spin",
  "hfx-bounce",
  "hfx-glow-pulse",
  "hfx-flip",
] as const;

export type HoverEffectType = (typeof FX_LIST)[number] | "random";

export const fxConfig: Record<string, HoverEffectType> = {
  aboutMainCard: "hfx-jelly",
  aboutVibeCard: "hfx-tilt",
  aboutDevCard: "hfx-flip",
  educationHeader: "hfx-skew",
  educationTimeline: "hfx-pop",
  skillCard: "hfx-bounce",
  projectStackTile: "hfx-flip",
  projectRowCard: "hfx-glow-pulse",
  projectAboutBtn: "hfx-jelly",
  projectTechBtn: "hfx-tilt",
  contactSocialLink: "hfx-shake",
};
