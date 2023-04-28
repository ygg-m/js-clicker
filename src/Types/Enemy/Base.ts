import { EnemyRewards } from "./Rewards";
import { EnemySkill } from "./Skills";
import { EnemyStats } from "./Stats";

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
    rewards: EnemyRewards;
    skills: EnemySkill[];
  }