import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RoleListRelationFilter } from "../role/RoleListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CompanyWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  roles?: RoleListRelationFilter;
  users?: UserListRelationFilter;
};
