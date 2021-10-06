/* Aprendizado ativo: Top 5 Buscadores */

/*

Um bom uso para os métodos de array como push() e pop() está quando você está mantendo um registro de itens atuais ativos em um aplicativo web. Em uma cena animada, por exemplo, você pode ter uma array de objetos representando o gráfico de fundo mostrado atualmente, e você pode querer somente mostrar 50 por vez, para performace ou alguma razão de ordem. Como novos objetos são criados e adicionados na array, os antigos podem ser deletados da array para manter o número desejado.

Neste exemplo nós vamos mostrar um uso bem mais simples — aqui nós estamos dando a você um falso site de busca, com uma caixa de busca. A idéia é que quando termos são digitados na caixa de busca, os 5 principais termos de busca anterior sejam mostrados na lista. Quando o número de termos passar de 5, o último termo começa sendo deletado. A cada vez um novo termo é adicionado ao topo, então os 5 termos anteriores são sempre mostrados.

Para completar o aplicativo, nós precisamos que você:

1. Adicione uma linha abaixo do comentário // number 1 que adicione o valor digitado atual na busca ao começo da array. Isto pode ser recuperado usando searchInput.value.
2. Adicione uma linha abaixo do comentário // number 2 que remova o último valor no fim da array.

*/


var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if(searchInput.value !== '') {
    // number 1
      miHistory.Unshift(searchInput.value);
      // empty the list so that we don't display duplicate entries
      // the display is regenerated every time a search term is entered.
      list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for(var i = 0; i < myHistory.length; i++) {
      
        itemText = myHistory[i];
        var listItem = document.createElement('li');
        listItem.textContent = itemText;
        list.appendChild(listItem);
      
    }

    // If the array length is 5 or more, remove the oldest search term
    if(myHistory.length >= 5) {
      // number 2
	    myHistory.pop();
      
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
