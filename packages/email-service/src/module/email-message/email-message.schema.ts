import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsDateString,
  IsString,
  IsUUID,
  IsEnum,
} from '@cats-cradle/validation-schemas';
import { StatusType } from './types/status.type';

@Schema()
export class EmailMessage {
  @IsUUID()
  @Prop()
  public id!: string;

  @IsString()
  @Prop()
  public template!: string;

  @IsString()
  @Prop()
  public data?: string;

  @IsEnum(StatusType)
  @Prop()
  public status: StatusType;

  @IsDateString()
  @Prop()
  public createdAt: string;

  @IsDateString()
  @Prop()
  public updatedAt: string;

  constructor() {}
}

export type TEmailMessageDocument = EmailMessage & Document;

export const EmailMessageSchema = SchemaFactory.createForClass(
  EmailMessage,
).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

EmailMessageSchema.index({
  id: 1,
});