/* Descobrindo o comprimento de uma string */

var browserType = 'mozilla';
browserType.length;  // método que tráz o comprimento total da String


/* Recuperando um caractere de string específico */

browserType[0];  // Com acrécimo dos colchetes [] e o número que referencia a posição da letra que se quer trazer da string

browserType[browserType.length-1]; // Também pode se usar a combinação do método LENGTH com -1, para setar o último caracter da string


/* Encontrando uma substring dentro de uma string, extraindo-a e obtendo o seu indice inicial */

browserType.indexOf('zilla'); // Esse método pré setado traz o índice inicial do conjunto de substring setado, contado apartir da posição de inicio a que ela representa na string completa . 


/* Encontrando uma substring dentro de uma string e extraindo-a */


browserType.slice(0,3); // Método que traz o conjunto de caracter que vc setar, pré determinado através do seu indice de inicio (0) que seta o inicio do caracter que deseja extrair,   
                        // e em seguida seu comprimento final (3), que representa o indice final da substring a ser extraido, "CONTANDO A PARTIR DO INICIO DA STRING NESTE EXEMPLO ('mozilla')"


browserType.slice(2); // Neste caso retorna o mesmo resultado do comando anaterior, sem necessidade de setar o 2 indice,ou seja quando vc quer extrair apartir desse indice até o final da string


/* Mudando string entre maiúsculas e minúsculas  */


var language = 'Javascript';
language.toLowerCase(); // Esse método converte a string toda em caixa baixa.


var language = 'Javascript';
language.toUpperCase(); // Esse método converte a string toda em caixa alta. 


/* Atualizando partes de uma string */


browserType.replace('moz','van'); // Esse método seta o conjunto de string que vc quer substituir  neste exemplo ('moz'), e troca por ('van'), que vai somar com o restante da string, neste caso ficaria VANILLA,
                                  // ou seja (van) que foi o conjunto setado para substituir, mais o restante da string illa de moz(illa).

                              