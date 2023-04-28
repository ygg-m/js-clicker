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