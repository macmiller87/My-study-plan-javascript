/* Exemplos de uso dos laçoes de repetição em javascript */

/* exemplo de uso do for */

var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var para = document.querySelector('p');

for (var i = 0; i < cats.length; i++) {

  info += cats[i] + ', ';

}

para.textContent = info;

/* Mesmo exemplo do laço, com uso de uma condicional */

for (var i = 0; i < cats.length; i++) {

    if (i === cats.length - 1) {
      info += 'and ' + cats[i] + '.';
    } else {
      info += cats[i] + ', ';
    }

}