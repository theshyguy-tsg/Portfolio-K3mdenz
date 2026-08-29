import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { ThemeStyle, PatchStep } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick, playMcLevelUp } from '../utils/mcAudio';
import { 
  CheckCircle2, 
  Loader2, 
  Terminal, 
  X, 
  Rocket,
  Check
} from 'lucide-react';

interface PatchModalProps {
  isOpen: boolean;
  onClose: () => void;
  operatorName: string;
  patchNote: string;
  currentTheme: ThemeStyle;
  onPatchComplete: () => void;
}

export const PatchModal: React.FC<PatchModalProps> = ({
  isOpen,
  onClose,
  operatorName,
  patchNote,
  currentTheme,
  onPatchComplete,
}) => {
  const theme = getThemeClasses(currentTheme);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progressPercent, setProgressPercent] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const [steps, setSteps] = useState<PatchStep[]>([
    {
      step: 1,
      name: 'Checksum & Validate Source Integrity',
      description: 'Kiểm tra mã băm SHA-256 các file nguồn và tính toàn vẹn DB.',
      status: 'idle',
      logMessages: [
        '[STEP 1/4] Starting Checksum calculation for DATN-SD33 source files...',
        'Validating /src/components/PatchForm.tsx ... [OK]',
        'Validating /data/sync-saves/save_20260811.json ... [OK]',
        'Database integrity check: 0 orphan records found. Status: 100% HEALTHY.'
      ]
    },
    {
      step: 2,
      name: 'Stashing local changes & Fetching remote snapshot',
      description: 'Lưu tạm thời các file chỉnh sửa và đồng bộ Snapshot từ Git Remote.',
      status: 'idle',
      logMessages: [
        '[STEP 2/4] Executing git stash save "Auto Save Snapshot before Patch v2.5.0"...',
        'Stash index #0 created successfully.',
        'Fetching remote branch: daily-sync-snapshots from github.com/kemdenz-fine-dining/datn-sd33-ecosystem.git',
        'Received 42 objects, delta compressed. Target Commit: #204217c.'
      ]
    },
    {
      step: 3,
      name: 'Applying Code Patches & Rebuilding Portals',
      description: 'Áp dụng bản vá 10 bugfixes, giới hạn RAM Cache, nâng cấp POS & KDS.',
      status: 'idle',
      logMessages: [
        '[STEP 3/4] Injecting Patch Payload: v2.5.0-RELEASE (GOLD MASTER EDITION)...',
        'Applying Minecraft Theme HUD & Multi-theme Switcher module...',
        'Rebuilding Frontend Assets via Vite 6.2 bundler...',
        'Optimization: Applied RAM Cache limit 100 slots & Socket Leak Shield.'
      ]
    },
    {
      step: 4,
      name: 'Verification & System Warmup Complete!',
      description: 'Kiểm tra phản hồi API, khởi động lại Websocket Gateway và hoàn tất.',
      status: 'idle',
      logMessages: [
        '[STEP 4/4] Running system latency ping test ... Ping: 12ms ONLINE.',
        'Warming up Fine Dining Table Reservation AI Engine & KDS Portal...',
        'System warm-up sequence finished successfully!',
        '✓ ALL 4 PATCH STEPS COMPLETED! Save Point snapshot saved to orbital storage.'
      ]
    }
  ]);

  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);

  // Start sequence when modal opens
  useEffect(() => {
    if (!isOpen) return;

    setCurrentStepIndex(0);
    setProgressPercent(0);
    setIsCompleted(false);
    setTerminalLogs(['[INIT] Minecraft Crafting Pipeline HUD initialized by ' + operatorName + '...']);

    // Reset step status
    setSteps(prev => prev.map(s => ({ ...s, status: 'idle' })));

    let timer: NodeJS.Timeout;
    let stepIndex = 0;

    const runNextStep = () => {
      if (stepIndex >= 4) {
        setProgressPercent(100);
        setIsCompleted(true);
        playMcLevelUp();
        onPatchComplete();

        // Fire celebratory confetti!
        try {
          confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
          });
        } catch (e) {
          // ignore
        }
        return;
      }

      const currentStep = steps[stepIndex];
      setCurrentStepIndex(stepIndex);

      // Update current step to running
      setSteps(prev => prev.map((s, idx) => idx === stepIndex ? { ...s, status: 'running' } : s));

      // Append logs sequentially
      currentStep.logMessages.forEach((msg, msgIdx) => {
        setTimeout(() => {
          setTerminalLogs(logs => [...logs, msg]);
          if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
          }
        }, msgIdx * 300);
      });

      // Update progress percent
      const stepProgress = Math.min(100, Math.round(((stepIndex + 1) / 4) * 100));
      setProgressPercent(stepProgress);

      // Mark step completed after delay and move to next
      const stepDuration = currentStep.logMessages.length * 300 + 350;
      timer = setTimeout(() => {
        setSteps(prev => prev.map((s, idx) => idx === stepIndex ? { ...s, status: 'completed' } : s));
        stepIndex++;
        runNextStep();
      }, stepDuration);
    };

    runNextStep();

    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${theme.modalOverlay}`}>
      <div className={`w-full max-w-3xl ${theme.modalContainer} p-6 overflow-hidden flex flex-col max-h-[90vh]`}>
        
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#3d3126]">
          <div className="flex items-center gap-3">
            <div className={`mc-slot p-2.5 flex items-center justify-center`}>
              <Rocket className="w-6 h-6 text-[#55ffff] animate-bounce" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-pixel uppercase tracking-widest text-[#55ffff]">
                  MINECRAFT CRAFTING HUD
                </span>
                <span className="px-2 py-0.5 text-[9px] font-pixel bg-[#153515] text-[#55ff55] border border-[#2b8b2b]">
                  4-STEP PIPELINE
                </span>
              </div>
              <h3 className={`text-sm md:text-base uppercase ${theme.titleFont}`}>
                TIẾN TRÌNH CẬP NHẬT BẢN PATCH v2.5.0
              </h3>
            </div>
          </div>

          <button
            onClick={() => {
              playMcClick();
              onClose();
            }}
            disabled={!isCompleted}
            className="p-2 mc-button disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Note / Operator Bar */}
        <div className="mt-4 p-3 bg-[#120f0c] border border-[#3d3126] flex flex-col sm:flex-row sm:items-center justify-between text-xs font-silkscreen gap-2">
          <div className="text-[#cccccc] truncate">
            <span className="text-[#aaaaaa]">Operator:</span> <span className="font-pixel text-[#55ffff] text-[10px]">{operatorName}</span>
          </div>
          <div className="text-[#cccccc] truncate">
            <span className="text-[#aaaaaa]">Note:</span> <span className="font-bold text-[#ffffff]">{patchNote}</span>
          </div>
        </div>

        {/* Minecraft XP Progress Bar Container */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between text-xs font-pixel">
            <span className="text-[#cccccc] flex items-center gap-2">
              <span>XP PROGRESS:</span>
              <span className="text-[#55ff55]">
                {isCompleted ? 'LEVEL 30 - COMPLETE' : `STEP ${currentStepIndex + 1}/4 IN PROGRESS`}
              </span>
            </span>
            <span className="text-sm text-[#55ff55] text-pixel-shadow">{progressPercent}%</span>
          </div>

          {/* Minecraft XP Bar (Lime Green) */}
          <div className="w-full h-4 bg-[#100d0b] border-2 border-[#373737] p-0.5">
            <div
              className="h-full bg-[#55ff55] border-r-2 border-[#ffffff] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* 4 Sequential Progress Steps */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {steps.map((s, idx) => {
            const isRunning = s.status === 'running';
            const isDone = s.status === 'completed';

            return (
              <div
                key={s.step}
                className={`p-3 border text-xs font-silkscreen ${
                  isDone
                    ? 'bg-[#153515] border-[#2b8b2b] text-[#55ff55]'
                    : isRunning
                    ? 'bg-[#152a35] border-[#55ffff] text-[#55ffff]'
                    : 'bg-[#100d0b] border-[#373737] text-[#aaaaaa]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-pixel text-[10px]">STEP {s.step}</span>
                  {isDone && <CheckCircle2 className="w-4 h-4 text-[#55ff55]" />}
                  {isRunning && <Loader2 className="w-4 h-4 text-[#55ffff] animate-spin" />}
                </div>

                <div className="font-pixel text-[10px] line-clamp-1">{s.name}</div>
                <div className="text-[10px] opacity-75 line-clamp-2 mt-0.5">{s.description}</div>
              </div>
            );
          })}
        </div>

        {/* Real-time Streaming Log Output Terminal */}
        <div className="mt-5 flex-1 min-h-[160px] max-h-[220px] bg-[#0a0806] border border-[#3d3126] p-3 font-vt323 text-sm text-[#55ffff] overflow-y-auto space-y-1" ref={logContainerRef}>
          <div className="text-[#aaaaaa] pb-1 border-b border-[#261f18] flex items-center justify-between text-xs font-pixel">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#55ffff]" />
              MINECRAFT CONSOLE OUTPUT
            </span>
            <span>UTF-8</span>
          </div>

          {terminalLogs.map((log, idx) => (
            <div key={idx} className="leading-relaxed">
              <span className="text-[#888888]">[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))}

          {!isCompleted && (
            <div className="flex items-center gap-2 text-[#55ffff] animate-pulse pt-1 font-silkscreen text-xs">
              <Loader2 className="w-3 h-3 animate-spin" />
              <span>Crafting deployment blocks...</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="mt-5 pt-4 border-t border-[#3d3126] flex items-center justify-between font-pixel text-xs">
          <div className="text-[#aaaaaa] text-[10px]">
            {isCompleted ? '✓ Save Point Snapshot successfully registered.' : 'Crafting in progress...'}
          </div>

          <button
            onClick={() => {
              playMcClick();
              onClose();
            }}
            disabled={!isCompleted}
            className={`px-6 py-2.5 text-xs font-bold flex items-center gap-2 ${theme.primaryBtn} disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer`}
          >
            {isCompleted ? (
              <>
                <Check className="w-4 h-4" />
                <span>HOÀN TẤT & ĐÓNG HUD</span>
              </>
            ) : (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>ĐANG CẬP NHẬT...</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};
