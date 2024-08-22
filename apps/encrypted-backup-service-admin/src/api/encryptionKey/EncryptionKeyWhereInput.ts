import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EncryptionKeyWhereInput = {
  id?: StringFilter;
  key?: StringNullableFilter;
};
