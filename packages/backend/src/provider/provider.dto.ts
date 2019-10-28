import { IsBoolean, IsInt, IsString, IsUrl } from "class-validator";
import { ApiModelProperty, ApiModelPropertyOptional } from "@nestjs/swagger";

export class ProviderDto {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly acronym: string;
}

export class CreateProviderDto {
  @IsString()
  @ApiModelProperty()
  readonly name: string;
}

export class UpdateProviderDto {
  @IsString()
  @ApiModelProperty()
  readonly name: string;
}