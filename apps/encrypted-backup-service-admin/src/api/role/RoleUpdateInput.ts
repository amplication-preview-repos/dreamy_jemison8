import { CompanyWhereUniqueInput } from "../company/CompanyWhereUniqueInput";

export type RoleUpdateInput = {
  company?: CompanyWhereUniqueInput | null;
  name?: string | null;
  roleCompany?: string | null;
  roleName?: string | null;
  roleUser?: string | null;
};
