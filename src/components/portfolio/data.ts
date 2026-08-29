// Portfolio data — single source of truth.
// Replace placeholder fields (links, screenshots) freely.

// ==========================================
// 1. UI TEXT (Chứa TẤT CẢ các text hiển thị cứng trên giao diện)
// Bất cứ từ nào như "ABOUT", "SKILLS", "CONTACT"... đều nằm ở đây
// ==========================================
export const uiText = {
  hero: {
    sysCode: "[ PORTFOLIO.K3MDENZ ]",
    hoverPrompt: "↳ hover the name — watch it dissolve into a neural mesh.",
    taglineLabel: "tagline —",
    fastJump: "↳ FAST JUMP",
  },
  about: {
    sectionNumber: "[ 01 ]",
    sectionTitle: "ABOUT",
    aka: "a.k.a",
  },
  education: {
    sectionNumber: "[ 02 ]",
    sectionTitle: "EDUCATION",
    heading1: "ACADEMIC",
    heading2: "log",
    institution: "INSTITUTION",
    period: "PERIOD",
  },
  skills: {
    sectionNumber: "[ 03 ]",
    sectionTitle: "SKILLS",
    heading1: "WHAT I",
    heading2: "actually",
    heading3: "BRING TO THE TABLE.",
  },
  toolbelt: {
    sectionNumber: "[ 04 ]",
    sectionTitle: "TOOLBELT",
    heading1: "TOOLS I",
    heading2: "live",
    heading3: "WITH.",
  },
  projects: {
    sectionNumber: "[ 05 ]",
    sectionTitle: "PROJECTS",
    heading1: "PERSONAL",
    heading2: "case files",
    livePreview: "↳ live preview",
    deployedOn: "DEPLOYED ON",
    aboutApp: "ABOUT APP →",
    techStack: "TECH STACK →",
    entry: "ENTRY ·",
    techStackDesc: "tools & frameworks used in",
  },
  contact: {
    sectionNumber: "[ 06 ]",
    sectionTitle: "CONTACT",
    heading1: "LET'S BUILD",
    heading2: "something alive.",
    availableFor: "AVAILABLE FOR",
    responseTime: "RESPONSE TIME",
    timezone: "TIMEZONE",
    currently: "CURRENTLY",
  },
  footer: {
    version: "v5.0 — AURORA",
    location: "LOCATION",
    signal: "SIGNAL",
    signalValue: "● 60 FPS · LIGHTHOUSE 98",
    backToTop: "BACK TO TOP ↑",
    forgedIn: "FORGED IN VITE × TANSTACK",
    quotePrefix: "BUILT BY",
    quoteSuffix: "— POWERED BY CURIOSITY, FUELED BY AUTOMATION.",
    madeIn: "MADE IN VIETNAM 🇻🇳",
    endOfTransmission: "END OF TRANSMISSION",
    cvLabel: "GRAB MY CV",
    cvCaption: "PDF · 1 page · 2026 edition",
    cvView: "VIEW IN BROWSER ↗",
    cvUrl: "/cv.pdf",
  }
} as const;

// ==========================================
// 2. PROFILE (Thông tin cá nhân & Hero Section)
// Chứa tên, câu chào, trạng thái và toàn bộ các link Social Media
// ==========================================
export const profile = {
  handle: "@k3mdenz",
  name: "K3MDENZ",
  realName: "Nguyễn Công Khiêm",
  greeting: "Hi, I'm",
  role: "AI AUTOMATION ENGINEER · VIBE CODER",
  location: "HCMC · Vietnam",
  status: "K3MDENZ.STUDIO",
  tagline: "I build automation that thinks.",
  bio: "Sinh viên FPT Polytechnic ngành Phát triển phần mềm. Tập trung chính vào AI Automation, kết hợp tinh thần Vibe Coding để biến ý tưởng thành sản phẩm sống động.",
  quote:
    "Tôi là người luôn tự đẩy bản thân đến giới hạn tiếp theo — không phải vì áp lực, mà vì tôi thực sự tò mò xem mình có thể đi được bao xa. Từ việc tự học AI Automation, vibe-code ra các sản phẩm web thật sự chạy được, đến mơ về việc xây một doanh nghiệp công nghệ của riêng mình — tôi không build để học, tôi học để build thứ gì đó tạo ra giá trị.",
  goal: "MỞ DOANH NGHIỆP CÔNG NGHỆ CỦA RIÊNG MÌNH.",
  email: "k3mdenzy@gmail.com",
  socials: [
    { label: "MAIL", handle: "k3mdenzy@gmail.com", href: "mailto:k3mdenzy@gmail.com", status: "PRIMARY · < 24H", dot: "neon", cta: "→ say hi" },
    { label: "MAIL · ALT", handle: "congkhiem3009@gmail.com", href: "mailto:congkhiem3009@gmail.com", status: "BACKUP INBOX", dot: "neon", cta: "→ also here" },
    { label: "GITHUB", handle: "/theshyguy-tsg", href: "https://github.com/theshyguy-tsg", status: "SHIPPING CODE", dot: "lime", cta: "→ see code" },
    { label: "FACEBOOK", handle: "/tran.buianhnam", href: "https://www.facebook.com/tran.buianhnam", status: "DAILY", dot: "cyan", cta: "→ chat" },
    { label: "INSTAGRAM", handle: "@km3den_", href: "https://www.instagram.com/km3den_/", status: "DM OPEN", dot: "neon", cta: "→ slide in" },
    { label: "TELEGRAM", handle: "0837 855 760", href: "https://t.me/+84837855760", status: "FAST REPLY", dot: "lime", cta: "→ ping me" },
  ],
  contactMeta: {
    responseTime: "< 24 HOURS",
    timezone: "GMT+7 · HCMC",
    currently: "BUILDING TWO APPS",
    availableFor: ["FREELANCE", "COLLAB", "INTERNSHIP", "COFFEE CHAT", "AI AUTOMATION GIGS"],
  },
} as const;

// ==========================================
// 3. ABOUT DATA (Phần giới thiệu chi tiết - About Section)
// Nội dung của 2 khối văn bản mô tả ở phần About
// ==========================================
export const aboutData = {
  main: {
    label: "MAIN FOCUS",
    title: "AI AUTOMATION",
    body: "Xây dựng hệ thống AI tự động hoá — từ agent, workflow, đến pipeline xử lý dữ liệu. Mục tiêu: máy móc nghĩ thay con người ở những việc lặp lại.",
  },
  vibe: {
    label: "SIDE QUEST",
    title: "VIBE CODING",
    body: "Code theo cảm hứng, prototype nhanh, thử nghiệm UI/UX táo bạo. Lovable + Antigravity là playground chính.",
  },
  dev: {
    label: "FOUNDATION",
    title: "SOFTWARE DEV",
    body: "Nền tảng lập trình từ C++, Java đến JavaScript — hiểu rõ cấu trúc dữ liệu, thuật toán và vòng đời phát triển phần mềm. Base vững để leo lên tầng cao hơn.",
  },
} as const;

// ==========================================
// 4. EDUCATION DATA (Học vấn - Education Section)
// Chứa thông tin trường học, chuyên ngành và các khối kỹ năng học thuật
// ==========================================
export const educationData = {
  school: "FPT POLYTECHNIC",
  major: "PHÁT TRIỂN PHẦN MỀM · DATN-SD33",
  period: "2022 — 2026",
  blocks: [
    { tag: "GRADUATION CAPSTONE", items: ["Đồ án Tốt nghiệp DATN-SD33: Hệ thống Buffet Booking Chuỗi KemDenz", "10 Thuật toán Cốt lõi & Khóa phân tán Redis", "5 Phân hệ Portals Monorepo"] },
    { tag: "LANGUAGES", items: ["Java 17", "C++", "JavaScript", "TypeScript", "CSS"] },
    { tag: "DATABASE", items: ["PostgreSQL 16", "Redis 7", "SQL Server", "Flyway DB"] },
    { tag: "FRAMEWORKS", items: ["Spring Boot 3.2", "React", "Tailwind CSS", "Framer Motion"] },
    { tag: "TOOLS & DEVOPS", items: ["Docker", "GitHub", "Postman", "IntelliJ IDEA", "VS Code"] },
  ],
} as const;

// ==========================================
// 5. SKILLS DATA (Kỹ năng cốt lõi - Skills Section)
// Các kỹ năng hiển thị kèm phần trăm năng lực (level)
// ==========================================
export const skillsData = [
  {
    code: "01",
    title: "TRAIN AI MODELS",
    body: "Fine-tune, prompt-engineer và đánh giá model AI. Hiểu pipeline từ data prep đến deployment.",
    level: 82,
  },
  {
    code: "02",
    title: "MULTI-TOOL MASTERY",
    body: "Thành thạo nhiều nguồn công cụ AI / no-code / dev — chuyển đổi linh hoạt theo yêu cầu dự án.",
    level: 90,
  },
  {
    code: "03",
    title: "AUTOMATION FLOW",
    body: "Thiết kế workflow tự động hoá kết nối API, AI agent, và database — giảm thao tác thủ công.",
    level: 75,
  },
] as const;

// ==========================================
// 6. TOOLBELT DATA (Công cụ - Toolbelt Section)
// Danh sách các công cụ chạy chữ ngang màn hình
// ==========================================
export const toolbeltData = [
  "Java 17", "Spring Boot 3.2", "PostgreSQL 16", "Redis 7", "WebSocket STOMP",
  "React", "TypeScript", "Tailwind", "Framer Motion", "Docker", "Flyway DB",
  "ChatGPT", "Claude", "Gemini", "Lovable", "Antigravity", "Cursor",
  "Vercel", "Netlify", "Supabase", "GitHub", "VS Code", "IntelliJ",
] as const;

// ==========================================
// 7. PROJECTS DATA (Dự án cá nhân - Projects Section)
// Khai báo các dự án. Có thể thay đổi deployUrl và preview.
// ==========================================
export const projectsData = [
  {
    id: "p00",
    coord: "DATN-SD33 · FPT POLYTECHNIC",
    name: "KEMDENZ BUFFET SYSTEM",
    year: "2026",
    type: "GRADUATION CAPSTONE · ENTERPRISE MONOREPO",
    deploy: "K3MDENZ.SITE (LIVE)",
    deployUrl: "https://k3mdenz.site",
    layout: "preview",
    preview: "/images/hero_seafood_bbq.png",
    about:
      "Đồ án tốt nghiệp chuyên ngành Phát triển phần mềm (FPT Polytechnic - Sinh viên: Nguyễn Công Khiêm): Hệ thống Monorepo Đặt bàn & Quản lý Nhà hàng Buffet Chuỗi KemDenz cao cấp. Tích hợp 5 Phân hệ Portals thời gian thực (Customer Portal đặt bàn 2D trực quan, Thu ngân Cashier POS, Màn hình Bếp KDS, Phục vụ Staff Mobile, Admin Command Center), vận hành 10 thuật toán cốt lõi xử lý tải cao, khóa phân tán Redis chống Race Condition đặt trùng bàn và WebSocket STOMP. Website hiện đang hoạt động trực tiếp tại k3mdenz.site.",
    stack: ["Spring Boot 3.2", "React 18", "PostgreSQL 16", "Redis 7", "WebSocket STOMP", "Flyway DB", "Docker"],
  },
  {
    id: "p01",
    coord: "0xKD-001",
    name: "DATING APP",
    year: "2026",
    type: "MATCHING · REALTIME",
    deploy: "NETLIFY",
    deployUrl: "https://statuesque-kashata-23f0cd.netlify.app/",
    layout: "preview",
    preview: "/images/restaurant_interior.png",
    about:
      "Dating app cá nhân — flow swipe-to-match, realtime chat và profile algorithm. Tập trung trải nghiệm vuốt mượt và phản hồi tức thì.",
    stack: ["React", "Tailwind", "Framer Motion", "Supabase", "Netlify"],
  },
  {
    id: "p02",
    coord: "0xKD-002",
    name: "SPIN-QUIZZ",
    year: "2026",
    type: "GAME · MULTIPLAYER",
    deploy: "VERCEL",
    deployUrl: "https://spin-ran-dom.vercel.app",
    layout: "preview",
    preview: "/placeholder.svg",
    about:
      "Nền tảng trò chơi vòng quay may mắn kết hợp trả lời câu hỏi hỗ trợ Multiplayer (Supabase room system). Người chơi có thể tạo phòng bằng custom code, cấu hình vòng quay linh hoạt cùng kho câu hỏi đa dạng không lặp lại.",
    stack: ["React", "TypeScript", "Supabase", "Tailwind", "Framer Motion"],
  },
] as const;

export type ProjectData = (typeof projectsData)[number];

// ==========================================
// 8. HOVER EFFECTS CONFIG (Cấu hình hiệu ứng hover)
// "random": Ngẫu nhiên mỗi lần lướt chuột
// Hoặc gán cố định: "hfx-jelly", "hfx-shake", "hfx-tilt", "hfx-pop", "hfx-skew", "hfx-spin", "hfx-bounce", "hfx-glow-pulse", "hfx-flip"
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
