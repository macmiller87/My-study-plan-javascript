/* 

Neste exemplo, você terá o exemplo de operador ternário que vimos anteriormente e converterá o operador ternário em uma instrução switch que nos permitirá aplicar mais opções ao site simples. Olhe para a <select> — desta vez você verá que não tem duas opções de tema, mas cinco. Você precisa adicionar uma instrução switch abaixo do comentário // ADD SWITCH STATEMENT: 

- Ele deve aceitar a variável choice como sua expressão de entrada.
- Para cada caso, a escolha deve ser igual a um dos valores possíveis que podem ser selecionados, ou seja, branco, preto, roxo, amarelo ou psicodélico.
- Para cada caso, a função update() deve ser executada e receber dois valores de cor, o primeiro para a cor de segundo plano e o segundo para a cor do texto. Lembre-se de que valores de cores são strings, portanto, precisam ser agrupados entre aspas.

*/

var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
    
  var choice = select.value;

  switch(choice) {

    case 'black':
      update('black', 'white');
      break;

    case 'white':
      update('white', 'black');
      break;

    case 'purple':
      update('purple', 'white');
      break;

    case 'yellow':
      update('yellow', 'darkgray');
      break;

    case 'psychedelic':
      update('lime', 'purple');
      break;

  }
}

function update(bgColor, textColor) {

  html.style.backgroundColor = bgColor;
  html.style.color = textColor;

}