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