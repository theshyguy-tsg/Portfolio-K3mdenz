import { SystemMetrics, PatchNoteCategory, SaveSlot, AuditLog } from '../types';

export const INITIAL_METRICS: SystemMetrics = {
  dbIntegrity: 100,
  orphanRecords: 0,
  syncLogsCount: 5,
  lastSyncTime: '2026-08-11 22:14:00',
  latencyMs: 12,
  isOnline: true,
  maintenanceMode: false,
};

export const INITIAL_PATCH_NOTES: PatchNoteCategory[] = [
  {
    id: 'cat-1',
    category: 'feature',
    title: 'TÍNH NĂNG MỚI - Hộp thoại Xác nhận 2 bước & Tiến trình HUD 4 bước.',
    tag: 'NEW FEATURE',
    summary: 'Tích hợp quy trình xác thực kép Safe-Lock 2-Step Confirmation và HUD Overlay 4 bước cập nhật thời gian thực.',
    details: [
      'Bổ sung modal HUD tiến trình 4 giai đoạn: Checksum Source Integrity -> Stash Local & Fetch Remote -> Apply Patches & Rebuild -> System Warmup.',
      'Bổ sung bộ chọn Theme Switcher 3 phong cách độc bản: Cyber Orbital Glass, Luxury Gold Fine Dining, Swiss Modern Enterprise.',
      'Cơ chế xuất nén trọn gói Mã nguồn dự án định dạng ZIP trực tiếp tại Trạm phát hành.',
      'Quản lý đa dự án với hệ sinh thái KemDenz Fine Dining Ecosystem (Main Branch: daily-sync-snapshots).'
    ],
    affectedModules: ['/src/components/PatchModal.tsx', '/src/utils/zipExporter.ts', 'Fine Dining POS', 'Kitchen Display KDS'],
    version: 'v2.5.0-RELEASE',
    date: '2026-08-11 22:10'
  },
  {
    id: 'cat-2',
    category: 'bugfix',
    title: 'SỬA LỖI - Khắc phục 10 lỗi tiềm ẩn (Command Injection, Path Traversal, Unmounted State, SWR Cache).',
    tag: 'BUG FIXES',
    summary: 'Xử lý triệt để 10 lỗ hổng nghiêm trọng về bảo mật dòng lệnh và bộ nhớ đệm UI state.',
    details: [
      'Bảo vệ Command Injection trong đối tượng PowerShell execution payload.',
      'Ngăn chặn Path Traversal khi nạp file snapshot `.json` từ thư mục tạm `data/sync-saves/`.',
      'Sửa lỗi Unmounted React Component State memory leak trong vòng lặp Async Socket Listener.',
      'Đồng bộ lại SWR Cache stale-while-revalidate trên dashboard quản lý bàn Fine Dining KemDenz.',
      'Xử lý race-condition khi bấm nút Rollback nhiều lần liên tiếp.'
    ],
    affectedModules: ['/src/server/socket.ts', '/src/hooks/useSaveSlots.ts', 'KemDenz Core Engine'],
    version: 'v2.5.0-PATCH-01',
    date: '2026-08-11 21:45'
  },
  {
    id: 'cat-3',
    category: 'performance',
    title: 'TỐI ƯU HIỆU NĂNG - RAM Cache limit 100 slot, Socket leak protection.',
    tag: 'PERFORMANCE',
    summary: 'Tăng tốc độ phản hồi API lên dưới 12ms và tự động giải phóng bộ nhớ RAM dư thừa.',
    details: [
      'Giới hạn LRU RAM Cache tối đa 100 slots cho dữ liệu thực đơn và danh sách đơn bàn.',
      'Hệ thống Socket Leak Protection tự động dọn dẹp orphan listeners khi người dùng chuyển trang.',
      'Giảm bớt 42% payload dung lượng JSON truyền nhận giữa POS Terminal và KDS bếp.',
      'Tối ưu hóa thời gian Render React 19 Virtual DOM bằng memoization hạt nhân.'
    ],
    affectedModules: ['/src/cache/lruCache.ts', 'Websocket Gateway', 'Table Management'],
    version: 'v2.5.0-PERF-OPT',
    date: '2026-08-11 20:30'
  },
  {
    id: 'cat-4',
    category: 'security',
    title: 'BẢO MẬT - UTF-8 PowerShell encoding & Auto Restore Git Stash.',
    tag: 'SECURITY',
    summary: 'Tăng cường mã hóa UTF-8 tiêu chuẩn và cơ chế tự động phục hồi Stash an toàn tuyệt đối.',
    details: [
      'Ép kiểu mã hóa UTF-8 cho toàn bộ câu lệnh Shell & PowerShell script chạy trên server.',
      'Tự động sao lưu Git Stash hiện tại trước khi thực hiện PULL hay ROLLBACK bản cập nhật mới.',
      'Ghi nhật ký mã hóa SHA-256 cho từng điểm lưu Save Point Snapshot.',
      'Chống tấn công CSRF & XSS trên giao diện điều khiển hệ thống KemDenz Admin.'
    ],
    affectedModules: ['/src/security/sanitizer.ts', 'Git Sync Engine', 'Audit Trail'],
    version: 'v2.5.0-SEC-SHIELD',
    date: '2026-08-11 19:15'
  }
];

export const INITIAL_SAVE_SLOTS: SaveSlot[] = [
  {
    id: 'slot-005',
    title: 'TRẠM DỮ LIỆU ORBITAL #2026-08-11',
    timestamp: '2026-08-11 22:14:00',
    filePath: 'data/sync-saves/save_20260811_2214.json',
    syncedBookings: '42 đơn bàn',
    dbIntegrity: '100% CLEAN',
    sizeKb: 1420,
    operator: 'K3mdenz System Admin',
    commitHash: '#204217c',
    isCurrent: true
  },
  {
    id: 'slot-004',
    title: 'BẢN LƯU DỰ PHÒNG CA TỐI - VIP DINING',
    timestamp: '2026-08-11 18:30:12',
    filePath: 'data/sync-saves/save_20260811_1830.json',
    syncedBookings: '38 đơn bàn',
    dbIntegrity: '100% CLEAN',
    sizeKb: 1380,
    operator: 'KemDenz Senior Dev',
    commitHash: '#1f92a0e',
    isCurrent: false
  },
  {
    id: 'slot-003',
    title: 'SNAPSHOT CHUẨN BỊ BẮT ĐẦU CA TRƯA',
    timestamp: '2026-08-11 11:00:00',
    filePath: 'data/sync-saves/save_20260811_1100.json',
    syncedBookings: '25 đơn bàn',
    dbIntegrity: '100% CLEAN',
    sizeKb: 1150,
    operator: 'Operator-Shift-1',
    commitHash: '#0c812d4',
    isCurrent: false
  },
  {
    id: 'slot-002',
    title: 'SAVE POINT GOLD MASTER MILESTONE v2.4.9',
    timestamp: '2026-08-10 23:59:59',
    filePath: 'data/sync-saves/save_20260810_2359.json',
    syncedBookings: '110 đơn bàn',
    dbIntegrity: '100% CLEAN',
    sizeKb: 2890,
    operator: 'K3mdenz System Admin',
    commitHash: '#9b71e8f',
    isCurrent: false
  },
  {
    id: 'slot-001',
    title: 'ĐIỂM SAO LƯU GỐC HỆ THỐNG KEMDENZ INITIAL',
    timestamp: '2026-08-01 08:00:00',
    filePath: 'data/sync-saves/save_20260801_0800.json',
    syncedBookings: '0 đơn bàn',
    dbIntegrity: '100% CLEAN',
    sizeKb: 512,
    operator: 'Root Installer',
    commitHash: '#000001a',
    isCurrent: false
  }
];

export const INITIAL_AUDIT_LOGS: AuditLog[] = [
  {
    id: 'log-105',
    timestamp: '2026-08-11 22:14:00',
    actionType: 'PATCH_DEPLOY',
    operator: 'K3mdenz System Admin',
    details: 'Phát hành thành công Patch Snapshot v2.5.0-RELEASE (Save Point #204217c).',
    status: 'SUCCESS',
    ipAddress: '192.168.1.100'
  },
  {
    id: 'log-104',
    timestamp: '2026-08-11 21:50:18',
    actionType: 'SAVEPOINT_CREATE',
    operator: 'K3mdenz System Admin',
    details: 'Tự động tạo điểm Save Snapshot "TRẠM DỮ LIỆU ORBITAL #2026-08-11".',
    status: 'SUCCESS',
    ipAddress: '192.168.1.100'
  },
  {
    id: 'log-103',
    timestamp: '2026-08-11 20:15:42',
    actionType: 'GIT_PULL',
    operator: 'KemDenz Senior Dev',
    details: 'Pull thành công branch daily-sync-snapshots từ GitHub repo KemDenz Ecosystem.',
    status: 'SUCCESS',
    ipAddress: '192.168.1.105'
  },
  {
    id: 'log-102',
    timestamp: '2026-08-11 19:00:10',
    actionType: 'SCAN_INTEGRITY',
    operator: 'System Daemon',
    details: 'Kiểm tra toàn vẹn Database: 100% Khỏe mạnh, 0 orphan records.',
    status: 'SUCCESS',
    ipAddress: '127.0.0.1'
  },
  {
    id: 'log-101',
    timestamp: '2026-08-11 18:00:00',
    actionType: 'MAINTENANCE_TOGGLE',
    operator: 'K3mdenz System Admin',
    details: 'Chuyển trạng thái Maintenance Shield thành OFF (Hệ thống mở 24/7).',
    status: 'SUCCESS',
    ipAddress: '192.168.1.100'
  }
];
