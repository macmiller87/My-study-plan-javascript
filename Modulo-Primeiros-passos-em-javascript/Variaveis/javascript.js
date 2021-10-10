var button = document.querySelector('button');

button.onclick = function() {

    var nome = prompt('Qual é o seu nome ?');
    alert('Olá ' + nome + ', é um prazer te ver !');
    
}

/* Tipos de variáveis que se pode declarar em javascript */

var nome = "Josefino";  // A variável do tipo VAR, é uma alocação na memoria que permite ser manipulada usando o a mesma variavel declarada, independente do valor númerico ou string a que ela se inicializou, 
var nome = "Maria"; // podendo assim ser substituido os valores e ela continuara a ser executada no programa, com o novo valor a que foi atribuído... Mas lembrando que essa não é uma boa prática.


let nome = "Josefino"; // A variável do tipo LET, é uma alocação na memoria que não permite que uma variável declarada seja declarada novamente com o mesmo nome e valores,independente do valor númerico ou string a que ela se inicializou,
nome = "Maria";       // e sim é permitido a atribuição de um novo valor, chamando pelo nome a que a variável foi declarada e atribuindo um novo valor.

const nome = "Maria"; // A variável do tipo CONST, é uma alocação na memoria em que não é permitido a manipulação,independente do valor númerico ou string a que ela se inicializou,
                      // como o própio nome já sugere, ela é uma variável de valor constante, independente do escopo do programa. 
