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

setInterval(function () {
  s = +s + 1;
  if (s >= 10) {
    s = '0';
    t = +t + 1;
  }

  if (t >= 10) {
    s = '0';
    t = '0';
    h = +h + 1;
  }

  if (h >= 10) {
    s = '9';
    t = '9';
    h = '9';
  }
  sec.innerText = s;
  ten.innerText = t;
  hundr.innerText = h;
}, 1000);
