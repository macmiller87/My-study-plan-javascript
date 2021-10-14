/* Exemplos de funções */

/* Invocando funções */

function myFunction() {

    alert('hello');

}
  
myFunction() // Chama a função um vez


/* funções anônimas */

function myFunction() {

    alert('hello');

}

/* funções que não tem nome */

/*
Isto é chamado Função anônima — não tem nome! E também não fará nada em si mesma. Você geralmente cria funções anônimas junto com um  manipulador de eventos, o exemplo a seguir poderia rodar o código dentro da função sempre que o botão associado é clicado:

*/

var myButton = document.querySelector('button');

myButton.onclick = function() {

  alert('hello');

}

/* funções que atribuem valor a uma variavel */

var myGreeting = function() {

    alert('hello');

}

myGreeting();