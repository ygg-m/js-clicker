export interface CurrentTypes {
  enemy: {
    id: number;
    healthPoints: number;
  };
  map: { id: number; enemiesDefeated: number };
  character: Character;
}

export interface ClickTypes {
  power: number;
}

export interface CountTypes {
  clicks: number;
  points: number;
}

export interface Character {
  name: string;
  job: number;
  baseLevel: number;
  baseExp: number;
  jobLevel: number;
  jobExp: number;
  equipment: CharEquipment;
  stats: CharStats;
  statPoints: number;
  skills: CharSkill[];
  skillPoints: number;
}

export interface CharEquipment {
  headTop: ItemTypes | null;
  headMid: ItemTypes | null;
  headBottom: ItemTypes | null;
  body: ItemTypes | null;
  handR: ItemTypes | null;
  handL: ItemTypes | null;
  robe: ItemTypes | null;
  shoes: ItemTypes | null;
  accessoryR: ItemTypes | null;
  accessoryL: ItemTypes | null;
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
    bonus: {
      totalHealthPoints: number,
      totalSpiritPoints: number,
      totalWeight: number,
    }
  };
  mainStats: {
    strength: number;
    agility: number;
    vitality: number;
    intelligence: number;
    dexterity: number;
    luck: number;
    bonus: {
      strength: number;
      agility: number;
      vitality: number;
      intelligence: number;
      dexterity: number;
      luck: number;
    }
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
    bonus: {
      attack: number;
      magicAttack: number;
      hitRate: number;
      critRate: number;
      defense: number;
      magicDefense: number;
      fleeRate: number;
      attackSpeed: number;
    }
  };
}

export interface CharSkill {
  skillID: number;
  acquiredLevel: number;
}

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

export interface ItemTypes {
  id: number,
  portrait: string,
  sprite: string,
  name: string,
  description: string,
  type: string,
  subtype: string,
  location: string,
  attack: number,
  defense: number,
  property: string,
  weight: number,
  weaponLevel: number,
  requiresLevel: number,
  buy: number,
  sell: number,
  usableBy: string[],
  script: Function[],
}

export interface EnemyTypes {
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
  skills: EnemySkill[];
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
  itemID: number;
  chance: number;
}

export interface EnemySkill {
  skillID: number;
  level: number;
}

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
  baseSkills: CharSkill[],
}