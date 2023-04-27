export interface ClickTypes {
  power: number;
}

export const ClickDefault = {
  power: 1,
};

export interface CountTypes {
  clicks: number;
  points: number;
}

export const CountDefault = {
  clicks: 0,
  points: 0,
};

export interface Character {
  name: string,
  job: CharJob,
  baseLevel: number,
  baseExp: number,
  jobLevel: number,
  jobExp: number,
  healthPoints: number,
  spiritPoints: number,
  equipment: CharEquipment,
  stats: CharStats,
  statPoints: number,
  skills: CharSkills,
  skillPoints: number,
}

export interface CharJob {
  name: string,
  statsBonus: {
    strenght: number,
    agility: number,
    vitality: number,
    intelligence: number,
    dexterity: number,
    luck: number
  },
  baseSkills: []
}

export interface CharEquipment {
  headTop: Item,
  headMid: Item,
  headBottom: Item,
  body: Item,
  handR: Item,
  handL: Item,
  robe: Item,
  shoes: Item,
  accessoryR: Item,
  accessoryL: Item,
}

export interface CharStats {
  mainStats: {
    strenght: number,
    agility: number,
    vitality: number,
    intelligence: number,
    dexterity: number,
    luck: number
  },
  requiredPointsToLevel: {
    strenght: number,
    agility: number,
    vitality: number,
    intelligence: number,
    dexterity: number,
    luck: number
  }
  sideStats: {
    attack: number,
    magicAttack: number,
    hitRate: number,
    critRate: number,
    defense: number,
    magicDefense: number,
    fleeRate: number,
    attackSpeed: number,
  }
}

export interface CharSkills {
  skillList: Skill[]
  aquiredSkills: Skill[]
}

export interface Skill {
  id: number,
  name: string,
  level: number,
  levelTotal: number,
  requiredlevel: number,
  requiredSkill: Skill,
  requiredItem: Item
}

export interface Item {
  id: number,
  name: string,
  type: string,
  equipSlot: string,
  script: Function[]
}