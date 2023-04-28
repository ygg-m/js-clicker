import { Character } from "./Character/Base";

export interface CurrentTypes {
  character: Character;
  enemy: {
    id: number;
    healthPoints: number;
  };
  map: {
    id: number;
    enemiesDefeated: number
  };
}

export interface ClickTypes {
  power: number;
}

export interface CountTypes {
  clicks: number;
  points: number;
}
