import { Role } from "../role/Role";
import { User } from "../user/User";

export type Company = {
  createdAt: Date;
  id: string;
  name: string | null;
  roles?: Array<Role>;
  updatedAt: Date;
  users?: Array<User>;
};
