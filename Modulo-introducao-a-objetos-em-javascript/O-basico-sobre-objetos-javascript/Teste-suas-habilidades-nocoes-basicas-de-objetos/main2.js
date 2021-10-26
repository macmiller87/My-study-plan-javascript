/* 

Em nossa próxima tarefa, queremos que você crie seu próprio objeto literal para representar uma de suas bandas favoritas. Os membros necessários são:

name: Uma string representando o nome da banda.
nationality: Uma string representando o país de origem da banda.
genre: Que tipo de música a banda toca.
members: Um número que representa o número de membros da banda.
formed: Um número que representa o ano em que a banda se formou.
split: Um número que representa o ano em que a banda se separou, ou falsese eles ainda estão juntos.
albums: Uma matriz que representa os álbuns lançados pela banda. Cada item da matriz deve ser um objeto contendo os seguintes membros:
name: Uma string que representa o nome do álbum.
released: Um número que representa o ano em que o álbum foi lançado.
Inclua pelo menos dois álbuns na albumsmatriz.

Depois de fazer isso, você deve escrever uma string para a variável bandInfo, que conterá uma pequena biografia detalhando seu nome, nacionalidade, anos de atividade e estilo, e o título e data de lançamento de seu primeiro álbum.

*/

let bandInfo = 'Josefino, Brasileiro, 34, estilo cachorro, brabo, 1987';

// Put your code here
var bandFavoriteInfo = {

    name: 'Charlie Brown Jr',
    nationality: 'Brasil',
    members: 5,
    formed: 1997,
    split: 2013,
    albums:['Transpiração continua prolongada', 'Nadando com os tubarões', '1997', '2000']

};

// Don't edit the code below here

let para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
    