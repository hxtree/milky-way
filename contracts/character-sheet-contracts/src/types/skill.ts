import { Duration } from 'luxon';
import { MenuSlotType } from './menu-slot';
import { Outcome, EffectRecord, EffectTable } from './table.effect';
import { Button, ButtonCombo } from './button';
import { Attribute } from './attribute';
import { AreaOfEffect } from './area-of-effect';
import { ActionTarget } from './action-target';

/**
 * Represents proficiency levels for active and passive skills, determining their effectiveness.
 */
export enum SkillLevel {
  LV1 = 'LV1',
  LV2 = 'LV2',
  LV3 = 'LV3',
  LV4 = 'LV4',
  LV5 = 'LV5',
  LV6 = 'LV6',
  LV7 = 'LV7',
  LV8 = 'LV8',
  LV9 = 'LV9',
  MAX = 'MAX', // The maximum level of proficiency for a skill may vary
}

export enum Focusable {
  STAMINA = 'Stamina',
  TRUE = 'True',
  FALSE = 'False',
}

export enum ObjectCategory {
  MOVEABLE = 'Moveable',
  IMPENDING = 'Impending',
  LOCKED = 'Locked',
}

/**
 * Skills are independent of specific actors and targets.
 * They represent abilities assigned to characters often via discipline.
 * Each action is expected to adjust its computation based on the stats of the
 * actors and targets involved. The outcome of the same action can vary
 * significantly when performed by actors with vastly different skills.
 */
export type Skill = {
  /**
   * The name of the skill, e.g., formatted as "Slash Lv.1" for display on the
   * frontend.
   */
  name: string;

  /**
   * A brief description of the skill, used in menus.
   */
  description: string;

  /**
   * Category of object this skill targets.
   */
  target?: ActionTarget;

  /**
   * Type of area this skill affects, if applicable.
   */
  areaOfEffect?: AreaOfEffect.Type;

  /**
   * Effects triggered by the action of using this skill.
   */
  outcome?: Outcome;

  /**
   * Backstory or lore related to the skill (optional).
   */
  backstory?: string;

  /**
   * List of commands that must be invoked by the summoner through Command.
   * @deprecated Use `children` instead.
   */
  commands?: string[];

  /**
   * Conditions that need to be met for the skill to be used (TODO: flesh out).
   */
  conditions?: string;

  /**
   * Cost is the resource expenditure required by the actor to perform the action.
   * Additional cost can be consumed by holding the button longer for some skills.
   */
  cost?: EffectRecord[];

  /**
   * Button combinations required to execute the skill.
   */
  buttonCombos?: ButtonCombo[];

  /**
   * The type of menu slot this skill occupies.
   * @deprecated Use `children` instead.
   */
  menuSlot: MenuSlotType;

  /**
   * Whether the skill can be interrupted or if it automatically stops.
   */
  interruptible?: boolean;

  /**
   * Attributes that are boosted when the button used for this move is held down.
   * For example, stamina may increase every 6 seconds the button is held.
   */
  booster?: Attribute;

  /**
   * Time required to prepare and execute the skill.
   */
  prepareTime?: Duration;

  /**
   * Time required to execute the skill after preparation.
   */
  executionTime?: Duration;

  /**
   * Time required for recovery after executing the skill.
   */
  recoveryTime?: Duration;

  /**
   * Time before the skill can be used again.
   */
  coolDownTime?: Duration;

  /**
   * Level of the skill (e.g., beginner, intermediate, advanced).
   */
  level: SkillLevel;

  /**
   * Skills that can be used in succession after this skill.
   * For example, "Summon" > "Vachel" > "Stampede"
   */
  children?: { [key: string]: Skill };
};
