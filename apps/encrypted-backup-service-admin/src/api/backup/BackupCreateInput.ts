import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BackupCreateInput = {
  backupData?: string | null;
  backupUser?: string | null;
  data?: string | null;
  user?: UserWhereUniqueInput | null;
};
