import React, { useState } from 'react';
import { SystemMetrics, ThemeStyle } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick, playMcAnvil } from '../utils/mcAudio';
import { 
  Database, 
  Activity, 
  Clock, 
  RefreshCw, 
  Wifi, 
  CheckCircle, 
  Zap,
  Lock,
  Unlock,
  Shield,
  Sparkles,
  Heart
} from 'lucide-react';

interface MetricsBarProps {
  metrics: SystemMetrics;
  onUpdateMetrics: (newMetrics: Partial<SystemMetrics>) => void;
  onScanDb: () => void;
  onToggleMaintenance: () => void;
  currentTheme: ThemeStyle;
}

export const MetricsBar: React.FC<MetricsBarProps> = ({
  metrics,
  onScanDb,
  onToggleMaintenance,
  currentTheme,
}) => {
  const theme = getThemeClasses(currentTheme);
  const [isScanning, setIsScanning] = useState(false);
  const [isPinging, setIsPinging] = useState(false);

  const handleScan = () => {
    playMcClick();
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      playMcAnvil();
      onScanDb();
    }, 1000);
  };

  const handlePing = () => {
    playMcClick();
    setIsPinging(true);
    setTimeout(() => {
      setIsPinging(false);
      playMcClick();
    }, 600);
  };

  const handleMaintenanceToggle = () => {
    playMcAnvil();
    onToggleMaintenance();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
      
      {/* Metric 1: Database Integrity */}
      <div className={`p-4 md:p-5 ${theme.cardBg} relative overflow-hidden transition-all duration-300 group`}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className={`text-[10px] font-pixel tracking-wider uppercase ${theme.subtextColor}`}>
              METRIC 1: DB INTEGRITY
            </span>
            <div className="flex items-baseline gap-2 pt-1">
              <span className={`text-xl md:text-2xl font-bold font-pixel ${theme.accentTextColor}`}>
                {metrics.dbIntegrity}% HEALTH
              </span>
            </div>
            <p className="text-xs text-[#55ff55] font-silkscreen flex items-center gap-1 pt-1">
              <Heart className="w-3.5 h-3.5 fill-[#55ff55]" />
              <span>({metrics.orphanRecords} orphan records)</span>
            </p>
          </div>

          <div className={`${theme.slotBox} flex items-center justify-center`}>
            <Database className="w-6 h-6 text-[#55ff55]" />
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#3d3126] flex items-center justify-between">
          <span className="text-[10px] opacity-70">Scan: OK</span>
          <button
            onClick={handleScan}
            disabled={isScanning}
            className={`px-2.5 py-1 text-[10px] ${theme.secondaryBtn} flex items-center gap-1.5 cursor-pointer`}
          >
            <RefreshCw className={`w-3 h-3 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? 'QUÉT...' : 'QUÉT LẠI DB'}</span>
          </button>
        </div>
      </div>

      {/* Metric 2: Release Sync History */}
      <div className={`p-4 md:p-5 ${theme.cardBg} relative overflow-hidden transition-all duration-300 group`}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className={`text-[10px] tracking-wider uppercase ${theme.subtextColor}`}>
              METRIC 2: SYNC HISTORY
            </span>
            <div className="flex items-baseline gap-2 pt-1">
              <span className={`text-xl md:text-2xl font-bold text-[#ffaa00]`}>
                {metrics.syncLogsCount} LOGS
              </span>
            </div>
            <p className="text-xs text-[#ffaaaa] flex items-center gap-1 pt-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Last: {metrics.lastSyncTime.split(' ')[1]}</span>
            </p>
          </div>

          <div className={`${theme.slotBox} flex items-center justify-center`}>
            <Sparkles className="w-6 h-6 text-[#ffaa00]" />
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#3d3126] flex items-center justify-between">
          <span className="text-[10px] opacity-70">Branch: snapshots</span>
          <span className={`text-[10px] px-2 py-0.5 ${theme.badgeAccent}`}>
            AUTO-SYNCED
          </span>
        </div>
      </div>

      {/* Metric 3: System Latency */}
      <div className={`p-4 md:p-5 ${theme.cardBg} relative overflow-hidden transition-all duration-300 group`}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className={`text-[10px] tracking-wider uppercase ${theme.subtextColor}`}>
              METRIC 3: LATENCY
            </span>
            <div className="flex items-baseline gap-2 pt-1">
              <span className={`text-xl md:text-2xl font-bold ${theme.accentTextColor}`}>
                {metrics.latencyMs}ms ONLINE
              </span>
            </div>
            <p className="text-xs text-[#55ffff] flex items-center gap-1 pt-1">
              <Wifi className="w-3.5 h-3.5 animate-pulse" />
              <span>Ping Server Stable (Cloud Run)</span>
            </p>
          </div>

          <div className={`${theme.slotBox} flex items-center justify-center`}>
            <Zap className="w-6 h-6 text-[#55ffff]" />
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#3d3126] flex items-center justify-between">
          <span className="text-[10px] opacity-70">Jitter: &lt; 1.2ms</span>
          <button
            onClick={handlePing}
            disabled={isPinging}
            className={`px-2.5 py-1 text-[10px] ${theme.secondaryBtn} flex items-center gap-1.5 cursor-pointer`}
          >
            <RefreshCw className={`w-3 h-3 ${isPinging ? 'animate-spin' : ''}`} />
            <span>{isPinging ? 'PINGING...' : 'PING SERVER'}</span>
          </button>
        </div>
      </div>

      {/* Metric 4: Maintenance Shield */}
      <div className={`p-4 md:p-5 ${theme.cardBg} relative overflow-hidden transition-all duration-300 group ${
        metrics.maintenanceMode ? 'border-2 border-[#ff5555]' : ''
      }`}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <span className={`text-[10px] tracking-wider uppercase ${theme.subtextColor}`}>
              METRIC 4: MAINT. SHIELD
            </span>
            <div className="flex items-center gap-2 pt-1">
              <span className={`text-sm md:text-base font-bold ${
                metrics.maintenanceMode ? 'text-[#ff5555]' : 'text-[#55ff55]'
              }`}>
                {metrics.maintenanceMode ? 'ON (BẢO TRÌ)' : 'OFF (MỞ 24/7)'}
              </span>
            </div>
            <p className="text-xs opacity-80 pt-1">
              {metrics.maintenanceMode 
                ? 'Khóa POS/KDS ngoại vi' 
                : 'Sẵn sàng nhận booking'}
            </p>
          </div>

          <div className={`${theme.slotBox} flex items-center justify-center`}>
            {metrics.maintenanceMode ? (
              <Lock className="w-6 h-6 text-[#ff5555]" />
            ) : (
              <Unlock className="w-6 h-6 text-[#55ff55]" />
            )}
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-[#3d3126] flex items-center justify-between">
          <span className="text-[10px] opacity-70">KHIÊN:</span>
          
          {/* Toggle Switch */}
          <button
            onClick={handleMaintenanceToggle}
            className={`px-3 py-1 text-[10px] ${theme.secondaryBtn} flex items-center gap-1.5 cursor-pointer ${
              metrics.maintenanceMode ? 'bg-rose-800 text-white' : ''
            }`}
            title="Bật/Tắt Chế Độ Bảo Trì"
          >
            <Shield className="w-3 h-3" />
            <span>{metrics.maintenanceMode ? 'TẮT BẢO TRÌ' : 'BẬT BẢO TRÌ'}</span>
          </button>
        </div>
      </div>

    </div>
  );
};
