import React, { useState } from 'react';
import { SaveSlot, ThemeStyle } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick, playMcAnvil, playMcLevelUp } from '../utils/mcAudio';
import { 
  Bookmark, 
  RotateCcw, 
  Trash2, 
  Calendar, 
  HardDrive, 
  Database, 
  CheckCircle2, 
  User, 
  GitCommit, 
  PlusCircle,
  FileJson,
  Sparkles,
  Box
} from 'lucide-react';

interface SaveSlotsGridProps {
  saveSlots: SaveSlot[];
  onRollbackSlot: (slot: SaveSlot) => void;
  onDownloadSlotJson: (slot: SaveSlot) => void;
  onDeleteSlot: (slotId: string) => void;
  onCreateNewSlot: () => void;
  currentTheme: ThemeStyle;
}

export const SaveSlotsGrid: React.FC<SaveSlotsGridProps> = ({
  saveSlots,
  onRollbackSlot,
  onDownloadSlotJson,
  onDeleteSlot,
  onCreateNewSlot,
  currentTheme,
}) => {
  const theme = getThemeClasses(currentTheme);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const confirmDelete = (id: string) => {
    playMcAnvil();
    onDeleteSlot(id);
    setDeletingId(null);
  };

  const handleRollback = (slot: SaveSlot) => {
    playMcLevelUp();
    onRollbackSlot(slot);
  };

  const handleCreate = () => {
    playMcClick();
    onCreateNewSlot();
  };

  return (
    <div className="space-y-4">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#3d3126]">
        <div className="flex items-center gap-2">
          <Bookmark className={`w-5 h-5 ${theme.accentTextColor}`} />
          <h3 className={`text-sm md:text-base uppercase ${theme.titleFont}`}>
            DANH SÁCH SAVE SLOTS & CÁC ĐIỂM SAO LƯU SNAPSHOT ({saveSlots.length} Slots)
          </h3>
        </div>

        <button
          onClick={handleCreate}
          className={`px-3.5 py-2 text-xs font-bold flex items-center gap-2 ${theme.primaryBtn} cursor-pointer self-start sm:self-auto`}
        >
          <PlusCircle className="w-4 h-4" />
          <span>TẠO SAVE POINT SNAPSHOT MỚI</span>
        </button>
      </div>

      {/* Slots Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {saveSlots.map((slot) => {
          return (
            <div
              key={slot.id}
              className={`p-4 md:p-5 ${theme.cardBg} relative flex flex-col justify-between transition-all duration-300 group ${
                slot.isCurrent ? 'border-2 border-[#55ff55]' : ''
              }`}
            >
              {/* Badge for Current Active Snapshot */}
              {slot.isCurrent && (
                <div className="absolute top-3 right-3 px-2 py-0.5 text-[9px] font-pixel bg-[#153015] text-[#55ff55] border border-[#288028] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#55ff55] animate-pulse" />
                  <span>CURRENT ACTIVE</span>
                </div>
              )}

              <div className="space-y-3">
                {/* Title & Slot ID */}
                <div>
                  <span className="text-[10px] font-pixel text-[#aaaaaa] uppercase tracking-widest block">
                    SLOT ID: {slot.id}
                  </span>
                  <h4 className={`text-xs md:text-sm font-pixel line-clamp-2 ${theme.accentTextColor}`}>
                    {slot.title}
                  </h4>
                </div>

                {/* Info Fields */}
                <div className="space-y-1.5 text-xs font-silkscreen bg-[#120e0a] p-3 border border-[#3d3126]">
                  <div className="flex items-center justify-between text-[#cccccc]">
                    <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                      <Calendar className="w-3.5 h-3.5 text-[#55ffff]" />
                      Thời Gian:
                    </span>
                    <span className="font-bold text-[#ffffff]">{slot.timestamp}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#cccccc]">
                    <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                      <HardDrive className="w-3.5 h-3.5 text-[#ff55ff]" />
                      File Path:
                    </span>
                    <span className="font-bold text-[#55ffff] truncate max-w-[180px]" title={slot.filePath}>
                      {slot.filePath}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[#cccccc]">
                    <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                      <Database className="w-3.5 h-3.5 text-[#ffaa00]" />
                      Đơn Bàn Đồng Bộ:
                    </span>
                    <span className="font-bold text-[#ffaa00]">{slot.syncedBookings}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#cccccc]">
                    <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#55ff55]" />
                      DB Integrity:
                    </span>
                    <span className="font-bold text-[#55ff55]">{slot.dbIntegrity}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#cccccc] pt-1 border-t border-[#261f18]">
                    <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                      <User className="w-3.5 h-3.5 text-[#55ffff]" />
                      Operator:
                    </span>
                    <span className="text-[#ffffff]">{slot.operator}</span>
                  </div>

                  <div className="flex items-center justify-between text-[#cccccc]">
                    <span className="flex items-center gap-1.5 text-[#aaaaaa]">
                      <GitCommit className="w-3.5 h-3.5 text-[#ff55ff]" />
                      Commit Hash:
                    </span>
                    <span className="px-1.5 py-0.5 bg-[#281528] text-[#ff55ff] text-[10px] font-pixel">
                      {slot.commitHash}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-[#3d3126] flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  {/* Action Button 1: ROLLBACK BẢN PATCH NÀY */}
                  <button
                    onClick={() => handleRollback(slot)}
                    className={`py-2 px-2.5 text-[10px] font-pixel flex items-center justify-center gap-1.5 ${theme.primaryBtn} cursor-pointer`}
                    title="Rollback lại điểm Save Point này"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span className="truncate">ROLLBACK</span>
                  </button>

                  {/* Action Button 2: TẢI FILE SAVE (.JSON) */}
                  <button
                    onClick={() => {
                      playMcClick();
                      onDownloadSlotJson(slot);
                    }}
                    className={`py-2 px-2.5 text-[10px] font-pixel flex items-center justify-center gap-1.5 ${theme.secondaryBtn} cursor-pointer`}
                    title="Tải về file save JSON"
                  >
                    <FileJson className="w-3.5 h-3.5 text-[#ffaa00]" />
                    <span className="truncate">TẢI (.JSON)</span>
                  </button>
                </div>

                {/* Action Button 3: XÓA SLOT */}
                {deletingId === slot.id ? (
                  <div className="flex items-center gap-2 p-2 bg-rose-950/90 border border-rose-500">
                    <span className="text-[10px] text-rose-200 font-pixel flex-grow">Xác nhận xóa?</span>
                    <button
                      onClick={() => confirmDelete(slot.id)}
                      className="px-2 py-1 bg-rose-600 text-white text-[10px] font-pixel cursor-pointer"
                    >
                      XÓA
                    </button>
                    <button
                      onClick={() => {
                        playMcClick();
                        setDeletingId(null);
                      }}
                      className="px-2 py-1 bg-gray-700 text-gray-200 text-[10px] font-pixel cursor-pointer"
                    >
                      HỦY
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      playMcClick();
                      setDeletingId(slot.id);
                    }}
                    disabled={slot.isCurrent}
                    className={`w-full py-1.5 px-3 text-[10px] font-pixel flex items-center justify-center gap-1.5 text-rose-400 hover:text-rose-300 border border-rose-900 bg-rose-950/30 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-all`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>XÓA SLOT SNAPSHOT</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
