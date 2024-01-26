let slotList = ['', '', '', '', '', ''];
let correctList = ['w', 'o', 'r', 'd', 'l', 'e'];

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(250, 248, 241);
  for (let i = 0; i < slotList.length; i++) {
    let x = 150 + i * 60;
    let y = 100;
    noFill();
    stroke(186, 66, 43);
    strokeWeight(3);

    if (isContain(slotList[i]) == true) {
      fill(237, 209, 118);
    }

    if (slotList[i] == correctList[i]) {
      fill(232, 187, 83);
    }
    rect(x, y, 50, 50);

    textAlign(CENTER, CENTER);
    textSize(32);
    text(slotList[i].toUpperCase(), x + 25, y + 25);
  }

  if (isClear() == true) {
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(228, 168, 80);
    text('CLEAR', 300, 350);
  }
}

function keyPressed() {
  if(isAcceptKey(key)) {
    for (let i = 0; i < slotList.length; i++) {
      if (slotList[i] == '') {
        slotList[i] = key;
        break;
      }
    }
  }
  if (keyCode === ENTER) {
    for (let i = 0; i < slotList.length; i++) {
      slotList[i] = '';
    }
  }
  if (keyCode === BACKSPACE || keyCode === DELETE) {
    for (let i = 0; i < slotList.length; i++) {
      if (slotList[(slotList.length - 1) - i] != '') {
        slotList[(slotList.length - 1) - i] = '';
        break;
      }
    }
  }
}

function isAcceptKey(k){
  let letter = "abcdefghijklmnopqrstuvwxyz".split('');
  for (let i = 0; i < letter.length; i++) {
    if (k == letter[i]) {
      return true;
    }
  }
  return false;
}

function isClear() {
  for (let i = 0; i < slotList.length; i++) {
    if (slotList[i] != correctList[i]) {
      return false;
    }
  }
  return true;
}

function isContain(str) {
  for (let i = 0; i < slotList.length; i++) {
    if (correctList[i] == str) {
      return true;
    }
  }
  return false;
}