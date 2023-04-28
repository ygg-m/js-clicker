import { SkillListItem } from "./Skills";

export interface JobData {
    id: number,
    name: string,
    statsBonus: {
      strength: number,
      agility: number,
      vitality: number,
      intelligence: number,
      dexterity: number,
      luck: number,
    },
    baseSkills: SkillListItem[],
  }