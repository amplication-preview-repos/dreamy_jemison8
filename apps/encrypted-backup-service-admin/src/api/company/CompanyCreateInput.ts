import { RoleCreateNestedManyWithoutCompaniesInput } from "./RoleCreateNestedManyWithoutCompaniesInput";
import { UserCreateNestedManyWithoutCompaniesInput } from "./UserCreateNestedManyWithoutCompaniesInput";

export type CompanyCreateInput = {
  name?: string | null;
  roles?: RoleCreateNestedManyWithoutCompaniesInput;
  users?: UserCreateNestedManyWithoutCompaniesInput;
};
