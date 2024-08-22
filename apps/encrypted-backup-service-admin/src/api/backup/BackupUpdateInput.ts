import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BackupUpdateInput = {
  backupData?: string | null;
  backupUser?: string | null;
  data?: string | null;
  user?: UserWhereUniqueInput | null;
};
