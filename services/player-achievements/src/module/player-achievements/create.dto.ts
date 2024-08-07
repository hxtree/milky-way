import { IsNumber, IsUuidV4 } from '@galaxyops/validation-schemas';
import { ApiProperty } from '@nestjs/swagger';
import { v4 } from 'uuid';

export class CreateDto {
  @IsUuidV4()
  @ApiProperty({
    description: 'The playerId',
    default: v4(),
    type: String,
  })
    playerId: string;

  @IsUuidV4()
  @ApiProperty({
    description: 'The achievementId',
    default: v4(),
    type: String,
  })
    achievementId: string;

  @IsNumber()
  @ApiProperty({
    description: 'The progress',
    default: 0,
    type: Number,
  })
    progress: number;
}
