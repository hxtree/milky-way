import {Attribute} from './attribute';
import {ClassSkillList} from './class.skill';
import {ComboSkillList} from './combo.skill';
import {DriveSkillList} from './drive.skill';
import {InteractionSkillList} from './interaction.skill';
import {ItemSkillList} from './item.skill';
import {PassiveSkillList} from './passive.skill';
import {SpellSkillList} from './spell.skill';
import {SummonSkillList} from './summon.skill';
import {TeamworkSkillList} from './teamwork.skill';
import {ToolSkillList} from './tool.skill';
import {TrapSkillList} from './trap.skill';
import {WeaponSkillList} from './weapon.skill';

const MasterSkillList = {
  ...WeaponSkillList,
  ...TrapSkillList,
  ...ClassSkillList,
  ...DriveSkillList,
  ...ComboSkillList,
  ...SpellSkillList,
  ...TeamworkSkillList,
  ...PassiveSkillList,
  ...ItemSkillList,
  ...InteractionSkillList,
  ...ToolSkillList,
  ...SummonSkillList,
};
export type MasterSkillListType = typeof MasterSkillList;

// Is this more of a system than a component?
export enum SkillCategory {
  MOVEMENT = 'Movement', // changes position
  MENU = 'Menu', // activated via menu
  COMBO = 'Combo', // activated via combo
  INTERACTION = 'Interaction', // in relation to object
  WEAPON = 'Weapon',
  CLASS = 'Class',
  DRIVE = 'Drive',
  PARTY = 'Party',
  GEAR = 'Gear', // are related to the use of gear
  NATURAL = 'Natural', //  actions that do not need to be called to be used ??? These sound like traits or something?
}

/**
 * BaseSkill
 * Skills are decoupled from the actor and target.
 * Skills refer to abilities that assigned to characters.
 */
export interface BaseSkill {
  /**
   * The name is used to identify the skill
   */
  name: string;

  /**
   * The description explains the skill to the player
   */
  description: string;

  /**
   * Whether the skill must be canceled or automatically stop being performed
   */
  fixed?: boolean;

  /**
   * Stamina Boost Enabled Action
   * By holding down the button used to make that move
   * a player may place more stamina into the move
   * making it a more powerful action.
   * For every 6 seconds, character gains a plus 1 for example.
   */
  booster?: Attribute;
}

// TargetEffect.Action.Catch.Add(5);
// TargetEffect.Attribute.Power.Add(5%);
// // tags

// TargetEffect.Attribute.Life.Remove('10d8');
// TargetEffect.StatusEffect.Remove(Dizzy);
