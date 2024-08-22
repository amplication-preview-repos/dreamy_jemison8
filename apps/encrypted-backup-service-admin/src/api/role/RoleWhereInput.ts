import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoleWhereInput = {
  company?: CompanyWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  roleCompany?: StringNullableFilter;
  roleName?: StringNullableFilter;
  roleUser?: StringNullableFilter;
};
