import {
  IsEnum,
  IsDateString,
  IsString,
} from '@cats-cradle/validation-schemas';
import { StatusType } from '../types/status.type';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailMessageDto {
  @IsEnum(StatusType)
  @ApiProperty({
    description: 'Status of the send email request',
    default: StatusType.OPEN,
  })
  public status?: StatusType;

  @IsString()
  public data: string;

  @IsDateString()
  public createdAt!: string;

  @IsDateString()
  public updatedAt!: string;
}