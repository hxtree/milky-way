import {
  Controller,
  Post,
  Body,
  VERSION_NEUTRAL,
  BadRequestException,
} from '@nestjs/common';
import { CharacterSheetRepository } from '../../models/character-sheet.repository';
import { CharacterSheet } from '../../models/character-sheet.schema';
import { CreateSpawnDto } from './create-spawn-dto';
import { PlaceService } from '../place/place.service';
import { SpawnService } from './spawn.service';
import { GaugeEmbeddable } from '../../models/gauge-embeddable.schema';

@Controller({ path: 'npcs', version: [VERSION_NEUTRAL, '1'] })
export class NpcController {
  constructor(
    private _characterSheetRepository: CharacterSheetRepository,
    private _placeService: PlaceService,
    private _spawnService: SpawnService,
  ) {}

  /**
   * Endpoint to dynamically autogenerated for in a given area
   */
  @Post()
  async create(@Body() createSpawnDto: CreateSpawnDto): Promise<any> {
    const place = await this._placeService.find(createSpawnDto.place);

    if (!place.spawnGuidelines) {
      return new BadRequestException('Spawn guidelines not found');
    }

    const createCharacterSheet = this._spawnService.calculateSpawn(
      place.spawnGuidelines,
    );

    const characterSheet = new CharacterSheet({
      affiliation: [],
      archetypeId: createCharacterSheet.archetypeId,
      disciplines: [],
      drive: new GaugeEmbeddable({ current: 10, max: 10, min: 0 }),
      equipment: [],
      instanceId: createSpawnDto.instanceId,
      life: new GaugeEmbeddable({ current: 10, max: 10, min: 0 }),
      spirit: new GaugeEmbeddable({ current: 10, max: 10, min: 0 }),
      stats: {
        accuracy: 10,
        defense: 10,
        evasion: 10,
        intelligence: 10,
        luck: 10,
        power: 10,
        speed: 10,
        wisdom: 10,
      },
    });

    const character = await this._characterSheetRepository.create(characterSheet);

    return character!.toJSON();
  }
}
