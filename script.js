var playerExp = 0; // xp do jogador
var bonusPlus = 1; // modificador de bonus
var bonusMult = 1; // modificador de bonus
var totalBonus = 1; // total de bonus

var cursorCost = 15; // custo do cursor
var cursors = 0; // número de cursores

var monster = 'poring'; // nome do monstro
var monsterState = 'normal' // estado do monstro

var autoPlay = false; // ativa o autoplay
var autoPlayPower = 0;
var autoPlayPowerCost = 50;



function buyCursor() {
  if (playerExp >= cursorCost) {

    playerExp = playerExp - cursorCost;
    bonusMult = bonusMult + 1;
    cursorCost = Math.round(cursorCost * 1.25);
    totalBonus = bonusMult * bonusPlus;

    document.getElementById("playerExp").innerHTML = playerExp;
    document.getElementById("cursorCost").innerHTML = cursorCost;

  } else {}
}

function buyAutoPlay() {
  if (playerExp >= autoPlayPowerCost) {
    if (autoPlay === false) {
      autoPlay = true;

      playerExp = playerExp - autoPlayPowerCost;
      autoPlayPowerCost = Math.round(autoPlayPowerCost * 1.25);
      autoPlayPower = autoPlayPower + 1;

      document.getElementById("playerExp").innerHTML = playerExp;
      document.getElementById("autoPlayButton").innerHTML = 'Power-Up Autoplay [<span id="autoPlayPowerCost">' + autoPlayPowerCost + '</span>]';

      setInterval (function() {
        playerExp = playerExp + autoPlayPower;
        document.getElementById("playerExp").innerHTML = playerExp;
      }, 1000); // 1000ms = 1 sec

    } else {
      playerExp = playerExp - autoPlayPowerCost;
      autoPlayPowerCost = Math.round(autoPlayPowerCost * 1.25);
      autoPlayPower = autoPlayPower + 1;

      document.getElementById("playerExp").innerHTML = playerExp;
      document.getElementById("autoPlayPowerCost").innerHTML = autoPlayPowerCost;
    }
  } else {}
}


function addToPlayerExp(amount) {
  playerExp = playerExp + amount;
  monsterState = 'hit';
  document.getElementById("monsterImg").setAttribute("src", "images/" + monster + "-" + monsterState + ".gif")
  document.getElementById("playerExp").innerHTML = playerExp;

  setTimeout(monsterAnimationNormal(), 1000);
}

function monsterAnimationNormal() {
  monsterState = 'normal'
  document.getElementById("monsterImg").setAttribute("src", "images/" + monster + "-" + monsterState + ".gif")
}
