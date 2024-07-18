/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import './style.module.scss';
import { Spacer } from '../Spacer/Spacer';
import { SpacerProps } from '../Spacer/SpacerProps.type';
import './style.module.scss';
import {
  Skill,
  Archetype,
  DisciplineProgression,
  Discipline,
  SkillProgression,
} from '@galaxyops/character-sheet-contracts';

export type ActionMenuProps = {
  data: Archetype;
  spacing?: SpacerProps;
  testId?: string;
};

export type MenuTreeNode = {
  name: string;
  children: MenuTreeNode[];
  action?: Skill;
};
export type MenuTree = MenuTreeNode[];

export type DisplayItem = {
  name: string;
  level?: string;
};

// TODO
// In character sheet skills should have a parent child relationship instead of a flat array

export const ActionMenu = (props: ActionMenuProps) => {
  const { data, spacing, testId } = props;
  const [pointers, setPointers] = useState<number[]>([0]);
  const [menuTree, setMenuTree] = useState<MenuTree>([]);
  const [menuFlat, setMenuFlat] = useState<DisplayItem[]>([]);

  useEffect(() => {
    const newSkills: any = [];
    if (!data.potentialDisciplines) {
      return;
    }
    data.potentialDisciplines.forEach((discipline: Discipline) => {
      if (!discipline.progression) {
        return;
      }
      discipline.progression.forEach((progression: DisciplineProgression) => {
        const skillProgression = progression as SkillProgression;

        if (!skillProgression.skill) {
          return;
        }
        newSkills.push(skillProgression.skill);
      });
    });

    interface MenuTreeNode {
      name: string;
      children: MenuTreeNode[];
      action?: any; // Adjust the type of 'action' as per your actual structure
    }

    const newMenuTree: MenuTreeNode[] = [];

    newSkills.forEach((skill: any) => {
      if (!skill.menuSlot) {
        return;
      }
      const name = skill.name;
      const parentName = skill.menuSlot.name;
      const level = skill.level;

      let parent = newMenuTree.find(node => node.name === parentName);
      if (!parent) {
        parent = {
          name: parentName,
          children: [],
        };
        newMenuTree.push(parent);
      }

      const existingChildIndex = parent.children.findIndex(
        child => child.name === name,
      );

      if (existingChildIndex !== -1) {
        const existingChild = parent.children[existingChildIndex];
        if (
          existingChild.action &&
          existingChild.action.level &&
          existingChild.action.level < level
        ) {
          existingChild.action = skill;
          return;
        }
        return;
      }

      parent.children.push({
        name,
        children: [],
        action: skill,
      });
    });

    setMenuTree(newMenuTree);
    setPointers([0]);
  }, [data]);

  useEffect(() => {
    function getElementByPointer(
      array: MenuTree,
      pointer: number[],
    ): MenuTreeNode[] {
      if (pointer.length === 0) {
        return array;
      }

      const index = pointer[0];
      if (index < 0 || index >= array.length) {
        throw new Error('Index out of bounds');
      }

      return getElementByPointer(
        array[index] as unknown as MenuTreeNode[],
        pointer.slice(1),
      );
    }

    const displayItems: DisplayItem[] = [];
    if (pointers.length === 1) {
      menuTree.forEach((menuItem: MenuTreeNode) => {
        displayItems.push({
          name: menuItem.name,
          level: menuItem.action?.level,
        });
      });
      setMenuFlat(displayItems);
      return;
    }

    const ancestorPointers = pointers.slice(0, -1);
    const menuItems = getElementByPointer(
      menuTree,
      ancestorPointers,
    ) as unknown as MenuTreeNode;

    if (menuItems?.children === undefined) {
      setPointers(ancestorPointers);
      return;
    }

    menuItems.children.forEach((menuItem: MenuTreeNode) => {
      displayItems.push({ name: menuItem.name, level: menuItem.action?.level });
    });

    setMenuFlat(displayItems);
  }, [pointers, menuTree]);

  useEffect(() => {
    const movePointers = (direction: string) => {
      if (direction === 'up') {
        const lastItem = pointers[pointers.length - 1];
        if (lastItem === 0) {
          return;
        }
        setPointers([...pointers.slice(0, -1), lastItem - 1]);
      } else if (direction === 'down') {
        if (pointers.length === 0) {
          setPointers([1]);
          return;
        }
        const lastItem = pointers[pointers.length - 1];
        if (lastItem === menuFlat.length - 1) {
          return;
        }
        setPointers([...pointers.slice(0, -1), lastItem + 1]);
      } else if (direction === 'back') {
        if (pointers.length === 1) {
          return;
        }
        setPointers([...pointers.slice(0, -1)]);
        return;
      } else if (direction === 'select') {
        setPointers([...pointers, 0]);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      event.preventDefault();
      switch (event.key) {
        case 'w':
          movePointers('up');
          break;
        case 's':
          movePointers('down');
          break;
        case 'a':
          movePointers('back');
          break;
        case 'd':
          movePointers('select');
          break;
        default:
          break;
      }
    };
    const handleWindowKeyUp = (event: KeyboardEvent) => handleKeyUp(event);

    document.addEventListener('keyup', handleWindowKeyUp);
    return () => {
      document.removeEventListener('keyup', handleWindowKeyUp);
    };
  }, [pointers, menuTree, menuFlat]);

  const levelFormat = (level: string | undefined) => {
    if (!level) {
      return '';
    }
    return level.replace('LV', 'Lv.');
  };

  const handleOnClick = (index: number) => {
    setPointers([...pointers.slice(0, -1), index, 0]);
  };

  const handleOnMouseOver = (index: number) => {
    const currentPointer = pointers[pointers.length - 1];
    if (currentPointer === index) {
      return;
    }

    setPointers([...pointers.slice(0, -1), index]);
  };

  return (
    <Spacer {...spacing}>
      <div
        className={`action-menu`}
        data-testid={testId ? `${testId}-root` : null}
      >
        <div className={`action-menu-outer-border`}>
          <div className={`action-menu-inner-border`}>
            <ul className={`menu-single`}>
              <li className={`link`}>Open Chest</li>
            </ul>
          </div>
        </div>

        <div className={`action-menu-outer-border mt--3`}>
          <div className={`action-menu-inner-border`}>
            <ul className={`menu${menuFlat.length > 4 && ` menu-scrollbar`}`}>
              {menuFlat.map((menuItem: DisplayItem, index: number) => {
                const isActive = index == pointers[pointers.length - 1];
                return (
                  <li
                    key={index}
                    className={`link ${isActive && 'link-active'}`}
                    onClick={() => handleOnClick(index)}
                    onMouseOver={() => handleOnMouseOver(index)}
                  >
                    {menuItem.name}
                    <span className={`level`}>
                      {levelFormat(menuItem.level)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </Spacer>
  );
};

export default ActionMenu;
