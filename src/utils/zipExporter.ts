import JSZip from 'jszip';

export async function exportProjectZip(currentSaveSlots: any[], currentAuditLogs: any[]) {
  const zip = new JSZip();

  // Root files
  zip.file('README.md', `# DATN-SD33: KemDenz Fine Dining Ecosystem
## Trạm Phát Hành & Cập Nhật Dự Án (Gold Master v2.5.0)

### Thông Tin Dự Án
- **Project Name**: DATN-SD33 - KemDenz Fine Dining Ecosystem
- **Main Branch**: daily-sync-snapshots
- **Version**: v2.5.0-RELEASE (GOLD MASTER EDITION)
- **Status**: 100% Up-to-Date with Release Server

### Nội Dung Nén Trọn Gói (.ZIP)
- Tất cả mã nguồn React + Vite + TypeScript + Tailwind CSS
- Cấu hình Server & Deployment Pipeline
- Snapshot dữ liệu Save Points & Audit Logs
`);

  zip.file('package.json', JSON.stringify({
    name: "datn-sd33-kemdenz-ecosystem",
    private: true,
    version: "2.5.0",
    type: "module",
    scripts: {
      dev: "vite --port=3000 --host=0.0.0.0",
      build: "vite build",
      preview: "vite preview"
    },
    dependencies: {
      "react": "^19.0.1",
      "react-dom": "^19.0.1",
      "lucide-react": "^0.546.0",
      "motion": "^12.23.24",
      "jszip": "^3.10.1",
      "canvas-confetti": "^1.9.4"
    }
  }, null, 2));

  zip.file('metadata.json', JSON.stringify({
    name: "DATN-SD33 KemDenz Release Dashboard",
    description: "Comprehensive, interactive Project Release & Patch Management Dashboard for KemDenz Fine Dining Ecosystem",
    version: "2.5.0-RELEASE",
    branch: "daily-sync-snapshots",
    build: "#204217c"
  }, null, 2));

  // Source Folder
  const srcFolder = zip.folder('src');
  if (srcFolder) {
    srcFolder.file('App.tsx', `// DATN-SD33 KemDenz Ecosystem Release Dashboard Entry Point\n// Exported on ${new Date().toISOString()}`);
    srcFolder.file('types.ts', `export type ThemeStyle = 'cyber' | 'luxury' | 'swiss'; ...`);
    
    const dataFolder = srcFolder.folder('data');
    if (dataFolder) {
      dataFolder.file('save_slots.json', JSON.stringify(currentSaveSlots, null, 2));
      dataFolder.file('audit_logs.json', JSON.stringify(currentAuditLogs, null, 2));
    }
  }

  // Data saves folder
  const syncSavesFolder = zip.folder('data/sync-saves');
  if (syncSavesFolder) {
    currentSaveSlots.forEach(slot => {
      const fileName = slot.filePath.split('/').pop() || `${slot.id}.json`;
      syncSavesFolder.file(fileName, JSON.stringify({
        slotId: slot.id,
        title: slot.title,
        timestamp: slot.timestamp,
        operator: slot.operator,
        commitHash: slot.commitHash,
        syncedBookingsCount: slot.syncedBookings,
        dbIntegrity: slot.dbIntegrity,
        sampleData: {
          tables: [
            { id: "T-01", name: "Bàn VIP Imperial 1", status: "RESERVED", guest: "K3mdenz VIP" },
            { id: "T-02", name: "Bàn VIP Imperial 2", status: "OCCUPIED", guest: "Executive Guest" }
          ],
          kitchenOrdersCount: 18,
          dailyRevenueVND: 42500000
        }
      }, null, 2));
    });
  }

  // Generate zip file as Blob
  const content = await zip.generateAsync({ type: 'blob' });

  // Trigger download
  const url = URL.createObjectURL(content);
  const a = document.createElement('a');
  a.href = url;
  a.download = `DATN-SD33_KemDenz_FullSource_v2.5.0_${Date.now()}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
