import { BackupCreateNestedManyWithoutUsersInput } from "./BackupCreateNestedManyWithoutUsersInput";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  backups?: BackupCreateNestedManyWithoutUsersInput;
  company?: CompanyWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  userCompany?: string | null;
  userPassword?: string | null;
  userUsername?: string | null;
  username: string;
};
