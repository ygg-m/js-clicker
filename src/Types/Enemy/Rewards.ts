export interface EnemyRewards {
  baseExperience: number;
  jobExperience: number;
  itemDrops: EnemyDrop[];
}

export interface EnemyDrop {
    itemID: number;
    chance: number;
  }