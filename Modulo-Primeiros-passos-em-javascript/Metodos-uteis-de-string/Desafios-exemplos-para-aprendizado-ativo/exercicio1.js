/* Filtrando mensagens de saudação */

/*

No primeiro exercício, começaremos com simplicidade - temos várias mensagens de cartão, mas queremos classificá-las para listar apenas as mensagens de Natal. Queremos que você preencha um teste condicional dentro da estrutura if (...), para testar cada string e apenas imprimi-la na lista se for uma mensagem de Natal.


1. Primeiro pense em como você poderia testar se a mensagem em cada caso é uma mensagem de Natal. Qual string está presente em todas essas mensagens e que método você poderia usar para testar se ela está presente?

2. Em seguida, você precisará escrever um teste condicional do formulario operando2 operador operando1. A coisa à esquerda é igual à coisa à direita? Ou neste caso, o método chama à esquerda retorna o resultado à direita?

3. Dica: Nesse caso, é provavelmente mais útil testar se a chamada do método não é igual a um determinado resultado.

Happy Birthday!
Merry Christmas my love
A happy Christmas to all the family
You're all I want for Christmas
Get well soon

*/

var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = [
                 'Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'
                ];

for(var i = 0; i < greetings.length; i++) {

  var input = greetings[i];
  if(greetings[i].indexOf('Christmas') !== -1) {

    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);

  }
}