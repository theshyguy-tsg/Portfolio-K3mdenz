import React from 'react';
import { ThemeStyle } from '../types';
import { getThemeClasses, getThemeMetadata } from '../utils/themeConfig';
import { playMcClick } from '../utils/mcAudio';
import { 
  Terminal, 
  Download, 
  GitBranch, 
  ChevronDown,
  ShieldCheck,
  Pickaxe,
  Flame,
  Eye,
  Box,
  Crown,
  Monitor,
  Zap,
  LayoutGrid,
  Cpu,
  Sparkles,
  Palette
} from 'lucide-react';

interface HeaderProps {
  currentTheme: ThemeStyle;
  onThemeChange: (theme: ThemeStyle) => void;
  onDownloadZip: () => void;
  selectedBranch: string;
  onBranchChange: (branch: string) => void;
  isExportingZip: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTheme,
  onThemeChange,
  onDownloadZip,
  selectedBranch,
  onBranchChange,
  isExportingZip,
}) => {
  const theme = getThemeClasses(currentTheme);
  const meta = getThemeMetadata(currentTheme);

  const handleThemeSelect = (style: ThemeStyle) => {
    playMcClick();
    onThemeChange(style);
  };

  const handleZipClick = () => {
    playMcClick();
    onDownloadZip();
  };

  const renderThemeHeaderIcon = () => {
    switch (currentTheme) {
      case 'vangogh':
        return <Sparkles className="w-6 h-6 text-yellow-300" />;
      case 'romanticism':
        return <Palette className="w-6 h-6 text-amber-300" />;
      case 'win95':
        return <Monitor className="w-6 h-6 text-cyan-200" />;
      case 'luxury':
        return <Crown className="w-6 h-6 text-amber-300" />;
      case 'synthwave':
        return <Zap className="w-6 h-6 text-pink-400" />;
      case 'swiss':
        return <LayoutGrid className="w-6 h-6 text-orange-500" />;
      case 'mecha':
        return <Cpu className="w-6 h-6 text-amber-400" />;
      case 'redstone':
        return <Flame className="w-6 h-6 text-rose-400 animate-pulse" />;
      case 'end':
        return <Eye className="w-6 h-6 text-purple-300" />;
      case 'cyber':
        return <Terminal className="w-6 h-6 text-cyan-400" />;
      case 'minecraft':
      default:
        return <Pickaxe className="w-6 h-6 text-[#55ffff]" />;
    }
  };

  return (
    <header className={`w-full p-4 md:p-6 mb-6 ${theme.cardBg} transition-all duration-300 relative overflow-hidden`}>
      {/* Minecraft Pixel Grass Block Accent Banner for Minecraft theme */}
      {currentTheme === 'minecraft' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#55aa55] border-b-2 border-[#228822]" />
      )}
      {currentTheme === 'redstone' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#ff3333] border-b-2 border-[#990000]" />
      )}
      {currentTheme === 'end' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#aa00aa] border-b-2 border-[#550055]" />
      )}
      {currentTheme === 'vangogh' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-sky-400 to-indigo-600" />
      )}
      {currentTheme === 'romanticism' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-700 via-rose-900 to-amber-900" />
      )}
      {currentTheme === 'win95' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-[#000080]" />
      )}
      {currentTheme === 'swiss' && (
        <div className="absolute top-0 left-0 right-0 h-2 bg-orange-600" />
      )}

      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        
        {/* Left Section: Title, Project Selector & Release Status */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className={`p-2.5 ${theme.badge} flex items-center justify-center`}>
              {renderThemeHeaderIcon()}
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest uppercase opacity-80 font-mono">
                  {meta.headerCategory}
                </span>
                <span className={`px-2 py-0.5 text-[10px] ${theme.badgeAccent}`}>
                  {meta.headerSub}
                </span>
              </div>
              <h1 className={`text-xl md:text-2xl uppercase ${theme.titleFont}`}>
                {meta.headerTitle}
              </h1>
            </div>
          </div>

          {/* Project Selector & Status Badge Row */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {/* Project Selector */}
            <div className="relative inline-flex items-center">
              <GitBranch className={`w-4 h-4 absolute left-3 ${theme.accentTextColor} pointer-events-none`} />
              <select
                value={selectedBranch}
                onChange={(e) => {
                  playMcClick();
                  onBranchChange(e.target.value);
                }}
                className={`pl-9 pr-8 py-1.5 text-xs font-bold ${theme.inputBg} cursor-pointer appearance-none transition-all`}
              >
                <option value="daily-sync-snapshots">
                  DATN-SD33 - KemDenz Fine Dining Ecosystem (Main Branch: daily-sync-snapshots)
                </option>
                <option value="feature/pos-terminal-v2">
                  DATN-SD33 - KemDenz Fine Dining POS Terminal Submodule (feature/pos-terminal-v2)
                </option>
                <option value="feature/kitchen-display-kds">
                  DATN-SD33 - Kitchen Display KDS Portal (feature/kitchen-display-kds)
                </option>
                <option value="release/gold-master-v2.5">
                  DATN-SD33 - Table Reservation & AI Engine (release/gold-master-v2.5)
                </option>
              </select>
              <ChevronDown className={`w-4 h-4 absolute right-2.5 ${theme.subtextColor} pointer-events-none`} />
            </div>

            {/* Release Status Badge */}
            <div className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold ${theme.badge}`}>
              <ShieldCheck className="w-4 h-4 text-[#55ff55]" />
              <span>v2.5.0-RELEASE (GOLD MASTER EDITION)</span>
            </div>

            {/* Server Sync Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold bg-[#1b381b] border-2 border-[#288028] text-[#55ff55] font-pixel">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55ff55] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#55ff55]"></span>
              </span>
              <span>100% ONLINE & SYNCED</span>
            </div>
          </div>
        </div>

        {/* Right Section: Theme Style Switcher + Export Source ZIP */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 xl:pt-0 border-t xl:border-t-0 border-[#3d3126]">
          
          {/* Theme Style Switcher with 5 New Themes */}
          <div className={`p-1.5 ${theme.inputBg} flex flex-wrap items-center gap-1`}>
            <span className="text-[10px] font-bold uppercase px-1.5 text-[#aaaaaa] font-pixel">
              GIAO DIỆN:
            </span>

            {/* Minecraft Overworld */}
            <button
              onClick={() => handleThemeSelect('minecraft')}
              title="Minecraft Overworld Grass & Stone"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'minecraft'
                  ? 'mc-button-emerald scale-105'
                  : 'mc-button'
              }`}
            >
              <Pickaxe className="w-3 h-3" />
              <span>MINECRAFT</span>
            </button>

            {/* Choice: Van Gogh Starry Night */}
            <button
              onClick={() => handleThemeSelect('vangogh')}
              title="Đêm Đầy Sao của Van Gogh (Post-Impressionism)"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'vangogh'
                  ? 'bg-gradient-to-r from-amber-400 to-yellow-300 text-slate-950 font-bold scale-105 border border-yellow-200'
                  : 'mc-button'
              }`}
            >
              <Sparkles className="w-3 h-3 text-yellow-300" />
              <span>VAN GOGH</span>
            </button>

            {/* Choice: Romanticism Realism */}
            <button
              onClick={() => handleThemeSelect('romanticism')}
              title="Chủ nghĩa Lãng mạn Thực thực (Romanticism Realism)"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'romanticism'
                  ? 'bg-gradient-to-r from-amber-800 to-yellow-700 text-amber-100 font-bold scale-105 border border-amber-400'
                  : 'mc-button'
              }`}
            >
              <Palette className="w-3 h-3 text-amber-300" />
              <span>ROMANTICISM</span>
            </button>

            {/* Choice 1: Synthwave Cyberpunk Neon */}
            <button
              onClick={() => handleThemeSelect('synthwave')}
              title="Lựa chọn 1: Cyberpunk Neon Synthwave"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'synthwave'
                  ? 'bg-pink-600 text-white font-bold scale-105 border border-pink-300'
                  : 'mc-button'
              }`}
            >
              <Zap className="w-3 h-3 text-pink-300" />
              <span>CYBER NEON</span>
            </button>

            {/* Choice 2: Retro Windows 95 */}
            <button
              onClick={() => handleThemeSelect('win95')}
              title="Lựa chọn 2: Retro Windows 95 PC"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'win95'
                  ? 'bg-[#000080] text-white font-bold scale-105 border border-white'
                  : 'mc-button'
              }`}
            >
              <Monitor className="w-3 h-3 text-cyan-200" />
              <span>WIN 95</span>
            </button>

            {/* Choice 3: Luxury Gold & Obsidian Fine Dining */}
            <button
              onClick={() => handleThemeSelect('luxury')}
              title="Lựa chọn 3: Fine Dining Luxury Obsidian & Gold"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'luxury'
                  ? 'bg-amber-600 text-black font-bold scale-105 border border-amber-300'
                  : 'mc-button'
              }`}
            >
              <Crown className="w-3 h-3 text-yellow-200" />
              <span>LUXURY GOLD</span>
            </button>

            {/* Choice 4: Swiss Brutalist Typographic Grid */}
            <button
              onClick={() => handleThemeSelect('swiss')}
              title="Lựa chọn 4: Swiss Brutalist Typography"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'swiss'
                  ? 'bg-orange-600 text-white font-bold scale-105 border border-black'
                  : 'mc-button'
              }`}
            >
              <LayoutGrid className="w-3 h-3 text-white" />
              <span>SWISS GRID</span>
            </button>

            {/* Choice 5: Mecha Tactical NERV Sci-Fi HUD */}
            <button
              onClick={() => handleThemeSelect('mecha')}
              title="Lựa chọn 5: Mecha Sci-Fi Tactical HUD"
              className={`px-2 py-1 text-[10px] font-pixel transition-all flex items-center gap-1 ${
                currentTheme === 'mecha'
                  ? 'bg-amber-500 text-black font-bold scale-105 border border-amber-300'
                  : 'mc-button'
              }`}
            >
              <Cpu className="w-3 h-3 text-black" />
              <span>MECHA HUD</span>
            </button>
          </div>

          {/* Requirement 2: Full Source Code Zip Download Button */}
          <button
            onClick={handleZipClick}
            disabled={isExportingZip}
            className={`px-4 py-2.5 text-xs font-bold flex items-center justify-center gap-2 ${theme.primaryBtn} disabled:opacity-50 cursor-pointer whitespace-nowrap`}
          >
            {isExportingZip ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>CRAFTING .ZIP...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>TẢI TRỌN GÓI MÃ NGUỒN DỰ ÁN (.ZIP)</span>
              </>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
