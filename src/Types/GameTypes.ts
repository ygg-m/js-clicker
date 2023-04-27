export interface CurrentTypes {
  enemy: {
    id: number;
    healthPoints: number;
  };
  map: { id: number; enemiesDefeated: number };
}

export const CurrentDefault = {
  enemy: {
    id: 1002,
    healthPoints: 10,
  },
  map: { id: 0, enemiesDefeated: 0 },
};

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
  name: string;
  job: CharJob;
  baseLevel: number;
  baseExp: number;
  jobLevel: number;
  jobExp: number;
  equipment: CharEquipment;
  stats: CharStats;
  statPoints: number;
  skills: CharSkills;
  skillPoints: number;
}

export interface CharJob {
  name: string;
  statsBonus: {
    strenght: number;
    agility: number;
    vitality: number;
    intelligence: number;
    dexterity: number;
    luck: number;
  };
  baseSkills: [];
}

export interface CharEquipment {
  headTop: Item;
  headMid: Item;
  headBottom: Item;
  body: Item;
  handR: Item;
  handL: Item;
  robe: Item;
  shoes: Item;
  accessoryR: Item;
  accessoryL: Item;
}

export interface CharStats {
  baseStats: {
    healthPoints: number;
    totalHealthPoints: number;
    spiritPoints: number;
    totalSpiritPoints: number;
    weight: number;
    totalWeight: number;
    zeny: number;
  };
  mainStats: {
    strenght: number;
    agility: number;
    vitality: number;
    intelligence: number;
    dexterity: number;
    luck: number;
  };
  requiredPointsToLevel: {
    strenght: number;
    agility: number;
    vitality: number;
    intelligence: number;
    dexterity: number;
    luck: number;
  };
  sideStats: {
    attack: number;
    magicAttack: number;
    hitRate: number;
    critRate: number;
    defense: number;
    magicDefense: number;
    fleeRate: number;
    attackSpeed: number;
  };
}

export interface CharSkills {
  skillList: Skill[];
  aquiredSkills: Skill[];
}

export interface Skill {
  id: number;
  name: string;
  type: string;
  level: number;
  levelTotal: number;
  requiredlevel: number;
  requiredSkill: Skill;
  requiredItem: Item;
  script: Function[];
}

export interface Item {
  id: number;
  name: string;
  type: string;
  equipSlot: string;
  script: Function[];
}

export interface Enemy {
  id: number;
  name: string;
  level: number;
  race: string;
  property: string;
  size: string;
  sprites: {
    idle: string;
    attack: string;
    receiveDamage: string;
    death: string;
  };
  stats: EnemyStats;
  rewards: {
    baseExperience: number;
    jobExperience: number;
    itemDrops: EnemyDrop[];
  };
  skills: Skill[];
}

export interface EnemyStats {
  baseStats: {
    healthPoints: number;
    hitRateNeededTo100: number;
    fleeRateNeededTo95: number;
    attackDelay: number;
    attack: number;
    defense: number;
    magicDefense: number;
  };
  mainStats: {
    strength: number;
    inteligence: number;
    agility: number;
    dexterity: number;
    vitality: number;
    luck: number;
  };
}

export interface EnemyDrop {
  itemID: Item;
  chance: number;
}
