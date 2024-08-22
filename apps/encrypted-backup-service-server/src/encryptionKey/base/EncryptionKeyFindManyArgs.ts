/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EncryptionKeyWhereInput } from "./EncryptionKeyWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EncryptionKeyOrderByInput } from "./EncryptionKeyOrderByInput";

@ArgsType()
class EncryptionKeyFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EncryptionKeyWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EncryptionKeyWhereInput, { nullable: true })
  @Type(() => EncryptionKeyWhereInput)
  where?: EncryptionKeyWhereInput;

  @ApiProperty({
    required: false,
    type: [EncryptionKeyOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EncryptionKeyOrderByInput], { nullable: true })
  @Type(() => EncryptionKeyOrderByInput)
  orderBy?: Array<EncryptionKeyOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EncryptionKeyFindManyArgs as EncryptionKeyFindManyArgs };