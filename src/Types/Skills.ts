import { ItemTypes } from "./Item";

export interface Skill {
    id: number;
    name: string;
    type: string;
    level: number;
    levelTotal: number;
    requiredlevel: number;
    requiredSkill: Skill;
    requiredItem: ItemTypes;
    script: Function[];
  }

export interface SkillListItem {
    skillID: number;
    acquiredLevel: number;
  }
