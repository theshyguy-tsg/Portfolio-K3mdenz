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
// 7. PROJECTS DATA (Dự án cá nhân & Đồ án tốt nghiệp)
// Khai báo các dự án với đầy đủ chi tiết phục vụ trang chi tiết
// ==========================================
export const projectsData = [
  {
    id: "p00",
    slug: "kemdenz-buffet",
    coord: "DATN-SD33 · FPT POLYTECHNIC",
    name: "KEMDENZ BUFFET SYSTEM",
    subtitle: "Hệ thống Monorepo Đặt bàn & Quản lý Chuỗi Nhà hàng Buffet Cao Cấp",
    year: "2026",
    status: "IN DEVELOPMENT · BETA ONLINE",
    statusText: "Đang phát triển & hoàn thiện (Sprint 4.5/5)",
    progressPercent: 88,
    currentPhase: "Hoàn thiện đồng bộ 5 Portals thời gian thực & Stress-test khóa phân tán Redis",
    type: "GRADUATION CAPSTONE · ENTERPRISE MONOREPO",
    deploy: "K3MDENZ.SITE (BETA LIVE)",
    deployUrl: "https://k3mdenz.site",
    layout: "preview",
    preview: "/images/hero_seafood_bbq.png",
    bannerImage: "/images/hero_seafood_bbq.png",
    about:
      "Đồ án tốt nghiệp chuyên ngành Phát triển phần mềm (FPT Polytechnic - Sinh viên: Nguyễn Công Khiêm): Hệ thống Monorepo Đặt bàn & Quản lý Chuỗi Nhà hàng Buffet Chuỗi KemDenz cao cấp. Tích hợp 5 Phân hệ Portals thời gian thực (Customer Portal đặt bàn 2D trực quan, Thu ngân Cashier POS, Màn hình Bếp KDS, Phục vụ Staff Mobile, Admin Command Center), vận hành 10 thuật toán cốt lõi xử lý tải cao, khóa phân tán Redis chống Race Condition đặt trùng bàn và WebSocket STOMP. Website hiện đang hoạt động phiên bản thử nghiệm trực tiếp tại k3mdenz.site.",
    problemStatement:
      "Trong các chuỗi nhà hàng buffet quy mô lớn, bài toán khó nhất là tình trạng nghẽn cổ chai khi hàng trăm khách hàng cùng lúc chọn bàn vào giờ cao điểm, dẫn đến xung đột dữ liệu (Race Condition đặt trùng bàn), cũng như việc đồng bộ chậm trễ giữa khách gọi món, thu ngân POS và đầu bếp KDS làm gián đoạn quy trình phục vụ.",
    solutionArchitecture:
      "Xây dựng kiến trúc Monorepo Enterprise đa tầng với Spring Boot 3.2 làm Backend Core, PostgreSQL 16 + Redis 7 làm cơ sở dữ liệu & bộ nhớ đệm phân tán. Triển khai thuật toán Distributed Idempotency Lock qua Redis SETNX và AOP Aspect để cô lập tuyệt đối luồng thanh toán / giữ chỗ, kết hợp STOMP over WebSocket để phát sóng biến động trạng thái bàn & đơn món tức thời dưới 20ms.",
    portals: [
      {
        name: "Customer Portal (Khách hàng)",
        target: "Web & Mobile Browser",
        role: "Trải nghiệm Đặt bàn 2D & Đặt món",
        desc: "Sơ đồ bàn 2D trực quan theo tầng, chọn combo buffet, giữ bàn theo thời gian thực và thanh toán trực tuyến an toàn.",
      },
      {
        name: "Cashier POS (Thu ngân)",
        target: "Desktop / Tablet POS",
        role: "Quản lý Bàn & Thanh toán hóa đơn",
        desc: "Giao diện thu ngân tối ưu thao tác nhanh, mở bàn, in hóa đơn VAT, áp dụng voucher khuyến mãi và kết nối cổng thanh toán.",
      },
      {
        name: "Kitchen Display System - KDS (Bếp)",
        target: "Smart Screen / KDS Terminal",
        role: "Điều phối Đơn chế biến tức thời",
        desc: "Nhận lệnh gọi món từ khách/nhân viên tức thời qua WebSocket, đếm thời gian chế biến, phân loại món theo line nướng/lẩu/tráng miệng.",
      },
      {
        name: "Staff Mobile Portal (Phục vụ)",
        target: "Smartphone App",
        role: "Order tại bàn & Phục vụ linh hoạt",
        desc: "Nhân viên kiểm tra trạng thái bàn trống, hỗ trợ khách thêm món hoặc yêu cầu hỗ trợ bàn nhanh chóng.",
      },
      {
        name: "Admin Command Center (Quản trị)",
        target: "Desktop Admin",
        role: "Báo cáo & Cấu hình chuỗi nhà hàng",
        desc: "Biểu đồ phân tích doanh thu, quản lý định lượng kho nguyên liệu, phân quyền tài khoản RBAC và điều phối chi nhánh.",
      },
    ],
    technicalHighlights: [
      {
        tag: "CONCURRENCY",
        title: "Khóa Phân Tán Redis (Distributed Idempotency Lock)",
        details: [
          "Sử dụng Redis SETNX với TTL động chống tuyệt đối Race Condition khi 2 khách hàng cùng bấm giữ 1 bàn trong cùng 1 mili-giây.",
          "Áp dụng Custom Annotation `@RedisLocked` qua Spring AOP giúp mã nguồn sạch đẹp, tự động unlock trong block finally.",
          "Cơ chế Idempotency Token bảo vệ mọi giao dịch thanh toán không bị trừ tiền trùng lặp.",
        ],
      },
      {
        tag: "REALTIME",
        title: "Hạ Tầng WebSocket STOMP & Redis Pub/Sub",
        details: [
          "Kênh truyền tin 2 chiều STOMP over WebSocket đồng bộ dữ liệu thời gian thực giữa 5 Portals với độ trễ < 20ms.",
          "Tích hợp Redis Pub/Sub đóng vai trò Message Broker phân tán khi mở rộng quy trình đa server (Clustering).",
          "Tự động tái kết nối (Heartbeat & Auto Reconnect) khi mạng thiết bị nhân viên chập chờn.",
        ],
      },
      {
        tag: "SPATIAL 2D",
        title: "Thuật Toán Sơ Đồ Bàn 2D & Định Tuyến Phục Vụ",
        details: [
          "Mô phỏng sơ đồ kiến trúc mặt bằng nhà hàng bằng SVG Matrix Canvas chuẩn xác tỷ lệ.",
          "Tính toán trạng thái bàn (Trống, Đang giữ chỗ, Đang dùng bữa, Cần dọn dẹp) theo màu sắc trực quan.",
          "Hỗ trợ kéo thả bố trí bàn linh hoạt cho quản lý chi nhánh.",
        ],
      },
      {
        tag: "DATABASE",
        title: "Flyway Database Migration (V1 → V41)",
        details: [
          "Toàn bộ 41 bảng dữ liệu được quản lý phiên bản nghiêm ngặt bằng Flyway Migration.",
          "Tự động migrate schema và seed dữ liệu mẫu khi khởi chạy Docker Container.",
          "Tối ưu Index B-Tree cho các trường tìm kiếm tần suất cao: `booking_time`, `table_id`, `status`.",
        ],
      },
    ],
    roadmap: [
      { phase: "PHASE 01", title: "Thiết kế CSDL 41 Bảng & Kiến trúc Monorepo", done: true, desc: "Xác lập kiến trúc Spring Boot 3.2, PostgreSQL 16 và phân rã 5 portals." },
      { phase: "PHASE 02", title: "Phát triển Core API & Khóa phân tán Redis", done: true, desc: "Xây dựng 60+ RESTful APIs, Spring Security JWT và thuật toán khóa bàn." },
      { phase: "PHASE 03", title: "Xây dựng 5 Giao diện Portals Frontend", done: true, desc: "Hoàn thiện Customer Portal đặt bàn 2D, Cashier POS, KDS Bếp, Staff Mobile & Admin." },
      { phase: "PHASE 04", title: "Deploy Domain k3mdenz.site & Thử nghiệm Beta", done: true, desc: "Đưa hệ thống online trực tiếp, kết nối domain và kiểm thử luồng thực tế." },
      { phase: "PHASE 05", title: "Stress-Test Tải Cao & Báo Cáo Tốt Nghiệp", done: false, desc: "Kiểm thử tải 1000+ RPS đồng thời, tối ưu 60FPS và chuẩn bị hồ sơ bảo vệ DATN." },
    ],
    gallery: [
      { title: "Customer Portal & Menu", image: "/images/hero_seafood_bbq.png", caption: "Giao diện trang chủ đặt bàn trực tuyến và thực đơn món nướng hải sản cao cấp." },
      { title: "Sơ đồ Tầng 2D Thông minh", image: "/images/luxury_floor_plan.png", caption: "Bản đồ bàn 2D thời gian thực hiển thị trạng thái vị trí bàn theo từng tầng." },
      { title: "Không gian Nhà hàng Sang trọng", image: "/images/restaurant_interior.png", caption: "Mô hình kiến trúc không gian Fine Dining và khu vực quầy buffet line." },
    ],
    stack: ["Java 17", "Spring Boot 3.2", "React 18", "PostgreSQL 16", "Redis 7", "WebSocket STOMP", "Flyway DB", "Docker", "Tailwind CSS"],
  },
  {
    id: "p01",
    slug: "dating-app",
    coord: "0xKD-001 · NETLIFY",
    name: "DATING APP (CỔNG KHẾ ƯỚC)",
    subtitle: "Động cơ Dựng & Trải Nghiệm Kịch Bản Hẹn Hò Tương Tác Cặp Đôi",
    year: "2026",
    status: "SHIPPED · LIVE",
    statusText: "Đã triển khai chính thức",
    progressPercent: 100,
    currentPhase: "Vận hành ổn định & mở rộng kịch bản",
    type: "CINEMATIC VISUAL NOVEL · DATE ENGINE",
    deploy: "NETLIFY HOSTED",
    deployUrl: "https://statuesque-kashata-23f0cd.netlify.app/",
    layout: "preview",
    preview: "/images/restaurant_interior.png",
    bannerImage: "/images/restaurant_interior.png",
    about:
      "Dating app cá nhân — Động cơ Dựng & Trải Nghiệm Kịch Bản Hẹn Hò Tương Tác cho Cặp đôi theo mô hình Creator-Player qua 4 Phase điện ảnh (Cinematic). Flow swipe-to-match, Live Preview 2 chiều qua postMessage, đồng bộ thời gian thực Supabase Realtime, bộ trắc nghiệm Tarot và lưu trữ ảnh check-in IndexedDB.",
    problemStatement:
      "Các cặp đôi thường gặp khó khăn trong việc lên ý tưởng hẹn hò và lưu giữ kỷ niệm tương tác một cách ý nghĩa, sống động.",
    solutionArchitecture:
      "Mô hình Creator-Player cho phép 1 người thiết kế kịch bản và đối phương tham gia giải đố, mở khóa quà tặng và lưu ảnh kỷ niệm.",
    technicalHighlights: [
      {
        tag: "REALTIME",
        title: "Supabase Realtime Sync",
        details: ["Đồng bộ tiến độ giữa 2 thiết bị người chơi với độ trễ thấp.", "Kênh trao đổi tin nhắn mật mã bí mật."],
      },
      {
        tag: "ANIMATION",
        title: "Framer Motion 4-Phase Transition",
        details: ["Hiệu ứng chuyển cảnh điện ảnh 60FPS.", "Tích hợp âm thanh SFX và xúc giác."],
      },
    ],
    roadmap: [
      { phase: "PHASE 01", title: "Thiết kế kịch bản 4 Phase", done: true, desc: "Xây dựng luồng Creator & Player." },
      { phase: "PHASE 02", title: "Tích hợp Supabase & IndexedDB", done: true, desc: "Lưu trữ dữ liệu và ảnh offline." },
      { phase: "PHASE 03", title: "Deploy Netlify", done: true, desc: "Phát hành chính thức." },
    ],
    gallery: [
      { title: "Giao diện Hẹn Hò Điện Ảnh", image: "/images/restaurant_interior.png", caption: "Không gian trải nghiệm hẹn hò bí ẩn và lãng mạn." },
    ],
    stack: ["React 18", "Tailwind CSS", "Framer Motion", "Supabase", "IndexedDB", "Netlify"],
  },
  {
    id: "p02",
    slug: "spin-quizz",
    coord: "0xKD-002 · VERCEL",
    name: "SPIN-QUIZZ (THE KINETIC ROULETTE)",
    subtitle: "Web-game Vòng Quay May Mắn & Thử Thách Trắc Nghiệm Realtime",
    year: "2026",
    status: "SHIPPED · LIVE",
    statusText: "Đã triển khai chính thức",
    progressPercent: 100,
    currentPhase: "Vận hành multiplayer ổn định",
    type: "REAL-TIME GAME · 3D CARDS & QUIZ",
    deploy: "VERCEL HOSTED",
    deployUrl: "https://spin-ran-dom.vercel.app",
    layout: "preview",
    preview: "/images/luxury_floor_plan.png",
    bannerImage: "/images/luxury_floor_plan.png",
    about:
      "Nền tảng trò chơi vòng quay may mắn kết hợp trả lời câu hỏi hỗ trợ Multiplayer (Supabase room system). Người chơi có thể tạo phòng bằng custom code, cấu hình vòng quay linh hoạt cùng kho câu hỏi đa dạng không lặp lại. Spring Easing với hệ số động học thích ứng từ server real-time, thẻ bài 3D Parallax mượt mà không bao giờ rớt 60FPS.",
    problemStatement:
      "Các mini-game vòng quay thông thường thường đơn điệu, thiếu tính tương tác trực tiếp nhiều người chơi và vật lý quay không chân thực.",
    solutionArchitecture:
      "Kết hợp Canvas Physics Engine mô phỏng lực ma sát & quán tính thật với Supabase Room Protocol để kết nối phòng chơi 2-10 người.",
    technicalHighlights: [
      {
        tag: "PHYSICS",
        title: "Spring Physics Canvas Engine",
        details: ["Vòng quay dừng lại tự nhiên theo hàm giảm chấn vật lý.", "Bộ hiệu ứng hạt Canvas Confetti khi trúng thưởng."],
      },
      {
        tag: "MULTIPLAYER",
        title: "Lobby Room Code Realtime",
        details: ["Tạo và tham gia phòng qua mã PIN 6 số tức thì.", "Đồng bộ điểm số và lượt quay trực tiếp."],
      },
    ],
    roadmap: [
      { phase: "PHASE 01", title: "Thuật toán Vòng quay Canvas", done: true, desc: "Xây dựng engine quay vật lý thật." },
      { phase: "PHASE 02", title: "Multiplayer Room System", done: true, desc: "Đồng bộ phòng chơi qua Supabase." },
      { phase: "PHASE 03", title: "Deploy Vercel", done: true, desc: "Phát hành bản Production." },
    ],
    gallery: [
      { title: "Vòng Quay & Thẻ Bài 3D", image: "/images/luxury_floor_plan.png", caption: "Giao diện trò chơi vòng quay và câu hỏi trắc nghiệm." },
    ],
    stack: ["React 18", "TypeScript", "Framer Motion", "Canvas API", "Supabase Realtime", "Vercel"],
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
