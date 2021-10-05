/* Corrigindo a capitalização */ 


/*

Neste exercício, temos os nomes das cidades no Reino Unido, mas a capitalização está toda desarrumada. Nós queremos que você as altere para que elas sejam todas minúsculas, exceto pela primeira letra maiúscula. Uma boa maneira de fazer isso é:

1. Converta toda a cadeia contida na variável de entrada para minúscula e armazene-a em uma nova variável.
2. Pegue a primeira letra da string nesta nova variável e armazene-a em outra variável.
3. Usando esta última variável como substring, substitua a primeira letra da string em minúsculas pela primeira letra da string em minúsculas alterada para maiúscula. Armazene o resultado desse procedimento de substituição em outra nova variável.
4. Altere o valor da variável  result para igual ao resultado final, não a input.

lonDon
ManCHESTer
BiRmiNGHAM
liVERpoOL

*/ 


var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for(var i = 0; i < cities.length; i++) {

  var input = cities[i];
  var lower = input.toLowerCase();
  var firstLetter = lower.slice(0,1);
  var capitalized = lower.replace(firstLetter.firstLetter.toUpperCase());
  var result = capitalized;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
  
}