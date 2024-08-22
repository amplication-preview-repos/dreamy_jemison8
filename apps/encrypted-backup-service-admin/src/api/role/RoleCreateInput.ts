import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type RoleCreateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string | null;
  roleCompany?: string | null;
  roleName?: string | null;
  roleUser?: string | null;
};
