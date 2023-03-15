const units = document.getElementById('units');
const tenths = document.getElementById('tenths');
const hundredths = document.getElementById('hundredths');
const fieldCell = document.querySelector('.field__cell');
const startBtn = document.querySelector('.head__btn');
let cell = document.createElement('div');
let x = 0;
let y = 0;
let bombsArray = [];
let coordinateNum = [];

// field generator
function createField(bombs) {
  let cell = document.createElement('div');
  cell.className = 'field__cell';
  cell.setAttribute('coordinates', `${x},${y}`);
  const field = document.querySelector('.field');
  // TODO
  cell.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    clickRightBtn(event.target);
  });
  let cells = field.appendChild(cell);
  // coordinates
  let boardSize = 16;
  y++;
  if (y >= boardSize) {
    y = 0;
    x++;
  }
  coordinateNum.push(`${x},${y}`);
  document.addEventListener('click', function () {
    let coordinate = cell.getAttribute('coordinates');
    if (bombs.includes(coordinate)) {
      cell.style.backgroundPosition = '-85px -51px';
    } else {
      cell.style.backgroundPosition = '-17px -51px';
    }
  });
  return cells;
}
// bombs generator
for (let i = 0; i <= 40; i++) {
  bombsArray.push(`${random(0, 15)},${random(0, 15)}`);
}
//field
for (let i = 1; i <= 256; i++) {
  createField(bombsArray);
}
// restart and new game
const restart = () => {
  bombsArray = [];
  coordinateNum = [];
  units.style.backgroundPosition = '-126px 0';
  x = 0;
  y = 0;
  clearInterval(timer);
  timer = setInterval(tick, 1000);
  s = '0';
  t = '0';
  h = '0';
  stepUnits = '-14';
  stepTenths = '-14';
  stepHundr = '-14';
  let c = document.querySelector('.field');
  c.innerHTML = '';
  for (let i = 1; i <= 256; i++) {
    createField(bombsArray);
  }
  for (let i = 0; i <= 40; i++) {
    bombsArray.push(`${random(0, 15)},${random(0, 15)}`);
  }
};

// timer
let s = '0';
let t = '0';
let h = '0';
let stepUnits = '-14';
let stepTenths = '-14';
let stepHundr = '-14';
let timer;
function tick() {
  s = +s + 1;
  stepUnits = +stepUnits + 14;
  units.style.backgroundPosition = ` -${stepUnits}px 0`;
  if (s >= 10) {
    stepUnits = '-28';
    stepUnits = +stepUnits + 14;
    stepTenths = +stepTenths + 14;
    units.style.backgroundPosition = ` -${stepUnits}px 0`;
    tenths.style.backgroundPosition = `-${stepTenths}px 0`;
    s = '0';
    t = +t + 1;
  }

  if (t >= 10) {
    stepTenths = '-28';
    stepTenths = +stepTenths + 14;
    tenths.style.backgroundPosition = `-${stepTenths}px 0`;
    stepHundr = +stepHundr + 14;
    units.style.backgroundPosition = `-${stepUnits}px 0`;
    tenths.style.backgroundPosition = `-${stepTenths}px 0`;
    hundredths.style.backgroundPosition = `-${stepHundr}px 0`;
    s = '0';
    t = '0';
    h = +h + 1;
  }

  if (h >= 10) {
    units.style.backgroundPosition = '-112px 0';
    tenths.style.backgroundPosition = '-112px 0';
    hundredths.style.backgroundPosition = '-112px 0';
  }
}

// bombs generator
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// flag clicl
function clickRightBtn(elem) {
  if (
    !elem.classList.contains('field__cell_flag') &&
    !elem.classList.contains('field__cell_question')
  ) {
    elem.classList.add('field__cell_flag');
  } else if (
    elem.classList.contains('field__cell_flag') &&
    !elem.classList.contains('field__cell_question')
  ) {
    elem.classList.remove('field__cell_flag');
    elem.classList.add('field__cell_question');
  } else if (
    !elem.classList.contains('field__cell_flag') &&
    elem.classList.contains('field__cell_question')
  ) {
    elem.classList.remove('field__cell_question');
  }
}
startBtn.addEventListener('click', () => {
  restart();
});
