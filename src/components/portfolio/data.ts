// Portfolio data — single source of truth for Landscape Photographer Trần Gia Bảo.

// ==========================================
// 1. UI TEXT (Curated Photography-focused titles)
// ==========================================
export const uiText = {
  hero: {
    sysCode: "[ GALLERY.BAO.TRAN ]",
    hoverPrompt: "↳ hover the name — behold the dissolving artistic essence.",
    taglineLabel: "philosophy —",
    fastJump: "↳ TRAVEL SECTIONS",
  },
  about: {
    sectionNumber: "[ 01 ]",
    sectionTitle: "BEHIND THE LENS",
    aka: "artistic journey",
  },
  education: {
    sectionNumber: "[ 02 ]",
    sectionTitle: "EXHIBITIONS & SALONS",
    heading1: "CURATED",
    heading2: "exhibitions & logs",
    institution: "EXHIBITION / SALON",
    period: "YEAR",
  },
  skills: {
    sectionNumber: "[ 03 ]",
    sectionTitle: "ARTISTIC DISCIPLINES",
    heading1: "CAPTURING",
    heading2: "silent",
    heading3: "MOMENTS.",
  },
  toolbelt: {
    sectionNumber: "[ 04 ]",
    sectionTitle: "EQUIPMENT & GEAR",
    heading1: "GEAR I",
    heading2: "live",
    heading3: "WITH.",
  },
  projects: {
    sectionNumber: "[ 05 ]",
    sectionTitle: "FINE ART COLLECTIONS",
    heading1: "FEATURED",
    heading2: "landscapes",
    livePreview: "↳ view high res",
    deployedOn: "SHOOTING LOCATION",
    aboutApp: "BEHIND THE FRAME →",
    techStack: "EXIF PARAMETERS →",
    entry: "PLATE ·",
    techStackDesc: "technical parameters captured in",
  },
  contact: {
    sectionNumber: "[ 06 ]",
    sectionTitle: "ACQUISITIONS & INQUIRIES",
    heading1: "LET'S DISCUSS",
    heading2: "something eternal.",
    availableFor: "ACQUISITIONS FOR",
    responseTime: "STUDIO RESPONSE TIME",
    timezone: "ACTIVE REGION",
    currently: "CURRENT EXPEDITION",
  },
  footer: {
    version: "v2.0 — EARTH & LIGHT",
    location: "BASE COORDINATES",
    signal: "ATMOSPHERE",
    signalValue: "● CALM AIR · DYNAMIC RANGE 15EV",
    backToTop: "BACK TO THE SKY ↑",
    forgedIn: "CRAFTED IN VITE × TANSTACK",
    quotePrefix: "CAPTURED BY",
    quoteSuffix: "— CHASING MISTS, COMMUNING WITH THE SOLEMN WILDERNESS.",
    madeIn: "MADE IN VIETNAM 🇻🇳",
    endOfTransmission: "END OF TRANSMISSION",
    cvLabel: "ARTISTIC DOSSIER",
    cvCaption: "PDF · Curated Portfolio Book · 2026 Edition",
    cvView: "VIEW DIGITAL BOOK ↗",
    cvUrl: "/portfolio-book.pdf",
  }
} as const;

// ==========================================
// 2. PROFILE (Trần Gia Bảo Photographer Profile)
// ==========================================
export const profile = {
  handle: "@giabaophotography",
  name: "BAO TRAN",
  realName: "Trần Gia Bảo",
  greeting: "Chasing dawn, capturing",
  role: "LANDSCAPE PHOTOGRAPHER · FINE ARTIST",
  location: "Da Lat Plateau · Vietnam",
  status: "GIABAO.STUDIO",
  tagline: "I capture the solemn silence between the winds.",
  bio: "Nhiếp ảnh gia phong cảnh nghệ thuật hoạt động tại các vùng cao nguyên và biển cả Việt Nam. Tập trung khai thác vẻ đẹp nguyên sơ của đất trời vào thời điểm giao hòa của ánh sáng (Golden Hour & Blue Hour).",
  quote:
    "Thiên nhiên không bao giờ vội vã, nhưng mọi thứ đều được hoàn thành. Đứng trước một thung lũng sương mù dày đặc ở Đà Lạt hay những vách núi hùng vĩ vùng Đông Bắc, tôi học được sự kiên nhẫn tối cùng. Có những ngày đi bộ hàng chục cây số chỉ để đợi một tia nắng xuyên qua mây trong vài giây ngắn ngủi. Đó không chỉ là việc chụp ảnh, đó là cuộc đối thoại lặng lẽ giữa tâm hồn và đất trời.",
  goal: "MỞ TRIỂN LÃM ĐƠN ĐỘC VỀ SƯƠNG MÙ VIỆT NAM.",
  email: "giabaophotography@gmail.com",
  socials: [
    { label: "MAIL · INQUIRY", handle: "giabaophotography@gmail.com", href: "mailto:giabaophotography@gmail.com", status: "FINE ART PLATES", dot: "neon", cta: "→ email studio" },
    { label: "INSTAGRAM", handle: "@giabao.lens", href: "#", status: "ATMOSPHERIC FEED", dot: "cyan", cta: "→ view plates" },
    { label: "500PX", handle: "/giabaotran", href: "#", status: "VERIFIED ARTIST", dot: "lime", cta: "→ see scores" },
    { label: "FACEBOOK", handle: "/trangiabao.photo", href: "#", status: "PERSONAL SPACE", dot: "cyan", cta: "→ add friend" },
    { label: "BEHANCE", handle: "/giabaophotography", href: "#", status: "HIGH RES SHOTS", dot: "lime", cta: "→ see portfolio" },
  ],
  contactMeta: {
    responseTime: "< 12 HOURS",
    timezone: "GMT+7 · Da Lat & Da Nang",
    currently: "EXPLORING DONG VAN RIDGE",
    availableFor: ["FINE ART PRINT SALES", "COMMERCIAL EXPEDITIONS", "LANDSCAPE WORKSHOPS", "EDITORIAL ASSIGNMENTS", "COFFEE CHAT"],
  },
} as const;

// ==========================================
// 3. ABOUT DATA (Behind The Lens Pillars)
// ==========================================
export const aboutData = {
  main: {
    label: "CORE MISSION",
    title: "FINE ART LANDSCAPES",
    body: "Tập trung tuyệt đối vào nhiếp ảnh phong cảnh fine art. Sử dụng kỹ thuật phơi sáng lâu (long exposure) để làm nổi bật sự tĩnh mịch, trầm mặc và linh thiêng của cảnh sắc nguyên sơ.",
  },
  vibe: {
    label: "THE HUNT",
    title: "CHASING THE MISTS",
    body: "Đam mê mãnh liệt với hiện tượng sương luồn và mây mù. Rong ruổi khắp các đỉnh cao như Y Tý, Tà Xùa, Đà Lạt để lưu lại khoảnh khắc ánh sáng xuyên qua màn sương sớm.",
  },
  dev: {
    label: "PRECISION",
    title: "EXIF TECHNIQUE",
    body: "Sự cẩn trọng tuyệt đối trong quy trình bấm máy: đo sáng chính xác thủ công, sử dụng hệ thống kính lọc ND chuyên dụng và quy trình hậu kỳ trung thực trên Capture One Pro.",
  },
} as const;

// ==========================================
// 4. EDUCATION DATA -> EXHIBITIONS DATA
// ==========================================
export const educationData = {
  school: "VIETNAM PHOTO ART ASSOCIATION",
  major: "LANDSCAPE & FINE ART RESEARCH",
  period: "2023 — PRESENT",
  blocks: [
    { tag: "EXHIBITIONS", items: ["Echoes of Silence (2025 - Da Lat)", "Chasing the Mist (2024 - HCMC)", "Vietnam Heritage Art Exhibition"] },
    { tag: "PUBLICATIONS", items: ["Heritage Magazine Editorial", "Vietnam Visual Arts Journal", "The Wanderer Photo Annual"] },
    { tag: "CORE TECHNIQUES", items: ["Long Exposure (30s+)", "High Dynamic Range Calibration", "Panoramic Stitched Plates", "Focus Stacking"] },
    { tag: "FAVORITE REGIONS", items: ["Ha Giang Ridge", "Y Ty Terraces", "Phu Yen Volcano Coast", "Da Lat Pine Valleys"] },
    { tag: "PRINT ARCHIVE", items: ["Hahnemühle FineArt Rag Paper", "Epson Ultrachrome Archival Pigment", "Limited Certified Signatures"] },
  ],
} as const;

// ==========================================
// 5. SKILLS DATA -> DISCIPLINES DATA
// ==========================================
export const skillsData = [
  {
    code: "01",
    title: "ATMOSPHERIC TRACKING",
    body: "Đọc bản đồ thời tiết, dự báo hướng gió và độ ẩm để xác định chính xác thời điểm sương mù bồng bềnh và mây tràn thung lũng.",
    level: 96,
  },
  {
    code: "02",
    title: "COMPOSITION MATRIX",
    body: "Làm chủ các quy tắc bố cục cổ điển: tỷ lệ vàng, đường dẫn hướng, tương phản hình khối và đóng khung tự nhiên để tạo cảm xúc sâu lắng.",
    level: 93,
  },
  {
    code: "03",
    title: "CHROMATIC HARMONY",
    body: "Khả năng cân bằng màu sắc trung thực tuyệt vời. Phát triển dải tone be ấm, kem nhã nhặn như tranh lụa thủy mặc phương Đông.",
    level: 89,
  },
] as const;

// ==========================================
// 6. TOOLBELT DATA -> PHOTOGRAPHY GEAR
// ==========================================
export const toolbeltData = [
  "Sony a7R V", "Hasselblad X2D 100C", "FE 16-35mm f/2.8 GM II",
  "FE 24-70mm f/2.8 GM II", "FE 70-200mm f/4 G OSS II", "Hasselblad XCD 38mm f/2.5",
  "DJI Mavic 3 Pro Cine", "Gitzo Systematic Carbon Tripod", "Nisi V7 Filter System",
  "ND 10-Stop Filter", "GND 3-Stop Graduated Filter", "Capture One Pro 23",
  "Adobe Lightroom Classic", "Epson SureColor P9000", "Hahnemühle Photo Rag",
] as const;

// ==========================================
// 7. PROJECTS DATA -> LANDSCAPE PHOTOGRAPHS GALLERY
// ==========================================
export const projectsData = [
  {
    id: "p01",
    coord: "22.6184° N, 103.6255° E",
    name: "MIST OVER Y TY",
    year: "2025",
    type: "HIGHLANDS · SHOT AT 05:40 AM",
    deploy: "Y TY, LAO CAI",
    deployUrl: "/images/misty_mountains.jpg",
    layout: "preview",
    preview: "/images/misty_mountains.jpg",
    about:
      "Một thung lũng ruộng bậc thang trùng điệp tại Y Tý ngủ yên dưới dải sương luồn trắng muốt trôi chậm như dòng sông bạc. Bức ảnh ghi lại dải sáng mượt mà bừng lên từ sau dãy núi cao vùng biên giới phía Bắc.",
    stack: ["Hasselblad X2D 100C", "XCD 38mm f/2.5", "ISO 64", "f/8.0", "1/4s", "RAW Calibration"],
  },
  {
    id: "p02",
    coord: "13.3642° N, 109.2831° E",
    name: "OCEANIC WHISPERS",
    year: "2025",
    type: "COASTAL · LONG EXPOSURE",
    deploy: "PHU YEN COASTLINE",
    deployUrl: "/images/oceanic_whispers.jpg",
    layout: "preview",
    preview: "/images/oceanic_whispers.jpg",
    about:
      "Cú bấm máy phơi sáng 30 giây đầy kiên trì làm mờ đi các con sóng va đập dữ dội vào rạn đá bazan đen óng ánh nước, tạo nên một lớp khói nước huyền diệu dưới dải màu kem vàng nhẹ nhõm của hoàng hôn miền Trung.",
    stack: ["Sony a7R V", "FE 16-35mm GM II", "ISO 50", "f/11", "30s", "Nisi ND 10-Stop Filter"],
  },
  {
    id: "p03",
    coord: "12.0116° N, 108.4583° E",
    name: "FOREST SILENCE",
    year: "2026",
    type: "WOODLAND · TYNDALL RAYS",
    deploy: "DA LAT PLATEAU",
    deployUrl: "/images/forest_silence.jpg",
    layout: "preview",
    preview: "/images/forest_silence.jpg",
    about:
      "Rừng thông ba lá cổ thụ tại sâu trong cao nguyên Lâm Viên thức giấc trong làn sương lơ lửng, bị xuyên thủng bởi hàng trăm vạt nắng bình minh (hiệu ứng Tyndall). Không gian tĩnh mịch nguyên vẹn.",
    stack: ["Sony a7R V", "FE 70-200mm f/4 G II", "ISO 100", "f/5.6", "1/80s", "Tripod Mounted"],
  },
  {
    id: "p04",
    coord: "11.1335° N, 108.4831° E",
    name: "ELEGANT DUNES",
    year: "2026",
    type: "DESERT · MINIMALIST LINE",
    deploy: "BAU TRANG, BINH THUAN",
    deployUrl: "/images/sand_dunes.jpg",
    layout: "preview",
    preview: "/images/sand_dunes.jpg",
    about:
      "Những cồn cát Bàu Trắng nhấp nhô tuyệt đẹp tựa như những đường cong điêu khắc của tạo hóa dưới ánh sáng chạng vạng dịu dàng màu kem be thanh khiết. Gió vẽ nên những thớ cát mịn màng hoàn mỹ.",
    stack: ["Sony a7R V", "FE 24-70mm GM II", "ISO 100", "f/8.0", "1/15s", "Warm Tone Graded"],
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
