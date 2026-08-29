import React, { useState } from 'react';
import { PatchNoteCategory, ThemeStyle } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick } from '../utils/mcAudio';
import { 
  Sparkles, 
  Bug, 
  Zap, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Copy, 
  Check, 
  FileCode,
  Tag,
  BookOpen,
  Palette,
  Feather,
  Compass,
  Award,
  Wrench,
  Shield,
  Crown,
  Gem,
  Terminal,
  Cpu,
  Lock,
  LayoutGrid,
  Layers,
  Gauge,
  CheckCircle,
  Crosshair,
  Activity,
  Globe,
  Key
} from 'lucide-react';

interface CategorizedPatchNotesProps {
  patchNotes: PatchNoteCategory[];
  currentTheme: ThemeStyle;
}

export const CategorizedPatchNotes: React.FC<CategorizedPatchNotesProps> = ({
  patchNotes,
  currentTheme,
}) => {
  const theme = getThemeClasses(currentTheme);
  const [expandedId, setExpandedId] = useState<string | null>('cat-1');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    playMcClick();
    setExpandedId(prev => (prev === id ? null : id));
  };

  const handleCopy = (id: string, text: string) => {
    playMcClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const renderCategoryIcon = (category: string) => {
    switch (currentTheme) {
      case 'vangogh':
        switch (category) {
          case 'feature': return <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />;
          case 'bugfix': return <Palette className="w-5 h-5 text-sky-300" />;
          case 'performance': return <Zap className="w-5 h-5 text-amber-300" />;
          case 'security': return <ShieldCheck className="w-5 h-5 text-emerald-300" />;
          default: return <Tag className="w-5 h-5 text-yellow-300" />;
        }
      case 'romanticism':
        switch (category) {
          case 'feature': return <Feather className="w-5 h-5 text-amber-200" />;
          case 'bugfix': return <Compass className="w-5 h-5 text-rose-300" />;
          case 'performance': return <Zap className="w-5 h-5 text-amber-300" />;
          case 'security': return <Award className="w-5 h-5 text-yellow-200" />;
          default: return <Tag className="w-5 h-5 text-amber-200" />;
        }
      case 'win95':
        switch (category) {
          case 'feature': return <Cpu className="w-5 h-5 text-blue-900" />;
          case 'bugfix': return <Wrench className="w-5 h-5 text-red-800" />;
          case 'performance': return <Zap className="w-5 h-5 text-amber-800" />;
          case 'security': return <Shield className="w-5 h-5 text-emerald-800" />;
          default: return <Tag className="w-5 h-5 text-blue-900" />;
        }
      case 'luxury':
        switch (category) {
          case 'feature': return <Crown className="w-5 h-5 text-amber-300" />;
          case 'bugfix': return <Gem className="w-5 h-5 text-rose-300" />;
          case 'performance': return <Zap className="w-5 h-5 text-amber-400" />;
          case 'security': return <ShieldCheck className="w-5 h-5 text-emerald-300" />;
          default: return <Tag className="w-5 h-5 text-amber-300" />;
        }
      case 'synthwave':
        switch (category) {
          case 'feature': return <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />;
          case 'bugfix': return <Terminal className="w-5 h-5 text-cyan-400" />;
          case 'performance': return <Cpu className="w-5 h-5 text-yellow-300" />;
          case 'security': return <Lock className="w-5 h-5 text-emerald-400" />;
          default: return <Tag className="w-5 h-5 text-pink-400" />;
        }
      case 'swiss':
        switch (category) {
          case 'feature': return <LayoutGrid className="w-5 h-5 text-black" />;
          case 'bugfix': return <Layers className="w-5 h-5 text-orange-600" />;
          case 'performance': return <Gauge className="w-5 h-5 text-black" />;
          case 'security': return <CheckCircle className="w-5 h-5 text-black" />;
          default: return <Tag className="w-5 h-5 text-black" />;
        }
      case 'mecha':
        switch (category) {
          case 'feature': return <Cpu className="w-5 h-5 text-amber-400" />;
          case 'bugfix': return <Crosshair className="w-5 h-5 text-rose-400" />;
          case 'performance': return <Activity className="w-5 h-5 text-yellow-400" />;
          case 'security': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
          default: return <Tag className="w-5 h-5 text-amber-400" />;
        }
      case 'cyber':
        switch (category) {
          case 'feature': return <Globe className="w-5 h-5 text-cyan-300" />;
          case 'bugfix': return <Terminal className="w-5 h-5 text-emerald-300" />;
          case 'performance': return <Zap className="w-5 h-5 text-yellow-300" />;
          case 'security': return <Key className="w-5 h-5 text-cyan-200" />;
          default: return <Tag className="w-5 h-5 text-cyan-300" />;
        }
      case 'minecraft':
      case 'redstone':
      case 'end':
      default:
        switch (category) {
          case 'feature': return <Sparkles className="w-5 h-5 text-[#55ffff]" />;
          case 'bugfix': return <Bug className="w-5 h-5 text-[#ff5555]" />;
          case 'performance': return <Zap className="w-5 h-5 text-[#ffaa00]" />;
          case 'security': return <ShieldCheck className="w-5 h-5 text-[#55ff55]" />;
          default: return <Tag className="w-5 h-5 text-[#55ffff]" />;
        }
    }
  };

  const getCategoryIconContainer = (category: string) => {
    switch (currentTheme) {
      case 'vangogh':
        return 'p-2.5 rounded-xl border-2 border-yellow-400/50 bg-[#071126] shadow-[0_0_12px_rgba(250,204,21,0.25)] flex items-center justify-center flex-shrink-0';
      case 'romanticism':
        return 'p-2.5 rounded-lg border-2 border-amber-600/50 bg-[#160d08] shadow-[0_4px_10px_rgba(180,83,9,0.25)] flex items-center justify-center flex-shrink-0';
      case 'win95':
        return 'p-2 bg-white border-2 border-t-gray-800 border-l-gray-800 border-b-white border-r-white flex items-center justify-center text-black flex-shrink-0';
      case 'luxury':
        return 'p-2.5 rounded-xl border border-amber-400/50 bg-[#100e17] shadow-[0_0_15px_rgba(245,158,11,0.2)] flex items-center justify-center flex-shrink-0';
      case 'synthwave':
        return 'p-2.5 rounded-lg border-2 border-pink-500 bg-[#0d031a] shadow-[0_0_15px_rgba(236,72,153,0.4)] flex items-center justify-center flex-shrink-0';
      case 'swiss':
        return 'p-2.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center flex-shrink-0';
      case 'mecha':
        return 'p-2.5 bg-[#08090c] border-2 border-amber-500/60 shadow-[0_0_12px_rgba(245,158,11,0.2)] flex items-center justify-center flex-shrink-0';
      case 'cyber':
        return 'p-2.5 rounded-xl border border-cyan-400/50 bg-slate-950 shadow-[0_0_12px_rgba(0,240,255,0.25)] flex items-center justify-center flex-shrink-0';
      case 'minecraft':
      case 'redstone':
      case 'end':
      default:
        return 'mc-slot p-2 flex items-center justify-center flex-shrink-0';
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (currentTheme) {
      case 'vangogh':
        switch (category) {
          case 'feature': return 'bg-yellow-950/80 text-yellow-300 border border-yellow-400/60 font-cinzel rounded-md';
          case 'bugfix': return 'bg-sky-950/80 text-sky-200 border border-sky-400/60 font-cinzel rounded-md';
          case 'performance': return 'bg-amber-950/80 text-amber-200 border border-amber-400/60 font-cinzel rounded-md';
          case 'security': return 'bg-emerald-950/80 text-emerald-300 border border-emerald-400/60 font-cinzel rounded-md';
          default: return 'bg-yellow-950/80 text-yellow-300 border border-yellow-400/60 font-cinzel rounded-md';
        }
      case 'romanticism':
        switch (category) {
          case 'feature': return 'bg-amber-950/90 text-amber-200 border border-amber-600/60 font-playfair rounded-sm';
          case 'bugfix': return 'bg-rose-950/90 text-rose-200 border border-rose-500/60 font-playfair rounded-sm';
          case 'performance': return 'bg-yellow-950/90 text-yellow-200 border border-yellow-600/60 font-playfair rounded-sm';
          case 'security': return 'bg-emerald-950/90 text-emerald-200 border border-emerald-600/60 font-playfair rounded-sm';
          default: return 'bg-amber-950/90 text-amber-200 border border-amber-600/60 font-playfair rounded-sm';
        }
      case 'win95':
        switch (category) {
          case 'feature': return 'bg-[#000080] text-white border border-white font-mono';
          case 'bugfix': return 'bg-red-800 text-white border border-white font-mono';
          case 'performance': return 'bg-yellow-800 text-white border border-white font-mono';
          case 'security': return 'bg-emerald-800 text-white border border-white font-mono';
          default: return 'bg-[#000080] text-white border border-white font-mono';
        }
      case 'luxury':
        switch (category) {
          case 'feature': return 'bg-amber-950/90 text-amber-300 border border-amber-500/50 rounded-lg';
          case 'bugfix': return 'bg-rose-950/90 text-rose-300 border border-rose-500/50 rounded-lg';
          case 'performance': return 'bg-yellow-950/90 text-yellow-300 border border-yellow-500/50 rounded-lg';
          case 'security': return 'bg-emerald-950/90 text-emerald-300 border border-emerald-500/50 rounded-lg';
          default: return 'bg-amber-950/90 text-amber-300 border border-amber-500/50 rounded-lg';
        }
      case 'synthwave':
        switch (category) {
          case 'feature': return 'bg-pink-950/80 text-pink-300 border border-pink-500/60 rounded-md font-mono';
          case 'bugfix': return 'bg-purple-950/80 text-purple-300 border border-purple-500/60 rounded-md font-mono';
          case 'performance': return 'bg-yellow-950/80 text-yellow-300 border border-yellow-500/60 rounded-md font-mono';
          case 'security': return 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/60 rounded-md font-mono';
          default: return 'bg-pink-950/80 text-pink-300 border border-pink-500/60 rounded-md font-mono';
        }
      case 'swiss':
        switch (category) {
          case 'feature': return 'bg-black text-white font-mono uppercase border border-black';
          case 'bugfix': return 'bg-orange-600 text-white font-mono uppercase border border-black';
          case 'performance': return 'bg-slate-200 text-black font-mono uppercase border border-black';
          case 'security': return 'bg-emerald-600 text-white font-mono uppercase border border-black';
          default: return 'bg-black text-white font-mono uppercase border border-black';
        }
      case 'mecha':
        switch (category) {
          case 'feature': return 'bg-amber-950/80 text-amber-300 border border-amber-500/60 font-mono';
          case 'bugfix': return 'bg-rose-950/80 text-rose-300 border border-rose-500/60 font-mono';
          case 'performance': return 'bg-yellow-950/80 text-yellow-300 border border-yellow-500/60 font-mono';
          case 'security': return 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/60 font-mono';
          default: return 'bg-amber-950/80 text-amber-300 border border-amber-500/60 font-mono';
        }
      case 'cyber':
        switch (category) {
          case 'feature': return 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/60 font-mono rounded-md';
          case 'bugfix': return 'bg-purple-950/80 text-purple-300 border border-purple-500/60 font-mono rounded-md';
          case 'performance': return 'bg-amber-950/80 text-amber-300 border border-amber-500/60 font-mono rounded-md';
          case 'security': return 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/60 font-mono rounded-md';
          default: return 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/60 font-mono rounded-md';
        }
      case 'minecraft':
      case 'redstone':
      case 'end':
      default:
        switch (category) {
          case 'feature': return 'bg-[#152a35] text-[#55ffff] border-[#2b8b8b] font-pixel';
          case 'bugfix': return 'bg-[#351515] text-[#ff5555] border-[#8b2b2b] font-pixel';
          case 'performance': return 'bg-[#352a15] text-[#ffaa00] border-[#8b6b2b] font-pixel';
          case 'security': return 'bg-[#153515] text-[#55ff55] border-[#2b8b2b] font-pixel';
          default: return 'bg-[#152a35] text-[#55ffff] border-[#2b8b8b] font-pixel';
        }
    }
  };

  const getItemCardStyle = (isExpanded: boolean) => {
    switch (currentTheme) {
      case 'vangogh':
        return isExpanded 
          ? 'bg-[#0c1836] border-2 border-yellow-400/70 rounded-2xl shadow-[0_0_20px_rgba(250,204,21,0.25)]' 
          : 'bg-[#0a142e]/70 border border-yellow-400/40 hover:border-yellow-400/70 rounded-2xl';
      case 'romanticism':
        return isExpanded 
          ? 'bg-[#1c0f0a] border-2 border-amber-600/70 rounded-xl shadow-[0_4px_15px_rgba(180,83,9,0.3)]' 
          : 'bg-[#180d08]/80 border border-amber-600/40 hover:border-amber-500/70 rounded-xl';
      case 'win95':
        return isExpanded 
          ? 'bg-[#d4d4d4] border-2 border-t-black border-l-black border-b-white border-r-white text-black' 
          : 'bg-[#c0c0c0] border-2 border-t-white border-l-white border-b-black border-r-black text-black';
      case 'luxury':
        return isExpanded 
          ? 'bg-[#161320] border border-amber-400/70 rounded-xl shadow-[0_0_20px_rgba(245,158,11,0.2)]' 
          : 'bg-[#100e17] border border-amber-500/30 hover:border-amber-400/60 rounded-xl';
      case 'synthwave':
        return isExpanded 
          ? 'bg-[#1a0630] border-2 border-pink-500 rounded-xl shadow-[0_0_25px_rgba(236,72,153,0.35)]' 
          : 'bg-[#120421] border border-pink-500/40 hover:border-pink-500 rounded-xl';
      case 'swiss':
        return isExpanded 
          ? 'bg-white border-4 border-black shadow-[6px_6px_0px_0px_#000] text-black' 
          : 'bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] text-black';
      case 'mecha':
        return isExpanded 
          ? 'bg-[#101218] border-2 border-amber-500/70 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
          : 'bg-[#0b0c10] border border-amber-500/30 hover:border-amber-500 rounded-lg';
      case 'cyber':
        return isExpanded 
          ? 'bg-slate-900 border-2 border-cyan-400/60 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.25)]' 
          : 'bg-slate-950/80 border border-cyan-500/30 hover:border-cyan-400 rounded-xl';
      case 'minecraft':
      case 'redstone':
      case 'end':
      default:
        return isExpanded 
          ? 'border-[#ffaa00] bg-[#211e1b]' 
          : 'border-[#3d3126] bg-[#1a1512]';
    }
  };

  const getDetailsBoxStyle = () => {
    switch (currentTheme) {
      case 'vangogh': return 'bg-[#060e21] border-t border-yellow-400/30 p-4 rounded-b-2xl';
      case 'romanticism': return 'bg-[#110906] border-t border-amber-600/30 p-4 rounded-b-xl';
      case 'win95': return 'bg-white border-t-2 border-gray-400 p-4 text-black';
      case 'luxury': return 'bg-[#0b0a10] border-t border-amber-500/30 p-4 rounded-b-xl';
      case 'synthwave': return 'bg-[#090212] border-t border-pink-500/40 p-4 rounded-b-xl';
      case 'swiss': return 'bg-slate-100 border-t-2 border-black p-4 text-black';
      case 'mecha': return 'bg-[#06070a] border-t border-amber-500/30 p-4 rounded-b-lg';
      case 'cyber': return 'bg-slate-950 border-t border-cyan-500/30 p-4 rounded-b-xl';
      case 'minecraft':
      case 'redstone':
      case 'end':
      default: return 'bg-[#120f0c] border-t border-[#3d3126] p-4';
    }
  };

  const getModuleTagStyle = () => {
    switch (currentTheme) {
      case 'vangogh': return 'px-2 py-0.5 bg-[#0a1638] border border-yellow-400/50 text-yellow-300 font-cinzel text-[10px] rounded-md';
      case 'romanticism': return 'px-2 py-0.5 bg-[#1a0e08] border border-amber-600/50 text-amber-200 font-playfair text-[10px] rounded-sm';
      case 'win95': return 'px-2 py-0.5 bg-white border border-black text-black font-mono text-[10px]';
      case 'luxury': return 'px-2 py-0.5 bg-[#12101b] border border-amber-500/40 text-amber-300 text-[10px] rounded-md';
      case 'synthwave': return 'px-2 py-0.5 bg-[#0f031c] border border-pink-500/50 text-cyan-300 font-mono text-[10px] rounded-md';
      case 'swiss': return 'px-2 py-0.5 bg-black text-white font-mono text-[10px] border border-black';
      case 'mecha': return 'px-2 py-0.5 bg-[#08090c] border border-amber-500/50 text-amber-300 font-mono text-[10px]';
      case 'cyber': return 'px-2 py-0.5 bg-slate-950 border border-cyan-500/50 text-cyan-300 font-mono text-[10px] rounded-md';
      case 'minecraft':
      case 'redstone':
      case 'end':
      default: return 'px-2 py-0.5 bg-[#0a0806] border border-[#3d3126] text-[#55ffff] font-pixel text-[10px]';
    }
  };

  const getSectionHeaderTitle = () => {
    switch (currentTheme) {
      case 'vangogh': return '🌌 DẬY SẮC VÀNG & ĐÊM ĐẦY SAO (POST-IMPRESSIONISM PATCH NOTES v2.5.0)';
      case 'romanticism': return '🎨 LỊCH SỬ SÁNG TÁC & BẢN THẢO (ROMANTIC REALISM PATCH NOTES v2.5.0)';
      case 'win95': return '📂 WINDOWS 95 SYSTEM PATCH REGISTRY v2.5.0';
      case 'luxury': return '👑 EXECUTIVE RELEASE JOURNAL (GOLD MASTER v2.5.0)';
      case 'synthwave': return '⚡ NEON MATRIX CYBERPUNK PATCH NOTES v2.5.0';
      case 'swiss': return '📐 SWISS BRUTALIST TYPOGRAPHY SPECIFICATIONS v2.5.0';
      case 'mecha': return '🤖 NERV TACTICAL REVISION PROTOCOLS v2.5.0';
      case 'cyber': return '🌌 ORBITAL QUANTUM REVISION LOGS v2.5.0';
      case 'redstone': return '🔥 NETHER REDSTONE CIRCUIT REVISIONS v2.5.0';
      case 'end': return '👁️ END REALM VOID ARCHIVES v2.5.0';
      case 'minecraft':
      default: return '📖 SỔ TAY PATCH NOTES (CATEGORIZED PATCH NOTES v2.5.0)';
    }
  };

  return (
    <section className={`p-4 md:p-6 mb-6 ${theme.cardBg} transition-all duration-300`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-[#3d3126]">
        <div className="flex items-center gap-2">
          <BookOpen className={`w-5 h-5 ${theme.accentTextColor}`} />
          <h2 className={`text-sm md:text-base uppercase ${theme.titleFont}`}>
            {getSectionHeaderTitle()}
          </h2>
        </div>
        <span className={`text-xs opacity-70`}>
          4 Core Categories
        </span>
      </div>

      <div className="space-y-3">
        {patchNotes.map((note) => {
          const isExpanded = expandedId === note.id;
          const isCopied = copiedId === note.id;

          return (
            <div
              key={note.id}
              className={`border transition-all duration-200 overflow-hidden ${getItemCardStyle(isExpanded)}`}
            >
              {/* Category Header Bar */}
              <div
                onClick={() => toggleExpand(note.id)}
                className="p-3 md:p-4 flex items-center justify-between cursor-pointer select-none gap-3"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className={getCategoryIconContainer(note.category)}>
                    {renderCategoryIcon(note.category)}
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`px-2 py-0.5 text-[9px] border ${getCategoryBadgeStyle(note.category)}`}>
                        {note.tag}
                      </span>
                      <span className="text-xs opacity-70">
                        {note.version} • {note.date}
                      </span>
                    </div>

                    <h3 className={`text-xs md:text-sm font-bold truncate ${theme.accentTextColor}`}>
                      {note.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(note.id, `${note.title}\n${note.summary}\n${note.details.join('\n')}`);
                    }}
                    title="Sao chép ghi chú patch này"
                    className={`p-1.5 ${theme.secondaryBtn} cursor-pointer`}
                  >
                    {isCopied ? <Check className="w-4 h-4 text-[#55ff55]" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <div className="p-1 opacity-70">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>
              </div>

              {/* Category Expandable Details */}
              {isExpanded && (
                <div className={getDetailsBoxStyle()}>
                  <p className="text-xs leading-relaxed opacity-90">
                    {note.summary}
                  </p>

                  <div className="space-y-1.5 mt-3">
                    <span className="text-[10px] uppercase tracking-wider opacity-70 block font-bold">
                      CHI TIẾT BẢN CẬP NHẬT:
                    </span>
                    <ul className="space-y-1 pl-4 list-disc text-xs leading-relaxed opacity-90">
                      {note.details.map((detail, idx) => (
                        <li key={idx}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {note.affectedModules.length > 0 && (
                    <div className="pt-3 flex items-center gap-2 flex-wrap text-xs">
                      <FileCode className={`w-3.5 h-3.5 ${theme.accentTextColor}`} />
                      <span className="text-[10px] uppercase opacity-70 font-bold">
                        MODULES ẢNH HƯỞNG:
                      </span>
                      {note.affectedModules.map((mod, idx) => (
                        <span
                          key={idx}
                          className={getModuleTagStyle()}
                        >
                          {mod}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

