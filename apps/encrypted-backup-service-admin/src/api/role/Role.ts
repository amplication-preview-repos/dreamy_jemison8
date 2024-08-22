import { Company } from "../company/Company";

export type Role = {
  company?: Company | null;
  createdAt: Date;
  id: string;
  name: string | null;
  roleCompany: string | null;
  roleName: string | null;
  roleUser: string | null;
  updatedAt: Date;
};
