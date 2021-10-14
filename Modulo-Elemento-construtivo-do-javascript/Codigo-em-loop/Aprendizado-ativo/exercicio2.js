/* 

Nesse exercício, nós queremos que você pegue uma lista de nomes armazenados em um array, e os coloque em uma lista de convidados. Mas não tão fácil — nós não queremos que Phil e Lola estejam nela porque eles são gananciosos e rudes, e sempre comem a comida toda! Nós temos duas listas, uma para convidados aceitos, e uma para convidados recusados.

Especificamente, nós queremos que você:

 - 1. Escreva um loop que iterará de 0 até o comprimento do array people. Você precisará começar com um inicializador de  var i = 0;, Mas qual condição de saída você precisa?
 - 2. Durante cada iteração de loop, verifique se o item atual do array é igual a "Phil" ou "Lola" usando uma declaração condicional:
Se for, concatene o item do array no final do textContent do paragrafo refused, seguido por uma vírgula e um espaço.
Se não for, concatene o item do array no final do textContent do paragrafo admitted, seguido por uma vírgula e um espaço.

Nós já fornecemos a você:

var i = 0; — Seu inicializador.
refused.textContent += — o início de uma linha que concatenará algo no final de refused.textContent.
admitted.textContent += — o início de uma linha que concatenará algo no final de admitted.textContent.


Questão bônus extra  — depois de completar as tarefas acima com sucesso, você terá duas listas de nomes, separados por vírgulas, mas eles estarão desarrumados — haverá uma vírgula no final decada um. Você pode descobrir como escrever linhas que que cortam a última vírgula em cada caso, e adicionar um ponto final? Dê uma olhada no artigo Métodos úteis de string para ajuda.

*/


var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

var i = 0;

while(i < people.length){

     if(people[i] == 'Phil' || people[i] == 'Lola') {

	refused.textContent += people[i] + ', ';      	


     } else {

	admitted.textContent += people[i] + ', ' ;

   }

 i++;
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.'; 
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';