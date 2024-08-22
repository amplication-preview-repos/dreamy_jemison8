import { User } from "../user/User";

export type Backup = {
  backupData: string | null;
  backupUser: string | null;
  createdAt: Date;
  data: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
