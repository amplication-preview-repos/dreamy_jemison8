import { User } from "../user/User";

export type Session = {
  createdAt: Date;
  expiresAt: Date | null;
  id: string;
  sessionCreatedAt: Date | null;
  sessionExpiresAt: Date | null;
  sessionToken: string | null;
  sessionUser: string | null;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
