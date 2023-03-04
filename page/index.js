const sec = document.getElementById('units');
const ten = document.getElementById('tenths');
const hundr = document.getElementById('hundredths');
// Поле клеток
function createField() {
  const cell = document.createElement('div');
  cell.className = 'field__cell';
  const field = document.querySelector('.field');
  return field.appendChild(cell);
}

for (let i = 1; i <= 256; i++) {
  createField();
}
// timer
let s = '0';
let t = '0';
let h = '0';
let stepUnits = '-14';
let stepTenths = '-14';
let stepHundr = '-14';

setInterval(function () {
  s = +s + 1;
  stepUnits = +stepUnits + 14;
  sec.style.backgroundPosition = ` -${stepUnits}px 0`;
  if (s >= 10) {
    stepUnits = '-28';
    stepUnits = +stepUnits + 14;
    stepTenths = +stepTenths + 14;
    sec.style.backgroundPosition = ` -${stepUnits}px 0`;
    ten.style.backgroundPosition = `-${stepTenths}px 0`;
    s = '0';
    t = +t + 1;
  }

  if (t >= 10) {
    stepTenths = '-28';
    stepTenths = +stepTenths + 14;
    ten.style.backgroundPosition = `-${stepTenths}px 0`;
    stepHundr = +stepHundr + 14;
    sec.style.backgroundPosition = `-${stepUnits}px 0`;
    ten.style.backgroundPosition = `-${stepTenths}px 0`;
    hundr.style.backgroundPosition = `-${stepHundr}px 0`;
    s = '0';
    t = '0';
    h = +h + 1;
  }

  if (h >= 10) {
    sec.style.backgroundPosition = '-112px 0';
    ten.style.backgroundPosition = '-112px 0';
    hundr.style.backgroundPosition = '-112px 0';
  }
}, 1000);
