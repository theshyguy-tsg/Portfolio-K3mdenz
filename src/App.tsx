/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ThemeStyle, SystemMetrics, SaveSlot, AuditLog, PatchNoteCategory } from './types';
import { INITIAL_METRICS, INITIAL_PATCH_NOTES, INITIAL_SAVE_SLOTS, INITIAL_AUDIT_LOGS } from './data/mockData';
import { getThemeClasses } from './utils/themeConfig';
import { exportProjectZip } from './utils/zipExporter';
import { playMcClick, playMcAnvil, playMcLevelUp } from './utils/mcAudio';

import { Header } from './components/Header';
import { MetricsBar } from './components/MetricsBar';
import { PatchForm } from './components/PatchForm';
import { CategorizedPatchNotes } from './components/CategorizedPatchNotes';
import { SaveSlotsGrid } from './components/SaveSlotsGrid';
import { AuditLogsTable } from './components/AuditLogsTable';
import { PatchModal } from './components/PatchModal';
import { GitPullModal } from './components/GitPullModal';
import { VanGoghStarrySky } from './components/VanGoghStarrySky';

import { 
  Bookmark, 
  History, 
  ShieldAlert, 
  Sparkles
} from 'lucide-react';

export default function App() {
  // Requirement 1 & Minecraft Default Style
  const [currentTheme, setCurrentTheme] = useState<ThemeStyle>('minecraft');

  // State
  const [selectedBranch, setSelectedBranch] = useState('daily-sync-snapshots');
  const [latestCommitHash, setLatestCommitHash] = useState('#204217c');
  const [metrics, setMetrics] = useState<SystemMetrics>(INITIAL_METRICS);
  const [operatorName, setOperatorName] = useState('Steve - Minecraft Architect');
  const [patchNote, setPatchNote] = useState('Tự động sao lưu điểm Save Snapshot vào Git Branch');
  const [saveSlots, setSaveSlots] = useState<SaveSlot[]>(INITIAL_SAVE_SLOTS);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>(INITIAL_AUDIT_LOGS);
  const [patchNotes] = useState<PatchNoteCategory[]>(INITIAL_PATCH_NOTES);

  // Sub-tabs navigation
  const [activeSubTab, setActiveSubTab] = useState<'slots' | 'audit'>('slots');

  // Modals state
  const [isPatchModalOpen, setIsPatchModalOpen] = useState(false);
  const [isGitPullModalOpen, setIsGitPullModalOpen] = useState(false);
  const [isExportingZip, setIsExportingZip] = useState(false);

  // Toast alert banner state
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const theme = getThemeClasses(currentTheme);

  // Requirement 2: Full Source Code ZIP Download Handler
  const handleDownloadZip = async () => {
    try {
      playMcClick();
      setIsExportingZip(true);
      await exportProjectZip(saveSlots, auditLogs);
      playMcLevelUp();
      showToast('✓ Đã xuất trọn gói file nén mã nguồn dự án DATN-SD33 (.ZIP) thành công!');
    } catch (err) {
      showToast('❌ Có lỗi khi tạo file ZIP mã nguồn.');
    } finally {
      setIsExportingZip(false);
    }
  };

  // Trigger Database Rescan
  const handleScanDb = () => {
    setMetrics(prev => ({
      ...prev,
      dbIntegrity: 100,
      orphanRecords: 0,
      lastSyncTime: new Date().toISOString().replace('T', ' ').substring(0, 19)
    }));

    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actionType: 'SCAN_INTEGRITY',
      operator: operatorName || 'Steve - Minecraft Architect',
      details: 'Thực hiện kiểm tra toàn vẹn Database: 100% Khỏe mạnh, 0 orphan records.',
      status: 'SUCCESS',
      ipAddress: '192.168.1.100'
    };

    setAuditLogs(prev => [newLog, ...prev]);
    showToast('✓ Quét toàn vẹn Database hoàn tất: 100% Khỏe mạnh, 0 bản ghi rác!');
  };

  // Toggle Maintenance Shield Mode
  const handleToggleMaintenance = () => {
    const nextMode = !metrics.maintenanceMode;
    setMetrics(prev => ({ ...prev, maintenanceMode: nextMode }));

    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actionType: 'MAINTENANCE_TOGGLE',
      operator: operatorName || 'Steve - Minecraft Architect',
      details: `Chuyển trạng thái Maintenance Shield thành ${nextMode ? 'ON (Bảo trì)' : 'OFF (Mở 24/7)'}.`,
      status: 'SUCCESS',
      ipAddress: '192.168.1.100'
    };

    setAuditLogs(prev => [newLog, ...prev]);
    showToast(`Khiên Bảo Trì đã chuyển sang trạng thái: ${nextMode ? 'BẬT (BẢO TRÌ)' : 'TẮT (HỆ THỐNG MỞ 24/7)'}`);
  };

  // Deploy Patch Completed Handler
  const handlePatchCompleted = () => {
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 16);
    const dateCode = nowStr.replace(/[- :]/g, '').substring(0, 12);
    const slotId = `slot-${Date.now().toString().slice(-4)}`;

    const newSlot: SaveSlot = {
      id: slotId,
      title: `TRẠM DỮ LIỆU SNAPSHOT #${nowStr.split(' ')[0]}`,
      timestamp: `${nowStr}:00`,
      filePath: `data/sync-saves/save_${dateCode}.json`,
      syncedBookings: `${Math.floor(Math.random() * 20) + 35} đơn bàn`,
      dbIntegrity: '100% CLEAN',
      sizeKb: 1450,
      operator: operatorName || 'Steve - Minecraft Architect',
      commitHash: latestCommitHash,
      isCurrent: true
    };

    // Unset current from other slots and add new slot at top
    setSaveSlots(prev => [
      newSlot,
      ...prev.map(s => ({ ...s, isCurrent: false }))
    ]);

    // Update metrics count
    setMetrics(prev => ({
      ...prev,
      syncLogsCount: prev.syncLogsCount + 1,
      lastSyncTime: `${nowStr}:00`
    }));

    // Add Audit Log
    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: `${nowStr}:00`,
      actionType: 'PATCH_DEPLOY',
      operator: operatorName || 'Steve - Minecraft Architect',
      details: `Phát hành thành công Patch Snapshot v2.5.0: "${patchNote}" (Save Point ${latestCommitHash}).`,
      status: 'SUCCESS',
      ipAddress: '192.168.1.100'
    };

    setAuditLogs(prev => [newLog, ...prev]);
    showToast(`🎉 Phát hành bản Patch Snapshot v2.5.0 (${newSlot.title}) thành công!`);
  };

  // Rollback Save Slot Handler
  const handleRollbackSlot = (slot: SaveSlot) => {
    setSaveSlots(prev => prev.map(s => ({
      ...s,
      isCurrent: s.id === slot.id
    })));

    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actionType: 'ROLLBACK',
      operator: operatorName || 'Steve - Minecraft Architect',
      details: `Rollback hệ thống về điểm Save Point Snapshot "${slot.title}" (${slot.filePath}).`,
      status: 'SUCCESS',
      ipAddress: '192.168.1.100'
    };

    setAuditLogs(prev => [newLog, ...prev]);
    showToast(`🔄 Đã Rollback hệ thống về điểm Save Point "${slot.title}"!`);
  };

  // Download Save Slot JSON
  const handleDownloadSlotJson = (slot: SaveSlot) => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      slotInfo: slot,
      ecosystem: "DATN-SD33 KemDenz Fine Dining Ecosystem",
      syncedBookings: [
        { id: "BK-1001", table: "VIP Imperial 1", guests: 6, status: "CONFIRMED" },
        { id: "BK-1002", table: "VIP Imperial 2", guests: 4, status: "SERVED" }
      ],
      systemConfig: {
        ramCacheLimit: 100,
        socketLeakProtection: true,
        utf8PowerShell: true
      }
    }, null, 2));

    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `${slot.filePath.split('/').pop()}`);
    document.body.appendChild(dlAnchorElem);
    dlAnchorElem.click();
    dlAnchorElem.remove();

    showToast(`📥 Đã tải file save snapshot JSON: ${slot.filePath.split('/').pop()}`);
  };

  // Delete Save Slot
  const handleDeleteSlot = (slotId: string) => {
    setSaveSlots(prev => prev.filter(s => s.id !== slotId));
    showToast(`🗑️ Đã xóa slot snapshot ID: ${slotId}`);
  };

  // Create new Save Point manually
  const handleCreateNewSlot = () => {
    setIsPatchModalOpen(true);
  };

  // Git Pull Success Handler
  const handleGitPullSuccess = (newHash: string) => {
    setLatestCommitHash(newHash);

    const newLog: AuditLog = {
      id: `log-${Date.now()}`,
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      actionType: 'GIT_PULL',
      operator: operatorName || 'Steve - Minecraft Architect',
      details: `Pull Git Remote thành công branch ${selectedBranch}. Update commit hash to ${newHash}.`,
      status: 'SUCCESS',
      ipAddress: '192.168.1.100'
    };

    setAuditLogs(prev => [newLog, ...prev]);
    showToast(`⚡ Git Pull thành công! Đã đồng bộ mã nguồn lên Target Commit ${newHash}`);
  };

  return (
    <div className={`min-h-screen ${theme.wrapperBg} p-3 sm:p-5 md:p-8 font-silkscreen transition-colors duration-300 relative overflow-hidden`}>
      {/* Animated Starry Night Sky Canvas Overlay for Van Gogh Theme */}
      <VanGoghStarrySky currentTheme={currentTheme} />

      <div className="max-w-7xl mx-auto space-y-6 relative z-10">
        
        {/* Maintenance Warning Banner if active */}
        {metrics.maintenanceMode && (
          <div className="p-4 bg-amber-950 border-2 border-amber-500 text-amber-200 flex items-center justify-between font-pixel text-xs animate-pulse">
            <div className="flex items-center gap-3">
              <ShieldAlert className="w-6 h-6 text-amber-400 flex-shrink-0" />
              <div>
                <h4 className="font-bold text-xs uppercase">CẢNH BÁO: BẢO TRÌ ĐANG BẬT (MAINTENANCE SHIELD)</h4>
                <p className="text-[10px] text-amber-300 opacity-90 font-silkscreen">
                  Hệ thống đang khóa truy cập ngoại vi từ POS Terminal & KDS Portal.
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                playMcAnvil();
                handleToggleMaintenance();
              }}
              className="px-3 py-1.5 mc-button text-[10px] cursor-pointer"
            >
              TẮT BẢO TRÌ
            </button>
          </div>
        )}

        {/* 1. HEADER & PROJECT CONTEXT WITH MINECRAFT THEME SWITCHER */}
        <Header
          currentTheme={currentTheme}
          onThemeChange={(st) => {
            playMcClick();
            setCurrentTheme(st);
          }}
          onDownloadZip={handleDownloadZip}
          selectedBranch={selectedBranch}
          onBranchChange={setSelectedBranch}
          isExportingZip={isExportingZip}
        />

        {/* 2. METRICS & SYSTEM HEALTH */}
        <MetricsBar
          metrics={metrics}
          onUpdateMetrics={(m) => setMetrics(prev => ({ ...prev, ...m }))}
          onScanDb={handleScanDb}
          onToggleMaintenance={handleToggleMaintenance}
          currentTheme={currentTheme}
        />

        {/* 3. PATCH CREATION & DEPLOYMENT ACTIONS */}
        <PatchForm
          operatorName={operatorName}
          onOperatorChange={setOperatorName}
          patchNote={patchNote}
          onPatchNoteChange={setPatchNote}
          onDeployPatch={() => {
            playMcClick();
            setIsPatchModalOpen(true);
          }}
          onGitPull={() => {
            playMcClick();
            setIsGitPullModalOpen(true);
          }}
          onDownloadZip={handleDownloadZip}
          currentTheme={currentTheme}
          latestCommitHash={latestCommitHash}
          selectedBranch={selectedBranch}
        />

        {/* 4. CATEGORIZED RELEASE PATCH NOTES */}
        <CategorizedPatchNotes
          patchNotes={patchNotes}
          currentTheme={currentTheme}
        />

        {/* SUB-TABS NAVIGATION: Save Slots vs Audit Logs */}
        <section className={`p-4 md:p-6 ${theme.cardBg} transition-all duration-300`}>
          {/* Sub-tab Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#3d3126]">
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playMcClick();
                  setActiveSubTab('slots');
                }}
                className={`px-4 py-2.5 text-xs font-pixel transition-all flex items-center gap-2 cursor-pointer ${
                  activeSubTab === 'slots'
                    ? `${theme.primaryBtn}`
                    : `${theme.secondaryBtn} opacity-75 hover:opacity-100`
                }`}
              >
                <Bookmark className="w-4 h-4" />
                <span>SAVE SLOTS ({saveSlots.length})</span>
              </button>

              <button
                onClick={() => {
                  playMcClick();
                  setActiveSubTab('audit');
                }}
                className={`px-4 py-2.5 text-xs font-pixel transition-all flex items-center gap-2 cursor-pointer ${
                  activeSubTab === 'audit'
                    ? `${theme.primaryBtn}`
                    : `${theme.secondaryBtn} opacity-75 hover:opacity-100`
                }`}
              >
                <History className="w-4 h-4" />
                <span>AUDIT LOGS ({auditLogs.length})</span>
              </button>
            </div>

            <div className="text-xs font-pixel text-[#aaaaaa] hidden sm:block">
              Target Branch: <span className="text-[#55ffff]">{selectedBranch}</span>
            </div>
          </div>

          {/* Sub-tab 1: SAVE SLOTS & SNAPSHOTS */}
          {activeSubTab === 'slots' && (
            <SaveSlotsGrid
              saveSlots={saveSlots}
              onRollbackSlot={handleRollbackSlot}
              onDownloadSlotJson={handleDownloadSlotJson}
              onDeleteSlot={handleDeleteSlot}
              onCreateNewSlot={handleCreateNewSlot}
              currentTheme={currentTheme}
            />
          )}

          {/* Sub-tab 2: AUDIT LOGS HISTORY TABLE */}
          {activeSubTab === 'audit' && (
            <AuditLogsTable
              logs={auditLogs}
              currentTheme={currentTheme}
            />
          )}
        </section>

        {/* Interactive Toast Notification */}
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 p-3.5 bg-[#171412] border-2 border-[#55ffff] text-[#55ffff] text-xs font-pixel flex items-center gap-3 animate-bounce">
            <Sparkles className="w-5 h-5 text-[#55ffff]" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 4-STEP PATCHING PROGRESS MODAL */}
        <PatchModal
          isOpen={isPatchModalOpen}
          onClose={() => setIsPatchModalOpen(false)}
          operatorName={operatorName}
          patchNote={patchNote}
          currentTheme={currentTheme}
          onPatchComplete={handlePatchCompleted}
        />

        {/* Simulated Git Pull Modal */}
        <GitPullModal
          isOpen={isGitPullModalOpen}
          onClose={() => setIsGitPullModalOpen(false)}
          currentTheme={currentTheme}
          selectedBranch={selectedBranch}
          onPullSuccess={handleGitPullSuccess}
        />

      </div>
    </div>
  );
}
