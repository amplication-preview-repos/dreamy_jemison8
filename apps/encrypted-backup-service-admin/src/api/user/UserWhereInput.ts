import { BackupListRelationFilter } from "../backup/BackupListRelationFilter";
import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type UserWhereInput = {
  backups?: BackupListRelationFilter;
  company?: CompanyWhereUniqueInput;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  sessions?: SessionListRelationFilter;
  userCompany?: StringNullableFilter;
  userPassword?: StringNullableFilter;
  userUsername?: StringNullableFilter;
  username?: StringFilter;
};
