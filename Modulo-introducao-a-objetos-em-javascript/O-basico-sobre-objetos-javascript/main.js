/* Exemplo de declaração de objeto em javascript var pessoa {} */

var pessoa = {

    nome: ['Bob', 'Smith'],
    idade: 32,
    sexo: 'masculino',
    interesses: ['música', 'esquiar'],
    
    bio: function() {

      alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');

    },

    saudacao: function() {
      alert('Oi! Eu sou ' + this.nome[0] + '.');

    }
};


var myDataName = 'altura';
var myDataValue = '1.75m';
pessoa[myDataName] = myDataValue;



/* Exemplo de uso de chamada dos objetos, as duas formas de chamar, tem o mesmo resultado */

pessoa.idade;
pessoa.nome.primeiro;


pessoa['idade'];
pessoa['nome']['primeiro'];


/* Sintaxe para declarar um objeto com Nome e Valor */


var nomeDoObjeto = {

  nomeMembro1: valorMembro1,
  nomeMembro2: valorMembro2,
  nomeMembro3: valorMembro3

};