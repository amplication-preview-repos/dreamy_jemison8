import { RoleUpdateManyWithoutCompaniesInput } from "./RoleUpdateManyWithoutCompaniesInput";
import { UserUpdateManyWithoutCompaniesInput } from "./UserUpdateManyWithoutCompaniesInput";

export type CompanyUpdateInput = {
  name?: string | null;
  roles?: RoleUpdateManyWithoutCompaniesInput;
  users?: UserUpdateManyWithoutCompaniesInput;
};
