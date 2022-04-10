var bonusPlus = 1; // modificador de bonus
var bonusMult = 1; // modificador de bonus
var totalBonus = 1; // total de bonus

var cursorCost = 15; // custo do cursor
var cursors = 0; // número de cursores

var autoPlayPower = 0;
var autoPlayPowerCost = 50;

// player ----------------------------------
var playerName = 'Random Adventurer';
var playerJob = 'Swordman';

var playerLevel = 0
var playerExperience = 0;
var playerExperienceToNextLevel = 50
var playerZeny = 0;

var playerHealthPoint = 100; var playerTotalHealthPoint = 100;
var playerSpecialPoint = 50; var playerTotalSpecialPoint = 50;

var playerStrenght = 5;
var playerAgility = 5;
var playerVitality = 5;
var playerInteligence = 5;
var playerDexterity = 10;
var playerLuck = 5;

var playerStrenghtBonus = equipStrenghtBonus + skillStrenghtBonus + itemStrenghtBonus;
var playerAgilityBonus = equipAgilityBonus + skillAgilityBonus + itemAgilityBonus;
var playerVitalityBonus = equipVitalityBonus + skillVitalityBonus + itemVitalityBonus;
var playerInteligenceBonus = equipInteligenceBonus + skillInteligenceBonus + itemInteligenceBonus;
var playerDexterityBonus = equipDexterityBonus + skillDexterityBonus + itemDexterityBonus;
var playerLuckBonus = equipLuckBonus + skillLuckBonus + itemLuckBonus;

var playerTotalStrenght = playerStrenght + playerStrenghtBonus;
var playerTotalAgility = playerAgility + playerAgilityBonus;
var playerTotalVitality = playerVitality + playerVitalityBonus;
var playerTotalInteligence = playerInteligence + playerInteligenceBonus;
var playerTotalDexterity = playerDexterity + playerDexterityBonus;
var playerTotalLuck = playerLuck + playerLuckBonus;

var playerAttack = playerTotalStrenght + (playerTotalDexterity / 5) + (playerTotalLuck / 10) + equipAttack + equipAttackBonus + skillAttackBonus + itemAttackBonus;
var playerMagickAttack = (playerTotalInteligence * 2) + (playerTotalLuck / 10) + equipMagickAttackBonus + skillMagickAttackBonus + itemMagickAttackBonus;
var playerHit = playerTotalDexterity + (playerTotalLuck / 10) + equipHitBonus + skillHitBonus + itemHitBonus;
var playerCrit = Math.round(Math.random() * (playerTotalLuck + equipLuckBonus + skillLuckBonus + itemLuckBonus));
var playerDefense = (playerTotalVitality / 5) + (playerTotalLuck / 10) + equipDefense + equipDefenseBonus + skillDefenseBonus + itemDefenseBonus;
var playerMagickDefense = (playerTotalInteligence / 8) + (playerTotalLuck / 10) + equipMagickDefenseBonus + skillMagickDefenseBonus + itemMagickDefenseBonus;
var playerFlee = playerTotalAgility + (playerTotalLuck / 5) + equipFleeBonus + skillFleeBonus + itemFleeBonus;
var playerAttackSpeed = ((playerTotalAgility + (playerTotalLuck / 10) + equipAttackSpeedBonus + skillAttackSpeedBonus + itemAttackSpeedBonus) * 100);

// equipped
var equipAttack = 2;
var equipShield = 1;
var equipArmor = 3;
var equipGarment = 1;
var equipShoes = 1;
var equipDefense = equipDefense + equipArmor + equipGarment + equipShoes;

// Bonuss
var equipStrenghtBonus = 0;
var equipAgilityBonus = 0;
var equipVitalityBonus = 0;
var equipInteligenceBonus = 0;
var equipDexterityBonus = 0;
var equipLuckBonus = 0;

var equipAttackBonus = 0;
var equipMagickAttackBonus = 0;
var equipHitBonus = 0;
var equipCritBonus = 0;
var equipDefenseBonus = 0;
var equipMagickDefenseBonus = 0;
var equipFleeBonus = 0;
var equipAttackSpeedBonus = 0;

var skillStrenghtBonus = 0;
var skillAgilityBonus = 0;
var skillVitalityBonus = 0;
var skillInteligenceBonus = 0;
var skillDexterityBonus = 0;
var skillLuckBonus = 0;

var skillAttackBonus = 0;
var skillMagickAttackBonus = 0;
var skillHitBonus = 0;
var skillCritBonus = 0;
var skillDefenseBonus = 0;
var skillMagickDefenseBonus = 0;
var skillFleeBonus = 0;
var skillAttackSpeedBonus = 0;

var itemStrenghtBonus = 0;
var itemAgilityBonus = 0;
var itemVitalityBonus = 0;
var itemInteligenceBonus = 0;
var itemDexterityBonus = 0;
var itemLuckBonus = 0;

var itemAttackBonus = 0;
var itemMagickAttackBonus = 0;
var itemHitBonus = 0;
var itemCritBonus = 0;
var itemDefenseBonus = 0;
var itemMagickDefenseBonus = 0;
var itemFleeBonus = 0;
var itemAttackSpeedBonus = 0;


// itens
var playerInventoryItem1 = {
  name:'Apple',
  quantity:2,
  description:'A round, edible fruit that, when eaten once a day, keeps the doctor away.',
  sellPrice: 1,
  type: 'consumable',
  effect: playerHealthPoint += (playerTotalHealthPoint * .08) // appleEffect();
}

var playerInventoryItem2 = {
  name:"Meat",
  quantity:2,
  description:"A leg of meat that's been cooked to near perfection.",
  sellPrice: 3,
  type: 'consumable',
  effect: playerHealthPoint += (playerTotalHealthPoint * .15) // meatEffect();
}

var playerInventoryItem3 = {
  name:"Red Potion",
  quantity:1,
  description:"A potion made from ground Red Herbs that restores HP.",
  sellPrice: 5,
  type: 'consumable',
  effect: playerHealthPoint += (playerTotalHealthPoint * .25) // redPotionEffect();
}

var playerInventoryItem4 = {
  name:"Blue Potion",
  quantity:1,
  description:"A potion made from ground Blue Herbs that restores 25% SP.",
  sellPrice: 10,
  type: 'consumable',
  effect: playerSpecialPoint += (playerTotalSpecialPoint * .25) // bluePotionEffect();
}

var playerInventoryItem5 = {
  name:"Green Potion",
  quantity:1,
  description:"A potion made from ground Green Herbs that restores Health.",
  sellPrice: 7,
  type: 'consumable',
  effect: curePoison()
}

// equipment
var playerInventoryEquip1 = {
  name:"Adventurer's Suit",
  quantity:1,
  description:"A light, comfortable suit made just for young adventurers.",
  sellPrice: 10,
  type: 'body',
  effect: equipDefense += 3
}

var playerInventoryEquip2 = {
  name:"Knife",
  quantity:1,
  description:"A simple knife.",
  sellPrice: 5,
  type: 'one-hand',
  effect: equipAttack += 3
}

var playerInventoryEquip3 = {
  name:"Muffler",
  quantity:1,
  description:"A warm scarf that is worn around the neck and shoulders.",
  sellPrice: 10,
  type: 'garment',
  effect: equipDefense += 3
}

// etc
var playerInventoryEtc1 = {
  name:"Jellopy",
  quantity:6,
  description:"A small crystallization created by some monsters.",
  sellPrice: 3,
  type: 'miscellaneous',
  effect: ''
}

var playerInventoryEtc2 = {
  name:"Garlet",
  quantity:1,
  description:"A small crystallization created by some monsters.",
  sellPrice: 5,
  type: 'miscellaneous',
  effect: ''
}

var playerInventoryEtc3 = {
  name:"Sticky Mucus",
  quantity:3,
  description:"Mysteriously sticky liquid.",
  sellPrice: 8,
  type: 'miscellaneous',
  effect: ''
}

var playerInventoryEtc4 = {
  name:"Empty Bottle",
  quantity:2,
  description:"An empty bottle that can be used for carrying liquid.",
  sellPrice: 3,
  type: 'miscellaneous',
  effect: ''
}

var playerInventoryEtc5 = {
  name:"Poring Card",
  quantity:1,
  description:"A small crystallization created by some monsters.",
  sellPrice: 10,
  type: 'card',
  effect: playerLuck += 3
}
// --------------------------------------------

// monster
var monsterName = 'poring';
var monsterLevel = 1;
var monsterState = 'normal';
var monsterElement = 'water';
var monsterHealthPoint = 20;
var monsterSpecialPoint = 5;
var monsterAttackDelay = 1870;
var monsterAttack = 5;
var monsterDefense = 0 * .01 // percentage
var monsterDodge = 10;
var monsterExp = 5
var monsterDrop = [
  'apple',
  'unriple apple',
  'empty bottle',
  'jellopy',
  'sticky mucus',
  'knife',
  'poring card'
]


initializer();

function initializer() {
  autoPlayInitializer();
}

function updateExp(amount) {
    playerExperience += amount;
    updateplayerExperience();
}

function updateplayerExperience(){
  document.getElementById("playerExperience").innerHTML = playerExperience;
}

// atualiza o HP do monstro
// function updateMonsterHealthPoint() {
//   document.getElementById("MonsterHealthPoint").innerHTML = monsterHealthPoint;
// }

function updateElementCost(elementName, cost) {
  document.getElementById(elementName).innerHTML = cost;
}

function updateCursorCost() {
  bonusMult += 1;
  cursorCost = Math.round(cursorCost * 1.25);
  totalBonus = bonusMult * bonusPlus;
  updateElementCost("cursorCost", cursorCost);
}

function buyCursor() {
  if (playerExperience >= cursorCost) {
    updateExp(-cursorCost);
    updateCursorCost();
  }
}

function updateAutoPlayCost() {
  autoPlayPowerCost = Math.round(autoPlayPowerCost * 1.25);
  autoPlayPower = autoPlayPower + 1;
  updateElementCost("autoPlayPowerCost", autoPlayPowerCost);
}

function buyAutoPlay() {
  if (playerExperience >= autoPlayPowerCost) {
    updateExp(-autoPlayPowerCost);
    updateAutoPlayCost();
  }
}

function checkHit() {
  if (playerHit > monsterDodge) {
  return true;
  }
}

function hitMonster(amount) {
  let playerAttackRandom = Math.round( Math.random() * ( Math.round( playerAttack * Math.random() ) ) );

  checkHit();

  if (checkHit() === true) {
    monsterHealthPoint -= playerAttackRandom - monsterDefense;

    changeMonsterAnimation('hit');

    setTimeout(function () {
      changeMonsterAnimation('normal');
    }, 100);
  }

}

function changeMonsterAnimation(state) {
  monsterState = state;
  document.getElementById("monsterImg").setAttribute("src", "images/monster/" + monsterName + "-" + state + ".gif")
}

function autoPlayInitializer () {
  setInterval (function() {
    playerExperience += autoPlayPower;
    updateplayerExperience();
  }, 1000); // 1000ms = 1 sec
}
