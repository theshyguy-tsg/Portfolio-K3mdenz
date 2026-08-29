import React, { useState } from 'react';
import { AuditLog, ThemeStyle } from '../types';
import { getThemeClasses } from '../utils/themeConfig';
import { playMcClick } from '../utils/mcAudio';
import { 
  History, 
  Search, 
  CheckCircle, 
  XCircle, 
  Clock, 
  User, 
  Filter, 
  Copy, 
  Check, 
  FileSpreadsheet
} from 'lucide-react';

interface AuditLogsTableProps {
  logs: AuditLog[];
  currentTheme: ThemeStyle;
}

export const AuditLogsTable: React.FC<AuditLogsTableProps> = ({
  logs,
  currentTheme,
}) => {
  const theme = getThemeClasses(currentTheme);
  const [searchTerm, setSearchTerm] = useState('');
  const [actionFilter, setActionFilter] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [copiedLogId, setCopiedLogId] = useState<string | null>(null);

  const filteredLogs = logs.filter(log => {
    const matchesSearch = 
      log.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.operator.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.timestamp.includes(searchTerm) ||
      log.id.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesAction = actionFilter === 'ALL' || log.actionType === actionFilter;
    const matchesStatus = statusFilter === 'ALL' || log.status === statusFilter;

    return matchesSearch && matchesAction && matchesStatus;
  });

  const handleCopyLog = (log: AuditLog) => {
    playMcClick();
    navigator.clipboard.writeText(JSON.stringify(log, null, 2));
    setCopiedLogId(log.id);
    setTimeout(() => setCopiedLogId(null), 2000);
  };

  const handleExportCsv = () => {
    playMcClick();
    const headers = ['ID', 'Timestamp', 'Action Type', 'Operator', 'Details', 'Status', 'IP Address'];
    const rows = filteredLogs.map(l => [
      l.id,
      `"${l.timestamp}"`,
      l.actionType,
      `"${l.operator}"`,
      `"${l.details.replace(/"/g, '""')}"`,
      l.status,
      l.ipAddress || '127.0.0.1'
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Audit_Logs_DATN-SD33_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getActionBadgeClass = (actionType: string) => {
    switch (actionType) {
      case 'PATCH_DEPLOY':
        return 'bg-[#152a35] text-[#55ffff] border-[#2b8b8b]';
      case 'GIT_PULL':
        return 'bg-[#281528] text-[#ff55ff] border-[#a82ba8]';
      case 'ROLLBACK':
        return 'bg-[#352a15] text-[#ffaa00] border-[#8b6b2b]';
      case 'SAVEPOINT_CREATE':
        return 'bg-[#153515] text-[#55ff55] border-[#2b8b2b]';
      case 'MAINTENANCE_TOGGLE':
        return 'bg-[#351515] text-[#ff5555] border-[#8b2b2b]';
      default:
        return 'bg-[#152a35] text-[#55ffff] border-[#2b8b8b]';
    }
  };

  return (
    <div className="space-y-4">
      {/* Search & Filter Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-3 border-b border-[#3d3126]">
        <div className="flex items-center gap-2">
          <History className={`w-5 h-5 ${theme.accentTextColor}`} />
          <h3 className={`text-sm md:text-base uppercase ${theme.titleFont}`}>
            📜 NHẬT KÝ KIỂM TOÁN LỊCH SỬ DỰ ÁN (AUDIT LOGS HISTORY)
          </h3>
        </div>

        {/* Export CSV Button */}
        <button
          onClick={handleExportCsv}
          className={`px-3 py-1.5 text-xs font-bold flex items-center gap-1.5 ${theme.secondaryBtn} cursor-pointer self-start lg:self-auto`}
        >
          <FileSpreadsheet className="w-4 h-4 text-[#55ff55]" />
          <span>XUẤT AUDIT LOGS (.CSV)</span>
        </button>
      </div>

      {/* Filter controls row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#aaaaaa] pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm hành động, operator, log..."
            className={`w-full pl-9 pr-3 py-2 text-xs ${theme.inputBg}`}
          />
        </div>

        {/* Action Type Filter */}
        <div className="relative">
          <Filter className="w-4 h-4 absolute left-3 top-2.5 text-[#aaaaaa] pointer-events-none" />
          <select
            value={actionFilter}
            onChange={(e) => {
              playMcClick();
              setActionFilter(e.target.value);
            }}
            className={`w-full pl-9 pr-3 py-2 text-xs ${theme.inputBg} cursor-pointer appearance-none`}
          >
            <option value="ALL">Tất cả Loại Hành Động (Action Types)</option>
            <option value="PATCH_DEPLOY">PATCH_DEPLOY (Phát hành Patch)</option>
            <option value="GIT_PULL">GIT_PULL (Nạp Pull Git)</option>
            <option value="ROLLBACK">ROLLBACK (Khôi phục điểm Save)</option>
            <option value="SAVEPOINT_CREATE">SAVEPOINT_CREATE (Tạo Save Snapshot)</option>
            <option value="MAINTENANCE_TOGGLE">MAINTENANCE_TOGGLE (Bật/Tắt Bảo Trì)</option>
            <option value="SCAN_INTEGRITY">SCAN_INTEGRITY (Quét DB Integrity)</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <select
            value={statusFilter}
            onChange={(e) => {
              playMcClick();
              setStatusFilter(e.target.value);
            }}
            className={`w-full px-3 py-2 text-xs ${theme.inputBg} cursor-pointer appearance-none`}
          >
            <option value="ALL">Tất cả Trạng Thái (All Statuses)</option>
            <option value="SUCCESS">SUCCESS (Thành Công)</option>
            <option value="FAILED">FAILED (Thất Bại)</option>
          </select>
        </div>
      </div>

      {/* Audit Logs Table */}
      <div className={`overflow-x-auto border ${theme.borderColor} ${theme.cardBg}`}>
        <table className="w-full text-left text-xs font-silkscreen border-collapse">
          <thead>
            <tr className={theme.tableHeaderBg}>
              <th className="p-3 border-b-2 border-[#3d3126] whitespace-nowrap">TIMESTAMP</th>
              <th className="p-3 border-b-2 border-[#3d3126] whitespace-nowrap">ACTION TYPE</th>
              <th className="p-3 border-b-2 border-[#3d3126] whitespace-nowrap">OPERATOR</th>
              <th className="p-3 border-b-2 border-[#3d3126]">DETAILS</th>
              <th className="p-3 border-b-2 border-[#3d3126] whitespace-nowrap">STATUS</th>
              <th className="p-3 border-b-2 border-[#3d3126] whitespace-nowrap text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#261f18]">
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-[#aaaaaa] font-silkscreen">
                  Không tìm thấy nhật ký audit log phù hợp với bộ lọc.
                </td>
              </tr>
            ) : (
              filteredLogs.map((log) => {
                const isCopied = copiedLogId === log.id;

                return (
                  <tr key={log.id} className={`${theme.tableRowHover}`}>
                    <td className="p-3 font-bold text-[#dddddd] whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#55ffff]" />
                        <span>{log.timestamp}</span>
                      </div>
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <span className={`px-2 py-0.5 text-[10px] font-pixel border ${getActionBadgeClass(log.actionType)}`}>
                        {log.actionType}
                      </span>
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-[#ffffff]">
                        <User className="w-3.5 h-3.5 text-[#aaaaaa]" />
                        <span className="font-bold">{log.operator}</span>
                      </div>
                    </td>

                    <td className="p-3 text-[#dddddd] font-silkscreen max-w-md">
                      <p className="line-clamp-2 leading-relaxed">{log.details}</p>
                      {log.ipAddress && (
                        <span className="text-[10px] text-[#aaaaaa] block pt-0.5 font-pixel">
                          IP: {log.ipAddress}
                        </span>
                      )}
                    </td>

                    <td className="p-3 whitespace-nowrap">
                      {log.status === 'SUCCESS' ? (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-pixel bg-[#153515] text-[#55ff55] border border-[#2b8b2b]">
                          <CheckCircle className="w-3 h-3 text-[#55ff55]" />
                          <span>SUCCESS</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-pixel bg-[#351515] text-[#ff5555] border border-[#8b2b2b]">
                          <XCircle className="w-3 h-3 text-[#ff5555]" />
                          <span>FAILED</span>
                        </span>
                      )}
                    </td>

                    <td className="p-3 text-right whitespace-nowrap">
                      <button
                        onClick={() => handleCopyLog(log)}
                        title="Sao chép JSON log"
                        className="px-2 py-1 ${theme.secondaryBtn} cursor-pointer inline-flex items-center gap-1 text-[10px] font-pixel"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-[#55ff55]" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>JSON</span>
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
