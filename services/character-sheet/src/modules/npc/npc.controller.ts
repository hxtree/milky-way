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
      instanceId: createSpawnDto.instanceId,
      archetypeId: createCharacterSheet.archetypeId,
      life: new GaugeEmbeddable({ min: 0, max: 10, current: 10 }),
      drive: new GaugeEmbeddable({ min: 0, max: 10, current: 10 }),
      spirit: new GaugeEmbeddable({ min: 0, max: 10, current: 10 }),
      disciplines: [],
      stats: {
        power: 10,
        wisdom: 10,
        accuracy: 10,
        luck: 10,
        defense: 10,
        evasion: 10,
        intelligence: 10,
        speed: 10,
      },
      equipment: [],
      affiliation: [],
    });

    const character =
      await this._characterSheetRepository.create(characterSheet);

    return character!.toJSON();
  }
}
