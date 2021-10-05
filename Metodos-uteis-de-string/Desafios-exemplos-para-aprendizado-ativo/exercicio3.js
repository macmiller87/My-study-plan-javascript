/* Fazendo novas strings a partir de partes antigas */ 

/* 

Neste último exercício, o array contém um monte de strings contendo informações sobre estações de trem no norte da Inglaterra. As strings são itens de dados que contêm o código da estação de três letras, seguido por alguns dados legíveis por máquina, seguidos por um ponto-e-vírgula, seguido pelo nome da estação legível por humanos. Por exemplo:

MAN675847583748sjt567654;Manchester Piccadilly

Queremos extrair o código e o nome da estação e juntá-los em uma string com a seguinte estrutura:

MAN: Manchester Piccadilly

Nós recomendamos que faça assim:

1. Extraia o código da estação de três letras e armazene-o em uma nova variável.
2. Encontre o número de índice do caractere do ponto e vírgula.
3. Extraia o nome da estação legível usando o número do índice de caracteres de ponto-e-vírgula como ponto de referência e armazene-o em uma nova variável.
4. Concatene as duas novas variáveis e uma string literal para fazer a string final.
5. Altere o valor da variável result para igual à string final, não a input.

MAN675847583748sjt567654;Manchester Piccadilly
GNF576746573fhdg4737dh4;Greenfield
LIV5hg65hd737456236dch46dg4;Liverpool Lime Street
SYB4f65hf75f736463;Stalybridge
HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield

*/


var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = [
                'MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
              ];

for (var i = 0; i < stations.length; i++) {

  var input = stations[i];
  var codCities = input.slice(0,3);
  var indice = codCities[24];
  var nameCities = indice.slice(25, 35);
  var text = codCities + ': ' + nameCities;
  var result = text;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
  
}