import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  IsUuidV4,
  IsString,
  IsUUID,
  IsEnum,
  IsOptional,
  IsInstance,
} from '@cats-cradle/validation-schemas';
import { v4 } from 'uuid';
import { DisciplineEmbeddable } from './discipline-embeddable.schema';
import { StatsEmbeddable } from './stats-embeddable.schema';
import { EquipmentEmbeddable } from './equipment-embeddable.schema';
import { ArchetypeId, ArchetypeIds } from '../data/archetype';

@Schema()
export class CharacterSheet {
  @IsUUID() // TODO fix decorator
  @Prop()
  public id!: string;

  @IsUUID()
  @Prop()
  public instanceId!: string;

  @IsEnum(ArchetypeIds)
  @Prop()
  public archetypeId!: ArchetypeId;

  @IsString()
  @IsOptional()
  @Prop()
  public name?: string;

  @IsString()
  @IsOptional()
  @Prop()
  public surname?: string;

  @IsInstance(StatsEmbeddable)
  @Prop()
  public stats: StatsEmbeddable;

  @IsOptional()
  @IsEnum(DisciplineEmbeddable)
  @Prop()
  public disciplines: DisciplineEmbeddable[];

  @IsOptional()
  @IsEnum(EquipmentEmbeddable)
  @Prop()
  public equipment: EquipmentEmbeddable[];
}

export type TCharacterSheetDocument = CharacterSheet & Document;

export const CharacterSheetSchema = SchemaFactory.createForClass(
  CharacterSheet,
).set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id;
    delete ret._id;
  },
});

CharacterSheetSchema.virtual('fullName').get(function () {
  return `${this.name} ${this.surname}`;
});

CharacterSheetSchema.index({
  id: 1,
});
