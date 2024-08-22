import { SortOrder } from "../../util/SortOrder";

export type RoleOrderByInput = {
  companyId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  roleCompany?: SortOrder;
  roleName?: SortOrder;
  roleUser?: SortOrder;
  updatedAt?: SortOrder;
};
