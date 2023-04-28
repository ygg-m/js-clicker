import { Character } from "./Character/Base";

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
