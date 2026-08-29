import React, { useState, useEffect } from 'react';
import { ThemeStyle } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick, playMcLevelUp } from '../utils/mcAudio';
import { GitPullRequest, Loader2, X, Terminal, Check } from 'lucide-react';

interface GitPullModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeStyle;
  selectedBranch: string;
  onPullSuccess: (newCommitHash: string) => void;
}

export const GitPullModal: React.FC<GitPullModalProps> = ({
  isOpen,
  onClose,
  currentTheme,
  selectedBranch,
  onPullSuccess,
}) => {
  const theme = getThemeClasses(currentTheme);
  const [logs, setLogs] = useState<string[]>([]);
  const [isPulling, setIsPulling] = useState(true);
  const [newHash, setNewHash] = useState('#204218f');

  useEffect(() => {
    if (!isOpen) return;

    setIsPulling(true);
    const generatedHash = '#' + Math.random().toString(16).substring(2, 9);
    setNewHash(generatedHash);

    setLogs([
      `$ git pull origin ${selectedBranch}`,
      `Connecting to https://github.com/kemdenz-fine-dining/datn-sd33-ecosystem.git...`,
      `From github.com/kemdenz-fine-dining/datn-sd33-ecosystem`,
      ` * branch            ${selectedBranch} -> FETCH_HEAD`,
      `Updating #204217c..${generatedHash}`,
      `Fast-forward`,
      ` src/components/PosTerminal.tsx | 18 ++--`,
      ` src/server/socket.ts         | 12 ++--`,
      ` 2 files changed, 18 insertions(+), 12 deletions(-)`,
      `Successfully synced 100% up-to-date with Release Server!`
    ]);

    const timer = setTimeout(() => {
      setIsPulling(false);
      playMcLevelUp();
      onPullSuccess(generatedHash);
    }, 1500);

    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme.modalOverlay}`}>
      <div className={`w-full max-w-xl ${theme.modalContainer} p-6 overflow-hidden flex flex-col`}>
        
        <div className="flex items-center justify-between pb-3 border-b border-[#3d3126]">
          <div className="flex items-center gap-2.5">
            <GitPullRequest className="w-5 h-5 text-[#ff55ff]" />
            <h3 className={`text-sm md:text-base uppercase ${theme.titleFont}`}>
              TẢI VỀ & NẠP BẢN UPDATE MỚI (PULL GIT)
            </h3>
          </div>

          <button
            onClick={() => {
              playMcClick();
              onClose();
            }}
            disabled={isPulling}
            className="p-1.5 mc-button disabled:opacity-30 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 p-3 bg-[#0a0806] border border-[#3d3126] font-vt323 text-sm text-[#ff55ff] space-y-1">
          <div className="text-[#aaaaaa] pb-1 flex items-center justify-between border-b border-[#261f18] text-xs font-pixel">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#ff55ff]" />
              GIT FETCH & MERGE STREAM
            </span>
            <span className="text-[#55ffff]">Branch: {selectedBranch}</span>
          </div>

          {logs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              {log}
            </div>
          ))}

          {isPulling && (
            <div className="flex items-center gap-2 text-[#55ffff] animate-pulse pt-2 font-silkscreen text-xs">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Fetching deltas from GitHub remote repository...</span>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between font-pixel text-xs">
          <span className="text-[10px] text-[#aaaaaa]">
            {isPulling ? 'Đang kéo mã nguồn...' : `✓ Synced Target Commit: ${newHash}`}
          </span>

          <button
            onClick={() => {
              playMcClick();
              onClose();
            }}
            disabled={isPulling}
            className={`px-5 py-2 text-xs font-bold flex items-center gap-1.5 ${theme.primaryBtn} disabled:opacity-40 cursor-pointer`}
          >
            {isPulling ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>ĐANG NẠP GIT...</span>
              </>
            ) : (
              <>
                <Check className="w-4 h-4" />
                <span>HOÀN TẤT & ĐÓNG</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
