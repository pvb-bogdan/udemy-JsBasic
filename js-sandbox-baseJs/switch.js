const color = 'green';

switch (color) {
  case 'red':
    console.log('red');
    break;
  case 'blue':
    console.log('blue');
    break;
  default:
    console.log('choose a color');
    break;
}

// chose a day of the week - 
let day;

switch (new Date().getDay()) {
  case 0:
    day = 'duminica';
    break;
  case 1:
    day = 'luni';
    break;
  case 2:
    day = 'marti';
    break;
  case 3:
    day = 'miercuri';
    break;
  case 4:
    day = 'joi';
    break;
  case 5:
    day = 'vineri';
    break;
  case 6:
    day = 'sambata';
    break;
  default:
    console.log('not a day');
    break;
}

console.log(`astazai este ${day}`);