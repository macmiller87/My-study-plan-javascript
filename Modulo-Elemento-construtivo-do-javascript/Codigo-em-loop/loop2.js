/* Exemplos de uso dos laçoes de repetição em javascript */

/* Exemplo com laço for para encontrar um dado especifico, com uso do comando break */ 

var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {

  var searchName = input.value;
  input.value = '';
  input.focus();

  for (var i = 0; i < contacts.length; i++) {

    var splitContact = contacts[i].split(':');
    if (splitContact[0] === searchName) {

      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;

    } else {

      para.textContent = 'Contact not found.';

    }
  }
});


/* Exemplo que da para usar o html que está sendo usado para este algoritmo */

/*

Exemplo de laço que está usando o comando continue, com o Math.sqrt usado para encontrar a raiz quadrada do número digitado. o comando Math.floor em seguida, verificamos se a raiz quadrada é um inteiro, testando se é igual a ela mesma quando foi arredondada para o inteiro mais próximo é o que Math.floor() faz com o número que é passado.

var num = input.value;

for (var i = 1; i <= num; i++) {

  var sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;

  }

  para.textContent += i + ' ';

}

*/