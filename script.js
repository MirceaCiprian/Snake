let betAmount, winAmount, balance;

const items = [
    '🍭',
    '❌',
    '⛄️',
    '🦄',
    '🍌',
    '💩',
    '👻',
    '😻',
    '💵',
    '🤡',    
    '🦖',
    '🍎',
    '😂',
    '🖕',
    '❓'
]; // 14 items

function spinReels() {
  let fixedGame;
  let item1, item2, item3;

  if(document.getElementById("fixed").checked == true)
  {
    fixedGame = 1;
  }else {
    fixedGame = 0;
  }

  betAmount = (Number)(document.getElementById("betAmount").value);
  balance = (Number)(document.getElementById("balanceAmount").value);

  if(betAmount > balance) {
    document.getElementById("userInfo").innerText = "Insufficient funds!";
  }
  else if(betAmount < 1) {
    document.getElementById("userInfo").innerText = "Invalid bet value!";
  }
  else {
    document.getElementById("userInfo").innerText = "Good luck!";
    if(fixedGame) {
      item1 = getRandomInt(13);
      item2 = item1;
      item3 = item1;
    }
    else {
      item1 = getRandomInt(13);
      item2 = getRandomInt(13);
      item3 = getRandomInt(13);
    }
    document.getElementById("1").innerHTML = items[item1];
    document.getElementById("2").innerHTML = items[item2];
    document.getElementById("3").innerHTML = items[item3];
  
    if((item1 === item2) && (item2 === item3)) {
      winAmount = betAmount * 10;
      balance = balance + winAmount;
      document.getElementById("winAmount").value = winAmount;
      document.getElementById("balanceAmount").value = balance;
    }
    else {
      balance = balance - betAmount;
      document.getElementById("winAmount").value = 0;
      document.getElementById("balanceAmount").value = balance;
    }
  }
}

function fundAccount() {
  betAmount = 20;
  winAmount = 0;
  balance = 20000;
  document.getElementById("betAmount").value = betAmount;
  document.getElementById("winAmount").value = winAmount;
  document.getElementById("balanceAmount").value = balance;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}