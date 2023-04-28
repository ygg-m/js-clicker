import { CharEquipment } from "./Equipment";
import { CharSkill } from "./Skills";
import { CharStats } from "./Stats";

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