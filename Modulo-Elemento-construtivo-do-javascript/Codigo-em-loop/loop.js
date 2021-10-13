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

/* Mesmo exemplo de uso do algortimo acima, mas usando o laço While */


var i = 0;

while (i < cats.length) {
  
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
    
  } else {
    
    info += cats[i] + ', ';
    
  }
  i++;
}


/* Mesmo exemplo de uso dos algortimos acima, mas usando o laço do While */


var i = 0;

do {
  
  if (i === cats.length - 1) {
    
    info += 'and ' + cats[i] + '.';
    
  } else {
    
    info += cats[i] + ', ';
    
  }
  i++;
  
} while (i < cats.length);
