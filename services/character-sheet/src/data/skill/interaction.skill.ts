import { ActionEffects } from '../table.effect';
import { MenuSlot, MenuSlotType } from '../menu-slot';
import { SkillType, ObjectCategory } from './skill.type';
import { ActionTarget } from '../action-target';

/**
 * Interaction skills are actions that can only be used when a compatible object is present.
 * They are a type of Command Menu action.
 */
export namespace Interaction {
  export const GRAB: SkillType = {
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this
          chance: 1.0,
          tags: [],
        },
      ],
    },
    description: 'Grab an object.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Grab',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const PUSH: SkillType = {
    description: 'Push an object.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Push',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const PULL: SkillType = {
    description: 'Pull an object.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Pull',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const LIFT: SkillType = {
    description: 'Lift an object.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Lift',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const THROW: SkillType = {
    description: 'Throw an object.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Throw',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const PICK_LOCK: SkillType = {
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
      INVENTORY: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
    },
    description: 'Attempt to pick a lock.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Pick Lock',
    target: ActionTarget.INTERACTION_OBJECT,
  };

  export const UNLOCK: SkillType = {
    actionEffects: {
      INTERACTION_OBJECT: [
        {
          add: 'BERSERK', // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          tags: [],
        },
      ],
      INVENTORY: [
        {
          // TODO figure out how to handle this, e.g. state UNLOCKED
          chance: 0.7,
          remove: 'BERSERK',
          tags: [],
        },
      ],
    },
    description: 'Open a lock using a key.',
    menuSlot: MenuSlot.INTERACTION,
    name: 'Unlock',
    target: ActionTarget.INTERACTION_OBJECT,
  };
}
