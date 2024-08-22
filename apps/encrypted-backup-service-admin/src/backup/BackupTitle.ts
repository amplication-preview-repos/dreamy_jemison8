import { Backup as TBackup } from "../api/backup/Backup";

export const BACKUP_TITLE_FIELD = "backupUser";

export const BackupTitle = (record: TBackup): string => {
  return record.backupUser?.toString() || String(record.id);
};
