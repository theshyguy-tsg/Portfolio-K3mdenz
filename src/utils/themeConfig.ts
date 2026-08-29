import { ThemeStyle } from '../types';

export interface ThemeMetadata {
  headerCategory: string;
  headerSub: string;
  headerTitle: string;
  operatorDefault: string;
  noteDefault: string;
  modalTitle: string;
  modalSubtitle: string;
  modalConsoleTitle: string;
  modalProgressLabel: string;
  modalCompleteMsg: string;
  patchStep1Name: string;
  patchStep1Desc: string;
  patchStep2Name: string;
  patchStep2Desc: string;
  patchStep3Name: string;
  patchStep3Desc: string;
  patchStep4Name: string;
  patchStep4Desc: string;
  slotTitlePrefix: string;
}

export function getThemeMetadata(style: ThemeStyle): ThemeMetadata {
  switch (style) {
    case 'vangogh':
      return {
        headerCategory: "POST-IMPRESSIONISM STUDIO",
        headerSub: "STARRY NIGHT v1889 ART ENGINE",
        headerTitle: "🌌 GALERIE NGHỆ THUẬT & ĐÊM ĐẦY SAO",
        operatorDefault: "Vincent - Master Painter",
        noteDefault: "Đã lưu bản phác thảo sơn dầu Starry Night Snapshot",
        modalTitle: "TIẾN TRÌNH HOÀN THIỆN BỨC HỌA v2.5.0",
        modalSubtitle: "GALERIE CANVAS HUD",
        modalConsoleTitle: "VAN GOGH STUDIO CONSOLE",
        modalProgressLabel: "CANVAS PROGRESS",
        modalCompleteMsg: "✓ Tác phẩm sơn dầu đã hoàn thiện và lưu giữ tại Bảo tàng.",
        patchStep1Name: "Kiểm tra nét vẽ & Bảng màu sơn dầu",
        patchStep1Desc: "Phân tích lớp phủ Cobalt Blue, Impasto Yellow và độ mịn sơn Canvas.",
        patchStep2Name: "Phác thảo bố cục Đêm đầy sao",
        patchStep2Desc: "Lưu phác thảo lớp và đồng bộ mẫu từ Galerie Central Repository.",
        patchStep3Name: "Pha trộn màu sắc & Phủ bóng nghệ thuật",
        patchStep3Desc: "Áp dụng hiệu ứng xoáy cuộn vầng trăng và tối ưu hóa sắc độ màu.",
        patchStep4Name: "Sấy khô Canvas & Triển lãm chính thức!",
        patchStep4Desc: "Hoàn tất lớp varnish bảo vệ, xác nhận tác phẩm trực tuyến 100%!",
        slotTitlePrefix: "BẢN LƯU TÁC PHẨM GALERIE",
      };

    case 'romanticism':
      return {
        headerCategory: "ROMANTIC REALISM GALLERY",
        headerSub: "CHIAROSCURO REVISION SYSTEM",
        headerTitle: "🎨 VIỆN NGHỆ THUẬT CỔ ĐIỂN & LÃNG MẠN",
        operatorDefault: "Eugène - Romantic Realist",
        noteDefault: "Hoàn thiện tác phẩm Realism & lưu bản lưu niệm",
        modalTitle: "TIẾN TRÌNH SÁNG TÁC TÁC PHẨM v2.5.0",
        modalSubtitle: "REALISM STUDIO HUD",
        modalConsoleTitle: "ROMANTICISM GALLERY LOGS",
        modalProgressLabel: "PAINTING COMPLETION",
        modalCompleteMsg: "✓ Kiệt tác Lãng mạn Thực thực đã được đóng khung bảo tồn.",
        patchStep1Name: "Thẩm định chất lượng khung gỗ & Toan vẽ",
        patchStep1Desc: "Xác minh chuẩn mực nghệ thuật thế kỷ 19 và chất lượng bột màu.",
        patchStep2Name: "Pha chế ánh sáng Chiaroscuro",
        patchStep2Desc: "Tạo sự tương phản sâu thẳm giữa ánh sáng rực rỡ và bóng tối huyền bí.",
        patchStep3Name: "Khắc họa chi tiết & Tỉ mỉ từng nét cọ",
        patchStep3Desc: "Tải bản vá 10 điểm màu, nâng cấp chiều sâu mảng tối cho bức họa.",
        patchStep4Name: "Đóng khung mạ vàng & Khánh thành!",
        patchStep4Desc: "Sẵn sàng trưng bày tại phòng triển lãm hoàng gia KemDenz.",
        slotTitlePrefix: "BẢN KHUNG LƯU NIỆM NGHỆ THUẬT",
      };

    case 'win95':
      return {
        headerCategory: "MICROSOFT WINDOWS 95 SYSTEM",
        headerSub: "MS-DOS DEPLOYMENT UTILITY",
        headerTitle: "🖥️ WINDOWS 95 RELEASE MANAGER",
        operatorDefault: "Administrator - Win95 SysOp",
        noteDefault: "Cập nhật Driver & lưu Restore Point v2.5.0",
        modalTitle: "TIẾN TRÌNH CÀI ĐẶT BẢN PATCH v2.5.0",
        modalSubtitle: "WINDOWS 95 SETUP WIZARD",
        modalConsoleTitle: "MS-DOS EXECUTION STREAM",
        modalProgressLabel: "SETUP PROGRESS",
        modalCompleteMsg: "✓ Windows 95 System Restore Point successfully created.",
        patchStep1Name: "Check SCANDISK & FAT16 File Integrity",
        patchStep1Desc: "Kiểm tra bad sector ổ đĩa C:\\ và tính toàn vẹn hệ thống MS-DOS.",
        patchStep2Name: "Extracting Cabinet Files (CONFIG.SYS)",
        patchStep2Desc: "Đọc tệp tin nén .CAB và nạp driver vào bộ nhớ XMS/EMS.",
        patchStep3Name: "Updating System Registry & Dynamic Libraries",
        patchStep3Desc: "Ghi đè System.dat, User.dat và cập nhật thư viện DLL v2.5.0.",
        patchStep4Name: "Play Win95 Startup Chime & System Ready!",
        patchStep4Desc: "Cấu hình tự động khởi động Autoexec.bat thành công!",
        slotTitlePrefix: "SYSTEM RESTORE POINT",
      };

    case 'luxury':
      return {
        headerCategory: "EXECUTIVE LUXURY ECOSYSTEM",
        headerSub: "GOLD MASTER VIP SUITE",
        headerTitle: "👑 KEMDENZ FINE DINING LUXURY PORTAL",
        operatorDefault: "Executive Chef & Systems Director",
        noteDefault: "Phát hành bản thực đơn VIP Imperial Luxury Snapshot",
        modalTitle: "TIẾN TRÌNH PHÁT HÀNH BẢN VÁ VIP v2.5.0",
        modalSubtitle: "EXECUTIVE SUITE HUD",
        modalConsoleTitle: "LUXURY AUDIT TERMINAL",
        modalProgressLabel: "RELEASE PROGRESS",
        modalCompleteMsg: "✓ VIP Executive Snapshot successfully registered.",
        patchStep1Name: "Kiểm định tiêu chuẩn 5 Sao Gold Master",
        patchStep1Desc: "Xác minh toàn vẹn dữ liệu đặt bàn VIP, hầm rượu & thực đơn thượng hạng.",
        patchStep2Name: "Đồng bộ hóa Portal Phục vụ Hoàng Gia",
        patchStep2Desc: "Nạp phiên bản cập nhật từ Server Trung Tâm Fine Dining.",
        patchStep3Name: "Tối ưu hóa phản hồi POS & Kitchen KDS",
        patchStep3Desc: "Nâng cấp trải nghiệm gọi món tức thì, bảo mật chống rò rỉ dữ liệu.",
        patchStep4Name: "Kích hoạt Chế độ Phục vụ Thượng hạng!",
        patchStep4Desc: "Toàn bộ sảnh tiệc VIP đã sẵn sàng chào đón quý khách.",
        slotTitlePrefix: "BẢN LƯU EXECUTIVE VIP",
      };

    case 'synthwave':
      return {
        headerCategory: "CYBERPUNK NEON NETWORK",
        headerSub: "NEON SYNTHESIS v2088",
        headerTitle: "⚡ SYNTHWAVE NEON MATRIX ENGINE",
        operatorDefault: "CyberDeck Netrunner #0204",
        noteDefault: "Nạp Patch Code Cyberpunk Neon & khoá Socket",
        modalTitle: "TIẾN TRÌNH ĐỒNG BỘ NEON MATRIX v2.5.0",
        modalSubtitle: "CYBERDECK HUD",
        modalConsoleTitle: "NEON TERMINAL STREAM",
        modalProgressLabel: "SYNTHESIS PROGRESS",
        modalCompleteMsg: "✓ CyberDeck Neon Snapshot successfully synced into grid.",
        patchStep1Name: "Scan Neon Grid & Cybernetic Link",
        patchStep1Desc: "Kiểm tra băng thông cáp quang Neon và độ trễ nút mạng Cyber.",
        patchStep2Name: "Bypass Firewall & Injecting Delta Payload",
        patchStep2Desc: "Vượt qua rào cản bảo mật và tải gói mã Synthwave v2.5.",
        patchStep3Name: "Overclocking RAM & Matrix Encryption",
        patchStep3Desc: "Tối ưu hóa vi xử lý, áp dụng lớp mã hóa đa tầng Laser Pink.",
        patchStep4Name: "Neon Matrix Lock & Systems Online!",
        patchStep4Desc: "Đồng bộ hóa 100% mạng lưới Cyberpunk Neon thành công!",
        slotTitlePrefix: "CYBERDECK NEON MATRIX",
      };

    case 'swiss':
      return {
        headerCategory: "HELVETICA DESIGN SYSTEM",
        headerSub: "SWISS BRUTALIST GRID v2.5",
        headerTitle: "📐 SWISS BRUTALIST TYPOGRAPHY GRID",
        operatorDefault: "Typographic Director",
        noteDefault: "Đồng bộ Grid Typography & phát hành v2.5.0",
        modalTitle: "TIẾN TRÌNH PHÁT HÀNH HỆ THỐNG v2.5.0",
        modalSubtitle: "SWISS GRID SYSTEM",
        modalConsoleTitle: "BUILD OUTPUT LOGS",
        modalProgressLabel: "GRID COMPLETION",
        modalCompleteMsg: "✓ Swiss Grid Snapshot successfully registered.",
        patchStep1Name: "Validate Typography Grid & Margins",
        patchStep1Desc: "Kiểm tra tỷ lệ lưới 12 cột, khoảng cách lề và font Helvetica.",
        patchStep2Name: "Compile Asset Bundle via Vite",
        patchStep2Desc: "Đóng gói mã nguồn theo chuẩn thiết kế tối giản Thụy Sĩ.",
        patchStep3Name: "Enforce Hard Borders & Pure Contrast",
        patchStep3Desc: "Áp dụng bóng đổ vuông 8px và màu Safety Orange nổi bật.",
        patchStep4Name: "System Alignment Complete!",
        patchStep4Desc: "Hệ thống bố cục đã căn chuẩn xác 100% theo quy chuẩn.",
        slotTitlePrefix: "SWISS GRID SNAPSHOT",
      };

    case 'mecha':
      return {
        headerCategory: "TACTICAL NERV COMMAND",
        headerSub: "MECHA SYSTEM HUD v2.5",
        headerTitle: "🤖 MECHA TACTICAL NERV CONTROL HUD",
        operatorDefault: "NERV Tactical Operator #01",
        noteDefault: "Kích hoạt Shield Tác chiến Mecha v2.5",
        modalTitle: "TIẾN TRÌNH KÍCH HOẠT VÁ MÃ v2.5.0",
        modalSubtitle: "TACTICAL COMMAND HUD",
        modalConsoleTitle: "MECHA TACTICAL STREAM",
        modalProgressLabel: "TACTICAL LEVEL",
        modalCompleteMsg: "✓ Tactical Combat Snapshot successfully stored in core.",
        patchStep1Name: "Diagnostic Mecha Reactor & Core Power",
        patchStep1Desc: "Kiểm tra công suất năng lượng lõi và hệ thống phòng ngự AT Field.",
        patchStep2Name: "Sync Tactical Data Stream from Base",
        patchStep2Desc: "Truyền nạp dữ liệu tác chiến từ trung tâm chỉ huy NERV.",
        patchStep3Name: "Deploy Armor Patch & Weapon Calibration",
        patchStep3Desc: "Nâng cấp giáp hợp kim, cân chỉnh cảm biến ngắm bắn tự động.",
        patchStep4Name: "Tactical HUD Fully Operational!",
        patchStep4Desc: "Trạm tác chiến Robot Mecha đã bước vào trạng thái sẵn sàng!",
        slotTitlePrefix: "MECHA TACTICAL SNAPSHOT",
      };

    case 'cyber':
      return {
        headerCategory: "ORBITAL CORE NETWORK",
        headerSub: "QUANTUM ORBIT ENGINE",
        headerTitle: "🌌 CYBERNETIC ORBITAL DEPLOYMENT STATION",
        operatorDefault: "Orbital Core Pilot",
        noteDefault: "Nạp Patch Orbit Node #204217c",
        modalTitle: "TIẾN TRÌNH TRUYỀN TẢI PATCH NODE v2.5.0",
        modalSubtitle: "ORBITAL CORE HUD",
        modalConsoleTitle: "QUANTUM STREAM OUTPUT",
        modalProgressLabel: "TRANSMISSION PROGRESS",
        modalCompleteMsg: "✓ Orbital Node Snapshot registered in satellite storage.",
        patchStep1Name: "Orbital Satellite Handshake & Uplink",
        patchStep1Desc: "Thiết lập kết nối vệ tinh quỹ đạo và xác thực khóa Quantum.",
        patchStep2Name: "Downloading Orbital Patch Payload",
        patchStep2Desc: "Truyền tải các khối mã nguồn mã hóa qua chùm Laser vũ trụ.",
        patchStep3Name: "Orbital Core Overclock & Re-indexing",
        patchStep3Desc: "Tối ưu trạm Orbit Gateway, loại bỏ trễ mạng vệ tinh.",
        patchStep4Name: "Orbital Network Synchronized!",
        patchStep4Desc: "Vệ tinh viễn thông đã phát tín hiệu phản hồi xanh ONLINE!",
        slotTitlePrefix: "ORBITAL NODE SNAPSHOT",
      };

    case 'redstone':
      return {
        headerCategory: "NETHER REDSTONE CIRCUIT",
        headerSub: "REDSTONE ENGINE v2.5",
        headerTitle: "🔥 ĐỘNG CƠ REDSTONE & LẠO XÁC NETHER",
        operatorDefault: "Redstone Engineer - Nether Base",
        noteDefault: "Nạp mạch Redstone Lặp & Sao lưu Save Point",
        modalTitle: "TIẾN TRÌNH NẠP MẠCH REDSTONE v2.5.0",
        modalSubtitle: "REDSTONE CIRCUIT HUD",
        modalConsoleTitle: "REDSTONE CONSOLE LOGS",
        modalProgressLabel: "REDSTONE SIGNAL",
        modalCompleteMsg: "✓ Save Point Snapshot locked in Nether Quartz block.",
        patchStep1Name: "Check Redstone Pulse & Repeater Timing",
        patchStep1Desc: "Kiểm tra nhịp phát tín hiệu Redstone và độ trễ 4 tick.",
        patchStep2Name: "Storing Pulse in Quartz Storage Block",
        patchStep2Desc: "Đồng bộ trạng thái khối thạch anh Nether và lưu đĩa lưu trữ.",
        patchStep3Name: "Overclocking Redstone Lamp Arrays",
        patchStep3Desc: "Kích hoạt dãy đèn Redstone báo hiệu cập nhật thuật toán.",
        patchStep4Name: "Redstone Circuit Loop Complete!",
        patchStep4Desc: "Tín hiệu Redstone năng lượng đã lan tỏa toàn bộ công trình!",
        slotTitlePrefix: "KHỐI LƯU TRỮ REDSTONE",
      };

    case 'end':
      return {
        headerCategory: "END REALM PORTAL NETWORK",
        headerSub: "ENDER EYE CORE v2.5",
        headerTitle: "👁️ CỔNG KHÔNG GIAN END REALM & CHORUS",
        operatorDefault: "Ender Navigator - Void Realm",
        noteDefault: "Mở Cổng Void Portal & Lưu Điểm Khảo Sát",
        modalTitle: "TIẾN TRÌNH KÍCH HOẠT CỔNG VOID v2.5.0",
        modalSubtitle: "ENDER PORTAL HUD",
        modalConsoleTitle: "VOID REALM OUTPUT",
        modalProgressLabel: "PORTAL RESONANCE",
        modalCompleteMsg: "✓ Void Portal Snapshot stored in Obsidian Frame.",
        patchStep1Name: "Align Ender Eye & Obsidian Frame",
        patchStep1Desc: "Xếp 12 Mắt Ender chuẩn tọa độ khung đá Obsidian Hư Không.",
        patchStep2Name: "Stabilize Chorus Energy Current",
        patchStep2Desc: "Đồng bộ dòng năng lượng cây Chorus và đồng bộ snapshot.",
        patchStep3Name: "Inject Void Patch Code & Shielding",
        patchStep3Desc: "Vá lỗ hổng rò rỉ năng lượng Void, nâng cấp cổng dịch chuyển.",
        patchStep4Name: "End Portal Activated & Online!",
        patchStep4Desc: "Cổng hư không rực sáng sắc tím, kết nối toàn vẹn!",
        slotTitlePrefix: "KHỐI CỔNG VOID SNAPSHOT",
      };

    case 'minecraft':
    default:
      return {
        headerCategory: "MINECRAFT CRAFTING HUB",
        headerSub: "MINECRAFT v1.21 CRAFT ENGINE",
        headerTitle: "⛏️ TRẠM PHÁT HÀNH & CRAFTING ENGINE",
        operatorDefault: "Steve - Minecraft Architect",
        noteDefault: "Tự động sao lưu điểm Save Snapshot vào Git Branch",
        modalTitle: "TIẾN TRÌNH CẬP NHẬT BẢN PATCH v2.5.0",
        modalSubtitle: "MINECRAFT CRAFTING HUD",
        modalConsoleTitle: "MINECRAFT CONSOLE OUTPUT",
        modalProgressLabel: "XP PROGRESS",
        modalCompleteMsg: "✓ Save Point Snapshot successfully registered.",
        patchStep1Name: "Checksum & Validate Source Integrity",
        patchStep1Desc: "Kiểm tra mã băm SHA-256 các file nguồn và tính toàn vẹn DB.",
        patchStep2Name: "Stashing local changes & Fetching remote snapshot",
        patchStep2Desc: "Lưu tạm thời các file chỉnh sửa và đồng bộ Snapshot từ Git Remote.",
        patchStep3Name: "Applying Code Patches & Rebuilding Portals",
        patchStep3Desc: "Áp dụng bản vá 10 bugfixes, giới hạn RAM Cache, nâng cấp POS & KDS.",
        patchStep4Name: "Verification & System Warmup Complete!",
        patchStep4Desc: "Kiểm tra phản hồi API, khởi động lại Websocket Gateway và hoàn tất.",
        slotTitlePrefix: "TRẠM DỮ LIỆU SNAPSHOT",
      };
  }
}

export interface ThemeClasses {
  wrapperBg: string;
  cardBg: string;
  cardHeaderBg: string;
  primaryBtn: string;
  secondaryBtn: string;
  accentBtn: string;
  titleFont: string;
  badge: string;
  badgeAccent: string;
  inputBg: string;
  borderColor: string;
  accentTextColor: string;
  subtextColor: string;
  glowEffect: string;
  tableHeaderBg: string;
  tableRowHover: string;
  modalOverlay: string;
  modalContainer: string;
  progressTrack: string;
  progressBar: string;
  slotBox: string;
}

export function getThemeClasses(style: ThemeStyle): ThemeClasses {
  switch (style) {
    case 'minecraft':
      return {
        wrapperBg: 'mc-dirt-bg text-[#e0e0e0] selection:bg-[#55ff55] selection:text-[#000000]',
        cardBg: 'mc-box-dark bg-[#211e1b] text-[#ffffff] shadow-[0_8px_0_0_#100d0a]',
        cardHeaderBg: 'bg-[#312a23] border-b-4 border-[#120f0c]',
        primaryBtn: 'mc-button-emerald font-pixel text-xs py-2.5 uppercase tracking-wide',
        secondaryBtn: 'mc-button font-pixel text-xs py-2.5 uppercase tracking-wide',
        accentBtn: 'mc-button-diamond font-pixel text-xs py-2.5 uppercase tracking-wide',
        titleFont: 'font-pixel tracking-wider text-[#55ffff] text-pixel-shadow',
        badge: 'bg-[#153015] text-[#55ff55] border-2 border-[#288028] font-pixel text-[10px]',
        badgeAccent: 'bg-[#152a35] text-[#55ffff] border-2 border-[#2b8b8b] font-pixel text-[10px]',
        inputBg: 'bg-[#100d0b] border-2 border-t-[#373737] border-l-[#373737] border-b-[#8b8b8b] border-r-[#8b8b8b] text-[#55ffff] font-silkscreen focus:outline-none focus:border-[#55ffff]',
        borderColor: 'border-[#3d3126]',
        accentTextColor: 'text-[#55ffff]',
        subtextColor: 'text-[#aaaaaa]',
        glowEffect: 'shadow-[0_0_20px_rgba(85,255,255,0.2)]',
        tableHeaderBg: 'bg-[#171412] text-[#ffaa00] font-pixel border-b-4 border-[#373737]',
        tableRowHover: 'hover:bg-[#2e2620] transition-colors',
        modalOverlay: 'bg-[#000000]/80 backdrop-blur-sm',
        modalContainer: 'mc-box bg-[#312a23] text-white shadow-[0_0_50px_rgba(0,0,0,0.8)]',
        progressTrack: 'bg-[#100d0b] border-2 border-[#373737]',
        progressBar: 'bg-[#55ff55] border-r-2 border-[#ffffff]',
        slotBox: 'mc-slot',
      };

    case 'redstone':
      return {
        wrapperBg: 'bg-[#170a0a] text-amber-100 selection:bg-rose-600 selection:text-white',
        cardBg: 'mc-box-dark bg-[#221010] text-[#ffffff] border-rose-900/50 shadow-[0_8px_0_0_#0f0505]',
        cardHeaderBg: 'bg-[#311616] border-b-4 border-[#120707]',
        primaryBtn: 'bg-rose-700 hover:bg-rose-600 active:bg-rose-800 text-white font-pixel text-xs py-2.5 uppercase border-t-2 border-l-2 border-rose-400 border-b-2 border-r-2 border-rose-950 text-pixel-shadow',
        secondaryBtn: 'mc-button font-pixel text-xs py-2.5 uppercase tracking-wide',
        accentBtn: 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-pixel text-xs py-2.5 uppercase border-t-2 border-l-2 border-amber-300 border-b-2 border-r-2 border-amber-900',
        titleFont: 'font-pixel tracking-wider text-rose-400 text-pixel-glow',
        badge: 'bg-rose-950 text-rose-300 border-2 border-rose-600 font-pixel text-[10px]',
        badgeAccent: 'bg-amber-950 text-amber-300 border-2 border-amber-500 font-pixel text-[10px]',
        inputBg: 'bg-[#100606] border-2 border-t-[#3f1212] border-l-[#3f1212] border-b-[#8b3737] border-r-[#8b3737] text-rose-300 font-silkscreen focus:outline-none focus:border-rose-500',
        borderColor: 'border-rose-900/40',
        accentTextColor: 'text-rose-400',
        subtextColor: 'text-rose-200/70',
        glowEffect: 'shadow-[0_0_20px_rgba(244,63,94,0.3)]',
        tableHeaderBg: 'bg-[#180808] text-amber-300 font-pixel border-b-4 border-rose-900',
        tableRowHover: 'hover:bg-rose-950/40 transition-colors',
        modalOverlay: 'bg-[#0a0202]/85 backdrop-blur-sm',
        modalContainer: 'mc-box bg-[#2a1212] text-white shadow-[0_0_50px_rgba(244,63,94,0.3)]',
        progressTrack: 'bg-[#100505] border-2 border-rose-900',
        progressBar: 'bg-rose-500 border-r-2 border-white',
        slotBox: 'mc-slot',
      };

    case 'end':
      return {
        wrapperBg: 'bg-[#0d0914] text-purple-100 selection:bg-purple-500 selection:text-white',
        cardBg: 'mc-box-dark bg-[#181224] text-[#ffffff] border-purple-900/50 shadow-[0_8px_0_0_#06040a]',
        cardHeaderBg: 'bg-[#241a35] border-b-4 border-[#0e0a16]',
        primaryBtn: 'bg-purple-700 hover:bg-purple-600 text-white font-pixel text-xs py-2.5 uppercase border-t-2 border-l-2 border-purple-300 border-b-2 border-r-2 border-purple-950 text-pixel-shadow',
        secondaryBtn: 'mc-button font-pixel text-xs py-2.5 uppercase tracking-wide',
        accentBtn: 'mc-button-diamond font-pixel text-xs py-2.5 uppercase tracking-wide',
        titleFont: 'font-pixel tracking-wider text-purple-300 text-pixel-glow',
        badge: 'bg-purple-950 text-purple-300 border-2 border-purple-600 font-pixel text-[10px]',
        badgeAccent: 'bg-teal-950 text-teal-300 border-2 border-teal-500 font-pixel text-[10px]',
        inputBg: 'bg-[#09060f] border-2 border-t-[#221735] border-l-[#221735] border-b-[#7252a0] border-r-[#7252a0] text-purple-200 font-silkscreen focus:outline-none focus:border-purple-400',
        borderColor: 'border-purple-900/40',
        accentTextColor: 'text-purple-300',
        subtextColor: 'text-purple-200/70',
        glowEffect: 'shadow-[0_0_20px_rgba(168,85,247,0.3)]',
        tableHeaderBg: 'bg-[#0d0915] text-cyan-300 font-pixel border-b-4 border-purple-900',
        tableRowHover: 'hover:bg-purple-950/40 transition-colors',
        modalOverlay: 'bg-[#050308]/85 backdrop-blur-sm',
        modalContainer: 'mc-box bg-[#201730] text-white shadow-[0_0_50px_rgba(168,85,247,0.3)]',
        progressTrack: 'bg-[#0a0710] border-2 border-purple-900',
        progressBar: 'bg-purple-400 border-r-2 border-white',
        slotBox: 'mc-slot',
      };

    case 'vangogh':
      return {
        wrapperBg: 'vangogh-bg text-amber-100 selection:bg-yellow-400 selection:text-black',
        cardBg: 'bg-[#0c1836]/85 backdrop-blur-md text-amber-100 border-2 border-yellow-400/50 shadow-[0_0_30px_rgba(234,179,8,0.25)] rounded-2xl',
        cardHeaderBg: 'bg-[#08122c] border-b-2 border-yellow-400/40 p-2',
        primaryBtn: 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-slate-950 font-cinzel font-bold shadow-[0_0_20px_rgba(250,204,21,0.5)] rounded-xl uppercase tracking-wider',
        secondaryBtn: 'bg-[#0e214d] text-cyan-200 border border-yellow-400/40 hover:bg-yellow-950/40 font-cinzel rounded-xl',
        accentBtn: 'bg-gradient-to-r from-blue-600 to-indigo-700 text-yellow-200 rounded-xl font-cinzel shadow-lg border border-yellow-400/30',
        titleFont: 'font-cinzel tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-200 to-sky-300',
        badge: 'bg-yellow-950/80 text-yellow-300 border border-yellow-400/50 font-cinzel text-[10px] rounded-full',
        badgeAccent: 'bg-sky-950/80 text-sky-200 border border-sky-400/50 font-cinzel text-[10px] rounded-full',
        inputBg: 'bg-[#060d21] border border-yellow-400/50 text-amber-100 font-cinzel rounded-xl focus:border-yellow-300 focus:outline-none',
        borderColor: 'border-yellow-400/30',
        accentTextColor: 'text-yellow-300',
        subtextColor: 'text-sky-200/70',
        glowEffect: 'shadow-[0_0_35px_rgba(250,204,21,0.3)]',
        tableHeaderBg: 'bg-[#091533] text-yellow-300 font-cinzel border-b-2 border-yellow-400/40',
        tableRowHover: 'hover:bg-yellow-950/30 transition-colors',
        modalOverlay: 'bg-[#030814]/90 backdrop-blur-md',
        modalContainer: 'bg-[#0b1633] border-2 border-yellow-400/60 shadow-[0_0_60px_rgba(250,204,21,0.4)] rounded-3xl text-amber-100',
        progressTrack: 'bg-[#050c1f] border border-yellow-400/40 rounded-full p-0.5',
        progressBar: 'bg-gradient-to-r from-yellow-400 via-amber-300 to-sky-400 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.8)]',
        slotBox: 'p-2.5 rounded-xl border-2 border-yellow-400/50 bg-[#060d21] shadow-[0_0_15px_rgba(250,204,21,0.2)]',
      };

    case 'romanticism':
      return {
        wrapperBg: 'romanticism-bg text-amber-100 selection:bg-amber-600 selection:text-white',
        cardBg: 'bg-[#1c0f0a]/90 backdrop-blur-md text-amber-100 border border-amber-600/40 shadow-[0_10px_35px_rgba(180,83,9,0.25)] rounded-xl',
        cardHeaderBg: 'bg-[#140b07] border-b border-amber-600/40 p-2',
        primaryBtn: 'bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 hover:from-amber-600 hover:to-yellow-500 text-amber-50 font-playfair font-bold shadow-[0_0_20px_rgba(180,83,9,0.4)] rounded-lg uppercase tracking-wider border border-amber-400/40',
        secondaryBtn: 'bg-[#26150e] text-amber-200 border border-amber-600/40 hover:bg-amber-950/60 font-playfair rounded-lg',
        accentBtn: 'bg-gradient-to-r from-red-900 to-rose-950 text-amber-100 rounded-lg font-playfair border border-amber-500/40',
        titleFont: 'font-playfair italic font-bold tracking-normal text-amber-200 text-xl',
        badge: 'bg-amber-950/90 text-amber-300 border border-amber-600/50 font-playfair text-[10px] rounded-sm',
        badgeAccent: 'bg-red-950/90 text-rose-200 border border-red-500/50 font-playfair text-[10px] rounded-sm',
        inputBg: 'bg-[#110906] border border-amber-600/50 text-amber-100 font-playfair rounded-lg focus:border-amber-400 focus:outline-none',
        borderColor: 'border-amber-700/30',
        accentTextColor: 'text-amber-300',
        subtextColor: 'text-amber-200/60',
        glowEffect: 'shadow-[0_0_30px_rgba(180,83,9,0.3)]',
        tableHeaderBg: 'bg-[#160d09] text-amber-300 font-playfair border-b border-amber-600/40',
        tableRowHover: 'hover:bg-amber-950/40 transition-colors',
        modalOverlay: 'bg-[#0a0503]/90 backdrop-blur-md',
        modalContainer: 'bg-[#1a0e0a] border-2 border-amber-600/60 shadow-[0_0_60px_rgba(180,83,9,0.4)] rounded-2xl text-amber-100',
        progressTrack: 'bg-[#0e0705] border border-amber-600/40 rounded-full p-0.5',
        progressBar: 'bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 rounded-full',
        slotBox: 'p-2.5 rounded-lg border-2 border-amber-600/50 bg-[#110906] shadow-[0_0_15px_rgba(180,83,9,0.2)]',
      };

    case 'win95':
      return {
        wrapperBg: 'bg-[#008080] text-black selection:bg-[#000080] selection:text-white',
        cardBg: 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black shadow-md',
        cardHeaderBg: 'bg-[#000080] text-white p-1 font-bold font-mono',
        primaryBtn: 'bg-[#c0c0c0] text-black font-mono text-xs py-2 uppercase border-2 border-t-white border-l-white border-b-black border-r-black active:border-t-black active:border-l-black active:border-b-white active:border-r-white font-bold',
        secondaryBtn: 'bg-[#c0c0c0] text-black font-mono text-xs py-2 border-2 border-t-white border-l-white border-b-black border-r-black font-bold',
        accentBtn: 'bg-[#008000] text-white font-mono text-xs py-2 uppercase border-2 border-t-emerald-300 border-l-emerald-300 border-b-emerald-950 border-r-emerald-950 font-bold',
        titleFont: 'font-mono tracking-tight font-bold text-white',
        badge: 'bg-[#000080] text-white font-mono text-[10px] px-2 py-0.5',
        badgeAccent: 'bg-[#800080] text-white font-mono text-[10px] px-2 py-0.5',
        inputBg: 'bg-white border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white text-black font-mono',
        borderColor: 'border-gray-500',
        accentTextColor: 'text-[#000080]',
        subtextColor: 'text-gray-700',
        glowEffect: 'shadow-[2px_2px_0px_0px_#000]',
        tableHeaderBg: 'bg-[#c0c0c0] text-black font-mono border-b-2 border-black font-bold',
        tableRowHover: 'hover:bg-[#000080] hover:text-white transition-colors',
        modalOverlay: 'bg-black/60',
        modalContainer: 'bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black shadow-2xl text-black',
        progressTrack: 'bg-white border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white',
        progressBar: 'bg-[#000080]',
        slotBox: 'p-2.5 bg-white border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white',
      };

    case 'luxury':
      return {
        wrapperBg: 'bg-[#0a0a0c] text-amber-100 selection:bg-amber-500 selection:text-black',
        cardBg: 'bg-[#121118]/90 backdrop-blur-md border border-amber-500/30 shadow-[0_10px_30px_rgba(217,119,6,0.15)] rounded-2xl',
        cardHeaderBg: 'bg-[#1a1824] border-b border-amber-500/30',
        primaryBtn: 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-yellow-400 text-black font-serif font-bold shadow-[0_0_20px_rgba(245,158,11,0.4)] rounded-xl uppercase tracking-wider',
        secondaryBtn: 'bg-[#1c1a26] text-amber-300 border border-amber-500/40 hover:bg-amber-950/40 rounded-xl font-serif',
        accentBtn: 'bg-gradient-to-r from-yellow-600 to-amber-700 text-white rounded-xl font-serif shadow-lg',
        titleFont: 'font-serif tracking-normal text-amber-300 font-normal italic',
        badge: 'bg-amber-950/80 text-amber-300 border border-amber-500/40 font-serif text-[10px] rounded-full',
        badgeAccent: 'bg-yellow-950/80 text-yellow-200 border border-yellow-400/40 font-serif text-[10px] rounded-full',
        inputBg: 'bg-[#0d0c12] border border-amber-500/40 text-amber-100 font-serif rounded-xl focus:border-amber-300 focus:outline-none',
        borderColor: 'border-amber-500/20',
        accentTextColor: 'text-amber-300',
        subtextColor: 'text-amber-200/60',
        glowEffect: 'shadow-[0_0_30px_rgba(245,158,11,0.2)]',
        tableHeaderBg: 'bg-[#161420] text-amber-300 font-serif border-b border-amber-500/30',
        tableRowHover: 'hover:bg-amber-950/30 transition-colors',
        modalOverlay: 'bg-black/90 backdrop-blur-md',
        modalContainer: 'bg-[#14121d] border-2 border-amber-500/60 shadow-[0_0_60px_rgba(245,158,11,0.3)] rounded-3xl text-amber-100',
        progressTrack: 'bg-[#09080e] border border-amber-500/30 rounded-full p-0.5',
        progressBar: 'bg-gradient-to-r from-amber-500 to-yellow-300 rounded-full',
        slotBox: 'p-2.5 rounded-xl border border-amber-500/40 bg-[#0d0c12] shadow-[0_0_15px_rgba(245,158,11,0.15)]',
      };

    case 'synthwave':
      return {
        wrapperBg: 'bg-[#0f051d] text-fuchsia-100 selection:bg-pink-500 selection:text-white',
        cardBg: 'bg-[#1a0b2e]/90 backdrop-blur-md border-2 border-pink-500/50 shadow-[0_0_25px_rgba(236,72,153,0.25)] rounded-xl',
        cardHeaderBg: 'bg-[#260d42] border-b-2 border-cyan-400/50',
        primaryBtn: 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-mono font-bold shadow-[0_0_20px_rgba(236,72,153,0.5)] uppercase tracking-wider',
        secondaryBtn: 'bg-[#150727] text-cyan-300 border-2 border-cyan-400 hover:bg-cyan-950/50 font-mono',
        accentBtn: 'bg-gradient-to-r from-cyan-400 to-pink-500 text-black font-bold font-mono shadow-[0_0_20px_rgba(6,182,212,0.5)]',
        titleFont: 'font-mono tracking-wider font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400',
        badge: 'bg-pink-950/80 text-pink-300 border border-pink-500 font-mono text-[10px]',
        badgeAccent: 'bg-cyan-950/80 text-cyan-300 border border-cyan-400 font-mono text-[10px]',
        inputBg: 'bg-[#0d031a] border-2 border-pink-500/60 text-cyan-200 font-mono focus:border-cyan-400 focus:outline-none',
        borderColor: 'border-pink-500/30',
        accentTextColor: 'text-pink-400',
        subtextColor: 'text-fuchsia-300/70',
        glowEffect: 'shadow-[0_0_30px_rgba(236,72,153,0.4)]',
        tableHeaderBg: 'bg-[#200938] text-cyan-300 font-mono border-b-2 border-pink-500',
        tableRowHover: 'hover:bg-pink-950/40 transition-colors',
        modalOverlay: 'bg-[#0a0214]/90 backdrop-blur-md',
        modalContainer: 'bg-[#1c0a32] border-2 border-pink-500 shadow-[0_0_60px_rgba(236,72,153,0.4)] rounded-2xl text-white',
        progressTrack: 'bg-[#0b0216] border border-pink-500/40',
        progressBar: 'bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 shadow-[0_0_15px_rgba(236,72,153,0.8)]',
        slotBox: 'p-2.5 rounded-lg border-2 border-pink-500/60 bg-[#0d031a] shadow-[0_0_15px_rgba(236,72,153,0.3)]',
      };

    case 'swiss':
      return {
        wrapperBg: 'bg-[#f4f4f0] text-slate-950 selection:bg-orange-500 selection:text-white',
        cardBg: 'bg-white text-slate-950 border-4 border-black shadow-[8px_8px_0px_0px_#000000]',
        cardHeaderBg: 'bg-black text-white p-3 font-sans font-black uppercase tracking-wider',
        primaryBtn: 'bg-orange-600 hover:bg-orange-500 text-white font-black uppercase tracking-wider py-3 border-2 border-black shadow-[4px_4px_0px_0px_#000]',
        secondaryBtn: 'bg-white text-black font-black uppercase py-3 border-2 border-black hover:bg-slate-100 shadow-[4px_4px_0px_0px_#000]',
        accentBtn: 'bg-black text-white font-black uppercase py-3 border-2 border-black hover:bg-slate-800 shadow-[4px_4px_0px_0px_#ea580c]',
        titleFont: 'font-sans font-black tracking-tighter uppercase text-slate-950 text-2xl',
        badge: 'bg-orange-600 text-white font-black uppercase text-[10px] px-2 py-0.5 border border-black',
        badgeAccent: 'bg-black text-white font-black uppercase text-[10px] px-2 py-0.5',
        inputBg: 'bg-white border-2 border-black text-black font-sans font-bold focus:bg-orange-50 focus:outline-none',
        borderColor: 'border-black',
        accentTextColor: 'text-orange-600',
        subtextColor: 'text-slate-600',
        glowEffect: 'shadow-[8px_8px_0px_0px_#000]',
        tableHeaderBg: 'bg-slate-100 text-black font-black uppercase border-b-4 border-black',
        tableRowHover: 'hover:bg-orange-100 transition-colors',
        modalOverlay: 'bg-black/80',
        modalContainer: 'bg-white border-4 border-black shadow-[16px_16px_0px_0px_#000000] text-black',
        progressTrack: 'bg-slate-200 border-2 border-black',
        progressBar: 'bg-orange-600 border-r-2 border-black',
        slotBox: 'p-2.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000]',
      };

    case 'mecha':
      return {
        wrapperBg: 'bg-[#0c0d10] text-emerald-100 selection:bg-amber-400 selection:text-black',
        cardBg: 'bg-[#14161d] text-emerald-100 border-2 border-amber-500/60 shadow-[0_0_30px_rgba(245,158,11,0.15)] relative overflow-hidden',
        cardHeaderBg: 'bg-[#1c1e28] border-b-2 border-amber-500/40 p-2',
        primaryBtn: 'bg-amber-500 hover:bg-amber-400 text-black font-mono font-black uppercase tracking-widest py-2.5 border-b-4 border-amber-700 shadow-lg',
        secondaryBtn: 'bg-[#1e212b] text-emerald-400 border border-emerald-500/50 hover:bg-emerald-950/40 font-mono text-xs',
        accentBtn: 'bg-rose-600 hover:bg-rose-500 text-white font-mono font-bold uppercase py-2.5 border-b-4 border-rose-900',
        titleFont: 'font-mono font-black tracking-widest text-amber-400 uppercase',
        badge: 'bg-amber-500/20 text-amber-300 border border-amber-500/50 font-mono text-[10px]',
        badgeAccent: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 font-mono text-[10px]',
        inputBg: 'bg-[#08090c] border-2 border-amber-500/50 text-amber-200 font-mono focus:border-emerald-400 focus:outline-none',
        borderColor: 'border-amber-500/30',
        accentTextColor: 'text-amber-400',
        subtextColor: 'text-emerald-200/60',
        glowEffect: 'shadow-[0_0_25px_rgba(245,158,11,0.25)]',
        tableHeaderBg: 'bg-[#181a24] text-amber-400 font-mono uppercase border-b-2 border-amber-500/50',
        tableRowHover: 'hover:bg-amber-950/30 transition-colors',
        modalOverlay: 'bg-black/90 backdrop-blur-md',
        modalContainer: 'bg-[#14161d] border-2 border-amber-500 shadow-[0_0_60px_rgba(245,158,11,0.3)] text-emerald-100',
        progressTrack: 'bg-[#08090c] border border-amber-500/40',
        progressBar: 'bg-amber-400 border-r-2 border-black',
        slotBox: 'p-2.5 bg-[#08090c] border-2 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]',
      };

    case 'cyber':
    default:
      return {
        wrapperBg: 'bg-[#080d19] text-slate-100 selection:bg-cyan-500 selection:text-slate-950',
        cardBg: 'bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 shadow-[0_0_20px_rgba(0,240,255,0.08)] rounded-xl',
        cardHeaderBg: 'bg-slate-950/60 border-b border-cyan-500/20',
        primaryBtn: 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all transform hover:-translate-y-0.5 active:translate-y-0',
        secondaryBtn: 'bg-slate-800/90 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.1)] transition-all',
        accentBtn: 'bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-400/30',
        titleFont: 'font-mono tracking-tight font-bold text-cyan-300',
        badge: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 font-mono',
        badgeAccent: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono',
        inputBg: 'bg-slate-950/80 border border-cyan-500/40 text-cyan-100 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none font-mono',
        borderColor: 'border-cyan-500/20',
        accentTextColor: 'text-cyan-400',
        subtextColor: 'text-slate-400',
        glowEffect: 'shadow-[0_0_30px_rgba(0,240,255,0.15)]',
        tableHeaderBg: 'bg-slate-950/80 text-cyan-400 font-mono border-b border-cyan-500/30',
        tableRowHover: 'hover:bg-cyan-950/30 transition-colors',
        modalOverlay: 'bg-slate-950/80 backdrop-blur-md',
        modalContainer: 'bg-slate-900 border-2 border-cyan-500/50 shadow-[0_0_50px_rgba(0,240,255,0.25)] rounded-2xl',
        progressTrack: 'bg-slate-950 border border-cyan-500/30',
        progressBar: 'bg-gradient-to-r from-cyan-500 via-emerald-400 to-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.8)]',
        slotBox: 'p-2.5 rounded-lg border border-cyan-500/40 bg-slate-950 shadow-[0_0_15px_rgba(0,240,255,0.2)]',
      };
  }
}
