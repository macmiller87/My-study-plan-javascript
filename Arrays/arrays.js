/* Exemplo de criação de um array */

var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];


/* Acessano e modificando itens de um array */

shopping[0]; // Neste caso estamos acessando o 1 item do array, ou indice 0, ele vai retornar 'bread'.

shopping[0] = 'tahini'; // Neste caso estamos acessando o indice 0 do array, e modificando/substituindo o seu valor de 'bread' , para 'tahini' .


/* Array multidimensional */ 

var random = ['tree', 795, [0, 1, 2]]; // Pode-se ter um array com outro array dentro, neste exemplo é exatamente isso.

random[2][2]; // Aqui podemos acessar o item do array que está dentro do array inicial, neste consulta retornaria 2 , sendo que o primeiro 2 é o indice onde inicia o array que está dentro com relação ao array inicial, ou seja ele se inicia no indice 2 do array inicial, já o 2 sequente é o indice que estamos consultando do array que está dentro, e retornara o 2 na nossa consulta.


/* Encontrando o comprimento de um array */

var sequence = [1, 1, 2, 3, 5, 8, 13];

sequence.length; // Neste método nos retorna a quantidade de itens que tem no array, a consulta neste caso retornara 7.


var sequence = [1, 1, 2, 3, 5, 8, 13];    // Neste caso usamos quando desejamos imprimir todos os dados do array, para isso estamos usando o laço FOR e o método LENGTH.
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}


/* Convertendo entre strings e array */

var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle'; // Exemplo de uma variavel com atribuição de string

var myArray = myData.split(','); // Neste caso estamos crinado uma variavel e atribuindo o array myDta com o método split(',') 
myArray;                        // e pedindo para os itens ser separdos pela  virgula.


var myNewString = myArray.join(','); // Neste caso estamos fazendo a mesma coisa do exeplo acima, mas com um novo método o join, então foi declarado uma nova variavel
myNewString;                         // e atribuido o array my array com o método join(','),  que vai nos trazer o mesmo resultado do exemplo acima.


var dogNames = ['Rocket','Flash','Bella','Slugger']; // Neste caso estamos fazendo a mesma coisa do exeplo acima, mas com um novo método o toString(), então foi 
dogNames.toString();  // criado um novo array, e convertido ele com o método toString(), que vai gerar o mesmo resultado dos exemplos acima


/* Adicionando e removendo itens de arrays */ 

var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];

myArray.push('Cardiff'); // Neste caso estamos usando ométodo push, para inserir 'Cardiff' no indice final do array  myArray.

var newLength = myArray.push('Bristol'); // Neste caso está sendo criada uma nova variavel, estamos atribuindo masi um valor para o array myArray com o método push
myArray;                                // aqui estamos chamando o array
newLength;  // E aqui estamos chamando a variavel que foi declarada, e estamos guardando o novo valor do comprimento total do array myArray nesta variavel newLenght