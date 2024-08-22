import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BackupWhereInput = {
  backupData?: StringNullableFilter;
  backupUser?: StringNullableFilter;
  data?: StringNullableFilter;
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
