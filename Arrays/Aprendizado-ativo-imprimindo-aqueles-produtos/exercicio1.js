/*

Vamos retornar ao exemplo que descrevemos antes — imprimindo nomes de produtos e preços em uma fatura, então totalizando os preços e imprindindo eles ao final. No exemplo editável abaixo há comentários contendo números — cada um deles marcam um lugar onde você tem que acidionar algo ao código. Eles são como segue:

1. Abaixo do comentário // number 1 está um número de strings, cada uma contendo um nome de produto e preço separado por uma vírgula. Nós gostaríamos que você colocasse eles dentro de uma array e armazenasse eles na array chamada products.

2. Na mesma linha o comentário // number 2 está no começo de um laço for. Nesta linha nós temos i<=0, o qual é um teste condicional que faz o laço for parar imediatamente, porque está dizendo "pare quando i for menor ou igual a 0", e  i começa em 0. Nós gostaríamos de substituir isto com um teste condicional que termina o laço quando o i for menor que o tamanho da array products.

3. Logo abaixo do comentário // number 3 nós queremos que você escreva uma linha de código que divide o item da array (name:price) em dois itens separados, um contendo somente o nome e outro só com o preço. Se você não tem certeza de como fazer isto, consulte o artigo Métodos úteis em string para alguma ajuda, ou ainda melhor, veja a seção Converting between strings and arrays neste artigo.

4. Como parte da linha de código acima, você também quer converter o preço de string para número. Se você não se lembra como fazer isto, veja o artigo primeiras strings.

5. Há uma variável chamada total que é criada e atribuída o valor 0 no começo do código. Dentro do loop (abaixo // number 4) nós queremos que você escreva uma linha que adicione o preço atual ao total em cada iteração do laço, então ao final do código o preço total é impresso na fatura. Você pode precisar de um operador aritiméticos para isto.

6. Nós queremos que você mude a linha logo abaixo de // number 5 para que a variável itemText seja igual a "nome do item atual - $preço do item atual", por exemplo "Shoes - $23.99" em cada caso, então a informação correta para cada item é impressa na fatura. Esta é uma simples concatenação de string, a qual deveria ser familiar para você.

*/


var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
var products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];

for (var i = 0; i < products.length; i++) { // number 2
  // number 3
	var subArray = products[i].split(':');
    var nomes = subArray[0];
  // number 4
    var preco = Number(subArray[1]);
  // number 5
    total += preco;  
    itemText = nomes + ' - $' + preco;

    var listItem = document.createElement('li');
    listItem.textContent = itemText;
    list.appendChild(listItem);
    
}

totalBox.textContent = 'Total: $' + total.toFixed(2);