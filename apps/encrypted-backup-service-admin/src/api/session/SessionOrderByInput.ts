import { SortOrder } from "../../util/SortOrder";

export type SessionOrderByInput = {
  createdAt?: SortOrder;
  expiresAt?: SortOrder;
  id?: SortOrder;
  sessionCreatedAt?: SortOrder;
  sessionExpiresAt?: SortOrder;
  sessionToken?: SortOrder;
  sessionUser?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
