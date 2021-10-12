/* Estruturas de condição com Operador Ternário*/

/* Exemplo de uso do Operador Ternário */

var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {

  html.style.backgroundColor = bgColor;
  html.style.color = textColor;

}

select.onchange = function() {

  ( select.value === 'black' ) ? update('black','white') : update('white','black');

}
