import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionUpdateInput = {
  expiresAt?: Date | null;
  sessionCreatedAt?: Date | null;
  sessionExpiresAt?: Date | null;
  sessionToken?: string | null;
  sessionUser?: string | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
