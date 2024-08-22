import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SessionWhereInput = {
  expiresAt?: DateTimeNullableFilter;
  id?: StringFilter;
  sessionCreatedAt?: DateTimeNullableFilter;
  sessionExpiresAt?: DateTimeNullableFilter;
  sessionToken?: StringNullableFilter;
  sessionUser?: StringNullableFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
