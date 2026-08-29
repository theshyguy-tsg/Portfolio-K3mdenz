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
  greeting: "Hi, I'm",
  role: "FULLSTACK DEVELOPER · AI AUTOMATION ENGINEER",
  location: "HCMC · Vietnam",
  status: "K3MDENZ.STUDIO",
  tagline: "I build automation that thinks & craft high-fidelity interactive web apps.",
  bio: "Sinh viên FPT Polytechnic ngành Phát triển phần mềm (Đồ án tốt nghiệp DATN-SD33). Tập trung chính vào Fullstack Monorepo, AI Automation và kết hợp tinh thần Vibe Coding để biến ý tưởng thành sản phẩm sống động.",
  quote:
    "Tôi là người luôn tự đẩy bản thân đến giới hạn tiếp theo — không phải vì áp lực, mà vì tôi thực sự tò mò xem mình có thể đi được bao xa. Từ việc tự học AI Automation, vibe-code ra các sản phẩm web thật sự chạy được, đến mơ về việc xây một doanh nghiệp công nghệ của riêng mình — tôi không build để học, tôi học để build thứ gì đó tạo ra giá trị.",
  goal: "MỞ DOANH NGHIỆP CÔNG NGHỆ CỦA RIÊNG MÌNH.",
  email: "k3mdenzy@gmail.com",
  socials: [
    { label: "MAIL", handle: "k3mdenzy@gmail.com", href: "mailto:k3mdenzy@gmail.com", status: "PRIMARY · < 24H", dot: "neon", cta: "→ say hi" },
    { label: "MAIL · ALT", handle: "congkhiem3009@gmail.com", href: "mailto:congkhiem3009@gmail.com", status: "BACKUP INBOX", dot: "neon", cta: "→ also here" },
    { label: "LIVE DOMAIN", handle: "k3mdenz.site", href: "https://k3mdenz.site", status: "DATN ONLINE", dot: "lime", cta: "→ visit site" },
    { label: "GITHUB", handle: "/theshyguy-tsg", href: "https://github.com/theshyguy-tsg", status: "SHIPPING CODE", dot: "lime", cta: "→ see code" },
    { label: "FACEBOOK", handle: "/tran.buianhnam", href: "https://www.facebook.com/tran.buianhnam", status: "DAILY", dot: "cyan", cta: "→ chat" },
    { label: "INSTAGRAM", handle: "@km3den_", href: "https://www.instagram.com/km3den_/", status: "DM OPEN", dot: "neon", cta: "→ slide in" },
    { label: "TELEGRAM", handle: "0837 855 760", href: "https://t.me/+84837855760", status: "FAST REPLY", dot: "lime", cta: "→ ping me" },
  ],
  contactMeta: {
    responseTime: "< 24 HOURS",
    timezone: "GMT+7 · HCMC",
    currently: "BUILDING HIGH-SCALE APPS & AI WORKFLOWS",
    availableFor: ["FULLSTACK ROLES", "FREELANCE", "COLLAB", "INTERNSHIP", "AI AUTOMATION GIGS", "COFFEE CHAT"],
  },
} as const;

// ==========================================
// 3. ABOUT DATA (Engineering Pillars)
// ==========================================
export const aboutData = {
  main: {
    label: "MAIN FOCUS",
    title: "AI AUTOMATION & BACKEND",
    body: "Xây dựng hệ thống AI tự động hoá và kiến trúc Monorepo Enterprise với Spring Boot 3, PostgreSQL 16 và Redis 7. Triển khai các thuật toán Distributed Idempotency Lock và AOP Distributed Lock để ngăn chặn tuyệt đối Race Condition và trùng lặp đơn hàng.",
  },
  vibe: {
    label: "SIDE QUEST",
    title: "VIBE CODING & REAL-TIME",
    body: "Code theo cảm hứng, prototype nhanh, thử nghiệm UI/UX táo bạo. Khai thác sức mạnh STOMP over WebSocket, Supabase Realtime và Redis Pub/Sub để đồng bộ dữ liệu thời gian thực giữa nhiều phân hệ người dùng.",
  },
  dev: {
    label: "FOUNDATION",
    title: "SOFTWARE ENGINEERING",
    body: "Nền tảng lập trình từ C++, Java đến TypeScript — hiểu rõ cấu trúc dữ liệu, thuật toán và vòng đời phát triển phần mềm. Tối ưu hóa giao diện người dùng đạt chuẩn 60FPS với React 18/19, Tailwind CSS và Framer Motion.",
  },
} as const;

// ==========================================
// 4. EDUCATION DATA (Academic Journey)
// ==========================================
export const educationData = {
  school: "FPT POLYTECHNIC",
  major: "PHÁT TRIỂN PHẦN MỀM · DATN-SD33",
  period: "2022 — 2026",
  blocks: [
    { tag: "GRADUATION CAPSTONE", items: ["Đồ án Tốt nghiệp DATN-SD33: Hệ thống Buffet Booking Chuỗi KemDenz", "Bảo vệ Đồ án đạt xuất sắc với 10 Thuật toán Cốt lõi", "Kiến trúc 5 Phân hệ Portals Monorepo"] },
    { tag: "LANGUAGES & CORE", items: ["Java 17 / Spring Boot 3.2 Enterprise", "C++ Algorithms & Data Structures", "TypeScript & JavaScript ESNext", "SQL Server & PostgreSQL 16"] },
    { tag: "DATABASE & CACHE", items: ["Redis 7 Distributed Cache & Lock", "Flyway DB Database Migration (V1 → V41)", "Supabase Realtime & PostgreSQL"] },
    { tag: "TOOLS & DEVOPS", items: ["Docker & Containerization", "GitHub VCS Workflow", "Postman API Testing", "IntelliJ IDEA & VS Code"] },
  ],
} as const;

// ==========================================
// 5. SKILLS DATA (Core Disciplines)
// ==========================================
export const skillsData = [
  {
    code: "01",
    title: "TRAIN AI MODELS & AUTOMATION",
    body: "Fine-tune, prompt-engineer và xây dựng workflow tự động hoá kết nối API, AI agent, và database — giảm tối đa thao tác thủ công.",
    level: 95,
  },
  {
    code: "02",
    title: "SYSTEM ARCHITECTURE & CONCURRENCY",
    body: "Thiết kế kiến trúc Monorepo Enterprise, xử lý tải cao, khóa phân tán Redis chống Race Condition và đảm bảo tính Idempotency cho các luồng thanh toán / đặt bàn.",
    level: 96,
  },
  {
    code: "03",
    title: "REAL-TIME MULTI-PORTAL SYNC",
    body: "Đồng bộ trạng thái tức thì giữa nhiều phân hệ người dùng (Khách hàng, Thu ngân POS, Nhà bếp KDS) qua giao thức WebSocket STOMP và Redis Pub/Sub.",
    level: 92,
  },
] as const;

// ==========================================
// 6. TOOLBELT DATA (Developer Tech Stack)
// ==========================================
export const toolbeltData = [
  "ChatGPT", "Claude", "Gemini", "Lovable", "Antigravity", "Cursor",
  "Java 17", "Spring Boot 3.2", "React 19", "TypeScript", "PostgreSQL 16",
  "Redis 7", "WebSocket STOMP", "Tailwind CSS v4", "Supabase", "Docker",
  "Flyway DB", "Vite", "Vercel", "Netlify", "GitHub", "VS Code", "IntelliJ",
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
    coord: "0xKD-001 · NETLIFY",
    name: "CỔNG KHẾ ƯỚC (DATING APP)",
    year: "2026",
    type: "CINEMATIC VISUAL NOVEL · DATE ENGINE",
    deploy: "NETLIFY HOSTED",
    deployUrl: "https://statuesque-kashata-23f0cd.netlify.app/",
    layout: "preview",
    preview: "/images/restaurant_interior.png",
    about:
      "Dating app cá nhân — Động cơ Dựng & Trải Nghiệm Kịch Bản Hẹn Hò Tương Tác cho Cặp đôi theo mô hình Creator-Player qua 4 Phase điện ảnh (Cinematic). Flow swipe-to-match, Live Preview 2 chiều qua postMessage, đồng bộ thời gian thực Supabase Realtime, bộ trắc nghiệm Tarot và lưu trữ ảnh check-in IndexedDB.",
    stack: ["React 18", "Tailwind CSS", "Framer Motion", "Supabase", "IndexedDB"],
  },
  {
    id: "p03",
    coord: "0xKD-002 · VERCEL",
    name: "THE KINETIC ROULETTE (SPIN-QUIZZ)",
    year: "2026",
    type: "REAL-TIME GAME · 3D CARDS & QUIZ",
    deploy: "VERCEL HOSTED",
    deployUrl: "https://spin-ran-dom.vercel.app",
    layout: "preview",
    preview: "/images/luxury_floor_plan.png",
    about:
      "Nền tảng trò chơi vòng quay may mắn kết hợp trả lời câu hỏi hỗ trợ Multiplayer Real-time (Supabase room system). Spring Easing với hệ số động học thích ứng từ server real-time. Vòng quay dừng lại như vật lý thật, thẻ bài 3D Parallax mượt mà không bao giờ rớt 60FPS.",
    stack: ["React 18", "TypeScript", "Framer Motion", "Canvas API", "Supabase Realtime"],
  },
  {
    id: "p04",
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
