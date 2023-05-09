export const jobList = [
    {
        id: 0,
        name: "Novice",
        statsBonus: {
          strength: 0,
          agility: 0,
          vitality: 0,
          intelligence: 0,
          dexterity: 0,
          luck: 0,
        },
        attackSpeed: {
          baseValue: 156,
          equipModifier: [
            {
              id: 20,
              name: "Shield",
              value: -10,
            },
            {
              id: 0,
              name: "Dagger",
              value: -15,
            },
            {
              id: 1,
              name: "Sword",
              value: -17,
            },
            {
              id: 3,
              name: "Axe",
              value: -10,
            },
            {
              id: 4,
              name: "Mace",
              value: -10,
            },
            {
              id: 5,
              name: "Rod",
              value: -25,
            },
          ],
          potion: {
            concentration: true,
            awakening: false,
            berserk: false,
          }
        },
        baseHP: [0, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200, 205, 210, 215, 220, 225, 230, 235, 240, 245, 250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320, 325, 330, 335, 340, 345, 350, 355, 360, 365, 370, 375, 380, 385, 390, 395, 400, 405, 410, 415, 420, 425, 430, 435, 440, 445, 450, 455, 460, 465, 470, 475, 480, 485, 490, 495, 500, 505, 510, 515, 520, 525, 530],
        baseSkills: [],
      }
]