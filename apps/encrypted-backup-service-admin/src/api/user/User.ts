import { Backup } from "../backup/Backup";
import { Company } from "../company/Company";
import { JsonValue } from "type-fest";
import { Session } from "../session/Session";

export type User = {
  backups?: Array<Backup>;
  company?: Company | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  sessions?: Array<Session>;
  updatedAt: Date;
  userCompany: string | null;
  userPassword: string | null;
  userUsername: string | null;
  username: string;
};
