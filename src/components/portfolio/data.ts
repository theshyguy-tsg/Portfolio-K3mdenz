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
  socials: [
    { label: "MAIL", handle: "k3mdenzy@gmail.com", href: "mailto:k3mdenzy@gmail.com", status: "PRIMARY · < 24H", dot: "neon", cta: "→ say hi" },
    { label: "MAIL · ALT", handle: "congkhiem3009@gmail.com", href: "mailto:congkhiem3009@gmail.com", status: "BACKUP INBOX", dot: "neon", cta: "→ also here" },
    { label: "GITHUB", handle: "/theshyguy-tsg", href: "https://github.com/theshyguy-tsg", status: "SHIPPING CODE", dot: "lime", cta: "→ see code" },
    { label: "TELEGRAM", handle: "0837 855 760", href: "https://t.me/+84837855760", status: "FAST REPLY", dot: "lime", cta: "→ ping me" },
    { label: "INSTAGRAM", handle: "@km3den_", href: "https://www.instagram.com/km3den_/", status: "DM OPEN", dot: "neon", cta: "→ slide in" },
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
    {
      tag: "GRADUATION CAPSTONE",
      items: [
        "Đồ án Tốt nghiệp DATN-SD33: Hệ thống Đặt bàn & Quản lý Chuỗi Nhà hàng Buffet KemDenz",
        "10 Thuật toán Cốt lõi & Khóa phân tán Redis SETNX, @RedisLocked AOP",
        "Kiến trúc Monorepo 5 Phân hệ Portals (Customer, Cashier POS, KDS Bếp, Staff Mobile, Admin)",
      ],
    },
    { tag: "BACKEND & CORE", items: ["Java 17", "Spring Boot 3.2.4", "Spring Security 6 (JWT + RBAC)", "Spring Data JPA", "Apache POI"] },
    { tag: "DATABASE & CACHING", items: ["PostgreSQL 16", "Redis 7 (Distributed Lock & Pub/Sub)", "Flyway DB (V1 ➔ V41)", "SQL Server"] },
    { tag: "FRONTEND & UI/UX", items: ["React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 2D Canvas"] },
    { tag: "REALTIME & DEVOPS", items: ["WebSocket STOMP over SockJS", "Docker", "Git / GitHub", "Postman", "IntelliJ IDEA", "VS Code"] },
  ],
} as const;

// ==========================================
// 5. SKILLS DATA (Kỹ năng cốt lõi - Skills Section)
// Các kỹ năng hiển thị kèm phần trăm năng lực (level)
// ==========================================
export const skillsData = [
  {
    code: "01",
    title: "AI AUTOMATION & WORKFLOWS",
    body: "Thiết kế agent AI, prompt engineering và xây dựng workflow tự động hóa kết nối API, LLM và cơ sở dữ liệu để tối ưu hóa quy trình.",
    level: 88,
  },
  {
    code: "02",
    title: "FULLSTACK & DISTRIBUTED SYSTEMS",
    body: "Xây dựng hệ thống phân tán Spring Boot 3.2, React 18 Monorepo, PostgreSQL 16, Redis khóa phân tán SETNX và WebSocket thời gian thực.",
    level: 90,
  },
  {
    code: "03",
    title: "VIBE CODING & RAPID PROTOTYPING",
    body: "Hiện thực hóa ý tưởng UI/UX nhanh chóng, animation 60FPS mượt mà với Framer Motion và Canvas API, biến concept thành sản phẩm sống động.",
    level: 85,
  },
] as const;

// ==========================================
// 6. TOOLBELT DATA (Công cụ - Toolbelt Section)
// Danh sách các công cụ chạy chữ ngang màn hình
// ==========================================
export const toolbeltData = [
  "Java 17", "Spring Boot 3.2.4", "PostgreSQL 16", "Redis 7", "WebSocket STOMP",
  "React 18", "TypeScript", "Tailwind CSS", "Framer Motion", "Docker", "Flyway DB",
  "Apache POI", "ChatGPT", "Claude", "Gemini", "Antigravity", "Cursor",
  "Vercel", "Netlify", "GitHub", "VS Code", "IntelliJ IDEA", "Postman",
] as const;

// ==========================================
// 7. PROJECTS DATA (Dự án cá nhân & Đồ án tốt nghiệp)
// Khai báo chính xác 100% theo mã nguồn thực tế của từng dự án
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
      "Đồ án tốt nghiệp Chuyên ngành Phát triển phần mềm (FPT Polytechnic - Sinh viên: Nguyễn Công Khiêm, Mã SV: SD33): Hệ thống Monorepo Đặt bàn & Quản lý Chuỗi Nhà hàng Buffet KemDenz. Tích hợp 5 Phân hệ Portals vận hành trên cùng Monorepo (Customer Portal đặt bàn 2D, Cashier POS thu ngân, KDS Kitchen Display màn hình bếp, Staff Mobile phục vụ, Admin Command Center), CSDL PostgreSQL 16 quản lý qua 41 migration Flyway, Redis 7 (khóa phân tán SETNX & Rate limit), STOMP over WebSocket và Apache POI kết xuất báo cáo Excel.",
    problemStatement:
      "Mô hình chuỗi nhà hàng Buffet có đặc thù tỷ lệ lấp đầy dồn vào khung giờ cao điểm (18:00 - 20:30), gây nghẽn luồng dữ liệu khi hàng trăm khách cùng bấm chọn 1 vị trí bàn đẹp dẫn đến Race Condition (đặt trùng bàn / overbooking). Đồng thời, sự thiếu đồng bộ tức thời giữa khách gọi món, thu ngân POS và đầu bếp KDS làm tăng thời gian chờ và thất thoát đơn.",
    solutionArchitecture:
      "Xây dựng kiến trúc Monorepo chuẩn Enterprise với Backend Spring Boot 3.2.4 (Java 17) + PostgreSQL 16 + Redis 7. Triển khai 10 giải thuật cốt lõi: Khóa phân tán Redis SETNX và Spring AOP (@RedisLocked) bảo vệ dữ liệu đặt bàn và điểm K-Points; STOMP over WebSocket phát sóng biến động trạng thái bàn tức thì dưới 20ms; Cửa sổ trượt Redis ZSET giới hạn 30 req/phút chống DDoS; Flyway DB quản lý 41 bảng dữ liệu nhất quán.",
    portals: [
      {
        name: "Customer Portal (Khách hàng)",
        target: "Web & Mobile Browser (apps/customer-portal)",
        role: "Trải nghiệm Đặt bàn 2D & Đặt cọc online",
        desc: "Khách hàng chọn chi nhánh, khung giờ, xem sơ đồ tầng 2D trực quan, áp voucher giảm giá, đổi điểm K-Points và thanh toán cọc qua VietQR/PayOS.",
      },
      {
        name: "Cashier POS (Thu ngân)",
        target: "Desktop / Tablet POS (apps/cashier-portal)",
        role: "Check-in, Mở bàn & Thanh toán hóa đơn",
        desc: "Giao diện thu ngân tối ưu tốc độ cao, check-in nhận bàn theo mã booking, mở bàn ăn buffet, in hóa đơn VAT và đồng bộ sơ đồ bàn real-time qua WebSocket STOMP.",
      },
      {
        name: "Kitchen Display System - KDS (Bếp & Bar)",
        target: "Smart Screen / Tablet (apps/kds-portal)",
        role: "Màn hình Bếp điều phối chế biến tức thời",
        desc: "Hiển thị danh sách món cần chế biến theo thứ tự thời gian đặt thực tế qua WebSocket, phân loại món theo line nướng/lẩu/tráng miệng.",
      },
      {
        name: "Staff Mobile Portal (Phục vụ)",
        target: "Smartphone App / Web (apps/staff-portal)",
        role: "Order tại bàn & Báo dọn bàn",
        desc: "Nhân viên phục vụ kiểm tra trạng thái bàn trống, hỗ trợ khách gọi thêm món và chuyển trạng thái dọn dẹp bàn (CLEANING).",
      },
      {
        name: "Admin Command Center (Quản trị)",
        target: "Desktop Admin (apps/admin-portal)",
        role: "Báo cáo doanh thu & Cấu hình chuỗi",
        desc: "Dashboard thống kê doanh thu, phân quyền nhân viên RBAC, cấu hình sơ đồ tầng 2D, AI Churn Detector cảnh báo khách VIP rời bỏ và xuất file Excel Apache POI.",
      },
    ],
    technicalHighlights: [
      {
        tag: "ALGORITHM · CONCURRENCY",
        title: "1. Khóa Phân Tán Redis SETNX & AOP (@RedisLocked)",
        details: [
          "Sử dụng Redis SETNX (IdempotencyInterceptor.java) chặn hoàn toàn việc click đúp hoặc gửi lại 2 lần gây đặt trùng bàn hoặc trừ điểm 2 lần.",
          "Áp dụng Custom Annotation `@RedisLocked` qua Spring AOP (RedisLockAspect.java) khóa nguyên tử theo SpEL expression (Vd: `booking:slot:lock:1:2026-08-10:2`).",
          "Tự động giải phóng lock an toàn trong block `finally`.",
        ],
      },
      {
        tag: "ALGORITHM · REALTIME",
        title: "2. Hạ Tầng WebSocket STOMP & SockJS",
        details: [
          "Kênh truyền tin 2 chiều STOMP over WebSocket đồng bộ dữ liệu thời gian thực giữa 5 Portals với độ trễ < 20ms mà không cần F5 trình duyệt.",
          "Tự động phát tín hiệu cập nhật màu sắc sơ đồ bàn (AVAILABLE, HOLD, OCCUPIED, CLEANING) tức thì.",
        ],
      },
      {
        tag: "ALGORITHM · SECURITY & DDOS",
        title: "3. Sliding Window Rate Limiting (Redis ZSET) & JWT Blacklist",
        details: [
          "RateLimitingFilter.java sử dụng Redis Sorted Set (ZSET) theo dõi mốc thời gian, giới hạn 30 req/phút trên mỗi IP để ngăn chặn DDoS.",
          "Cơ chế JWT Blacklist trong Redis vô hiệu hóa Token ngay lập tức khi người dùng bấm Đăng xuất (Logout).",
        ],
      },
      {
        tag: "ALGORITHM · SAGA & AUTOMATION",
        title: "4. Saga Workflow Rollback Engine & Auto-Release Scheduler",
        details: [
          "BookingWorkflowEngine.java lưu các bước vào Stack LIFO, tự động hoàn tác (nhả bàn, hoàn điểm) nếu bất kỳ bước thanh toán nào bị lỗi.",
          "TableReleaseScheduler.java chạy định kỳ mỗi 1 phút bằng Redis Lock, tự động hủy đơn giữ tạm quá 15 phút không cọc và giải phóng bàn về AVAILABLE.",
        ],
      },
      {
        tag: "ALGORITHM · PAYMENT & REPORT",
        title: "5. Unmatched Payment Ledger & Apache POI Multi-Sheet Export",
        details: [
          "Xử lý đối soát Webhook ngân hàng muộn qua bảng `unmatched_payment_ledger`, hỗ trợ thu ngân khớp đơn thủ công hoặc hoàn tiền 1-click.",
          "ReportServiceImpl.java sử dụng Apache POI `SXSSFWorkbook` kết xuất file Excel .xlsx đa sheet chiến lược (Doanh thu, Gói buffet, Bảng lương).",
        ],
      },
      {
        tag: "DATABASE",
        title: "6. Flyway DB Migration (V1 ➔ V41) & PostgreSQL 16",
        details: [
          "Toàn bộ 41 bảng dữ liệu (branches, floors, tables, bookings, users, menu_items, vouchers, audit_logs...) được quản lý phiên bản nghiêm ngặt qua Flyway.",
          "Tự động migrate schema và seed dữ liệu mẫu khi khởi chạy Docker Container.",
        ],
      },
    ],
    roadmap: [
      { phase: "PHASE 01", title: "Thiết kế CSDL 41 Bảng & Kiến trúc Monorepo", done: true, desc: "Xác lập kiến trúc Spring Boot 3.2.4, PostgreSQL 16 và phân rã 5 apps frontend." },
      { phase: "PHASE 02", title: "Phát triển Core API & 10 Thuật Toán Cốt Lõi", done: true, desc: "Xây dựng 60+ RESTful APIs, Spring Security JWT, Redis Lock SETNX, Rate Limit và Saga Engine." },
      { phase: "PHASE 03", title: "Xây dựng 5 Giao diện Portals Frontend", done: true, desc: "Hoàn thiện Customer Portal đặt bàn 2D, Cashier POS, KDS Bếp, Staff Mobile & Admin Center." },
      { phase: "PHASE 04", title: "Deploy Domain k3mdenz.site & Thử nghiệm Beta", done: true, desc: "Đưa hệ thống online trực tiếp, kết nối domain và kiểm thử luồng thực tế." },
      { phase: "PHASE 05", title: "Stress-Test Tải Cao & Báo Cáo Tốt Nghiệp", done: false, desc: "Kiểm thử tải đồng thời, tối ưu 60FPS và chuẩn bị hồ sơ bảo vệ DATN-SD33." },
    ],
    gallery: [
      { title: "Customer Portal & Menu", image: "/images/hero_seafood_bbq.png", caption: "Giao diện trang chủ đặt bàn trực tuyến và thực đơn món nướng hải sản cao cấp." },
      { title: "Sơ đồ Tầng 2D Thông minh", image: "/images/luxury_floor_plan.png", caption: "Bản đồ bàn 2D thời gian thực hiển thị trạng thái vị trí bàn theo từng tầng." },
      { title: "Không gian Nhà hàng Sang trọng", image: "/images/restaurant_interior.png", caption: "Mô hình kiến trúc không gian Fine Dining và khu vực quầy buffet line." },
    ],
    stack: ["Java 17", "Spring Boot 3.2.4", "PostgreSQL 16", "Redis 7", "WebSocket STOMP", "Flyway DB", "React 18", "Docker", "Apache POI"],
  },
  {
    id: "p01",
    slug: "dating-app",
    coord: "0xKD-001 · NETLIFY",
    name: "DATING APP (CỔNG KHẾ ƯỚC)",
    subtitle: "Động cơ Dựng & Trải Nghiệm Kịch Bản Hẹn Hò Tương Tác Cặp Đôi (Cinematic Visual Novel)",
    year: "2026",
    status: "CLIENT OFFLINE MODE · NETLIFY",
    statusText: "Client UI & Offline Mode hoạt động mượt mà — Backend Supabase cũ tạm ngưng",
    progressPercent: 95,
    currentPhase: "Trải nghiệm Client-side 4 Phase & lưu trữ ảnh IndexedDB hoàn tất",
    dbNotice:
      "Database Supabase trước đây của dự án hiện đang tạm ngưng do chính sách gói miễn phí. Ứng dụng hiện hoạt động ở chế độ Client-side / Offline Mode, người dùng có thể trải nghiệm toàn bộ giao diện kịch bản hẹn hò và lưu ảnh qua IndexedDB.",
    type: "CINEMATIC VISUAL NOVEL · DATE ENGINE",
    deploy: "NETLIFY HOSTED",
    deployUrl: "https://statuesque-kashata-23f0cd.netlify.app/",
    layout: "preview",
    preview: "/images/dating_app_preview.jpg",
    bannerImage: "/images/dating_app_preview.jpg",
    about:
      "Dating app cá nhân — Động cơ Dựng & Trải Nghiệm Kịch Bản Hẹn Hò Tương Tác cho Cặp đôi theo mô hình Creator-Player qua 4 Phase điện ảnh (Cinematic). Flow tương tác trực tiếp, bộ trắc nghiệm Tarot và lưu trữ ảnh check-in qua IndexedDB Client Storage, xây dựng trên nền tảng React 18 và Framer Motion.",
    problemStatement:
      "Các cặp đôi thường gặp khó khăn trong việc lên ý tưởng hẹn hò và lưu giữ kỷ niệm tương tác một cách ý nghĩa, sống động.",
    solutionArchitecture:
      "Mô hình Creator-Player cho phép 1 người thiết kế kịch bản và đối phương tham gia giải đố, mở khóa quà tặng và lưu ảnh kỷ niệm vào IndexedDB.",
    technicalHighlights: [
      {
        tag: "CLIENT STORAGE",
        title: "IndexedDB Client Cache & Storage",
        details: [
          "Lưu trữ toàn bộ ảnh chụp check-in và kịch bản hẹn hò trực tiếp tại trình duyệt client qua IndexedDB.",
          "Hoạt động mượt mà không bị gián đoạn kể cả khi mất kết nối mạng.",
        ],
      },
      {
        tag: "ANIMATION",
        title: "Framer Motion 4-Phase Cinematic Transition",
        details: [
          "Hiệu ứng chuyển cảnh điện ảnh 60FPS giữa 4 Phase kịch bản.",
          "Tích hợp âm thanh SFX và phản hồi xúc giác.",
        ],
      },
    ],
    roadmap: [
      { phase: "PHASE 01", title: "Thiết kế kịch bản 4 Phase", done: true, desc: "Xây dựng luồng Creator & Player." },
      { phase: "PHASE 02", title: "Tích hợp Client Storage IndexedDB", done: true, desc: "Lưu trữ dữ liệu và ảnh offline." },
      { phase: "PHASE 03", title: "Deploy Netlify", done: true, desc: "Phát hành bản Client Web." },
    ],
    gallery: [
      { title: "Giao diện Hẹn Hò Điện Ảnh", image: "/images/dating_app_preview.jpg", caption: "Không gian trải nghiệm hẹn hò bí ẩn và lãng mạn." },
    ],
    stack: ["React 18", "Tailwind CSS", "Framer Motion", "IndexedDB", "Netlify"],
  },
  {
    id: "p02",
    slug: "spin-quizz",
    coord: "0xKD-002 · VERCEL",
    name: "SPIN-QUIZZ (THE KINETIC ROULETTE)",
    subtitle: "Web-game Vòng Quay May Mắn & Thử Thách Trắc Nghiệm Realtime (HTML5 Canvas Physics & PostgreSQL)",
    year: "2026",
    status: "DATABASE ACTIVE · POSTGRESQL & WS",
    statusText: "Đã hoàn thiện CSDL PostgreSQL 16 & WebSocket Gateway độc lập",
    progressPercent: 100,
    currentPhase: "Backend PostgreSQL & WebSocket hoàn tất — Hỗ trợ cả Offline Mode lẫn Realtime Server",
    dbNotice:
      "Dự án đã được trang bị trọn bộ CSDL PostgreSQL 16 (4 bảng chuẩn hóa: spin_rooms, game_sessions, game_scores, game_history), Express REST API, WebSocket Server thời gian thực và Studio tự tạo ô vòng quay.",
    type: "REAL-TIME GAME · 3D CARDS & QUIZ",
    deploy: "VERCEL HOSTED",
    deployUrl: "https://spin-ran-dom.vercel.app",
    layout: "preview",
    preview: "/images/spin_quizz_preview.jpg",
    bannerImage: "/images/spin_quizz_preview.jpg",
    about:
      "Nền tảng trò chơi vòng quay may mắn kết hợp trả lời câu hỏi hỗ trợ chế độ chơi Đơn và Multiplayer. Sử dụng CSDL PostgreSQL 16 độc lập, Express REST API, WebSocket kết nối thời gian thực, Spring Physics Canvas Engine mô phỏng lực ma sát & quán tính thật, thẻ bài 3D Parallax mượt mà 60FPS và Studio cho phép người chơi tự tạo nội dung ô quay riêng.",
    problemStatement:
      "Các mini-game vòng quay thông thường thường bị gắn cứng nội dung, phụ thuộc vào nền tảng đám mây trả phí và thiếu tính chủ động khi người dùng muốn tùy biến theo các buổi tiệc khác nhau.",
    solutionArchitecture:
      "Kết hợp HTML5 2D Canvas Physics Engine mô phỏng chuyển động cơ học mượt mà với Backend Node.js / Express + PostgreSQL 16 + Native WebSocket Server (`ws`) để đồng bộ phòng chơi thời gian thực, kèm Studio cho phép tùy biến toàn diện ô quay.",
    technicalHighlights: [
      {
        tag: "CUSTOM STUDIO",
        title: "Studio Biên Tập & Tùy Chỉnh Vòng Quay Riêng",
        details: [
          "Cho phép người chơi tự tạo ô riêng với Icon/Emoji, màu sắc tùy chọn và nội dung thử thách cá nhân hóa.",
          "Tích hợp sẵn 4 bộ Presets chuyên đề: Cặp Đôi Lãng Mạn, Bàn Nhậu Uống Phạt & Quẩy, Thật Hay Thách 18+, Gắn Kết Teamwork.",
          "Hỗ trợ Import / Export bộ vòng quay qua định dạng JSON để chia sẻ nhanh cho bạn bè.",
        ],
      },
      {
        tag: "DATABASE & REALTIME",
        title: "PostgreSQL 16 & Native WebSocket Gateway",
        details: [
          "Hệ thống 4 bảng dữ liệu (spin_rooms, game_sessions, game_scores, game_history) quản lý phòng chơi, điểm số và nhật ký quay.",
          "Kênh truyền tin WebSocket hai chiều phát sóng trạng thái phòng tức thời giữa Host và Guest.",
        ],
      },
      {
        tag: "PHYSICS & AUDIO",
        title: "Spring Physics Canvas Engine & Web Audio SFX",
        details: [
          "Vòng quay dừng lại tự nhiên theo hàm giảm chấn vật lý trên HTML5 2D Canvas.",
          "Hiệu ứng âm thanh cơ học tick pointer và hạt pháo hoa Confetti khi trúng ô đặc biệt.",
        ],
      },
      {
        tag: "3D CARDS",
        title: "3D Parallax Card Interaction",
        details: [
          "Thẻ bài 3D phản hồi theo góc di chuột chuẩn 60FPS.",
          "Kho câu hỏi thử thách và trắc nghiệm tương tác phong phú.",
        ],
      },
    ],
    roadmap: [
      { phase: "PHASE 01", title: "Thuật toán Vòng quay Canvas & Physics", done: true, desc: "Xây dựng engine quay vật lý thật và âm thanh SFX." },
      { phase: "PHASE 02", title: "Giao diện Thẻ bài 3D Parallax & Custom Studio", done: true, desc: "Tối ưu hóa trải nghiệm 60FPS và công cụ tự tạo ô vòng quay." },
      { phase: "PHASE 03", title: "Xây dựng Backend PostgreSQL & WebSocket", done: true, desc: "Tự chủ hạ tầng CSDL PostgreSQL 16 và máy chủ WebSocket hai chiều." },
    ],
    gallery: [
      { title: "Vòng Quay & Thẻ Bài 3D", image: "/images/spin_quizz_preview.jpg", caption: "Giao diện trò chơi vòng quay và câu hỏi trắc nghiệm." },
    ],
    stack: ["React 18", "TypeScript", "PostgreSQL 16", "Express.js", "WebSocket (ws)", "Docker", "Framer Motion", "Canvas API", "Vercel"],
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
