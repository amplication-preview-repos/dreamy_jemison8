import { BackupUpdateManyWithoutUsersInput } from "./BackupUpdateManyWithoutUsersInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  backups?: BackupUpdateManyWithoutUsersInput;
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  sessions?: SessionUpdateManyWithoutUsersInput;
  userCompany?: string | null;
  userPassword?: string | null;
  userUsername?: string | null;
  username?: string;
};
