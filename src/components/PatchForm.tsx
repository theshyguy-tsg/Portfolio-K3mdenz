import React from 'react';
import { ThemeStyle } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick } from '../utils/mcAudio';
import { 
  Rocket, 
  GitPullRequest, 
  Download, 
  GitBranch, 
  GitCommit, 
  Globe, 
  User, 
  FileText,
  Sparkles
} from 'lucide-react';

interface PatchFormProps {
  operatorName: string;
  onOperatorChange: (val: string) => void;
  patchNote: string;
  onPatchNoteChange: (val: string) => void;
  onDeployPatch: () => void;
  onGitPull: () => void;
  onDownloadZip: () => void;
  currentTheme: ThemeStyle;
  latestCommitHash: string;
  selectedBranch: string;
}

export const PatchForm: React.FC<PatchFormProps> = ({
  operatorName,
  onOperatorChange,
  patchNote,
  onPatchNoteChange,
  onDeployPatch,
  onGitPull,
  onDownloadZip,
  currentTheme,
  latestCommitHash,
  selectedBranch,
}) => {
  const theme = getThemeClasses(currentTheme);

  const handleDeploy = () => {
    playMcClick();
    onDeployPatch();
  };

  const handlePull = () => {
    playMcClick();
    onGitPull();
  };

  const handleZip = () => {
    playMcClick();
    onDownloadZip();
  };

  return (
    <section className={`p-4 md:p-6 mb-6 ${theme.cardBg} transition-all duration-300`}>
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#3d3126]">
        <Rocket className={`w-5 h-5 ${theme.accentTextColor}`} />
        <h2 className={`text-base md:text-lg uppercase ${theme.titleFont}`}>
          TẠO & PHÁT HÀNH BẢN PATCH / SAVE POINT SNAPSHOT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Form Field 1: Operator / Author Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-pixel uppercase tracking-wider text-[#dddddd] flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#55ffff]" />
            <span>OPERATOR / TÁC GIẢ BẢN PATCH:</span>
          </label>
          <input
            type="text"
            value={operatorName}
            onChange={(e) => onOperatorChange(e.target.value)}
            placeholder="Nhập tên người vận hành hệ thống..."
            className={`w-full px-3.5 py-2.5 text-xs ${theme.inputBg} transition-all`}
          />
        </div>

        {/* Form Field 2: Patch Note / Commit Note */}
        <div className="space-y-1.5">
          <label className="text-xs font-pixel uppercase tracking-wider text-[#dddddd] flex items-center gap-1.5">
            <FileText className="w-3.5 h-3.5 text-[#ffaa00]" />
            <span>GHI CHÚ PHÁT HÀNH / PATCH NOTE:</span>
          </label>
          <input
            type="text"
            value={patchNote}
            onChange={(e) => onPatchNoteChange(e.target.value)}
            placeholder="Nhập ghi chú cập nhật tính năng hoặc sửa lỗi..."
            className={`w-full px-3.5 py-2.5 text-xs ${theme.inputBg} transition-all`}
          />
        </div>
      </div>

      {/* Repository Meta Bar */}
      <div className={`p-3.5 ${theme.cardHeaderBg} mb-5 flex flex-col lg:flex-row lg:items-center justify-between gap-3 text-xs font-silkscreen border border-[#3d3126]`}>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-1.5 text-[#cccccc]">
            <Globe className="w-4 h-4 text-[#55ff55]" />
            <span className="opacity-70">Git Remote URL:</span>
            <span className={`font-bold ${theme.accentTextColor} truncate max-w-[280px] sm:max-w-none`}>
              https://github.com/kemdenz-fine-dining/datn-sd33-ecosystem.git
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[#cccccc]">
            <GitBranch className="w-4 h-4 text-[#55ffff]" />
            <span className="opacity-70">Branch:</span>
            <span className="px-2 py-0.5 bg-[#102028] text-[#55ffff] font-pixel text-[10px] border border-[#2b8b8b]">
              {selectedBranch}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <GitCommit className="w-4 h-4 text-[#ff55ff]" />
          <span className="opacity-70">Latest Commit:</span>
          <span className="px-2 py-0.5 bg-[#201028] text-[#ff55ff] font-pixel text-[10px] border border-[#a82ba8]">
            {latestCommitHash}
          </span>
        </div>
      </div>

      {/* Action Buttons Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Button 1: PHÁT HÀNH BẢN PATCH SNAPSHOT */}
        <button
          onClick={handleDeploy}
          className={`py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 ${theme.primaryBtn} cursor-pointer`}
        >
          <Rocket className="w-4 h-4" />
          <span>PHÁT HÀNH BẢN PATCH (SAVE POINT)</span>
        </button>

        {/* Button 2: TẢI VỀ & NẠP BẢN UPDATE MỚI (PULL GIT) */}
        <button
          onClick={handlePull}
          className={`py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 ${theme.secondaryBtn} cursor-pointer`}
        >
          <GitPullRequest className="w-4 h-4 text-[#ffaa00]" />
          <span>NẠP BẢN UPDATE MỚI (PULL GIT)</span>
        </button>

        {/* Button 3: TẢI TRỌN GÓI MÃ NGUỒN DỰ ÁN (.ZIP) */}
        <button
          onClick={handleZip}
          className={`py-3 px-4 text-xs font-bold flex items-center justify-center gap-2 ${theme.accentBtn} cursor-pointer`}
        >
          <Download className="w-4 h-4" />
          <span>TẢI MÃ NGUỒN DỰ ÁN (.ZIP)</span>
        </button>
      </div>
    </section>
  );
};
