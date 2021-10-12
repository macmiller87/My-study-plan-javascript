/*
Neste exemplo, você nos ajudará a concluir um aplicativo de calendário simples. No código que você tem:

Um elemento <select> para permitir que o usuário escolha entre diferentes meses.
Um evento manipulador onchange para detectar quando o valor selecionado no menu <select> é mudado.
Uma função chamada createCalendar() que desenha o calendário e exibe o mês correto no elemento <h1> (en-US) .
Precisamos que você escreva uma instrução condicional dentro da função do manipulador onchange, logo abaixo do comentário // ADD CONDITIONAL HERE. Ele deve:

1. Olhar para o mês selecionado (armazenado na variavel choice. Este será o valor do elemento <select> após o valor ser alterado, portanto, "Janeiro", por exemplo.
2. Definir uma variável chamada  days para ser igual ao número de dias no mês selecionado. Para fazer isso, você terá que procurar o número de dias em cada mês do ano. Você pode ignorar anos bissextos para os propósitos deste exemplo.

Dicas: 

- É aconselhável usar o OR lógico para agrupar vários meses em uma única condição; muitos deles compartilham o mesmo número de dias.
- Pense em qual número de dias é o mais comum e use isso como um valor padrão.

*/

var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {

  var choice = select.value;
  var days  = 31;

  // ADD CONDITIONAL HERE
  if(choice === 'February') {
      
    days = 28;

  } else if(choice === 'April' || choice === 'June' || choice === 'September' || choice === 
  'November') {
  
    days = 30;

  } else {

   days = days;
}

createCalendar(days, choice);
}


function createCalendar(days, choice) {

  list.innerHTML = '';
  h1.textContent = choice;

  for (var i = 1; i <= days; i++) {

    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);

  }
  
}

createCalendar(31,'January');


