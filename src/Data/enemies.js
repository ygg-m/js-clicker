import PoringIdle from "@/Assets/Enemy/Idle/1002.gif";

export const enemyList = [
  {
    id: 1002,
    name: "Poring",
    level: 1,
    race: "Plant",
    property: "Water 1",
    size: "Medium",
    maps: [
        {
            mapID: 0
            ammount: 80,
        }
    ]
    mode: [
        "Looter"
    ]
    sprites: {
      idle: PoringIdle,
      attack: PoringIdle,
      receiveDamage: PoringIdle,
      death: PoringIdle,
    },
    baseStats: {
      healthPoints: 50,
      hitRateNeededTo100: 22,
      fleeRateNeededTo95: 82,
      attackDelay: 1.87,
      attack: 8,
      defense: 0,
      magicDefense: 5,
    },
    mainStats: {
      strength: 1,
      inteligence: 0,
      agility: 1,
      dexterity: 1,
      vitality: 6,
      luck: 30,
    },
    rewards: {
      baseExperience: 60,
      jobExperience: 30,
      itemDrops: [
        {
          itemID: 512,
          chance: 10,
        },
        {
          itemID: 512,
          chance: 1.5,
        },
        {
          itemID: 619,
          chance: 0.2,
        },
        {
          itemID: 713,
          chance: 15,
        },
        {
          itemID: 909,
          chance: 70,
        },
        {
          itemID: 938,
          chance: 4,
        },
        {
          itemID: 1202,
          chance: 1,
        },
        {
          itemID: 4001,
          chance: 0.01,
        },
      ],
    },
    skills: [
        {
            
  id: 1,
  name: "Water Attribute Attack",
  type: "Passive",
  level: 1,
  levelTotal: 10,
  requiredlevel: null,
  requiredSkill: null,
  requiredItem: null,
  script: [
    ElementalAtk("Water")
  ],
        }
    ],
  },
];
