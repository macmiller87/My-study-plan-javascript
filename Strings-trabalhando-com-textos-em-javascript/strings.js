/* Caracteres de escape na string */

var bigmouth = 'I\'ve got no right to take my place...';
bigmouth;

/* Número X strings */

'Front ' + 242;  // exemplo de concatenação entre número e string, que automáticamente o número vai ser compreendido como string ao ser imprimido.

var myDate = '19' + '67'; // nesse caso prova-se que mesmo sendo números, eles vão ser considerados strings ao ser imprimido
typeof myDate;            //, pelo fato das aspas.

var myString = '123';          // exemplo em que se é declarado um número enter aspas, então string.
var myNum = Number(myString); //  e nasequência ele é transformado em número com o NUMBER.
typeof myNum;              // e aqui usa-se o TYPEOF para fazer a verificação do conteúdo da variável a essa altura no contexto.... se é número ou string

var myNum = 123;           // exemplo em que foi declarado um número
var myString = myNum.toString(); // e na sequência usa-se o TO.STRING(), para fazer a transformação para string
typeof myString;  // e aqui usa-se o TYPEOF para fazer a verificação do conteúdo da variável a essa altura no contexto.... se é número ou string