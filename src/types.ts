export type ThemeStyle = 'minecraft' | 'redstone' | 'end' | 'cyber' | 'win95' | 'luxury' | 'synthwave' | 'swiss' | 'mecha' | 'vangogh' | 'romanticism';

export interface SystemMetrics {
  dbIntegrity: number; // percentage
  orphanRecords: number;
  syncLogsCount: number;
  lastSyncTime: string;
  latencyMs: number;
  isOnline: boolean;
  maintenanceMode: boolean;
}

export interface PatchNoteCategory {
  id: string;
  title: string;
  tag: string;
  category: 'feature' | 'bugfix' | 'performance' | 'security';
  summary: string;
  details: string[];
  affectedModules: string[];
  version: string;
  date: string;
}

export interface SaveSlot {
  id: string;
  title: string;
  timestamp: string;
  filePath: string;
  syncedBookings: string;
  dbIntegrity: string;
  sizeKb: number;
  operator: string;
  commitHash: string;
  isCurrent?: boolean;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  actionType: 'PATCH_DEPLOY' | 'GIT_PULL' | 'ROLLBACK' | 'SAVEPOINT_CREATE' | 'MAINTENANCE_TOGGLE' | 'SCAN_INTEGRITY';
  operator: string;
  details: string;
  status: 'SUCCESS' | 'FAILED' | 'PENDING';
  ipAddress?: string;
}

export interface PatchStep {
  step: number;
  name: string;
  description: string;
  status: 'idle' | 'running' | 'completed' | 'failed';
  logMessages: string[];
}
