var playerExp = 0; // xp do jogador
var bonusPlus = 1; // modificador de bonus
var bonusMult = 1; // modificador de bonus
var totalBonus = 1; // total de bonus

var cursorCost = 15; // custo do cursor
var cursors = 0; // número de cursores

var monster = 'poring'; // nome do monstro
var monsterState = 'normal' // estado do monstro

var autoPlayPower = 0;
var autoPlayPowerCost = 50;

initializer();

function initializer() {
  autoPlayInitializer();
}

function updateExp(amount) {
    playerExp += amount;
    updatePlayerExp();
}

function updatePlayerExp(){
  document.getElementById("playerExp").innerHTML = playerExp;
}

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
  if (playerExp >= cursorCost) {
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
  if (playerExp >= autoPlayPowerCost) {
    updateExp(-autoPlayPowerCost);
    updateAutoPlayCost();
  }
}

function hitMonster(amount) {
  updateExp(amount);
  changeMonsterAnimation('hit');

  setTimeout(function () {
    changeMonsterAnimation('normal');
  }, 100);
}

function changeMonsterAnimation(state) {
  monsterState = state;
  document.getElementById("monsterImg").setAttribute("src", "images/monster/" + monster + "-" + state + ".gif")
}

function autoPlayInitializer () {
  setInterval (function() {
    playerExp += autoPlayPower;
    updatePlayerExp();
  }, 1000); // 1000ms = 1 sec
}
