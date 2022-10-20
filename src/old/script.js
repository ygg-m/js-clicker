var bonusPlus = 1; // modificador de bonus
var bonusMult = 1; // modificador de bonus
var totalBonus = 1; // total de bonus

var cursorCost = 15; // custo do cursor
var cursors = 0; // número de cursores

var autoPlayPower = 1;
var autoPlayPowerCost = 50;


var currentMonster;
var player = {
  "name": "Random Adventurer",
  "job": "Swordsman",
  "level": 1,
  "exp": 0,
  "zeny": 100,
  "currentHP": 100,
  "maxHP": 100,
  "currentSP": 50,
  "maxSP": 50,
  "stats": {
    "strength": 10,
    "agility": 10,
    "vitality": 10,
    "intelligence": 10,
    "dexterity": 10,
    "luck": 10
  }
}
var expTable = [0, 550, 900, 1500, 2200, 3200, 3800, 4200, 4550, 5000, 5500,
  6000, 6100, 6350, 6700, 7350, 8000, 8400, 8800, 9200, 9700, 10300, 11000,
  11800, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000,
  23200, 24000, 26000, 27500, 29000, 30000, 31500, 33000, 34000, 36000, 37500,
  38000, 40000, 42000, 44500, 47000, 49000, 51000, 53000, 55000, 59000, 61500,
  61500, 63000, 65000, 67000, 69000, 70000, 73000, 77000, 80000, 84000, 88000,
  91000, 95000, 110000, 128000, 140000, 155000, 163000, 170000, 180000, 188000,
  195000, 200000, 230000, 260000, 300000, 350000, 400000, 480000, 550000, 600000,
  680000, 750000, 900000, 1000000, 1200000, 1500000, 1800000, 2100000, 2400000,
  2800000, 3300000, 4000000, 99999999];

var monsterDatabase = [
    {
  "id": 1002,
  "name": "Poring",
  "level": 1,
  "element": "Water",
  "hp": 20,
  "sp": 5,
  "attackDelay": 1870,
  "attack": 5,
  "defence": 0,
  "dodge": 10,
  "exp": 150,
  "dropList": [
    //ids de itens aqui dentro
  ]
},
  {
    "id": 1184,
    "name": "Fabre",
    "level": 1,
    "element": "Earth",
    "hp": 30,
    "sp": 5,
    "attackDelay": 1870,
    "attack": 6,
    "defence": 2,
    "dodge": 8,
    "exp": 181,
    "dropList": [
        //ids de itens aqui dentro
    ]
  },
]

// --------------------------------------------

initializer();

function initializer() {
  updatePlayerElements();
  loadNewMonster();
  autoPlayInitializer();
}

function getMonster (id) {
  return monsterDatabase.find(monster => monster.id === id);
}

function loadCurrentMonster (id) {
  let monster = getMonster(id);

  currentMonster = {
    ...monster,
    "currentHP": monster.hp};
}

function updateExp(amount) {
    let currentMaxExp = getCurrentNextLevelExp();

    player.exp += amount;

    if (player.exp >= currentMaxExp) {
      player.exp -= currentMaxExp;
      player.level++;
    }

    updatePlayerElements();
}

function updatePlayerExperience() {
  document.getElementById("playerExperience").innerHTML = player.exp;
}

function getCurrentNextLevelExp() {
  return expTable[player.level];
}

function hitMonster() {
    let playerAttackRandom = Math.round( Math.random() * ( Math.round( player.stats.strength * Math.random() ) ) );


    if(playerAttackRandom <= 0){
      document.getElementById("logTextBox").innerHTML = "Miss!";
    } else {
      document.getElementById("logTextBox").innerHTML = "Hit for " + playerAttackRandom;
    }
    currentMonster.currentHP -= playerAttackRandom;

    changeMonsterAnimation('hit');

    setTimeout(function () {
      changeMonsterAnimation('normal');
    }, 100);

    if(currentMonster.currentHP <= 0) {
      updateExp(currentMonster.exp);
      loadNewMonster();
    }
    updateMonsterCurrentHP();
}

function updateMonsterCurrentHP () {
  document.getElementById("monsterHealthPoint").innerHTML = currentMonster.currentHP;
}

function loadNewMonster(){
  //vai carregar sempre o mesmo, tem que mudar isso depois;
  loadCurrentMonster(1002);
  updateMonsterElements();

}

function changeMonsterAnimation(state) {
  document.getElementById("monsterImg").setAttribute("src", "images/monster/" + currentMonster.name + "-" + state + ".gif")
}

function updatePlayerElements() {
  updatePlayerExperience();
  document.getElementById("playerExperienceToNextLevel").innerHTML = getCurrentNextLevelExp();
  document.getElementById("playerLevel").innerHTML = player.level;
}

function updateMonsterElements() {
  document.getElementById("monsterName").innerHTML = currentMonster.name;
  document.getElementById("monsterLevel").innerHTML = currentMonster.level;
  updateMonsterCurrentHP();
  document.getElementById("monsterTotalHealthPoint").innerHTML = currentMonster.hp;
}

function autoPlayInitializer () {
  setInterval (function() {
    hitMonster();
  }, 1000); // 1000ms = 1 sec
}
